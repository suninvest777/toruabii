# SEO Agent 3/3 — Ummistuste likvideerimine

**Date:** 2026-05-20  
**Primary URL:** `/toruabi-ummistuste-likvideerimine`  
**Build:** `npm run build` — **PASS**

## Target keywords

| ET | RU |
|----|-----|
| ummistuste likvideerimine | устранение засоров |
| toruabi ummistuste likvideerimine | прочистка засоров |
| kanalisatsiooni ummistus | прочистка канализации |
| toru ummistus tallinn | засор канализации (Таллин) |

## Final title & H1 (from `seo-keywords.ts`)

| Lang | `<title>` | `<h1>` |
|------|-----------|--------|
| **ET** | Ummistuste likvideerimine 24/7 \| Toruabi ummistus Tallinn \| toruabii.ee | Ummistuste likvideerimine – toruabi kanalisatsiooni ummistusele Tallinnas |
| **RU** | Устранение засоров 24/7 \| Прочистка канализации Таллин \| toruabii.ee | Устранение засоров – прочистка канализации в Таллине и Харьюмаа |

## Meta descriptions

- **ET:** Toruabi ummistuste likvideerimine ja kanalisatsiooni ummistuse lahendamine Tallinnas ja Harjumaal. Toru ummistus Tallinn – kiire toruabi 24/7, väljasõit 0 €. +372 5633 3332.
- **RU:** Торуаби: устранение засоров и прочистка канализации в Таллине и Харьюмаа 24/7. Засор канализации – быстрый выезд, 0 €. +372 5633 3332.

## Changes by file

### `src/data/seo-keywords.ts`
- Updated `ummistuste-likvideerimine` titles, descriptions, keywords, H1 (ET/RU).

### `src/pages/toruabi-ummistuste-likvideerimine.astro`
- H1 from `landing.h1Et` / `landing.h1Ru`.
- Meta keywords from `landing.keywordsEt` / `landing.keywordsRu`.
- Hero image (`/photos/sifon.webp`) with alt text.
- New H2 sections (300+ words ET/RU): kanalisatsiooni ummistus / toru ummistus Tallinn; tööprotsess; existing “millal valida” retained.
- Internal links: survepesu, hinnakiri, avarii väljakutse, blog.
- FAQ expanded (+2 ET, +2 RU); FAQPage JSON-LD unchanged pattern.
- PlumbingService JSON-LD retained.

### `src/data/home-services.ts`
- Service card: title “Ummistuste likvideerimine”, desc mentions “toruabi ummistus”.

### `src/pages/hinnakiri.astro`
- Bilingual block with anchors **ummistuste likvideerimine** and **toruabi ummistus** → landing page.

### `src/pages/toruabi-kanalisatsiooni-survepesu.astro`
- FAQ answers link to ummistuste page (ET/RU).

### `src/data/sitemap-entries.ts`
- `/toruabi-ummistuste-likvideerimine` — `priority: 0.9`, `lastmod: 2026-05-20`.

### `public/llms.txt`
- Key page + Services entry for ummistuste likvideerimine.

### `src/pages/blog/kanalisatsiooni-ummistus-mida-teha.astro`
- Meta title ET/RU only (quick).

## H2 outline (landing page)

1. Kanalisatsiooni ummistus ja toru ummistus Tallinnas / Засор канализации…
2. Kuidas toimub toruabi ummistuste likvideerimine? / Как проходит прочистка…
3. Millal valida toruabi ummistuste likvideerimiseks? / Когда заказывать…
4. Toruabi ja avarii olukorrad / Торуаби и аварийные ситуации
5. Korduma kippuvad küsimused (6 ET / 6 RU)

## Not changed

- Phone: +372 5633 3332 (unchanged).
- No bot/crawler-specific content added.
- Other blog posts (meta only on `kanalisatsiooni-ummistus-mida-teha`).

## Verification

```bash
npm run build
# Exit code: 0
```
