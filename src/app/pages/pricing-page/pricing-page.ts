import { Component, computed, inject } from '@angular/core';
import { PricingComponent } from '../../components/pricing/pricing';
import { ContactComponent } from '../../components/contact/contact';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [PricingComponent, ContactComponent, RevealDirective],
  templateUrl: './pricing-page.html',
})
export class PricingPageComponent {
  private readonly store = inject(ContentStore);

  /** Page header. */
  protected readonly page = computed(() => this.store.content().pricingPage);
  /** FAQ content. */
  protected readonly faq = computed(() => this.store.content().faq);
}
