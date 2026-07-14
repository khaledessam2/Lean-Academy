/** Hero section at the top of the page. */
export interface HeroContent {
  /** Small badge above the title */
  badge: string;
  /** Start of the main title */
  titleLead: string;
  /** Highlighted colored part of the title */
  titleHighlight: string;
  /** Descriptive paragraph below the title */
  paragraph: string;
  /** Primary button text */
  primaryCta: string;
  /** Secondary button text */
  secondaryCta: string;
  /** Small note below the buttons */
  note: string;
  /** Hero image (path inside public or a URL from storage) */
  image: string;
}

export const HERO_DEFAULT: HeroContent = {
  badge: 'نظام لين الأكاديمي الإلكتروني',
  titleLead: 'تمكين النمو عبر',
  titleHighlight: 'التعليم الذكي',
  paragraph:
    'منصة رقمية متكاملة لإدارة التعليم والتدريب الإلكتروني، مصمّمة لتلبية احتياجات المؤسسات الحكومية والخاصة في تطوير كوادرها البشرية عبر التدريب الذاتي والمباشر والحضوري، مدعومة بأحدث أدوات الذكاء الاصطناعي.',
  primaryCta: 'اطّلع على الباقات',
  secondaryCta: 'اكتشف المنصة',
  note: 'جرّب المنصة الآن بدون إدخال بيانات الدفع.',
  image: 'Gemini_Generated_Image_prc66jprc66jprc6.png',
};
