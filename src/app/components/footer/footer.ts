import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  private readonly store = inject(ContentStore);

  /** Footer content. */
  protected readonly c = computed(() => this.store.content().footer);
}
