import { Injectable } from '@angular/core';

export interface Mode {
  title: string;
  en: string;
  desc: string;
  icon: 'self' | 'live' | 'inperson';
}

@Injectable({ providedIn: 'root' })
export class OverviewService {
  readonly modes: Mode[] = [
    {
      title: 'التدريب الذاتي',
      en: 'Self-paced',
      desc: 'دورات مسجّلة يتعلّم منها المتدرب في الوقت المناسب له، مع متابعة التقدّم آلياً.',
      icon: 'self',
    },
    {
      title: 'التدريب التفاعلي المباشر',
      en: 'Live virtual sessions',
      desc: 'جلسات بث مباشر مع مشاركة الشاشة والسبورة البيضاء وإرسال الملفات والمحادثات الفورية.',
      icon: 'live',
    },
    {
      title: 'التدريب الحضوري',
      en: 'In-person',
      desc: 'إدارة الدورات الحضورية والتحضير الإلكتروني وربطها بالاختبارات والشهادات ضمن نفس المنصة.',
      icon: 'inperson',
    },
  ];
}
