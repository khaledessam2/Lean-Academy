/** Clients section + client testimonial. */

export interface Client {
  /** Organization name */
  name: string;
  /** Organization logo image URL (optional — if empty, only the name is shown) */
  logo: string;
}

export interface ClientsContent {
  eyebrow: string;
  title: string;
  intro: string;
  /** Organizations/clients (name + logo) */
  logos: Client[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

export const CLIENTS_DEFAULT: ClientsContent = {
  eyebrow: 'عملاؤنا',
  title: 'موثوق من جهات حكومية وأكاديمية رائدة',
  intro: 'نفخر بخدمة نخبة من الجامعات والهيئات والمؤسسات في المملكة العربية السعودية.',
  logos: [
    { name: 'وزارة الحرس الوطني', logo: '' },
    { name: 'الأمن العام', logo: '' },
    { name: 'هيئة رعاية الأشخاص ذوي الإعاقة', logo: '' },
    { name: 'جامعة نجران', logo: '' },
    { name: 'جامعة أم القرى', logo: '' },
    { name: 'جامعة الإمام عبدالرحمن بن فيصل', logo: '' },
    { name: 'الكلية التطبيقية — جامعة جدة', logo: '' },
    { name: 'الهيئة الملكية للجبيل وينبع', logo: '' },
    { name: 'جمعية دعم التعليم «تعلّم»', logo: '' },
  ],
  testimonialQuote:
    '«لين أكاديمي منصة ذكية تجمع بين إنشاء الدورات بأنماطها المتعددة والفصول التفاعلية والشهادات الإلكترونية والتقييمات الذكية، عبر تجربة سلسة على جميع الأجهزة.»',
  testimonialAuthor: 'فريق التطوير والتدريب',
  testimonialRole: 'جهة حكومية',
};
