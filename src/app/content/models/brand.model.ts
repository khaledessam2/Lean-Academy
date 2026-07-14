/** Logo and general brand identity (shown in the top bar, footer, and contact section). */

export interface BrandContent {
  /** Logo image URL. Empty = use the default drawn logo. */
  logo: string;
  /** Alt text for the logo. */
  alt: string;
}

export const BRAND_DEFAULT: BrandContent = {
  logo: '',
  alt: 'لين أكاديمي',
};
