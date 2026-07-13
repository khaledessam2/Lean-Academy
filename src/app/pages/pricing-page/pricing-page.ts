import { Component, inject } from '@angular/core';
import { PricingComponent } from '../../components/pricing/pricing';
import { ContactComponent } from '../../components/contact/contact';
import { FaqService } from '../../services/faq.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [PricingComponent, ContactComponent, RevealDirective],
  templateUrl: './pricing-page.html',
})
export class PricingPageComponent {
  private readonly faqService = inject(FaqService);
  protected readonly faqs = this.faqService.faqs;
}
