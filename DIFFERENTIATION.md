# toruabii.ee differentiation (vs. duplicate signals)

Subtle “same look, different enough” pass — May 2026.

## Typography

| Role | Before | After |
|------|--------|-------|
| Body / UI | Inter | **DM Sans** |
| Headings | Mukta | **Nunito Sans** |
| Global | `line-height: 1.6` | **1.65**, `letter-spacing: -0.01em` |

Google Fonts link updated in `BaseLayout.astro`. Tailwind: `font-sans`, `font-body`, `font-display`.

## Color (≈1–2% shift)

- Brand blue: `#0083bf` → **`#007eb8`** (`tailwind.config.mjs`, `home-theme.css`, `manifest.json`, `PromotionBanner`, inline CTA in `BaseLayout`)

## Micro layout

- Home hero CTA buttons: `rounded-lg` → **`rounded-xl`**
- Callback form inputs: **`rounded-xl`**
- CSS card radii: `--radius-lg` 12→14px, `--radius-xl` 16→18px, `--radius-card` 18→20px

## Content (~15–25% rewrites, same facts)

| Area | Files |
|------|--------|
| Homepage hero, stats, about, 3 service blurbs | `Hero.astro`, `StatsBar.astro`, `AboutSection.astro`, `home-services.ts` |
| Footer + copyright wording | `HomeFooter.astro` |
| ET/RU client strings | `language-switcher.ts` |
| SEO meta + per-district snippets | `seo-keywords.ts` |
| District intros (Lasnamäe, Kesklinn, Mustamäe) | `toruabi-*.astro` |
| Harju intros (Maardu, Keila, Saue) | `harju-municipality-landings.ts` |
| Service landings (first paragraph ×4) | `toruabi-avariiline-valjakutse.astro`, `ummistuste-…`, `survepesu`, `rasvapuuduri` |
| FAQ (8 answers ET + language-switcher) | `faq.astro`, `language-switcher.ts` |
| Hinnakiri intro meta only | `hinnakiri.astro` |

**Unchanged:** price tables, phone `+372 5633 3332`, domain, sitemap structure, page count, grids.

## Homepage sample (ET hero subtitle)

- **Before:** Avarii toruabi ja ummistuste likvideerimine 24/7… Kohale 30–60 min, väljasõit 0€, garantii 2 aastat.
- **After:** Kiire väljakutse ja torude ummistuste likvideerimine ööpäevaringselt… Meister kohal 30–60 minutiga, väljasõit 0 €, töödele 2-aastane garantii.

## Build

```
npm run build  →  success (Astro 5 + Cloudflare adapter)
```

## Files touched

**24** source/config files (+ this doc).
