import { Injectable } from '@angular/core';

export interface Plan {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  featured: boolean;
  cta: string;
  features: string[];
}

@Injectable({ providedIn: 'root' })
export class PricingService {
  readonly plans: Plan[] = [
    {
      name: 'الباقة الأساسية',
      tagline: 'للمراكز الناشئة والفرق الصغيرة',
      monthly: 999,
      annual: 9590,
      featured: false,
      cta: 'ابدأ الآن',
      features: [
        'حتى ٢٠٠ متدرب',
        'دورات تدريب ذاتي غير محدودة',
        'لوحة تحكم للمتدرب والمدرب',
        'نظام اختبارات وواجبات إلكترونية',
        'شهادات رقمية موثّقة',
        'دعم فني عبر البريد الإلكتروني',
      ],
    },
    {
      name: 'الباقة الاحترافية',
      tagline: 'للمعاهد والجهات متوسطة الحجم',
      monthly: 2499,
      annual: 23990,
      featured: true,
      cta: 'اطلب تجربة',
      features: [
        'حتى ٢٠٠٠ متدرب',
        'كل مزايا الباقة الأساسية',
        'فصول افتراضية مباشرة وتفاعلية',
        'أدوات الذكاء الاصطناعي للمحتوى والخطط',
        'تقارير واستبيانات متقدمة',
        'إدارة المعاهد والمراكز التدريبية',
        'دعم فني ذو أولوية على مدار الساعة',
      ],
    },
    {
      name: 'باقة المؤسسات',
      tagline: 'للجهات الحكومية والمؤسسات الكبرى',
      monthly: null,
      annual: null,
      featured: false,
      cta: 'تواصل معنا',
      features: [
        'عدد متدربين غير محدود',
        'كل مزايا الباقة الاحترافية',
        'محرّك مسارات العمل والموافقات (Workflow)',
        'تكامل وربط إلكتروني وتسجيل دخول موحّد (SSO)',
        'خيار الاستضافة الداخلية (On-premise)',
        'مدير حساب مخصّص واتفاقية مستوى خدمة (SLA)',
        'تدريب ونقل معرفة للكوادر',
      ],
    },
  ];

  /** سعر الباقة حسب دورة الفوترة (سنوي أو شهري). */
  price(plan: Plan, annual: boolean): number | null {
    return annual ? plan.annual : plan.monthly;
  }
}
