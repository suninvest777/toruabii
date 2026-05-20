/**
 * RU i18n route audit: maps sitemap ET paths → RU URLs and checks page files exist.
 * Run: node scripts/ru-i18n-audit.mjs
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const sitemapSrc = fs.readFileSync(path.join(root, 'src/data/sitemap-entries.ts'), 'utf8');

/** Parse sitemap entry paths (skips ru-only duplicate otoplenije as primary ET). */
const entries = [];
const pathRe = /path:\s*'([^']+)'/g;
const blocks = sitemapSrc.split(/\n  \{/).slice(1);
for (const block of blocks) {
  const pathM = block.match(/path:\s*'([^']+)'/);
  if (!pathM) continue;
  const pathVal = pathM[1];
  const ruM = block.match(/ruPath:\s*'([^']+)'/);
  const etM = block.match(/etPath:\s*'([^']+)'/);
  if (etM) continue;
  const et = pathVal;
  const ru = ruM ? ruM[1] : et === '/' ? '/ru' : `/ru${et}`;
  entries.push({ et, ru });
}

function walkPages(dir, base = '') {
  const routes = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'api') continue;
      routes.push(...walkPages(p, `${base}/${e.name}`));
    } else if (e.name.endsWith('.astro') && e.name !== 'sitemap.xml.ts') {
      const name = e.name.replace('.astro', '');
      routes.push(name === 'index' ? base || '/' : `${base}/${name}`);
    }
  }
  return routes;
}

const pageRoutes = walkPages(path.join(root, 'src/pages'));
const physicalRu = fs.existsSync(path.join(root, 'src/pages/ru/index.astro'));

function matchRoute(url) {
  const segs = url === '/' ? [] : url.split('/').filter(Boolean);
  for (const pr of pageRoutes) {
    const ps = pr === '/' ? [] : pr.split('/').filter(Boolean);
    if (ps.length !== segs.length) continue;
    let ok = true;
    for (let i = 0; i < ps.length; i++) {
      if (ps[i].startsWith('[') || ps[i] === segs[i]) continue;
      ok = false;
      break;
    }
    if (ok) return pr;
  }
  return null;
}

const rows = entries.map(({ et, ru }) => {
  const etNorm = et.replace(/\/$/, '') || '/';
  const ruNorm = ru.replace(/\/$/, '') || '/ru';
  const etHandler = etNorm === '/ru' ? '/ru/index' : matchRoute(etNorm);
  const ruViaRewrite = ruNorm !== '/ru' && etHandler;
  const ruHomePhysical = ruNorm === '/ru' && physicalRu;
  const ok = Boolean(etHandler && (ruViaRewrite || ruHomePhysical));
  return { et: etNorm, ru: ruNorm, status: ok ? 'OK' : 'BROKEN', handler: etHandler || '—' };
});

const okCount = rows.filter((r) => r.status === 'OK').length;
const broken = rows.filter((r) => r.status === 'BROKEN');

console.log(
  JSON.stringify(
    {
      total: rows.length,
      ok: okCount,
      broken: broken.length,
      physicalRuPages: physicalRu ? ['/ru'] : [],
      middleware: '/ru/* → /*?lang=ru (except /ru → ru/index.astro)',
      rows,
    },
    null,
    2
  )
);

process.exit(broken.length ? 1 : 0);
