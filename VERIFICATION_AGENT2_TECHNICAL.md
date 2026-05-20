# Verification Agent 2 — Technical SEO & Duplicate Signals

**Site:** https://toruabii.ee  
**Risk:** Google treating site as a copy of 24toruabi.ee  
**Audit date:** 2026-05-21  
**Scope:** `src/`, `public/` (runtime assets)

---

## Executive summary

| Metric | Value |
|--------|-------|
| Checklist items | 10 |
| Pass (after fixes) | 10 |
| Fail (remaining) | 0 |
| Code fixes applied | 6 |
| `npm run build` | See build section below |

No `24toruabi` references remain in `src/`. Legacy mentions exist only in old markdown docs (`SEO-*.md`, `docs/GSC-SETUP.md`) and `package-lock.json` metadata — not served to crawlers.

---

## Checklist

| # | Area | Result | Notes |
|---|------|--------|-------|
| 1 | Canonical URLs | **PASS** | All pages use `https://toruabii.ee`. **Fix:** RU locale canonical now uses `/ru/...` path instead of `?lang=ru` (aligned with middleware 301 + hreflang). |
| 2 | hreflang ET/RU/x-default | **PASS** | `BaseLayout.astro`: home, inner ET, inner RU branches; `sitemap.xml.ts` mirrors alternates. |
| 3 | Sitemap | **PASS** | `SITE_ORIGIN = https://toruabii.ee`; 48 URLs; district/service priorities 0.9; no 24toruabi URLs. |
| 4 | robots.txt | **PASS** | `Sitemap: https://toruabii.ee/sitemap.xml`; `Allow: /`; only `/api/`, `/admin/` disallowed; LLM crawlers allowed. |
| 5 | JSON-LD | **PASS** | Unique `@id` per type (`#organization`, `#business`, `#plumbing`, `#webpage`, page URLs). **Fix:** global `Organization` `@id`; blog publisher uses reference; landings keep area-specific `PlumbingService`. |
| 6 | Open Graph / Twitter | **PASS** | Per-page `description` / `ogDescription` (home only overrides OG). No shared meta template across 19 landings. |
| 7 | middleware.ts | **PASS** | `www.toruabii.ee` → apex HTTPS 301; `?lang=ru` → `/ru/*` 301; no 24toruabi host rules. |
| 8 | manifest / favicon | **PASS** | `manifest.json`: toruabii brand. **Fix:** added missing `public/browserconfig.xml` (toruabii tile color `#007eb8`). |
| 9 | Internal links | **PASS** | No `href` to 24toruabi.ee in `src/`. |
| 10 | llms.txt / ai-context.json | **PASS** | toruabii.ee only; −50% promo, phone, districts accurate; `last_updated` 2026-05-20. |

---

## Fixes applied (6)

1. **`src/layouts/BaseLayout.astro`** — RU canonical uses `/ru{path}` (not `?lang=ru`); strip `lang` query on all inner pages; emit site-wide `Organization` JSON-LD `@id: https://toruabii.ee#organization`.
2. **`src/components/BlogPostingSchema.astro`** — `author` / `publisher` reference `#organization` (no duplicate inline org blocks).
3. **`src/pages/blog/index.astro`** — `Blog` publisher references `#organization`.
4. **`src/components/home/HomePageIndex.astro`** — `WebSite.publisher` includes `@id` `#organization`.
5. **`src/components/landings/HarjuMunicipalityToruabi.astro`** — `<title>` uses `region.titleEt` / `titleRu` from data (not generic helper only).
6. **`public/browserconfig.xml`** — Added toruabii-branded MS tile config (was 404).

---

## Detailed findings

### 1. Canonical URLs

- `astro.config.mjs`: `site: 'https://toruabii.ee'`
- District/service pages pass ET path canonical; `BaseLayout` upgrades to `/ru/...` when `lang=ru` or internal `?lang=ru` rewrite.
- Home: ET `https://toruabii.ee/`, RU `https://toruabii.ee/ru`
- **Pre-fix issue:** RU pages could canonicalize to `?lang=ru` while hreflang pointed to `/ru/...` — mixed signals vs 24toruabi clone patterns.

### 2. hreflang

```212:236:src/layouts/BaseLayout.astro
    <!-- Alternate languages: canonical ET/RU path pairs -->
    {isEtHome ? (
      <>
        <link rel="alternate" hreflang="et" href={`${siteUrl}/`} />
        <link rel="alternate" hreflang="ru" href={`${siteUrl}/ru`} />
        <link rel="alternate" hreflang="x-default" href={`${siteUrl}/`} />
```

Inner pages: `et` + `ru` + `x-default` → ET URL.

### 3. Sitemap

- Source: `src/data/sitemap-entries.ts` + `src/pages/sitemap.xml.ts`
- All `<loc>` resolve to `https://toruabii.ee/...`
- Landings: priority `0.9`; services `0.9`; home `1.0`, `/ru` `0.95`

### 4. robots.txt

- `public/robots.txt` — correct sitemap line, no accidental `Disallow: /`

### 5. JSON-LD graph

| Page type | Primary entities | `@id` pattern |
|-----------|------------------|---------------|
| Home `/`, `/ru` | `LocalBusiness` + `PlumbingService` | `#business` |
| Inner (default) | `Organization` + compact `#business` + optional `WebSite` | `#organization`, `#business`, `#website` |
| Tallinn district | `PlumbingService` + `FAQPage` (suppress global plumbing) | `{url}#plumbing` |
| Harju municipality | `WebPage` + `PlumbingService` + `FAQPage` | `{url}#webpage`, `#plumbing` |
| Blog article | `BlogPosting` → `#organization` | `{articleUrl}` |

`areaServed` on local landings uses municipality/district names under Harjumaa — not 24toruabi domain.

### 6. Open Graph / Twitter

- `og:site_name` = `toruabii.ee`
- `twitter:site` / `creator` = `@toruabii`
- **19 landing meta descriptions:** 5 Tallinn districts + 10 Harju municipalities + 4 service pages — each has distinct `descriptionEt` / `descriptionRu` in `seo-keywords.ts` / `harju-municipality-landings.ts` (district name in first sentence).

### 7. middleware.ts

- Production: HTTP + `www.toruabii.ee` → `https://toruabii.ee` (single 301)
- `?lang=ru` → `/ru/*` 301; `/ru/*` internal rewrite for SSR

### 8. manifest / favicon

- `public/manifest.json`: name `toruabii.ee - Avarii Toruabi`, `short_name` `toruabii`
- `public/favicon.svg`: toruabii “T” mark (not 24 branding)

### 9. Internal link graph

- `rg "24toruabi" src` → **0 matches**
- External competitor domain not linked from components/pages

### 10. AI discovery files

- `public/llms.txt`, `public/.well-known/llm.txt`, `public/ai-context.json`, `src/data/ai-discovery.ts` — all toruabii.ee URLs and promo copy

---

## Title / description uniqueness (19 landings)

| Group | Count | Unique descriptions |
|-------|-------|---------------------|
| Tallinn (`toruabi-kesklinn`, `lasnamae`, …) | 5 | Yes — per-district copy in `tallinnDistrictSeo` |
| Harju (`toruabi-maardu`, …) | 10 | Yes — per-municipality in `harjuMunicipalities` |
| Services (avarii, ummistus, survepesu, rasvapüüdur) | 4 | Yes — `serviceLandings` in `seo-keywords.ts` |

No single shared meta description template without locality name.

---

## Non-blocking follow-ups (docs / lockfile)

- Update `docs/GSC-SETUP.md` and legacy `SEO-*.md` files (still mention 24toruabi.ee) — not served in HTML.
- `package-lock.json` root `"name": "24toruabi-ee"` — cosmetic; does not affect production HTML.

---

## Build verification

```
npm run build
```

**Result: PASS** (exit 0, 2026-05-21) — Astro server build + client bundle completed without errors.

---

## Verification commands (regression)

```bash
rg "24toruabi" src public
rg "canonical" src/layouts/BaseLayout.astro
npm run build
```

Expected: zero hits in `src`/`public` for 24toruabi; build succeeds.
