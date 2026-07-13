import { Injectable } from '@angular/core';

export interface ChartBar {
  m: string;
  h: number;
}

@Injectable({ providedIn: 'root' })
export class ReportsService {
  readonly bars: ChartBar[] = [
    { m: 'يناير', h: 55 }, { m: 'فبراير', h: 72 }, { m: 'مارس', h: 48 },
    { m: 'أبريل', h: 85 }, { m: 'مايو', h: 63 }, { m: 'يونيو', h: 95 },
  ];

  readonly reports: string[] = [
    'تقرير إتمام الدورات',
    'تقرير حضور الموظفين',
    'تقرير الوقت المستغرق في التدريب',
    'تقرير العائد على الاستثمار',
    'تقرير أداء الاختبارات والمهام',
    'تقرير تتبّع الشهادات',
    'تقرير التزام الموظفين بالتدريب',
    'تقرير أداء المدربين',
  ];
}
