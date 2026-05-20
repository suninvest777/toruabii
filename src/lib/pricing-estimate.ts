/**
 * Pure pricing estimate — same rules as historical on-site calculator (service lines, travel, weekly promo).
 * Used by /api/chat when `estimate` payload is sent; kept in sync with `pricing-calculator` data.
 */

import {
  ALL_CALCULATOR_SERVICES,
  EMERGENCY_HOUR_EUR,
  PLANNED_TRAVEL_EUR_PER_KM_ROUND_TRIP,
  TRAVEL_EUR_PER_KM_ROUND_TRIP,
  plannedHourlyTotalsWithWeeklyPromo,
  serviceLineEuro,
  travelEurOutsideHighPressure,
  travelEurOutsidePlanned,
  type CalculatorService,
} from '../data/pricing-calculator';

export type EstimateMode = 'planned' | 'emergency';
export type EstimateLocation = 'tallinn' | 'pirita' | 'viimsi' | 'outside';

export type PricingEstimateInput = {
  mode: EstimateMode;
  location: EstimateLocation;
  /** One-way km from Tallinn when location is outside */
  kmOneWay?: number;
  serviceIds: string[];
  m3ByServiceId?: Record<string, number>;
};

export type PricingEstimateLine = {
  serviceId: string;
  euro: number;
  lineEt: string;
  lineRu: string;
};

export type PricingEstimateResult = {
  lines: PricingEstimateLine[];
  travelEur: number;
  travelDetailEt: string;
  travelDetailRu: string;
  promoSavingsEur: number;
  workNetEur: number;
  netEur: number;
  vatEur: number;
  grossEur: number;
  emergency: boolean;
  hasWorkLines: boolean;
};

function formatEur(n: number): string {
  return n.toLocaleString('et-EE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

function labelPair(svc: CalculatorService): { et: string; ru: string } {
  return { et: svc.labels.et, ru: svc.labels.ru };
}

/**
 * Validates and returns false if input cannot produce a meaningful estimate.
 */
export function isValidPricingEstimateInput(input: unknown): input is PricingEstimateInput {
  if (!input || typeof input !== 'object') return false;
  const o = input as Record<string, unknown>;
  if (o.mode !== 'planned' && o.mode !== 'emergency') return false;
  if (o.location !== 'tallinn' && o.location !== 'pirita' && o.location !== 'viimsi' && o.location !== 'outside') {
    return false;
  }
  if (!Array.isArray(o.serviceIds) || o.serviceIds.length === 0) return false;
  if (!o.serviceIds.every((id) => typeof id === 'string')) return false;
  if (o.kmOneWay !== undefined && typeof o.kmOneWay !== 'number') return false;
  if (o.m3ByServiceId !== undefined) {
    if (typeof o.m3ByServiceId !== 'object' || o.m3ByServiceId === null) return false;
    for (const v of Object.values(o.m3ByServiceId)) {
      if (typeof v !== 'number' || !Number.isFinite(v)) return false;
    }
  }
  return true;
}

export function computePricingEstimate(input: PricingEstimateInput): PricingEstimateResult {
  const emergency = input.mode === 'emergency';
  const m3 = input.m3ByServiceId ?? {};

  const lineItems: PricingEstimateLine[] = [];
  const plannedHourSlots: number[] = [];
  let emergencyHourlySum = 0;
  let nonHourlySum = 0;

  const seen = new Set<string>();
  for (const id of input.serviceIds) {
    if (seen.has(id)) continue;
    seen.add(id);
    const svc = ALL_CALCULATOR_SERVICES.find((s) => s.id === id);
    if (!svc) continue;

    const euro = serviceLineEuro(svc, emergency, m3);
    const { et: labEt, ru: labRu } = labelPair(svc);
    let detailEt = '';
    let detailRu = '';

    if (svc.model.kind === 'perHour') {
      const rate =
        emergency && svc.emergencyOverridesHourly ? EMERGENCY_HOUR_EUR : svc.model.rateEur;
      const d = ` (${formatEur(rate)} × ${svc.model.minHours} h)`;
      detailEt = d;
      detailRu = d;
      if (!emergency) {
        for (let h = 0; h < svc.model.minHours; h++) plannedHourSlots.push(svc.model.rateEur);
      } else {
        emergencyHourlySum += euro;
      }
    } else if (svc.model.kind === 'perM3') {
      const q = m3[svc.id] ?? svc.model.defaultM3;
      const d = ` (${q} m³ × ${formatEur(svc.model.rateEur)})`;
      detailEt = d;
      detailRu = d;
      nonHourlySum += euro;
    } else {
      nonHourlySum += euro;
    }

    lineItems.push({
      serviceId: svc.id,
      euro,
      lineEt: labEt + detailEt,
      lineRu: labRu + detailRu,
    });
  }

  const promoHourly = plannedHourlyTotalsWithWeeklyPromo(plannedHourSlots);
  const promoSavings = Math.max(0, promoHourly.withoutPromo - promoHourly.withPromo);
  const workSum = promoHourly.withPromo + emergencyHourlySum + nonHourlySum;

  let travel = 0;
  let travelDetailEt = '';
  let travelDetailRu = '';
  const km = input.kmOneWay ?? 0;
  if (input.location === 'outside' && Number.isFinite(km) && km > 0) {
    const rt = 2 * km;
    const hasHighPressure = input.serviceIds.some((id) => {
      const svc = ALL_CALCULATOR_SERVICES.find((s) => s.id === id);
      return svc?.group === 'highPressure';
    });
    if (hasHighPressure) {
      travel = travelEurOutsideHighPressure(km);
      const tail = ` km × ${TRAVEL_EUR_PER_KM_ROUND_TRIP} €/km (tuda–tagasi; survepesu auto / машина ВД)`;
      travelDetailEt = `${rt}${tail}`;
      travelDetailRu = `${rt}${tail}`;
    } else {
      travel = travelEurOutsidePlanned(km);
      const tail = ` km × ${PLANNED_TRAVEL_EUR_PER_KM_ROUND_TRIP} €/km (tuda–tagasi; planeeritud tööd / плановые работы)`;
      travelDetailEt = `${rt}${tail}`;
      travelDetailRu = `${rt}${tail}`;
    }
  }

  const net = workSum + travel;
  const vat = net * 0.24;
  const gross = net * 1.24;

  return {
    lines: lineItems,
    travelEur: travel,
    travelDetailEt,
    travelDetailRu,
    promoSavingsEur: promoSavings,
    workNetEur: workSum,
    netEur: net,
    vatEur: vat,
    grossEur: gross,
    emergency,
    hasWorkLines: lineItems.length > 0,
  };
}

export function formatEstimateForPrompt(result: PricingEstimateResult, lang: 'et' | 'ru'): string {
  const lineStrs = result.lines.map((l) => `- ${lang === 'ru' ? l.lineRu : l.lineEt}: ${formatEur(l.euro)}`);
  const parts: string[] = [];
  parts.push('=== ARVUTUS (ära summasid muuda / не меняй суммы) ===');
  if (lineStrs.length) parts.push('Read / строки:', ...lineStrs);
  else parts.push('(ühtegi teenust pole valitud)');
  if (result.travelEur > 0) {
    parts.push(
      `Sõit / проезд: ${formatEur(result.travelEur)} (${lang === 'ru' ? result.travelDetailRu : result.travelDetailEt})`,
    );
  }
  if (result.promoSavingsEur > 0.005 && !result.emergency) {
    parts.push(`Nädala soodustus (50% pärast 1. tundi) / скидка недели: −${formatEur(result.promoSavingsEur)}`);
  }
  parts.push(`Neto KM-ta / нетто без НДС: ${formatEur(result.netEur)}`);
  parts.push(`KM 24% / НДС: ${formatEur(result.vatEur)}`);
  parts.push(`Kokku KM-ga / итого с НДС: ${formatEur(result.grossEur)}`);
  parts.push('=== LÕPP / КОНЕЦ ===');
  return parts.join('\n');
}
