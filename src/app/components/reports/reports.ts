import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './reports.html',
})
export class ReportsComponent {
  private readonly store = inject(ContentStore);

  /** محتوى قسم التقارير. */
  protected readonly c = computed(() => this.store.content().reports);
}
