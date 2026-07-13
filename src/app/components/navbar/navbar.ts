import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private readonly store = inject(ContentStore);

  /** محتوى شريط التنقّل. */
  protected readonly c = computed(() => this.store.content().navbar);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
