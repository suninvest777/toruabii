# SEO Agent 1 of 3 — toruabi (head keyword)

**Domain:** https://toruabii.ee  
**Phone:** +372 5181 112 (unchanged)  
**Date:** 2026-05-20

## Target queries

| ET | RU |
|----|-----|
| toruabi | торуаби |
| avarii toruabi | аварийный торуаби |
| toruabi tallinn | торуаби таллин / сантехник tallinn |
| toruabi 24/7 | торуаби 24/7 |
| toruabi harjumaa | торуаби харьюмаа |

## Pages touched

| File | Changes |
|------|---------|
| `src/data/seo-keywords.ts` | Home title/description/OG/H1; `seoInnerTitle` / `seoInnerDescription` helpers |
| `src/data/plumbing-service-schema.ts` | `serviceType`: toruabi, avarii toruabi; description & slogan |
| `src/layouts/BaseLayout.astro` | Home default keywords; WebSite schema uses `seoHomeDescription`; author ET/RU |
| `src/pages/index.astro` | Uses updated `seoHome*` helpers (no structural change) |
| `src/pages/ru/index.astro` | Same |
| `src/components/home/Hero.astro` | H1 via `seoHomeH1`; hero lead with keyword cluster |
| `src/components/home/HomeToruabiIntro.astro` | **New** — ~200-word intro + internal links anchor `toruabi Tallinn` |
| `src/components/home/HomePageIndex.astro` | Mount intro; WebSite JSON-LD description |
| `src/pages/hinnakiri.astro` | Title/description via inner SEO helpers |
| `src/pages/faq.astro` | Title/description via inner SEO helpers |
| `src/pages/tagasiside-soodus.astro` | Title/description via inner SEO helpers |
| `src/data/sitemap-entries.ts` | Home priority 1.0 (unchanged); lastmod 2026-05-20 for hinnakiri/faq/tagasiside |
| `public/llms.txt` | toruabi keyword cluster (ET + RU) |

## Homepage deliverables

- **Title ET:** Toruabi 24/7 Tallinn – avarii toruabi ja toruabi Harjumaa \| toruabii.ee  
- **Title RU:** Торуаби 24/7 Таллин – сантехник tallinn и аварийный торуаби \| toruabii.ee  
- **H1:** `seoHomeH1()` — toruabi 24/7 + avarii toruabi + location  
- **First ~200 words:** Hero lead + `HomeToruabiIntro` section  
- **JSON-LD LocalBusiness:** `buildPlumbingServiceSchema` on `/` and `/ru` with `serviceType` including `toruabi`  
- **Internal links:** 4 top landings with anchor `toruabi Tallinn` / `торуаби Таллин`

## Duplicate meta avoidance

- Home uses `seoHomeTitle` / `seoHomeDescription` (unique vs inner pages).  
- hinnakiri, faq, tagasiside use `seoInnerTitle` / `seoInnerDescription` with page-specific labels.  
- District/service landings unchanged in this agent (Agents 2–3).

## Build

Run: `npm run build`
