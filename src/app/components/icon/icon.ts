import { Component, input } from '@angular/core';
import { IconName } from '../../content/site-content';

export type { IconName };

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly class = input<string>('h-6 w-6');
}
