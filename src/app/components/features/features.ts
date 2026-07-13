import { Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { FeaturesService } from '../../services/features.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './features.html',
})
export class FeaturesComponent {
  private readonly featuresService = inject(FeaturesService);

  private readonly pageSize = 6;
  protected readonly page = signal(1);
  protected readonly features = this.featuresService.features;

  protected readonly totalPages = computed(() => Math.ceil(this.features.length / this.pageSize));

  protected readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1),
  );

  protected readonly pagedFeatures = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.features.slice(start, start + this.pageSize);
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
