/** Top navigation bar. */

export interface NavLink {
  label: string;
  /** Path such as "/" or "/pricing" */
  route: string;
  /** Page fragment (optional) such as "overview" */
  fragment?: string;
}

export interface NavbarContent {
  links: NavLink[];
  /** Text of the call-to-action button in the bar */
  cta: string;
}

export const NAVBAR_DEFAULT: NavbarContent = {
  links: [
    { label: 'الرئيسية', route: '/', fragment: 'home' },
    { label: 'المنصة', route: '/', fragment: 'overview' },
    { label: 'المميزات', route: '/', fragment: 'features' },
    { label: 'المستخدمون', route: '/', fragment: 'audience' },
    { label: 'الأسعار', route: '/pricing' },
    { label: 'عملاؤنا', route: '/', fragment: 'clients' },
  ],
  cta: 'اطلب عرضاً تجريبياً',
};
