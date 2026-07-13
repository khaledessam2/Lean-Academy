import { Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './audience.html',
})
export class AudienceComponent {
  private readonly store = inject(ContentStore);

  /** محتوى قسم المستخدمين. */
  protected readonly c = computed(() => this.store.content().audience);
  protected readonly active = signal('trainee');

  protected readonly current = computed(() => {
    const roles = this.c().roles;
    return roles.find((r) => r.key === this.active()) ?? roles[0];
  });
}
