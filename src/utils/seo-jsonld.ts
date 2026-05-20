import { ruPath } from './i18n-paths';

const siteUrl = 'https://toruabii.ee';

export type BreadcrumbJsonLdItem = { name: string; item: string };

export type BlogCategoryBreadcrumb = {
  etSlug: string;
  ruSlug: string;
  nameEt: string;
  nameRu: string;
};

export const blogCategoryHeating: BlogCategoryBreadcrumb = {
  etSlug: 'kuttesusteem',
  ruSlug: 'otoplenije',
  nameEt: 'Küttesüsteem',
  nameRu: 'Отопление',
};

export const blogCategorySewer: BlogCategoryBreadcrumb = {
  etSlug: 'kanalisatsioon',
  ruSlug: 'kanalizacija',
  nameEt: 'Kanalisatsioon',
  nameRu: 'Канализация',
};

export const blogCategoryBoiler: BlogCategoryBreadcrumb = {
  etSlug: 'boiler',
  ruSlug: 'boiler',
  nameEt: 'Boiler',
  nameRu: 'Бойлер',
};

export function pageUrlForLang(path: string, lang: 'et' | 'ru'): string {
  const norm = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ru' ? `${siteUrl}${ruPath(norm)}` : `${siteUrl}${norm}`;
}

export function buildBreadcrumbListJsonLd(pageUrl: string, items: BreadcrumbJsonLdItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((c, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

export function buildFaqPageJsonLd(
  pageUrl: string,
  lang: 'et' | 'ru',
  mainEntity: Record<string, unknown>[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: lang,
    mainEntity,
  };
}

/** Four-level blog article breadcrumb (replaces BaseLayout auto + duplicate footer block). */
export function blogArticleBreadcrumbOverride(
  articlePath: string,
  lang: 'et' | 'ru',
  category: BlogCategoryBreadcrumb,
  articleNameEt: string,
  articleNameRu: string
): BreadcrumbJsonLdItem[] {
  const pageUrl = pageUrlForLang(articlePath, lang);
  const homeItem = lang === 'ru' ? `${siteUrl}/ru` : `${siteUrl}/`;
  const blogItem = lang === 'ru' ? `${siteUrl}/ru/blog` : `${siteUrl}/blog`;
  const categoryItem =
    lang === 'ru'
      ? `${siteUrl}/ru/blog/kategoria/${category.ruSlug}`
      : `${siteUrl}/blog/kategoria/${category.etSlug}`;

  return [
    { name: lang === 'ru' ? 'Главная' : 'Avaleht', item: homeItem },
    { name: lang === 'ru' ? 'Блог' : 'Blogi', item: blogItem },
    { name: lang === 'ru' ? category.nameRu : category.nameEt, item: categoryItem },
    { name: lang === 'ru' ? articleNameRu : articleNameEt, item: pageUrl },
  ];
}
