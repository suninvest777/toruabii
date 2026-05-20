# Verification Agent 3 — Visual, Assets & Crawler Differentiation

**Site:** toruabii.ee  
**Compared to:** 24toruabi.ee  
**Date:** 2026-05-21  
**Build:** `npm run build` — **PASS** (5.36s)

---

## Executive summary

| Area | Status | Notes |
|------|--------|-------|
| Typography | PASS | DM Sans + Nunito Sans (not Inter/Mukta) |
| Brand color `#007eb8` | PASS | Tailwind + CSS; favicon fixed |
| Asset paths `/photos/` | PASS (code) | No `/photo/`, no legacy filenames in `src/` |
| Image files on disk | **FAIL** | `public/photos/` directory missing — all image URLs 404 |
| Analytics | **FIXED** | Removed duplicate 24toruabi GA4 + Ahrefs; TODO placeholders |
| `data-site="toruabii"` | **FIXED** | Added on `<html>` |
| Promotion −50% | PASS | Visible, toruabii-specific copy |
| Footer / copyright | PASS | toruabii.ee only |
| `dist/` after rebuild | PASS | No live old analytics; new favicon |
| `public/_headers` | PASS | `/photos/*` cache rule present |

---

## Critical fixes applied

### 1. Analytics (duplicate-signal risk) — REMOVED

**Before:** Live scripts in `src/layouts/BaseLayout.astro`:

- Google Analytics: `G-Z19PJ8JWD8` (24toruabi property)
- Ahrefs: `data-key="MYfxc8O3/WzAS0j4+IX7Sg"` (24toruabi key)

**After:** Both blocks commented out with `TODO(toruabii)` placeholders for **new** IDs. GTM `preconnect` / `dns-prefetch` removed.

**User action required:** Create a new GA4 property and Ahrefs site key for toruabii.ee, then uncomment and replace `G-XXXXXXXXXX` / `YOUR_NEW_KEY` in `BaseLayout.astro`.

### 2. HTML crawler marker — ADDED

```html
<html lang="…" data-site="toruabii" …>
```

### 3. Favicon — UPDATED

**Before:** `public/favicon.svg` — “24” glyph, `#0083bf` (24toruabi blue).  
**After:** “T” on `#007eb8` background, `aria-label="toruabii"`.

**Note:** `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` were not regenerated; consider exporting from the new SVG.

---

## Checklist detail

### 1. Typography — PASS

- Google Fonts: `DM Sans` + `Nunito Sans` in `BaseLayout.astro`
- `tailwind.config.mjs`: `sans`/`body` → DM Sans, `display` → Nunito Sans
- Headings use `font-display` (Nunito Sans) on home sections
- No Inter/Mukta in `src/`

### 2. Colors — PASS (after favicon fix)

| Token | Value | Where |
|-------|-------|-------|
| `brand-blue` | `#007eb8` | `tailwind.config.mjs`, `home-theme.css`, `manifest.json`, `PromotionBanner`, `BaseLayout` |
| Old `#0083bf` | Removed from `src/` | Was only in old `favicon.svg` (fixed) |

### 3. Assets — PASS (source)

- All image refs use `/photos/…` (not `/photo/`)
- No `24toruabilogo` or `main-photo-santehnik` in `src/`
- Brand files: `toruabii.webp`, `maintoruabii.webp`, `mobileversion-main.webp`

### 4. Images — FAIL (deployment blocker)

**`public/photos/` does not exist** in the workspace. Every `/photos/*.webp` reference will 404 until assets are added.

#### Priority (LCP / brand)

| File | Used for |
|------|----------|
| `toruabii.webp` | Logo, footer, JSON-LD, OG fallback |
| `maintoruabii.webp` | Hero, default OG, landings |
| `mobileversion-main.webp` | Mobile hero preload |

#### Gallery & home (`Gallery.astro`, `home-services.ts`)

`boiler1.webp`, `luk-na-ulice.webp`, `prokladka1.webp`, `sifon.webp`,  
`photo_2_2026-01-12_17-17-35.webp`, `photo_3_…`, `photo_6_…`, `photo_7_…`, `photo_8_…`,  
`photo_12_…`, `photo_27_…`, `photo_30_…`, `photo_33_…`, `photo_34_…`,  
`otoplenije-batarei-liking.webp`, `sistema-otoplenija-connectors-liking.webp`,  
`spusknoj-klapan-na-radiatore.webp`, `spusknoj-na-radiatore-2.webp`

#### Blog (`public/photos/blog/`)

`procistka-boilera-est.webp`, `procistka-boilera-rus.webp`,  
`zasor-kanalizacii-blog-est.webp`, `zasor-kanalizacii-blog-rus.webp`

#### Service icons (`public/photos/svgforraboti/`)

`toruabi-avariitood-24h.webp`, `ujustamine-lekvideerimine.webp`, `tehnosusteemide-videouuring.webp`,  
`rasvapuuduri-puhastus-survepesu.webp`, `wc-potipaigaldus.webp`, `kuttesusteemide-renoveerimine.webp`,  
`vee-ja-kanalisatsiooni.webp`, `kute.webp`, `saanitar.webp`, `boileri-paigaldus.webp`,  
`kodumasina-paigaldamine.webp`, `hooldusleping-ku-le.webp`

See also `MEDIA_PATHS.md` for the canonical list.

### 5. Analytics — FIXED (see Critical fixes)

Post-build `dist/` contains only HTML comments referencing old IDs — **no live tracking scripts**.

### 6. HTML structure — PASS

- **42** `.astro` components under `src/components/` (modular layout vs flat clone)
- `data-site="toruabii"` on root `<html>`
- toruabii-specific components: `PromotionBanner`, `DistrictCrossLinks`, `HarjuMunicipalityToruabi`, `HomePageIndex`, etc.

### 7. Promotion banner — PASS

- ET: `Eripakkumine` — `Kõikidele teenustele **−50%** kuni kuu lõpuni!`
- Subline: `Väljasõit 0 € Tallinnas • Kohale 30–60 minutiga`
- RU (via `language-switcher.ts`): `50%` discount wording
- CSS uses `--promo-blue: #007eb8` (not 24toruabi `#0083bf`)

### 8. Copyright / footer — PASS

- Home: `© 2026 toruabii.ee`
- Inner pages / i18n: `toruabii.ee` only; no `24toruabi.ee` in `src/`
- Contact: `info@toruabii.ee`

### 9. Build artifacts — PASS

After `npm run build`:

- `dist/favicon.svg` — toruabii “T”, `#007eb8`
- `dist/_worker.js/chunks/BaseLayout_*.mjs` — `data-site="toruabii"`, analytics commented
- `dist/manifest.json` — `theme_color: "#007eb8"`
- No active `gtag('config', 'G-Z19PJ8JWD8')` in output

### 10. `public/_headers` — PASS

```
/photos/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400
```

Copied to `dist/_headers` on build.

---

## User action items (ordered)

1. **Add `public/photos/`** — Copy/rename assets from 24toruabi sources into toruabii filenames (see §4). Without this, production images are broken.
2. **New analytics** — GA4 + Ahrefs for toruabii.ee only; uncomment blocks in `src/layouts/BaseLayout.astro`.
3. **Regenerate raster favicons** from updated `favicon.svg` (optional but recommended).
4. **Deploy** after photos are in place so CDN serves `/photos/*` with `_headers` cache rules.

---

## Files changed in this verification

| File | Change |
|------|--------|
| `src/layouts/BaseLayout.astro` | Remove live analytics; add `data-site`; remove GTM preconnect |
| `public/favicon.svg` | toruabii branding, `#007eb8` |

---

## Build status

```
npm run build  →  Complete (server mode, Cloudflare adapter)
```

No build errors. Analytics removal does not break Partytown or other scripts.
