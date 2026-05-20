# Google Search Console — toruabii.ee

Manual steps after deploy. Technical crawl signals are already on the site (`robots.txt`, dynamic sitemap, canonicals, hreflang).

## 1. Add property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property with URL prefix: **`https://toruabii.ee`** (recommended) or domain property `toruabii.ee` if you control DNS TXT verification.
3. Verify ownership (HTML file, DNS, or Google Analytics — use a **new** GA4 property for toruabii.ee only).

## 2. Submit sitemap

1. **Indexing** → **Sitemaps**.
2. Submit:
   ```text
   https://toruabii.ee/sitemap.xml
   ```
3. Expect “Success” or “Couldn't fetch” to update within hours–days. The sitemap is generated from `src/data/sitemap-entries.ts` and `src/pages/sitemap.xml.ts` (not `public/sitemap.xml`).

`robots.txt` already declares:

```text
Sitemap: https://toruabii.ee/sitemap.xml
```

## 3. Request indexing (priority URLs)

Use **URL inspection** → **Request indexing** for important pages after launch or major content changes. This **queues a crawl**; it does **not** guarantee position #1 or immediate indexing.

| Priority | URL |
|----------|-----|
| ET home | `https://toruabii.ee/` |
| RU home | `https://toruabii.ee/ru` |
| Pricing | `https://toruabii.ee/hinnakiri` |
| FAQ | `https://toruabii.ee/faq` |
| Clog removal | `https://toruabii.ee/toruabi-ummistuste-likvideerimine` |
| Emergency call-out | `https://toruabii.ee/toruabi-avariiline-valjakutse` |
| Sewer jetting | `https://toruabii.ee/toruabi-kanalisatsiooni-survepesu` |
| District (example) | `https://toruabii.ee/toruabi-lasnamae` |
| RU pricing | `https://toruabii.ee/ru/hinnakiri` |
| RU clog removal | `https://toruabii.ee/ru/toruabi-ummistuste-likvideerimine` |

Repeat for other district landings (`/toruabi-*`, `/ru/toruabi-*`) as needed.

## 4. What to expect in reports

### Redirects (`http` → `https`, `www` → apex)

Google indexes the **final HTTPS URL**. Inspect `https://toruabii.ee/...`, not `http://`. Redirect handling is in `src/middleware.ts`.

### “Discovered – currently not indexed”

The URL is known (sitemap/links) but not in the index yet. Not the same as `robots.txt` block or `noindex`. Improve internal links, wait for recrawl, request indexing for money pages.

### “Alternate page with proper canonical tag”

Legacy `?lang=ru` URLs may appear if old links exist. Canonicals point to `/ru/...` paths without query strings (`BaseLayout.astro`). Treat as expected for obsolete `?lang=ru` URLs.

## 5. Bing Webmaster Tools (optional)

1. [Bing Webmaster](https://www.bing.com/webmasters) → add site `https://toruabii.ee`.
2. Import from GSC if offered, or verify separately.
3. Submit the same sitemap: `https://toruabii.ee/sitemap.xml`.

## 6. Analytics (separate from GSC)

Set in Cloudflare Pages environment (see `.env.example`):

- `PUBLIC_GA4_MEASUREMENT_ID` — new GA4 measurement ID for toruabii.ee only
- `PUBLIC_AHREFS_ANALYTICS_KEY` — Ahrefs Analytics key

Do **not** reuse 24toruabi.ee IDs (`G-Z19PJ8JWD8`, old Ahrefs keys). Scripts in `BaseLayout.astro` load only when these env vars are set.

## Related docs

- [SEO-FINAL-CHECKLIST.md](../SEO-FINAL-CHECKLIST.md) — technical + content checklist
- [DEPLOY-CLOUDFLARE.md](../DEPLOY-CLOUDFLARE.md) — env vars on Cloudflare Pages
