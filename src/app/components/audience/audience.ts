import { Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { AudienceService } from '../../services/audience.service';

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './audience.html',
})
export class AudienceComponent {
  private readonly audience = inject(AudienceService);

  protected readonly roles = this.audience.roles;
  protected readonly active = signal('trainee');

  protected readonly current = computed(
    () => this.roles.find((r) => r.key === this.active()) ?? this.roles[0],
  );
}
