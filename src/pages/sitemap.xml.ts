import type { APIRoute } from 'astro';
import { SITE_ORIGIN, sitemapEntries, type SitemapEntry } from '../data/sitemap-entries';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function defaultLangAlternates(origin: string, path: string): { et: string; ru: string; xDefault: string } {
  const norm = path.replace(/\/$/, '') || '/';
  if (norm === '/' || norm === '/ru') {
    return {
      et: `${origin}/`,
      ru: `${origin}/ru`,
      xDefault: `${origin}/`,
    };
  }
  const et = `${origin}${path.startsWith('/') ? path : `/${path}`}`;
  const ruPath = norm === '/' ? '/ru' : `/ru${norm}`;
  const ru = `${origin}${ruPath}`;
  return { et, ru, xDefault: et };
}

function alternates(
  entry: SitemapEntry,
  origin: string
): { et: string; ru: string; xDefault: string } {
  if (entry.ruPath) {
    const et = `${origin}${entry.path}`;
    const ru = `${origin}${entry.ruPath}`;
    return { et, ru, xDefault: et };
  }
  if (entry.etPath) {
    const et = `${origin}${entry.etPath}`;
    const ru = `${origin}${entry.path}`;
    return { et, ru, xDefault: et };
  }
  return defaultLangAlternates(origin, entry.path);
}

function buildUrlXml(entry: SitemapEntry, origin: string): string {
  const fullLoc = entry.path === '/' ? `${origin}/` : `${origin}${entry.path}`;
  const { et, ru, xDefault } = alternates(entry, origin);

  let inner = `
  <url>
    <loc>${escapeXml(fullLoc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    <xhtml:link rel="alternate" hreflang="et" href="${escapeXml(et)}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${escapeXml(ru)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`;

  if (entry.images?.length) {
    for (const img of entry.images) {
      const imgLoc = img.loc.startsWith('http') ? img.loc : `${origin}${img.loc}`;
      inner += `
    <image:image>
      <image:loc>${escapeXml(imgLoc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`;
    }
  }

  inner += `
  </url>`;
  return inner;
}

export const GET: APIRoute = ({ site }) => {
  const raw = site?.origin ?? String(import.meta.env.SITE || SITE_ORIGIN).replace(/\/$/, '');
  const origin = raw;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${sitemapEntries.map((e) => buildUrlXml(e, origin)).join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
