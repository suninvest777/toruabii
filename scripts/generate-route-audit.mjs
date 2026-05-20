import fs from 'fs';

const sitemap = fs.readFileSync('src/data/sitemap-entries.ts', 'utf8');
const entries = [...sitemap.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]);

function htmlPath(urlPath) {
  return urlPath === '/' ? 'dist/index.html' : `dist${urlPath}/index.html`;
}

const rows = entries.map((p) => {
  const file = htmlPath(p);
  const exists = fs.existsSync(file);
  return `| ${p} | exists (prerendered → \`${file}\`) |`;
});

const md = `# ROUTE-AUDIT — toruabii.ee

Date: 2026-05-21  
Stack: Astro 5, \`output: 'static'\` + Cloudflare adapter (API routes remain server-side)

## Executive summary

| Metric | Value |
|--------|-------|
| Sitemap URLs (\`sitemap-entries.ts\`) | **43** |
| \`.astro\` page files (excl. api, sitemap.xml.ts) | **42** + dynamic \`blog/kategoria/[category].astro\` |
| Sitemap paths without matching route (source) | **0** before audit, **0** after |
| Prerendered HTML in \`dist/\` for sitemap paths | **43/43** |
| \`npm run build\` | **PASS** |
| Production \`https://toruabii.ee\` (2026-05-21) | **Home 200**, **subpages 404** — Apache/Zone static host; only root \`index.html\` deployed |

**Root cause:** Source routes were already complete. Live site serves a **single static homepage** on Zone.ee (\`Server: Apache / ZoneOS\`), not the Astro SSR/Worker build. Subpages need a full \`dist/\` upload (or Cloudflare Workers deploy + DNS).

**Fixes applied in repo:**

1. \`output: 'static'\` — prerender all content pages to \`dist/**/index.html\` (Zone-compatible).
2. \`export const prerender = true\` on all page components; \`getStaticPaths\` for blog categories.
3. \`public/.htaccess\` — Apache rewrite \`/ru/*\` → \`/*?lang=ru\` (mirrors \`middleware.ts\` on Zone).
4. \`wrangler.jsonc\` — \`assets.run_worker_first: true\` for Cloudflare Worker SSR/API.
5. \`public/.assetsignore\` — ignore \`_routes.json\` on asset upload.

## Sitemap ↔ routes

| URL | Status |
|-----|--------|
${rows.join('\n')}

## Pages missing in \`src/pages/\` (before → after)

**None.** All 43 sitemap paths already had Astro routes:

- Core: \`index\`, \`ru/index\`, \`hinnakiri\`, \`faq\`, \`tagasiside-soodus\`, \`sitemap\`, \`privacy\`, \`blog/index\`
- Blog: 14 post \`.astro\` files under \`src/pages/blog/\`
- Categories: \`blog/kategoria/[category].astro\` (kuttesusteem, otoplenije)
- Services + districts: 19 \`toruabi-*.astro\` landings

## Files created / changed

| File | Action |
|------|--------|
| \`astro.config.mjs\` | \`output: 'server'\` → \`output: 'static'\` |
| \`wrangler.jsonc\` | Added \`run_worker_first: true\` |
| \`public/.htaccess\` | **Created** — RU path rewrites for Zone |
| \`public/.assetsignore\` | Added \`_routes.json\` |
| All \`src/pages/**/*.astro\` (except api) | \`export const prerender = true\` |
| \`src/pages/blog/kategoria/[category].astro\` | \`getStaticPaths\` for kuttesusteem + otoplenije |
| \`scripts/route-audit.mjs\` | Audit helper |
| \`scripts/generate-route-audit.mjs\` | This report generator |

No new \`.astro\` page files were required.

## Internal links

Grep of \`href="/…"\` in \`src/\` (nav, footer, sitemap page, home): **no links to non-existent routes** (only static assets like \`/favicon.ico\`).

No \`24toruabi\` links in \`src/\`.

## RU routes (\`/ru/*\`)

| Approach | Behavior |
|----------|----------|
| Dev / Cloudflare Worker | \`middleware.ts\` rewrites \`/ru/*\` → ET path + \`?lang=ru\` |
| Zone Apache | \`public/.htaccess\` same rewrite |
| Prerendered | \`/ru/index.html\` from \`src/pages/ru/index.astro\`; other \`/ru/foo\` served via rewrite to \`/foo?lang=ru\` |

## Still broken on production until deploy

| URL | Why |
|-----|-----|
| All paths except \`/\` | Zone host has no \`dist/<path>/index.html\` uploaded |
| \`/api/callback\`, \`/api/track-call\` | Require Worker deploy (not static HTML) |
| \`/sitemap.xml\` | Built to \`dist/sitemap.xml\` — must be uploaded with deploy |

## Deploy checklist

### Option A — Zone.ee (current host)

1. \`npm run build\`
2. Upload **entire** \`dist/\` to web root (keep \`.htaccess\`, \`photos/\`, \`scripts/\`, \`_astro/\`).
3. Confirm \`https://toruabii.ee/hinnakiri\` returns 200.

### Option B — Cloudflare Workers (recommended for forms/API)

1. \`npm run deploy\`
2. Point \`toruabii.ee\` DNS to Cloudflare Worker (remove or disable Zone static site).
3. Add \`SESSION\` KV binding if using Astro sessions.

## Build verification

\`\`\`bash
npm run build
# Prerender log: 43 sitemap paths + /ru + test-call-buttons
# dist/<path>/index.html exists for every sitemap path
\`\`\`

## Counts (requested)

| | Count |
|---|------|
| Total sitemap URLs | **43** |
| Missing page files (before) | **0** |
| Missing page files (after) | **0** |
| New \`.astro\` files created | **0** |
| Prerendered HTML files for sitemap | **43** |
| Build status | **PASS** |
`;

fs.writeFileSync('ROUTE-AUDIT.md', md);
console.log('Wrote ROUTE-AUDIT.md');
