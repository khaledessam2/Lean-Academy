import { Component, inject, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Plan, PricingService } from '../../services/pricing.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [DecimalPipe, RouterLink, RevealDirective],
  templateUrl: './pricing.html',
})
export class PricingComponent {
  private readonly pricing = inject(PricingService);

  readonly showHeader = input(true);
  protected readonly annual = signal(false);
  protected readonly plans = this.pricing.plans;

  protected price(p: Plan): number | null {
    return this.pricing.price(p, this.annual());
  }
}
