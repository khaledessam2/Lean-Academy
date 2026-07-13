import { Component, input } from '@angular/core';

export type IconName =
  | 'courses' | 'video' | 'user-dash' | 'quiz' | 'certificate' | 'survey'
  | 'admin' | 'institute' | 'transfer' | 'devices' | 'users' | 'workflow'
  | 'chat' | 'report' | 'shield' | 'trophy' | 'chart' | 'bookmark' | 'play' | 'star';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly class = input<string>('h-6 w-6');
}
