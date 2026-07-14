import {
  Injectable,
  PLATFORM_ID,
  TransferState,
  inject,
  makeStateKey,
  signal,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import {
  DEFAULT_CONTENT,
  SectionKey,
  SiteContent,
  mergeContent,
} from './site-content';

/** The key used to transfer the content from the server (SSR) to the browser for the first instant render. */
const CONTENT_STATE_KEY = makeStateKey<Partial<Record<SectionKey, unknown>>>('site-content');

/**
 * Central content store for the public site.
 * Reads the content from Supabase (if configured) and merges it on top of the default content.
 * If Supabase is not configured or an error occurs, the site keeps working with the default content.
 */
@Injectable({ providedIn: 'root' })
export class ContentStore {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly transferState = inject(TransferState);

  /** The current content (starts with the default, then updates after fetching). */
  readonly content = signal<SiteContent>(DEFAULT_CONTENT);

  private get isConfigured(): boolean {
    return !!environment.supabase.url && !!environment.supabase.anonKey;
  }

  /** Called once at app startup (APP_INITIALIZER). */
  async load(): Promise<void> {
    const isServer = isPlatformServer(this.platformId);

    // On the browser: immediately show what the server fetched at build/request time (to avoid a flash of the default)
    let seeded = false;
    if (!isServer && this.transferState.hasKey(CONTENT_STATE_KEY)) {
      const cached = this.transferState.get(CONTENT_STATE_KEY, null);
      this.transferState.remove(CONTENT_STATE_KEY);
      if (cached) {
        this.content.set(mergeContent(cached));
        seeded = true;
      }
    }

    if (!this.isConfigured) return; // Not configured → keep the default

    const work = this.fetchAndApply(isServer);

    // Server: wait for the result before rendering the page (SSR).
    // Browser: if we have no initial content, wait; otherwise update in the background without waiting.
    if (isServer || !seeded) {
      await work;
    } else {
      // Live update after the page opens — ensures the latest content appears even on the deployed (prerendered) site
      work.catch(() => {});
    }
  }

  /** Fetches the content from Supabase and applies it, saving it to TransferState on the server only. */
  private async fetchAndApply(isServer: boolean): Promise<void> {
    try {
      const client = createClient(environment.supabase.url, environment.supabase.anonKey);
      const { data, error } = await client.from('site_content').select('section, data');
      if (error) throw error;

      const overrides: Partial<Record<SectionKey, unknown>> = {};
      for (const row of data ?? []) {
        overrides[row.section as SectionKey] = row.data;
      }

      this.content.set(mergeContent(overrides));

      if (isServer) {
        this.transferState.set(CONTENT_STATE_KEY, overrides);
      }
    } catch (err) {
      // On any error, keep the current content (cached or default) and don't break the site
      console.error('[ContentStore] Failed to load content from Supabase:', err);
    }
  }
}
