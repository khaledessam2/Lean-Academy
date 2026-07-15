import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';

/**
 * Packages section. Fully static — the packages and prices are written directly
 * in the template and are not loaded from the API.
 */
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './pricing.html',
})
export class PricingComponent {
  /** Whether to show the section header (hidden on the standalone pricing page). */
  readonly showHeader = input(true);

  /** Selected billing cycle: false = monthly, true = annual. */
  protected readonly annual = signal(false);
}
