import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

/**
 * Static feature-by-feature comparison table between the packages.
 * The content is written directly in the template (not loaded from the API).
 */
@Component({
  selector: 'app-pricing-comparison',
  standalone: true,
  imports: [NgTemplateOutlet, RevealDirective],
  templateUrl: './pricing-comparison.html',
})
export class PricingComparisonComponent {}
