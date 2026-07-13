import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  readonly clients: string[] = [
    'وزارة الحرس الوطني',
    'الأمن العام',
    'هيئة رعاية الأشخاص ذوي الإعاقة',
    'جامعة نجران',
    'جامعة أم القرى',
    'جامعة الإمام عبدالرحمن بن فيصل',
    'الكلية التطبيقية — جامعة جدة',
    'الهيئة الملكية للجبيل وينبع',
    'جمعية دعم التعليم «تعلّم»',
  ];
}
