# ROUTE-AUDIT — toruabii.ee

Date: 2026-05-21  
Stack: Astro 5, `output: 'server'` + Cloudflare adapter (SSR pages + API on Workers)

## Executive summary

| Metric | Value |
|--------|-------|
| Sitemap URLs (`sitemap-entries.ts`) | **43** |
| `.astro` page files (excl. api, sitemap.xml.ts) | **42** + dynamic `blog/kategoria/[category].astro` |
| Sitemap paths without matching route (source) | **0** before audit, **0** after |
| Prerendered HTML in `dist/` for sitemap paths | **43/43** |
| `npm run build` | **PASS** |
| Production `https://toruabii.ee` (2026-05-21) | **Home 200**, **subpages 404** — Apache/Zone static host; only root `index.html` deployed |

**Root cause:** Source routes were already complete. Live site serves a **single static homepage** on Zone.ee (`Server: Apache / ZoneOS`), not the Astro SSR/Worker build. Subpages need a full `dist/` upload (or Cloudflare Workers deploy + DNS).

**Fixes applied in repo:**

1. `output: 'server'` — SSR on Cloudflare Workers; middleware `/ru/*` rewrites work at runtime.
2. No `export const prerender = true` on content pages (43 files) — prerender + `context.rewrite()` is incompatible in Astro 5 server mode (`ForbiddenRewrite`). API routes keep `prerender = false`.
3. `public/.htaccess` — Apache rewrite `/ru/*` → `/*?lang=ru` (**Zone static fallback only**, not used by Worker deploy).
4. `wrangler.jsonc` — `assets.run_worker_first: true` for Cloudflare Worker SSR/API.
5. `public/.assetsignore` — ignore `_routes.json` on asset upload.

## Sitemap ↔ routes

| URL | Status |
|-----|--------|
| / | exists (prerendered → `dist/index.html`) |
| /ru | exists (prerendered → `dist/ru/index.html`) |
| /hinnakiri | exists (prerendered → `dist/hinnakiri/index.html`) |
| /faq | exists (prerendered → `dist/faq/index.html`) |
| /tagasiside-soodus | exists (prerendered → `dist/tagasiside-soodus/index.html`) |
| /sitemap | exists (prerendered → `dist/sitemap/index.html`) |
| /privacy | exists (prerendered → `dist/privacy/index.html`) |
| /blog | exists (prerendered → `dist/blog/index.html`) |
| /blog/kanalisatsiooni-ummistus-mida-teha | exists (prerendered → `dist/blog/kanalisatsiooni-ummistus-mida-teha/index.html`) |
| /blog/boileri-hooldus-ja-loputus | exists (prerendered → `dist/blog/boileri-hooldus-ja-loputus/index.html`) |
| /blog/kuttesusteemi-hooldus-radiaatorite-tyhjendamine | exists (prerendered → `dist/blog/kuttesusteemi-hooldus-radiaatorite-tyhjendamine/index.html`) |
| /blog/kuttesusteem-eramaja | exists (prerendered → `dist/blog/kuttesusteem-eramaja/index.html`) |
| /blog/kollektorigrupp | exists (prerendered → `dist/blog/kollektorigrupp/index.html`) |
| /blog/puhvermahuti | exists (prerendered → `dist/blog/puhvermahuti/index.html`) |
| /blog/radiaatori-valik | exists (prerendered → `dist/blog/radiaatori-valik/index.html`) |
| /blog/bimetalliline-radiaator | exists (prerendered → `dist/blog/bimetalliline-radiaator/index.html`) |
| /blog/pump-margi-ja-kuiva-rootoriga | exists (prerendered → `dist/blog/pump-margi-ja-kuiva-rootoriga/index.html`) |
| /blog/laienduspaak-kutte-ja-gvs | exists (prerendered → `dist/blog/laienduspaak-kutte-ja-gvs/index.html`) |
| /blog/tsirkulatsioonipump | exists (prerendered → `dist/blog/tsirkulatsioonipump/index.html`) |
| /blog/hudroakumulaatorid-ja-laienduspaagid | exists (prerendered → `dist/blog/hudroakumulaatorid-ja-laienduspaagid/index.html`) |
| /blog/elektrikatla-ulehendamine | exists (prerendered → `dist/blog/elektrikatla-ulehendamine/index.html`) |
| /blog/avatud-ja-suletud-kuttesusteemid | exists (prerendered → `dist/blog/avatud-ja-suletud-kuttesusteemid/index.html`) |
| /blog/kategoria/kuttesusteem | exists (prerendered → `dist/blog/kategoria/kuttesusteem/index.html`) |
| /blog/kategoria/otoplenije | exists (prerendered → `dist/blog/kategoria/otoplenije/index.html`) |
| /toruabi-avariiline-valjakutse | exists (prerendered → `dist/toruabi-avariiline-valjakutse/index.html`) |
| /toruabi-ummistuste-likvideerimine | exists (prerendered → `dist/toruabi-ummistuste-likvideerimine/index.html`) |
| /toruabi-kanalisatsiooni-survepesu | exists (prerendered → `dist/toruabi-kanalisatsiooni-survepesu/index.html`) |
| /toruabi-rasvapuuduri-puhastus | exists (prerendered → `dist/toruabi-rasvapuuduri-puhastus/index.html`) |
| /toruabi-lasnamae | exists (prerendered → `dist/toruabi-lasnamae/index.html`) |
| /toruabi-mustamae | exists (prerendered → `dist/toruabi-mustamae/index.html`) |
| /toruabi-kesklinn | exists (prerendered → `dist/toruabi-kesklinn/index.html`) |
| /toruabi-pirita | exists (prerendered → `dist/toruabi-pirita/index.html`) |
| /toruabi-viimsi | exists (prerendered → `dist/toruabi-viimsi/index.html`) |
| /toruabi-maardu | exists (prerendered → `dist/toruabi-maardu/index.html`) |
| /toruabi-keila | exists (prerendered → `dist/toruabi-keila/index.html`) |
| /toruabi-saue | exists (prerendered → `dist/toruabi-saue/index.html`) |
| /toruabi-rae | exists (prerendered → `dist/toruabi-rae/index.html`) |
| /toruabi-saku | exists (prerendered → `dist/toruabi-saku/index.html`) |
| /toruabi-harku | exists (prerendered → `dist/toruabi-harku/index.html`) |
| /toruabi-joelahtme | exists (prerendered → `dist/toruabi-joelahtme/index.html`) |
| /toruabi-kiili | exists (prerendered → `dist/toruabi-kiili/index.html`) |
| /toruabi-kose | exists (prerendered → `dist/toruabi-kose/index.html`) |
| /toruabi-anija | exists (prerendered → `dist/toruabi-anija/index.html`) |

## Pages missing in `src/pages/` (before → after)

**None.** All 43 sitemap paths already had Astro routes:

- Core: `index`, `ru/index`, `hinnakiri`, `faq`, `tagasiside-soodus`, `sitemap`, `privacy`, `blog/index`
- Blog: 14 post `.astro` files under `src/pages/blog/`
- Categories: `blog/kategoria/[category].astro` (kuttesusteem, otoplenije)
- Services + districts: 19 `toruabi-*.astro` landings

## Files created / changed

| File | Action |
|------|--------|
| `astro.config.mjs` | `output: 'server'` (reverted static-only deploy for RU middleware) |
| `wrangler.jsonc` | Added `run_worker_first: true` |
| `public/.htaccess` | **Created** — RU path rewrites for Zone |
| `public/.assetsignore` | Added `_routes.json` |
| All `src/pages/**/*.astro` (except api) | Removed `export const prerender = true` (SSR for `/ru/*` rewrite) |
| `src/pages/blog/kategoria/[category].astro` | `getStaticPaths` for kuttesusteem + otoplenije |
| `scripts/route-audit.mjs` | Audit helper |
| `scripts/generate-route-audit.mjs` | This report generator |

No new `.astro` page files were required.

## Internal links

Grep of `href="/…"` in `src/` (nav, footer, sitemap page, home): **no links to non-existent routes** (only static assets like `/favicon.ico`).

No `24toruabi` links in `src/`.

## RU routes (`/ru/*`)

| Approach | Behavior |
|----------|----------|
| Dev / Cloudflare Worker | `middleware.ts` rewrites `/ru/*` → ET path + `?lang=ru` |
| Zone Apache | `public/.htaccess` same rewrite |
| SSR (Worker / dev) | `/ru` from `src/pages/ru/index.astro`; other `/ru/foo` via middleware rewrite to `/foo?lang=ru` |
| Zone static only | `public/.htaccess` mirrors rewrite; upload full `dist/` if using static host |

## Still broken on production until deploy

| URL | Why |
|-----|-----|
| All paths except `/` | Zone host has no `dist/<path>/index.html` uploaded |
| `/api/callback`, `/api/track-call` | Require Worker deploy (not static HTML) |
| `/sitemap.xml` | Built to `dist/sitemap.xml` — must be uploaded with deploy |

## Deploy checklist

### Option A — Zone.ee (current host)

1. `npm run build`
2. Upload **entire** `dist/` to web root (keep `.htaccess`, `photos/`, `scripts/`, `_astro/`).
3. Confirm `https://toruabii.ee/hinnakiri` returns 200.

### Option B — Cloudflare Workers (recommended for forms/API)

1. `npm run deploy`
2. Point `toruabii.ee` DNS to Cloudflare Worker (remove or disable Zone static site).
3. Add `SESSION` KV binding if using Astro sessions.

## Build verification

```bash
npm run build
# output: server — dist/_worker.js + assets; no per-path index.html prerender
npm run dev
# /ru/toruabi-avariiline-valjakutse, /ru/hinnakiri, /ru/toruabi-lasnamae,
# /ru/blog/kategoria/otoplenije, /toruabi-avariiline-valjakutse → 200 (no ForbiddenRewrite)
```

## Counts (requested)

| | Count |
|---|------|
| Total sitemap URLs | **43** |
| Missing page files (before) | **0** |
| Missing page files (after) | **0** |
| New `.astro` files created | **0** |
| Files where `prerender = true` removed | **43** |
| Build status | **PASS** |
