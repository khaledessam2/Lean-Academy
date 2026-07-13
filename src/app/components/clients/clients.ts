import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './clients.html',
})
export class ClientsComponent {
  private readonly store = inject(ContentStore);

  /** محتوى قسم العملاء. */
  protected readonly c = computed(() => this.store.content().clients);
}
