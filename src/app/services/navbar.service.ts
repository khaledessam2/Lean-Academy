import { Injectable } from '@angular/core';

export interface NavLink {
  label: string;
  route: string;
  fragment?: string;
}

@Injectable({ providedIn: 'root' })
export class NavbarService {
  readonly links: NavLink[] = [
    { label: 'الرئيسية', route: '/', fragment: 'home' },
    { label: 'المنصة', route: '/', fragment: 'overview' },
    { label: 'المميزات', route: '/', fragment: 'features' },
    { label: 'المستخدمون', route: '/', fragment: 'audience' },
    { label: 'الباقات', route: '/pricing' },
    { label: 'عملاؤنا', route: '/', fragment: 'clients' },
  ];
}
