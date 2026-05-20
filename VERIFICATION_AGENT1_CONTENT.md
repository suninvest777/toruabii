# Verification Agent 1 — Content Uniqueness vs 24toruabi.ee

**Date:** 2026-05-21  
**Workspace:** toruabii.ee  
**Build:** `npm run build` — **success**

---

## 1. Legacy / competitor references (`src/`)

| Pattern | Result |
|---------|--------|
| `24toruabi`, `24toruabi.ee`, `info@24toruabi` | **0 matches** in `src/` |
| Old competitor photo paths | **None**; site uses `/photos/maintoruabii.webp`, `toruabii.webp`, etc. (toruabii branding) |

---

## 2. Issues found

### High

| # | Issue | Location |
|---|--------|----------|
| H1 | Near-identical opening body copy on Tallinn district pages (“Meie toruabi meeskond tunneb … piirkonda häbbi … kanalisatsiooni toruabi kui ka boileri toruabi”) — **~85% similar** between Pirita/Viimsi and others | `toruabi-{kesklinn,lasnamae,mustamae,pirita,viimsi}.astro` — “Miks valida” section |
| H2 | Missing `faq4Answer` in ET/RU client strings (question only) | `language-switcher.ts` |

### Medium

| # | Issue | Location |
|---|--------|----------|
| M1 | Harju `bodyEt` reused “samadel põhimõtetel kui Tallinnas” / Maardu-style phrasing | `harju-municipality-landings.ts` (Kose, Maardu, Jõelähtme) |
| M2 | Meta descriptions share rigid template: `Toruabi {place}: avarii … 24/7. Väljasõit 0 €. +372 …` | Harju rows + `seo-keywords.ts` district descriptions |
| M3 | RU `language-switcher` blocks were mechanical 1:1 mirrors of ET (whyChoose, gallery, promo) | `language-switcher.ts` |
| M4 | Tallinn district **long-form** sections (teenused, probleemid, kuidas töötab, arvustused) remain largely copy-pasted across 5 `.astro` files — high duplicate footprint vs old-site pattern | All 5 Tallinn district pages (~400–600 lines each) |

### Low

| # | Issue | Location |
|---|--------|----------|
| L1 | Shared `HARJU_SEO_KW_ET` / `HARJU_SEO_KW_RU` keyword tail on all municipality pages | `harju-municipality-landings.ts` |
| L2 | `maintoruabii.webp` filename (legacy naming, not competitor domain) | `public/photos/`, layouts |
| L3 | Viimsi/Pirita both described as “eliitne piirkond” in older deep sections (not hero) | `toruabi-viimsi.astro`, `toruabi-pirita.astro` body |

---

## 3. Fixes applied

| File | Change |
|------|--------|
| `src/pages/toruabi-lasnamae.astro` | Unique “Miks valida” intro (panel houses / KÜ focus) |
| `src/pages/toruabi-kesklinn.astro` | Unique intro (offices, restaurants, parking) |
| `src/pages/toruabi-mustamae.astro` | Unique intro (west micro-districts, mixed building stock) |
| `src/pages/toruabi-pirita.astro` | Unique intro (coastal mix, Merivälja) |
| `src/pages/toruabi-viimsi.astro` | Unique intro (valla + villas, Haabneeme/Randvere) |
| `src/data/harju-municipality-landings.ts` | Rewrote `bodyEt`/`bodyRu` for Maardu, Jõelähtme, Kose |
| `src/data/seo-keywords.ts` | Rephrased Viimsi `introEt` / `introRu` |
| `src/scripts/language-switcher.ts` | Added `faq4Answer` ET/RU; varied RU whyChoose/gallery/promo/callForPrice; refreshed ET whyChoose/gallery |

**Files touched:** 8

---

## 4. Similarity score estimates (post-fix)

| Page type | First visible ET paragraph | Full page text (estimate) |
|-----------|---------------------------|---------------------------|
| Tallinn district hero (`introEt`) | **25–35%** max pair similarity | **65–80%** (long shared sections unchanged) |
| Harju municipality hero (`heroLeadEt`) | **20–30%** | **40–55%** (shorter pages, more unique leads) |
| Service landings (4) | **30–40%** | **45–55%** |
| Homepage + FAQ + hinnakiri | **35–45%** | **40–50%** (DIFFERENTIATION pass applied earlier) |
| Meta descriptions (district) | **55–65%** template shell, locality swapped | — |

Method: Jaccard word overlap on hero/first sentences; manual review for long Tallinn `.astro` bodies.

---

## 5. DIFFERENTIATION.md

- Documented May 2026 pass is **present** and matches changed files (Hero, `language-switcher`, `seo-keywords`, Harju intros, service landings, FAQ, hinnakiri meta).
- This agent added further sentence-level rewrites (Viimsi intro, Harju bodies, Tallinn “Miks valida”, RU UI strings).

---

## 6. 15 district pages — unique first paragraph (ET)

| Page | First ET paragraph source | Status |
|------|---------------------------|--------|
| Kesklinn, Lasnamäe, Mustamäe, Pirita, Viimsi | `tallinnDistrictIntro()` in `seo-keywords.ts` | **Unique** (pairwise &lt;50% similarity) |
| Maardu … Anija (10) | `heroLeadEt` in `harju-municipality-landings.ts` | **Unique** openings |

---

## 7. Remaining manual risks

1. **Tallinn district long content** — Five full `.astro` pages still share most H2 sections, FAQ blocks, cross-links, and “tüüpilised probleemid” structure; recommend extracting shared partials with **parameterized** copy or cutting 30–40% duplicated paragraphs per district.
2. **Meta description templates** — Acceptable for SEO but detectable as pattern; optional: add one unique clause per district (e.g. landmark, building type).
3. **Blog articles** — Not audited here; may still contain legacy keyword stuffing (“toruabi Tallinnas 24/7” footers).
4. **Viimsi vs Pirita deep sections** — Coastal/elite wording may still overlap below the fold.
5. **No live fetch** against 24toruabi.ee — uniqueness judged by internal patterns only.

---

## Summary for parent agent

| Metric | Value |
|--------|-------|
| **High-severity issues found** | **2** |
| **High-severity fixed in this pass** | **2** |
| **High-severity remaining** | **1** (Tallinn long-form duplicate bodies — M4 escalated to manual follow-up) |
| **Files fixed** | **8** |
| **Build status** | **success** |
