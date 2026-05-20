import { ruPath } from './i18n-paths';

const siteUrl = 'https://toruabii.ee';

export function stripBrandSuffix(s: string): string {
  return s.replace(/\s*\|\s*toruabii\.ee\s*$/i, '').trim();
}

export function tallinnDistrictPageUrl(districtPath: string, lang: 'et' | 'ru'): string {
  return lang === 'ru' ? `${siteUrl}${ruPath(districtPath)}` : `${siteUrl}${districtPath}`;
}

export function tallinnDistrictBreadcrumbJsonLd(
  districtPath: string,
  lang: 'et' | 'ru',
  titleEt: string,
  titleRu: string
): { name: string; item: string }[] {
  const pageLocUrl = tallinnDistrictPageUrl(districtPath, lang);
  const title = lang === 'ru' ? titleRu : titleEt;
  return [
    { name: lang === 'ru' ? 'Главная' : 'Avaleht', item: lang === 'ru' ? `${siteUrl}/ru` : `${siteUrl}/` },
    {
      name: lang === 'ru' ? 'Торуаби по районам' : 'Toruabi piirkondades',
      item: lang === 'ru' ? `${siteUrl}/ru#piirkonnad` : `${siteUrl}/#piirkonnad`,
    },
    { name: stripBrandSuffix(title), item: pageLocUrl },
  ];
}

/** Two-level breadcrumb for service landings (no “districts” mid-crumb). */
export function serviceLandingBreadcrumbJsonLd(
  pagePath: string,
  lang: 'et' | 'ru',
  crumbServiceEt: string,
  crumbServiceRu: string
): { name: string; item: string }[] {
  const pageLocUrl = tallinnDistrictPageUrl(pagePath, lang);
  return [
    { name: lang === 'ru' ? 'Главная' : 'Avaleht', item: lang === 'ru' ? `${siteUrl}/ru` : `${siteUrl}/` },
    { name: lang === 'ru' ? crumbServiceRu : crumbServiceEt, item: pageLocUrl },
  ];
}
