/** Available icon names in the app-icon component. Shared across several sections. */
export type IconName =
  | 'courses' | 'video' | 'user-dash' | 'quiz' | 'certificate' | 'survey'
  | 'admin' | 'institute' | 'transfer' | 'devices' | 'users' | 'workflow'
  | 'chat' | 'report' | 'shield' | 'trophy' | 'chart' | 'bookmark' | 'play' | 'star';

/** All icons as an array — used by the admin panel to display a selection list. */
export const ICON_NAMES: IconName[] = [
  'courses', 'video', 'user-dash', 'quiz', 'certificate', 'survey',
  'admin', 'institute', 'transfer', 'devices', 'users', 'workflow',
  'chat', 'report', 'shield', 'trophy', 'chart', 'bookmark', 'play', 'star',
];
