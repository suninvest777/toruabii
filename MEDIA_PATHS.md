# Media paths (toruabii.ee)

## Convention

- **Static images:** `public/photos/` → served at `/photos/…`
- **Do not use** `public/photo/` or `/photo/…` (legacy 24toruabi.ee paths; removed to avoid CDN/cache URL collisions).
- **Videos:** not used on this site; old `public/video/` (24toruabi `.MOV` demos) was removed.

## Brand assets (present)

| Role | File | URL |
|------|------|-----|
| Logo (header, footer, JSON-LD) | `toruabii.webp` | `/photos/toruabii.webp` |
| Hero / default OG image | `maintoruabii.webp` | `/photos/maintoruabii.webp` |
| Mobile hero | `mobileversion-main.webp` | `/photos/mobileversion-main.webp` |
| Avarii tööd (teenuste grid) | `avariitehtus.webp` | `/photos/avariitehtus.webp` |
| Sanitaartööd / ummistus | `sanitaretehtus.webp` | `/photos/sanitaretehtus.webp` |
| Videouuring | `kameraauring.webp` | `/photos/kameraauring.webp` |
| WC potipaigaldus | `potipaigaldaminejpg.webp` | `/photos/potipaigaldaminejpg.webp` |
| Trasside remont | `trassideremondi.webp` | `/photos/trassideremondi.webp` |

## Removed (24toruabi clone)

- **`public/photo/`** — entire tree (webp gallery, `blog/`, `svgforraboti/`, old logo/hero names).
- **`public/video/`** — `kanalisatsiooniluk.MOV`, `probili-zasor.MOV` (demo block removed from survepesu landing).

## Assets still referenced in code but not yet in `public/photos/`

Add new toruabii-specific files under `public/photos/` (rename if copying from 24toruabi — **do not** reuse the same filenames on CDN). Until added, those URLs will 404.

### Gallery & home services

- `boiler1.webp`, `luk-na-ulice.webp`, `prokladka1.webp`, `sifon.webp`
- `photo_2_2026-01-12_17-17-35.webp` … `photo_34_2026-01-12_17-17-35.webp` (gallery set)
- `otoplenije-batarei-liking.webp`, `sistema-otoplenija-connectors-liking.webp`
- `spusknoj-klapan-na-radiatore.webp`, `spusknoj-na-radiatore-2.webp`
- `survepesu1.webp` (optional dedicated survepesu image; code currently uses `maintoruabii.webp` where updated)

### Blog (`public/photos/blog/`)

- `procistka-boilera-est.webp`, `procistka-boilera-rus.webp`
- `zasor-kanalizacii-blog-est.webp`, `zasor-kanalizacii-blog-rus.webp`

### Service icons (`public/photos/svgforraboti/`)

- `toruabi-avariitood-24h.webp`, `ujustamine-lekvideerimine.webp`, `tehnosusteemide-videouuring.webp`
- `rasvapuuduri-puhastus-survepesu.webp`, `wc-potipaigaldus.webp`, `kuttesusteemide-renoveerimine.webp`
- `vee-ja-kanalisatsiooni.webp`, `kute.webp`, `saanitar.webp`, `boileri-paigaldus.webp`
- `kodumasina-paigaldamine.webp`, `hooldusleping-ku-le.webp`

## Scripts

- `scripts/jpg-to-webp.mjs` — converts JPEGs under `public/photos/`
- `scripts/compress-webp.mjs` — default targets `public/photos/blog/`, `maintoruabii.webp`, `toruabii.webp`

## Cache headers

`public/_headers` sets long cache for `/photos/*`.
