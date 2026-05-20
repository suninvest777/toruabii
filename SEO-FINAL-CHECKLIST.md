# SEO final checklist — toruabii.ee

Use after Agents 1–4 (toruabi, districts, ummistus, polish). Phone: **+372 5181 112**.

## Technical (crawl & index)

- [ ] `npm run build` passes
- [ ] `https://toruabii.ee/sitemap.xml` submitted in GSC (property: `https://toruabii.ee`)
- [ ] `public/robots.txt` → `Sitemap: https://toruabii.ee/sitemap.xml`
- [ ] Money pages **not** `noindex` (only `/test-call-buttons` is noindex + `Disallow` in robots)
- [ ] One `<title>` and one `<meta name="description">` per URL (no duplicate `<meta name="title">`, no `meta keywords`)
- [ ] One `rel="canonical"` per page; RU uses `/ru/...` (not `?lang=ru`)
- [ ] `hreflang` ET + RU pairs on inner pages (`BaseLayout`)
- [ ] `rg "24toruabi" src public` → **0** in served HTML/assets

## Content & structure

- [ ] One **H1** per page (landings/services use `currentLang`; blog still uses CSS `blog-et`/`blog-ru` — migrate to `LangOnly` when touching articles)
- [ ] Logical **H2** order (hero → services → FAQ → CTA)
- [ ] Tallinn districts: unique hero intro from `seo-keywords.ts`; no copy-paste blocks across districts
- [ ] No thin duplicate “advantages” sections repeating “why choose”
- [ ] Internal links use `/ru/...` on RU views (not bare ET paths)

## Key URLs to spot-check in GSC

| Priority | ET | RU |
|----------|----|----|
| Home | `/` | `/ru` |
| Pricing | `/hinnakiri` | `/ru/hinnakiri` |
| FAQ | `/faq` | `/ru/faq` |
| Ummistus | `/toruabi-ummistuste-likvideerimine` | `/ru/toruabi-ummistuste-likvideerimine` |
| Districts | `/toruabi-lasnamae` … | `/ru/toruabi-lasnamae` … |

## Post-launch

- [ ] Set `PUBLIC_GA4_MEASUREMENT_ID` and/or `PUBLIC_AHREFS_ANALYTICS_KEY` in Cloudflare env (see `.env.example`) — scripts load only when set; never use 24toruabi IDs
- [ ] Follow [docs/GSC-SETUP-TORUABII.md](docs/GSC-SETUP-TORUABII.md): property `https://toruabii.ee`, submit sitemap, request indexing for priority URLs
- [ ] Indexing is not guaranteed top-1: GSC “Request indexing” queues a crawl; rankings depend on competition, links, and content over weeks
- [ ] Review GSC “Alternate page with canonical” for legacy `?lang=ru` (expected non-indexed variants on old URLs; RU canonicals use `/ru/...`)

## Agent docs (archive)

| File | Scope |
|------|--------|
| `AGENT_SEO1_TORUABI.md` | Head terms, home, hinnakiri/faq |
| `AGENT_SEO2_DISTRICTS.md` | 19 landings, cross-links, JSON-LD |
| `AGENT_SEO3_UMMISTUS.md` | Ummistus service + blog cluster |
| `AGENT_SEO_POLISH_4.md` | Cleanup pass (this release) |

Legacy markdown (`SEO-CHECKLIST.md`, `docs/GSC-SETUP.md`) may still mention 24toruabi.ee — not served to users; update when convenient.
