import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogoComponent } from '../logo/logo';
import { ContactService } from '../../services/contact.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentStore } from '../../content/content-store';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LogoComponent, RevealDirective, ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  private readonly contactService = inject(ContactService);
  private readonly store = inject(ContentStore);
  private readonly fb = inject(FormBuilder);

  /** Contact section content. */
  protected readonly c = computed(() => this.store.content().contact);
  protected readonly submitted = signal(false);
  protected readonly sending = signal(false);
  protected readonly errorMessage = signal('');

  protected readonly contactForm = this.fb.group({
    name: ['', Validators.required],
    organization: [''],
    email: ['', [Validators.required, Validators.email]],
    message: [''],
  });

  protected submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.errorMessage.set('');
    this.sending.set(true);

    this.contactService
      .submit(
        this.contactForm.value as {
          name: string;
          organization?: string;
          email: string;
          message?: string;
        },
      )
      .then(() => {
        this.submitted.set(true);
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Email error:', error);
        this.errorMessage.set('تعذّر إرسال الطلب، يرجى المحاولة مرة أخرى.');
      })
      .finally(() => {
        this.sending.set(false);
      });
  }
}
