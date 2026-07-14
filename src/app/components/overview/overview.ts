import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './overview.html',
})
export class OverviewComponent {
  private readonly store = inject(ContentStore);

  /** Overview section content. */
  protected readonly c = computed(() => this.store.content().overview);
}
