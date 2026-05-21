/** Contact and service area — single source (SEO / E-E-A-T copy). */
export const SITE_IDENTITY = {
  brand: 'toruabii.ee',
  email: 'info@toruabii.ee',
  phoneDisplay: '+372 5633 3332',
  phoneTel: '+37256333332',
  areaEt: 'Tallinn ja Harjumaa',
  areaRu: 'Таллин и Харьюмаа',
  legalEntityName: '' as string,
  registryCode: '' as string,
} as const;

export function footerTrustLineEt(): string {
  return `Teenuspiirkond: ${SITE_IDENTITY.areaEt} · ${SITE_IDENTITY.email} · ${SITE_IDENTITY.phoneDisplay}`;
}

export function footerTrustLineRu(): string {
  return `Зона обслуживания: ${SITE_IDENTITY.areaRu} · ${SITE_IDENTITY.email} · ${SITE_IDENTITY.phoneDisplay}`;
}

function trimLegal(s: string): string {
  return typeof s === 'string' ? s.trim() : '';
}

export function footerLegalLineEt(): string {
  const name = trimLegal(SITE_IDENTITY.legalEntityName);
  const code = trimLegal(SITE_IDENTITY.registryCode);
  if (!name && !code) return '';
  const parts: string[] = [];
  if (name) parts.push(name);
  if (code) parts.push(`Registrikood ${code}`);
  return parts.join(' · ');
}

export function footerLegalLineRu(): string {
  const name = trimLegal(SITE_IDENTITY.legalEntityName);
  const code = trimLegal(SITE_IDENTITY.registryCode);
  if (!name && !code) return '';
  const parts: string[] = [];
  if (name) parts.push(name);
  if (code) parts.push(`Рег. код ${code}`);
  return parts.join(' · ');
}
