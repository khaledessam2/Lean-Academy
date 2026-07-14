import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
})
export class HeroComponent {
  private readonly store = inject(ContentStore);

  /** Hero section content. */
  protected readonly c = computed(() => this.store.content().hero);
}
