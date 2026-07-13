import { Injectable } from '@angular/core';

export interface FooterLink {
  label: string;
  route: string;
  fragment?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

@Injectable({ providedIn: 'root' })
export class FooterService {
  readonly year = 2026;

  readonly socials: SocialLink[] = [
    { label: 'Facebook', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ];

  readonly columns: FooterColumn[] = [
    {
      title: 'المنصة',
      links: [
        { label: 'نظرة عامة', route: '/', fragment: 'overview' },
        { label: 'المميزات', route: '/', fragment: 'features' },
        { label: 'المستخدمون', route: '/', fragment: 'audience' },
        { label: 'التقارير', route: '/', fragment: 'reports' },
      ],
    },
    {
      title: 'الباقات',
      links: [
        { label: 'الأسعار', route: '/pricing' },
        { label: 'الباقة الأساسية', route: '/pricing' },
        { label: 'الباقة الاحترافية', route: '/pricing' },
        { label: 'باقة المؤسسات', route: '/pricing' },
      ],
    },
    {
      title: 'تواصل',
      links: [
        { label: 'اطلب عرضاً تجريبياً', route: '/', fragment: 'contact' },
        { label: 'الدعم الفني', route: '/', fragment: 'contact' },
        { label: 'leansolutions.com.sa', route: '/' },
      ],
    },
  ];
}
