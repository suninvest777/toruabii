# SEO Agent 2 of 3 — toruabi + ALL DISTRICTS

## Scope

District and Harjumaa municipality toruabi landings: unique ET/RU titles, meta descriptions, H1, hero intros, neighbor cross-links (`toruabi [district]`), BreadcrumbList (via `BaseLayout`), and `areaServed` in JSON-LD.

Phone unchanged: **+372 5633 3332**. No Telegram/AI bot copy added.

## Title format

- **ET:** `Toruabi [District] | 24/7 | toruabii.ee`
- **RU:** `Торуаби [District] | 24/7 | toruabii.ee`
- **RU URLs:** `/ru/toruabi-*` (lang via `?lang=ru` on same Astro pages)

### Sample — Lasnamäe

**ET title:** `Toruabi Lasnamäe | 24/7 | toruabii.ee`  
**RU title:** `Торуаби Ласнамяэ | 24/7 | toruabii.ee`

## Pages updated (19 `toruabi-*.astro` routes)

### Tallinn districts (5)

| Path | H1 (ET) |
|------|---------|
| `/toruabi-kesklinn` | Toruabi Kesklinn |
| `/toruabi-lasnamae` | Toruabi Lasnamäe |
| `/toruabi-mustamae` | Toruabi Mustamäe |
| `/toruabi-pirita` | Toruabi Pirita |
| `/toruabi-viimsi` | Toruabi Viimsi |

### Harjumaa municipalities (10)

| Path | H1 (ET) |
|------|---------|
| `/toruabi-maardu` | Toruabi Maardu |
| `/toruabi-keila` | Toruabi Keila |
| `/toruabi-saue` | Toruabi Saue |
| `/toruabi-rae` | Toruabi Rae |
| `/toruabi-saku` | Toruabi Saku |
| `/toruabi-harku` | Toruabi Harku |
| `/toruabi-joelahtme` | Toruabi Jõelähtme |
| `/toruabi-kiili` | Toruabi Kiili |
| `/toruabi-kose` | Toruabi Kose |
| `/toruabi-anija` | Toruabi Anija |

### Service landings (4 — unchanged scope; cross-links still work)

| Path |
|------|
| `/toruabi-avariiline-valjakutse` |
| `/toruabi-ummistuste-likvideerimine` |
| `/toruabi-kanalisatsiooni-survepesu` |
| `/toruabi-rasvapuuduri-puhastus` |

## Shared files updated

| File | Changes |
|------|---------|
| `src/data/seo-keywords.ts` | District titles/descriptions/intros, neighbors, `tallinnDistrictH1`, `getTallinnNeighborDistricts` |
| `src/data/harju-municipality-landings.ts` | Per-municipality SEO, 2–3 sentence intros, `linkAnchorEt/Ru`, `neighbors`, `getHarjuNeighborMunicipalities` |
| `src/components/DistrictCrossLinks.astro` | Neighbor-only blocks; anchor `toruabi …` / `торуаби …` |
| `src/components/seo/DistrictTallinnJsonLd.astro` | `areaServed` (unchanged structure) |
| `src/components/landings/HarjuMunicipalityToruabi.astro` | Uses `region.descriptionEt/Ru`; Harjumaa `areaServed` in PlumbingService JSON-LD |

## SEO patterns

- **Meta description:** toruabi + district + Tallinn or Harjumaa + `+372 5633 3332`
- **Hero:** 2–3 unique sentences per district/municipality (not one shared template)
- **Cross-links:** e.g. `toruabi mustamäe`, `торуаби мустамяэ` — neighbors only on district pages
- **JSON-LD:** `BreadcrumbList` from `breadcrumbJsonLdOverride`; Tallinn `PlumbingService.areaServed`; Harju `areaServed` as AdministrativeArea + Harjumaa

## Build

```bash
npm run build
```

Result: **pass** (Astro 5 + Cloudflare adapter).

## Query targets (ET + RU)

- toruabi lasnamäe / lasnamae, mustamäe, kesklinn, pirita, viimsi
- toruabi maardu, keila, saue, rae, saku, harku, joelahtme, kiili, kose, anija
- торуаби ласнамяэ, мустамяэ, кесклинн, пирита, виймси, маарду, кейла, etc.
