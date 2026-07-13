import { Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './features.html',
})
export class FeaturesComponent {
  private readonly store = inject(ContentStore);

  /** محتوى قسم المميزات. */
  protected readonly c = computed(() => this.store.content().features);

  private readonly pageSize = 6;
  protected readonly page = signal(1);

  protected readonly totalPages = computed(() =>
    Math.ceil(this.c().items.length / this.pageSize),
  );

  protected readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1),
  );

  protected readonly pagedFeatures = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.c().items.slice(start, start + this.pageSize);
  });

  protected setPage(p: number): void {
    this.page.set(p);
    this.scrollToTop();
  }

  protected prev(): void {
    if (this.page() > 1) this.setPage(this.page() - 1);
  }

  protected next(): void {
    if (this.page() < this.totalPages()) this.setPage(this.page() + 1);
  }

  private scrollToTop(): void {
    if (typeof document === 'undefined') return;
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
