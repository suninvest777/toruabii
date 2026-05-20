# SEO optimization — toruabii.ee

Last updated: 2026-05-20

## Pages updated

| Page type | Paths | Changes |
|-----------|-------|---------|
| Homepage ET | `/` | Title `Toruabi Tallinn 24/7`, H1 with Toruabi + Tallinn, meta/keywords via `seo-keywords.ts` |
| Homepage RU | `/ru` | Mirror: торуаби Таллин 24/7 |
| Tallinn districts (5) | `/toruabi-lasnamae`, `-mustamae`, `-kesklinn`, `-pirita`, `-viimsi` | Title pattern `Toruabi [District] \| 24/7 väljakutse \| toruabii.ee`, unique descriptions, SEO snippets |
| Harju municipalities (10) | `/toruabi-maardu` … `/toruabi-anija` | Standardized titles/descriptions via `HarjuMunicipalityToruabi.astro` |
| Service landings (4) | `/toruabi-avariiline-valjakutse`, `-ummistuste-likvideerimine`, `-kanalisatsiooni-survepesu`, `-rasvapuuduri-puhastus` | Central `serviceLandingSeo` config |
| FAQ | `/faq` | +2 intent FAQs (Lasnamäe order, Tallinn pricing) + JSON-LD |
| Blog index | `/blog` | Title mentions toruabi tallinn |
| Technical | `sitemap-entries.ts`, `plumbing-service-schema.ts`, `llms.txt`, `.well-known/llm.txt` | Priorities, LocalBusiness+Plumber schema, AI keywords |

## Central config

- **`src/data/seo-keywords.ts`** — primary keywords, district/service maps, `seoTitle()`, `seoDescription()`, `seoHomeTitle()`, `tallinnDistrictSnippet()`, etc.
- **`src/data/site-identity.ts`** — phone, brand, service area (unchanged)
- **`src/data/sitemap-entries.ts`** — single source for `/sitemap.xml`

## Target keywords by page type

### Homepage
- ET: toruabi, toruabi tallinn, avarii toruabi, toruabi 24/7, toruabi harjumaa
- RU: торуаби, торуаби таллин, аварийный торуаби, сантехник tallinn

### District landings
- Pattern: `toruabi [district]`, `toruabi tallinn`, `avarii toruabi`
- Examples: toruabi lasnamäe, toruabi mustamäe, toruabi kesklinn, toruabi pirita, toruabi viimsi

### Harju municipalities
- Pattern: `toruabi [locality]`, `avarii toruabi harjumaa`, long-tail settlement names (Keila, Maardu, …)

### Service landings
- avarii toruabi / toruabi väljakutse
- ummistuste likvideerimine / kanalisatsiooni toruabi
- kanalisatsiooni survepesu
- rasvapüüduri puhastus

## Technical checklist

- [x] Canonical `https://toruabii.ee` (no 24toruabi in `src/`)
- [x] hreflang et / ru / x-default on `BaseLayout.astro`
- [x] Open Graph + Twitter (`@toruabii`)
- [x] JSON-LD: LocalBusiness + Plumber + PlumbingService on home; district Service + BreadcrumbList on landings
- [x] `robots.txt` → `Sitemap: https://toruabii.ee/sitemap.xml`
- [x] Sitemap: home 1.0, landings 0.9

## Post-launch (GSC & Bing)

1. Add property **https://toruabii.ee** in [Google Search Console](https://search.google.com/search-console).
2. Submit sitemap: `https://toruabii.ee/sitemap.xml`
3. Request indexing for `/`, `/ru`, top district URLs (`toruabi-lasnamae`, `toruabi-mustamae`, …).
4. Add same site in [Bing Webmaster Tools](https://www.bing.com/webmasters).
5. Monitor queries: toruabi, toruabi tallinn, toruabi lasnamäe (ET) and торуаби, торуаби таллин (RU).
6. Fix coverage issues (canonical/hreflang) before changing URL structure again.

## Verification commands

```bash
npm run build
rg "24toruabi" src
```
