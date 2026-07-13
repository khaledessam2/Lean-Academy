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

/** المفتاح الذي ننقل به المحتوى من السيرفر (SSR) إلى المتصفح لتفادي جلبه مرتين. */
const CONTENT_STATE_KEY = makeStateKey<Partial<Record<SectionKey, unknown>>>('site-content');

/**
 * مخزن المحتوى المركزي للموقع العام.
 * يقرأ المحتوى من Supabase (لو مُعَدّ)، ويدمجه فوق المحتوى الافتراضي.
 * لو Supabase غير مُعَدّ أو حدث خطأ، يبقى الموقع يعمل بالمحتوى الافتراضي.
 */
@Injectable({ providedIn: 'root' })
export class ContentStore {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly transferState = inject(TransferState);

  /** المحتوى الحالي (يبدأ بالافتراضي ثم يُحدَّث بعد الجلب). */
  readonly content = signal<SiteContent>(DEFAULT_CONTENT);

  private get isConfigured(): boolean {
    return !!environment.supabase.url && !!environment.supabase.anonKey;
  }

  /** يُستدعى مرة واحدة عند إقلاع التطبيق (APP_INITIALIZER). */
  async load(): Promise<void> {
    // على المتصفح: لو السيرفر جلب المحتوى بالفعل، استخدمه بدون طلب جديد
    if (this.transferState.hasKey(CONTENT_STATE_KEY)) {
      const cached = this.transferState.get(CONTENT_STATE_KEY, null);
      this.transferState.remove(CONTENT_STATE_KEY);
      if (cached) {
        this.content.set(mergeContent(cached));
        return;
      }
    }

    if (!this.isConfigured) return; // لا إعداد → إبقاء الافتراضي

    try {
      const client = createClient(environment.supabase.url, environment.supabase.anonKey);
      const { data, error } = await client.from('site_content').select('section, data');
      if (error) throw error;

      const overrides: Partial<Record<SectionKey, unknown>> = {};
      for (const row of data ?? []) {
        overrides[row.section as SectionKey] = row.data;
      }

      this.content.set(mergeContent(overrides));

      // خزّن النتيجة لتنتقل إلى المتصفح مع صفحة الـ SSR
      if (isPlatformServer(this.platformId)) {
        this.transferState.set(CONTENT_STATE_KEY, overrides);
      }
    } catch (err) {
      // في حال أي خطأ، نُبقي المحتوى الافتراضي ولا نكسر الموقع
      console.error('[ContentStore] تعذّر تحميل المحتوى من Supabase، سيتم استخدام الافتراضي:', err);
    }
  }
}
