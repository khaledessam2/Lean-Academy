import { Component, inject } from '@angular/core';
import { OverviewService } from '../../services/overview.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './overview.html',
})
export class OverviewComponent {
  private readonly overview = inject(OverviewService);
  protected readonly modes = this.overview.modes;
}
