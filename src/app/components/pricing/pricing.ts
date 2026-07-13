import { Component, computed, inject, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';
import { Plan } from '../../content/site-content';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [DecimalPipe, RouterLink, RevealDirective],
  templateUrl: './pricing.html',
})
export class PricingComponent {
  private readonly store = inject(ContentStore);

  /** محتوى قسم الباقات. */
  protected readonly c = computed(() => this.store.content().pricing);

  readonly showHeader = input(true);
  protected readonly annual = signal(false);

  /** سعر الباقة حسب دورة الفوترة المختارة. */
  protected price(p: Plan): number | null {
    return this.annual() ? p.annual : p.monthly;
  }
}
