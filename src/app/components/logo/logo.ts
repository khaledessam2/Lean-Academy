import { Component, computed, inject, input } from '@angular/core';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.html',
})
export class LogoComponent {
  private readonly store = inject(ContentStore);

  /** Book icon color (used only with the default drawn logo) */
  readonly mark = input<string>('#ec6623');
  /** Text classes for the default drawn logo */
  readonly textClass = input<string>('text-navy-700');
  /** Additional classes for the container */
  readonly wrapperClass = input<string>('');

  /** The logo uploaded from the admin panel (if any). */
  protected readonly brand = computed(() => this.store.content().brand);
}
