/** Canonical RU URLs use `/ru` prefix (no `?lang=ru`). */

/** ET blog category slug → canonical RU slug (see sitemap-entries `ruPath`). */
export const BLOG_CATEGORY_ET_TO_RU: Record<string, string> = {
  kuttesusteem: 'otoplenije',
  kanalisatsioon: 'kanalizacija',
};

/** RU blog category slug → ET slug */
export const BLOG_CATEGORY_RU_TO_ET: Record<string, string> = {
  otoplenije: 'kuttesusteem',
  kanalizacija: 'kanalisatsioon',
};

export function blogCategorySlug(category: string, lang: 'et' | 'ru'): string {
  if (lang === 'ru') {
    return BLOG_CATEGORY_ET_TO_RU[category] ?? category;
  }
  return BLOG_CATEGORY_RU_TO_ET[category] ?? category;
}

export function blogCategoryPath(category: string, lang: 'et' | 'ru'): string {
  return `/blog/kategoria/${blogCategorySlug(category, lang)}`;
}

export function homeHref(lang: 'et' | 'ru'): string {
  return lang === 'ru' ? '/ru' : '/';
}

export function normalizePathname(pathname: string): string {
  return pathname.replace(/\/$/, '') || '/';
}

export function isRuPrefixedPath(pathname: string): boolean {
  const norm = normalizePathname(pathname);
  return norm === '/ru' || norm.startsWith('/ru/');
}

/** Strip `/ru` prefix to get the ET path (e.g. `/ru/hinnakiri` → `/hinnakiri`). */
export function etPath(pathname: string): string {
  const norm = normalizePathname(pathname);
  if (norm === '/ru') return '/';
  if (norm.startsWith('/ru/')) return norm.replace(/^\/ru/, '') || '/';
  return norm;
}

export function ruPath(pathname: string): string {
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const et = etPath(p);
  if (et === '/' || et === '') return '/ru';
  if (et === '/ru' || et.startsWith('/ru/')) return et;
  return `/ru${et}`;
}

/** Href for switching locale from the current page (uses `lang` prop when path is rewritten). */
export function alternateLangPath(pathname: string, currentLang: 'et' | 'ru'): string {
  const et = etPath(pathname);
  return currentLang === 'ru' ? et : ruPath(et);
}
