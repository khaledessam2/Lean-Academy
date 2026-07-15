import { Component, computed, inject } from '@angular/core';
import { PricingComponent } from './pricing/pricing';
import { PricingComparisonComponent } from './pricing-comparison/pricing-comparison';
import { ContactComponent } from '../../components/contact/contact';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [PricingComponent, PricingComparisonComponent, ContactComponent, RevealDirective],
  templateUrl: './pricing-page.html',
})
export class PricingPageComponent {
  private readonly store = inject(ContentStore);

  /** FAQ content. */
  protected readonly faq = computed(() => this.store.content().faq);
}
