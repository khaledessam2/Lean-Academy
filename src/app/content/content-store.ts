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

/** المفتاح الذي ننقل به المحتوى من السيرفر (SSR) إلى المتصفح لأول عرض فوري. */
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
    const isServer = isPlatformServer(this.platformId);

    // على المتصفح: اعرض فوراً ما جلبه السيرفر وقت البناء/الطلب (لتفادي وميض الافتراضي)
    let seeded = false;
    if (!isServer && this.transferState.hasKey(CONTENT_STATE_KEY)) {
      const cached = this.transferState.get(CONTENT_STATE_KEY, null);
      this.transferState.remove(CONTENT_STATE_KEY);
      if (cached) {
        this.content.set(mergeContent(cached));
        seeded = true;
      }
    }

    if (!this.isConfigured) return; // لا إعداد → إبقاء الافتراضي

    const work = this.fetchAndApply(isServer);

    // السيرفر: ننتظر النتيجة قبل عرض الصفحة (SSR).
    // المتصفح: لو ما عندناش أي محتوى مبدئي ننتظر، وإلا نحدّث في الخلفية دون انتظار.
    if (isServer || !seeded) {
      await work;
    } else {
      // تحديث حيّ بعد فتح الصفحة — يضمن ظهور أحدث محتوى حتى على الموقع المرفوع (Prerendered)
      work.catch(() => {});
    }
  }

  /** يجلب المحتوى من Supabase ويطبّقه، ويحفظه في TransferState على السيرفر فقط. */
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
      // في حال أي خطأ، نُبقي المحتوى الحالي (المحفوظ أو الافتراضي) ولا نكسر الموقع
      console.error('[ContentStore] تعذّر تحميل المحتوى من Supabase:', err);
    }
  }
}
