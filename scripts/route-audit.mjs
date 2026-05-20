import fs from 'fs';
import path from 'path';

const sitemap = fs.readFileSync('src/data/sitemap-entries.ts', 'utf8');
const sitemapPaths = [...sitemap.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]);

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

const pageRoutes = walkPages('src/pages');

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

const valid = new Set(pageRoutes);
valid.add('/blog/kategoria/[category]');

function isValidHref(href) {
  let u = href.replace(/^\/ru/, '') || '/';
  if (u === '') u = '/';
  if (valid.has(u)) return true;
  if (/^\/blog\/kategoria\/[a-z0-9-]+$/.test(u)) return true;
  return !!matchRoute(u);
}

const hrefRe = /href=["'](\/[^"'#?]*)/g;
const broken = new Map();

function scan(file) {
  const c = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = hrefRe.exec(c))) {
    const href = m[1];
    if (!isValidHref(href)) {
      broken.set(href, [...(broken.get(href) || []), file]);
    }
  }
}

function walkSrc(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walkSrc(p);
    else if (/\.(astro|ts|tsx|js)$/.test(e.name)) scan(p);
  }
}

walkSrc('src');

const missing = sitemapPaths.filter((p) => !matchRoute(p));

console.log(JSON.stringify({
  sitemapCount: sitemapPaths.length,
  pageRouteCount: pageRoutes.length,
  sitemapMissing: missing,
  brokenHrefs: Object.fromEntries([...broken.entries()].sort()),
}, null, 2));
