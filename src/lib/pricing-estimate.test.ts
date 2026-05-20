import { describe, expect, it } from 'vitest';
import { computePricingEstimate } from './pricing-estimate';

describe('computePricingEstimate', () => {
  it('planned one hourly service: net matches rate * hours, gross includes VAT', () => {
    const r = computePricingEstimate({
      mode: 'planned',
      location: 'tallinn',
      serviceIds: ['s1'],
    });
    expect(r.lines).toHaveLength(1);
    expect(r.lines[0].euro).toBeCloseTo(45, 5);
    expect(r.promoSavingsEur).toBeLessThan(0.01);
    expect(r.netEur).toBeCloseTo(45, 5);
    expect(r.vatEur).toBeCloseTo(45 * 0.24, 5);
    expect(r.grossEur).toBeCloseTo(45 * 1.24, 5);
    expect(r.emergency).toBe(false);
  });

  it('emergency overrides hourly to 75 EUR/h for s1', () => {
    const r = computePricingEstimate({
      mode: 'emergency',
      location: 'tallinn',
      serviceIds: ['s1'],
    });
    expect(r.lines[0].euro).toBe(75);
    expect(r.netEur).toBe(75);
    expect(r.emergency).toBe(true);
    expect(r.promoSavingsEur).toBe(0);
  });

  it('two planned hourly slots: weekly promo applies (highest hour full, second half)', () => {
    const r = computePricingEstimate({
      mode: 'planned',
      location: 'tallinn',
      serviceIds: ['s1', 's3'],
    });
    // s1: 45/h min 1, s3: 48/h min 1 → slots [45,48] sorted desc → 48 + 22.5 = 70.5
    expect(r.workNetEur).toBeCloseTo(70.5, 5);
    expect(r.promoSavingsEur).toBeCloseTo(22.5, 5);
    expect(r.netEur).toBeCloseTo(70.5, 5);
  });

  it('outside + planned services only: hinnakiri planned row 0,50 €/km round-trip', () => {
    const r = computePricingEstimate({
      mode: 'planned',
      location: 'outside',
      kmOneWay: 10,
      serviceIds: ['s1'],
    });
    const travel = 20 * 0.5; // 20 km rt × 0,50 €/km
    expect(r.travelEur).toBeCloseTo(10, 5);
    expect(r.netEur).toBeCloseTo(45 + 10, 5);
    expect(r.travelDetailEt).toContain('0.5');
  });

  it('outside + high-pressure service: 2 €/km round-trip (hinnakiri ВД block)', () => {
    const r = computePricingEstimate({
      mode: 'planned',
      location: 'outside',
      kmOneWay: 10,
      serviceIds: ['hp_weekday'],
    });
    expect(r.travelEur).toBeCloseTo(40, 5);
    expect(r.travelDetailEt).toContain('2');
  });

  it('outside + planned and HP together: use 2 €/km travel rule', () => {
    const r = computePricingEstimate({
      mode: 'planned',
      location: 'outside',
      kmOneWay: 10,
      serviceIds: ['s1', 'hp_weekday'],
    });
    expect(r.travelEur).toBeCloseTo(40, 5);
  });

  it('per m3 uses quantity from m3ByServiceId', () => {
    const r = computePricingEstimate({
      mode: 'planned',
      location: 'tallinn',
      serviceIds: ['s11'],
      m3ByServiceId: { s11: 2 },
    });
    expect(r.lines[0].euro).toBeCloseTo(294 * 2, 5);
    expect(r.netEur).toBeCloseTo(294 * 2, 5);
  });
});
