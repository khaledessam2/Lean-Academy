import { Component, inject } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './reports.html',
})
export class ReportsComponent {
  private readonly reportsService = inject(ReportsService);

  protected readonly bars = this.reportsService.bars;
  protected readonly reports = this.reportsService.reports;
}
