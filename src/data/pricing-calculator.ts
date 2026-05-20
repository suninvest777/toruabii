/**
 * Teenuste ja tariifide andmestik (AI / sisemised hinnangud) — numbrid vastavad [hinnakiri.astro] tabelitele.
 * Hoia synchis hinnakirjaga.
 */

export const EMERGENCY_HOUR_EUR = 75;
/**
 * € per km of round-trip distance (tuda–tagasi), vt hinnakiri «Survepesu auto — väljasõit Tallinnast väljapoole».
 * Kasutus: kui hinnangus on vähemalt üks survepesu (highPressure) teenus.
 */
export const TRAVEL_EUR_PER_KM_ROUND_TRIP = 2;
/**
 * € per km of round-trip distance for planned work only, vt hinnakiri planeeritud tabel «Tariif Tallinnast väljapoole» 0,50 €/km.
 */
export const PLANNED_TRAVEL_EUR_PER_KM_ROUND_TRIP = 0.5;

/**
 * Nädala aktsioon: planeeritud tunnitöö pärast esimest tundi 50% (vt promoText / hinnakiri).
 * Esimene tund arvestatakse suurima tunnihinnaga, seejärel ülejäänud tunnid poole hinnaga.
 */
export const PROMO_HOURLY_AFTER_FIRST_FACTOR = 0.5;

export function plannedHourlyTotalsWithWeeklyPromo(ratesPerHour: number[]): {
  withPromo: number;
  withoutPromo: number;
} {
  if (ratesPerHour.length === 0) return { withPromo: 0, withoutPromo: 0 };
  const sorted = [...ratesPerHour].sort((a, b) => b - a);
  const withoutPromo = sorted.reduce((acc, r) => acc + r, 0);
  let withPromo = 0;
  sorted.forEach((r, i) => {
    withPromo += i === 0 ? r : r * PROMO_HOURLY_AFTER_FIRST_FACTOR;
  });
  return { withPromo, withoutPromo };
}

export type ServiceGroup = 'planned' | 'highPressure';

export type PricingModel =
  | { kind: 'perHour'; rateEur: number; minHours: number; isFrom: boolean }
  | { kind: 'fixedFrom'; minEur: number }
  | { kind: 'perM3'; rateEur: number; isFrom: boolean; defaultM3: number };

export interface CalculatorService {
  id: string;
  /** Viide hinnakirja reale (kommentaar) */
  priceRowRef: string;
  group: ServiceGroup;
  model: PricingModel;
  /** Kas avariirežiimis asendada tunnihind EMERGENCY_HOUR_EUR-ga */
  emergencyOverridesHourly: boolean;
  labels: { et: string; ru: string };
}

/** Planeeritud tööd (ilma eraldi sõidutariifita — sõit sõltub valitud asukohast) */
export const PLANNED_SERVICES: CalculatorService[] = [
  {
    id: 's1',
    priceRowRef: 'hinnakiri ~174–175',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 45, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Sanitaartehnilised tööd (nt segisti, wc)', ru: 'Сантехработы (смеситель, унитаз и т.п.)' },
  },
  {
    id: 's3',
    priceRowRef: 'hinnakiri ~182–183',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 48, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'PEM-toru keevitamine', ru: 'Сварка PEM-труб' },
  },
  {
    id: 's4',
    priceRowRef: 'hinnakiri ~186–187',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 75, minHours: 1, isFrom: false },
    emergencyOverridesHourly: true,
    labels: { et: 'Torustiku inspekteerimine kaameraga', ru: 'Обследование труб камерой' },
  },
  {
    id: 's5',
    priceRowRef: 'hinnakiri ~190–191',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 25, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Küttesüsteemi läbipesu', ru: 'Промывка отопления' },
  },
  {
    id: 's6',
    priceRowRef: 'hinnakiri ~194–195',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 25, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Soojusvahetite puhastus', ru: 'Чистка теплообменников' },
  },
  {
    id: 's7',
    priceRowRef: 'hinnakiri ~198–199',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 50, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Torustiku survekatse', ru: 'Опрессовка трубопровода' },
  },
  {
    id: 's8',
    priceRowRef: 'hinnakiri ~202–203',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 45, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Kütte ja soojusõlme survekatse', ru: 'Опрессовка отопления и теплоузла' },
  },
  {
    id: 's9',
    priceRowRef: 'hinnakiri ~206–207',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 250, minHours: 1, isFrom: false },
    emergencyOverridesHourly: true,
    labels: {
      et: 'Torude pesu kuuma veega surve all (kuni 75 bar)',
      ru: 'Промывка труб горячей водой под давлением (до 75 бар)',
    },
  },
  {
    id: 's10',
    priceRowRef: 'hinnakiri ~210–211',
    group: 'planned',
    model: { kind: 'fixedFrom', minEur: 200 },
    emergencyOverridesHourly: false,
    labels: { et: 'Kanalisatsiooni hüdrodünaamiline pesu', ru: 'Гидродинамическая промывка канализации' },
  },
  {
    id: 's11',
    priceRowRef: 'hinnakiri ~214–215',
    group: 'planned',
    model: { kind: 'perM3', rateEur: 294, isFrom: false, defaultM3: 1 },
    emergencyOverridesHourly: false,
    labels: { et: 'Rasva- ja liivapüüdurite puhastus', ru: 'Очистка жиро- и пескоуловителей' },
  },
  {
    id: 's12',
    priceRowRef: 'hinnakiri ~218–219',
    group: 'planned',
    model: { kind: 'perM3', rateEur: 50, isFrom: true, defaultM3: 1 },
    emergencyOverridesHourly: false,
    labels: { et: 'Utiliseerimiskulu (lisandub)', ru: 'Утилизация (доп. к цене)' },
  },
  {
    id: 's13',
    priceRowRef: 'hinnakiri ~222–223',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 75, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Plasttorude sulatamine', ru: 'Разморозка пластиковых труб' },
  },
  {
    id: 's14',
    priceRowRef: 'hinnakiri ~226–227',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 75, minHours: 1, isFrom: true },
    emergencyOverridesHourly: true,
    labels: { et: 'Metalltorude sulatamine', ru: 'Разморозка металлических труб' },
  },
  {
    id: 's16',
    priceRowRef: 'hinnakiri ~234–235',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 60.4, minHours: 1, isFrom: false },
    emergencyOverridesHourly: true,
    labels: { et: 'Vaakumpuhastus', ru: 'Вакуумная прочистка' },
  },
  {
    id: 's17',
    priceRowRef: 'hinnakiri ~238–239',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 100.8, minHours: 1, isFrom: false },
    emergencyOverridesHourly: true,
    labels: { et: 'Ummistuse likvideerimine Rothenberger 16 mm', ru: 'Прочистка засоров Rothenberger 16 мм' },
  },
  {
    id: 's18',
    priceRowRef: 'hinnakiri ~242–243',
    group: 'planned',
    model: { kind: 'perHour', rateEur: 161.29, minHours: 1, isFrom: false },
    emergencyOverridesHourly: true,
    labels: { et: 'Ummistuse likvideerimine Rothenberger 22 mm', ru: 'Прочистка засоров Rothenberger 22 мм' },
  },
];

export const HIGH_PRESSURE_SERVICES: CalculatorService[] = [
  {
    id: 'hp_weekday',
    priceRowRef: 'hinnakiri ~272–273',
    group: 'highPressure',
    model: { kind: 'perHour', rateEur: 175, minHours: 2, isFrom: false },
    emergencyOverridesHourly: false,
    labels: { et: 'Survepesu auto — töötund E–R 8:00–17:00', ru: 'Машина высокого давления — часы Пн–Пт 8:00–17:00' },
  },
  {
    id: 'hp_weekend',
    priceRowRef: 'hinnakiri ~276–277',
    group: 'highPressure',
    model: { kind: 'perHour', rateEur: 250, minHours: 2, isFrom: false },
    emergencyOverridesHourly: false,
    labels: {
      et: 'Survepesu auto — õhtu/nädalavahetus (17:00–24:00)',
      ru: 'Машина ВД — вечер/выходные (17:00–24:00)',
    },
  },
];

export const ALL_CALCULATOR_SERVICES: CalculatorService[] = [...PLANNED_SERVICES, ...HIGH_PRESSURE_SERVICES];

export const LOCATION_OPTIONS = [
  { id: 'tallinn', travelEur: 0 },
  { id: 'pirita', travelEur: 0 },
  { id: 'viimsi', travelEur: 0 },
  { id: 'outside', travelEur: null },
] as const;

export type LocationId = (typeof LOCATION_OPTIONS)[number]['id'];

/** Sõit: planeeritud tööd, Tallinnast väljas (tuda–tagasi km × PLANNED rate). */
export function travelEurOutsidePlanned(kmOneWay: number): number {
  if (!Number.isFinite(kmOneWay) || kmOneWay <= 0) return 0;
  return 2 * kmOneWay * PLANNED_TRAVEL_EUR_PER_KM_ROUND_TRIP;
}

/** Sõit: survepesu auto sektsioon (tuda–tagasi km × 2 €/km). */
export function travelEurOutsideHighPressure(kmOneWay: number): number {
  if (!Number.isFinite(kmOneWay) || kmOneWay <= 0) return 0;
  return 2 * kmOneWay * TRAVEL_EUR_PER_KM_ROUND_TRIP;
}

/** @deprecated Prefer travelEurOutsidePlanned / travelEurOutsideHighPressure (valik sõltub teenustest). */
export function travelEurOutside(kmOneWay: number): number {
  return travelEurOutsideHighPressure(kmOneWay);
}

export function serviceLineEuro(svc: CalculatorService, emergency: boolean, m3ById: Record<string, number>): number {
  const m = svc.model;
  if (m.kind === 'perHour') {
    const rate =
      emergency && svc.emergencyOverridesHourly ? EMERGENCY_HOUR_EUR : m.rateEur;
    return rate * m.minHours;
  }
  if (m.kind === 'fixedFrom') return m.minEur;
  const q = Math.max(0.1, m3ById[svc.id] ?? m.defaultM3);
  return m.rateEur * q;
}
