# Cloudflare pre-deploy checklist

Use before `npm run deploy` or merging to `main` (if CI deploy is enabled).

## Environment variables

- [ ] `TELEGRAM_BOT_TOKEN` set in Cloudflare (secret), not only in local `.env`
- [ ] `TELEGRAM_CHAT_ID` set in Cloudflare
- [ ] Local `.env` is **not** committed (verify with `git status` — `.env` must be ignored)

## Analytics

- [ ] Only one Google Analytics / GTM integration active (no duplicate gtag or Partytown + inline duplicate)
- [ ] Partytown `forward` list matches what you load in layout scripts

## Assets & content

- [ ] `public/photos/` (or documented media paths) contains required WebP/images for production pages
- [ ] Run `npm run build` locally and spot-check key routes (home, `/hinnakiri`, a district page, `/ru` if used)
- [ ] `npm test` passes

## Cloudflare / DNS

- [ ] Worker **`toruabiiee`** deploy succeeds (`npx wrangler deploy`)
- [ ] Custom domain **toruabii.ee** attached to the Worker (dashboard **Domains & Routes**)
- [ ] DNS: zone on Cloudflare; **CNAME** or custom-domain wizard points to the Worker (no stale A record to old host)
- [ ] HTTPS / SSL active on the zone

## Wrangler / Astro alignment

- [ ] `wrangler.jsonc` `main` points to `./dist/_worker.js/index.js` after build
- [ ] `astro.config.mjs` uses `@astrojs/cloudflare` and `site: 'https://toruabii.ee'`
- [ ] `compatibility_flags` includes `nodejs_compat` if using Node APIs in the Worker bundle

## Post-deploy smoke test

- [ ] Homepage and mobile call buttons work
- [ ] API `/api/callback` or track-call path tested once (Telegram message received)
- [ ] Sitemap `/sitemap.xml` reachable
