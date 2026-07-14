/** Reports and surveys section. */

export interface ChartBar {
  /** Month name */
  m: string;
  /** Bar height (percentage 0-100) */
  h: number;
}

export interface ReportStat {
  /** Value such as "81%" */
  value: string;
  label: string;
}

export interface ReportsContent {
  eyebrow: string;
  title: string;
  intro: string;
  /** Chart card title */
  cardTitle: string;
  /** Year displayed on the card */
  cardYear: string;
  stats: ReportStat[];
  bars: ChartBar[];
  /** List of report types */
  items: string[];
}

export const REPORTS_DEFAULT: ReportsContent = {
  eyebrow: 'الاستبيانات والتقارير',
  title: 'قرارات مبنية على البيانات',
  intro:
    'نظام إحصائيات متقدم يولّد تقارير تفصيلية تساعد على اتخاذ قرارات تطويرية دقيقة، ضمن بيئة آمنة تعتمد على التحقق الثنائي لحماية البيانات وخصوصيتها.',
  cardTitle: 'تقرير إتمام الدورات',
  cardYear: '٢٠٢٦',
  stats: [
    { value: '81%', label: 'مكتمل' },
    { value: '13%', label: 'قيد التنفيذ' },
    { value: '6%', label: 'لم يبدأ' },
  ],
  bars: [
    { m: 'يناير', h: 55 }, { m: 'فبراير', h: 72 }, { m: 'مارس', h: 48 },
    { m: 'أبريل', h: 85 }, { m: 'مايو', h: 63 }, { m: 'يونيو', h: 95 },
  ],
  items: [
    'تقرير إتمام الدورات',
    'تقرير حضور الموظفين',
    'تقرير الوقت المستغرق في التدريب',
    'تقرير العائد على الاستثمار',
    'تقرير أداء الاختبارات والمهام',
    'تقرير تتبّع الشهادات',
    'تقرير التزام الموظفين بالتدريب',
    'تقرير أداء المدربين',
  ],
};
