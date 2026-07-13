import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export type ContactType = 'web' | 'mail' | 'phone';

export interface ContactItem {
  type: ContactType;
  label: string;
  value: string;
}

export interface ContactRequest {
  name: string;
  organization?: string;
  email: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly contacts: ContactItem[] = [
    {
      type: 'web',
      label: 'الموقع الإلكتروني',
      value: 'leansolutions.com.sa'
    },
    {
      type: 'mail',
      label: 'البريد الإلكتروني',
      value: 'khaledessam3000@gmail.com'
    },
    {
      type: 'phone',
      label: 'خدمة العملاء',
      value: '٩٢٠ ٠٠٠ ٠٠٠'
    },
  ];


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
