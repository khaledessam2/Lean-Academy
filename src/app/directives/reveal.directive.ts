import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type RevealFrom = 'up' | 'down' | 'left' | 'right' | 'zoom';

/**
 * Scroll-reveal directive.
 *
 * Elements start hidden (class added during SSR to avoid a flash) and animate
 * into view the first time they enter the viewport. Staggered lists pass an
 * index via `[appReveal]="$index"`; the animation direction is set with
 * `revealFrom`. Honours `prefers-reduced-motion` and degrades gracefully when
 * IntersectionObserver is unavailable.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  /** Stagger index — each step adds ~90ms of delay. */
  @Input('appReveal') index: number | '' = '';

  /** Direction the element travels in as it reveals. */
  @Input() revealFrom: RevealFrom = 'up';

  constructor() {
    // Add the hidden state as early as possible (runs during SSR too) so the
    // first paint already has the element hidden — no flash before reveal.
    this.renderer.addClass(this.el.nativeElement, 'reveal');
  }

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;

    if (this.revealFrom !== 'up') {
      this.renderer.addClass(host, `reveal-${this.revealFrom}`);
    }

    if (!isPlatformBrowser(this.platformId)) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      this.reveal(host);
      return;
    }

    const step = typeof this.index === 'number' ? this.index : 0;
    if (step > 0) {
      host.style.transitionDelay = `${Math.min(step, 8) * 90}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.reveal(host);
            this.observer?.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(host: HTMLElement): void {
    this.renderer.addClass(host, 'is-visible');
  }
}
