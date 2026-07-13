import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export type { ContactType, ContactItem } from '../content/site-content';

export interface ContactRequest {
  name: string;
  organization?: string;
  email: string;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  submit(request: ContactRequest): Promise<void> {
    const { serviceId, templateId, publicKey } = environment.emailjs;

    return emailjs
      .send(
        serviceId,
        templateId,
        {
          name: request.name,
          organization: request.organization || '',
          email: request.email,
          message: request.message || '',
        },
        { publicKey },
      )
      .then(() => {
        return;
      });
  }
}
