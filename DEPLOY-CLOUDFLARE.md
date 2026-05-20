# Deploy toruabii.ee to Cloudflare Workers

This project uses **Wrangler** with **`wrangler.jsonc`** (Worker name: **`toruabii`**). Deploy command from the repo root:

```bash
npm run deploy
```

That runs `astro build` then `wrangler deploy`.

## Prerequisites

- Node.js 18+ and `npm install` in this folder
- A Cloudflare account with access to **toruabii.ee** DNS (or ability to add the domain)
- Telegram bot token and chat ID (see [TELEGRAM-SETUP.md](./TELEGRAM-SETUP.md))

## 1. Log in to Wrangler

```bash
npx wrangler login
```

Browser opens; approve access for your Cloudflare account.

## 2. First deploy (creates/updates the Worker)

```bash
npm run build
npx wrangler deploy
```

Or in one step:

```bash
npm run deploy
```

Confirm in the Cloudflare dashboard: **Workers & Pages** → worker **`toruabii`**.

## 3. Environment variables (Cloudflare dashboard)

**Workers & Pages** → **toruabii** → **Settings** → **Variables and Secrets**

| Name | Type | Purpose |
|------|------|---------|
| `TELEGRAM_BOT_TOKEN` | Secret | Telegram Bot API token |
| `TELEGRAM_CHAT_ID` | Secret / plain | Target chat for form/call notifications |

CLI alternative for secrets:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```

Redeploy after changing variables if needed: `npm run deploy`.
**Telegram (production):** Form and call notifications need **both** `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` on worker **toruabii** (dashboard **Variables and Secrets** or `wrangler secret put`). Local `.env` does not apply after deploy. Use the same values as your working local `.env`; then `npx wrangler secret list` should list both secret names. Redeploy after changes. See [TELEGRAM-SETUP.md](./TELEGRAM-SETUP.md) for chat ID discovery.


**Do not** commit real values in `.env` to git.

## 4. Custom domain (toruabii.ee)

1. In the dashboard: **Workers & Pages** → **toruabii** → **Settings** → **Domains & Routes** → **Add Custom Domain** → `toruabii.ee` (and `www.toruabii.ee` if used).
2. Cloudflare may create DNS records automatically when the zone is on the same account.

If you configure DNS manually:

- Point **`toruabii.ee`** (and `www`) to the Worker — typically a **CNAME** to the `*.workers.dev` hostname shown after deploy, or use Cloudflare’s “Custom Domain” wizard (recommended).

Ensure the zone **toruabii.ee** is active on Cloudflare (orange cloud proxy is fine).

## 5. Verify

- https://toruabii.ee loads
- Submit a test on the callback form (if enabled) — check Telegram
- Key pages load (home, `/hinnakiri`, a district landing, `/faq`)

## Wrangler config reference

File: **`wrangler.jsonc`**

- `name`: `toruabii`
- `main`: `./dist/_worker.js/index.js`
- `compatibility_date`: `2024-09-23`
- `compatibility_flags`: `["nodejs_compat"]`
- `assets`: `./dist` with binding `ASSETS`, `run_worker_first: true`

**Astro:** `astro.config.mjs` uses `@astrojs/cloudflare` adapter with `output: 'server'`; `site` is `https://toruabii.ee`. Run `npm run build` before every deploy so `dist/_worker.js` matches the adapter output.

**RU URLs (`/ru/*`):** `middleware.ts` rewrites `/ru/path` → `/path?lang=ru`. That requires on-demand (SSR) pages — `export const prerender = true` on content pages caused `ForbiddenRewrite` in dev and on Workers. Content pages have no `prerender` export; only `src/pages/api/*` sets `prerender = false`. For Zone.ee Apache-only static hosting, use `public/.htaccess` (see [ROUTE-AUDIT.md](./ROUTE-AUDIT.md)).

## Optional: CI deploy on push to `main`

See `.github/workflows/deploy.yml`. Add repository secrets:

- `CLOUDFLARE_API_TOKEN` — API token with **Workers Scripts** edit permission for this account
- `CLOUDFLARE_ACCOUNT_ID` — from Cloudflare dashboard URL or **Workers** overview

## Troubleshooting

| Issue | Action |
|-------|--------|
| `dist/_worker.js` missing | Run `npm run build` first |
| 401 on `wrangler deploy` | Run `npx wrangler login` or fix API token in CI |
| Telegram not firing | Check secrets on Worker **toruabii**, not only local `.env` |
| Wrong site URL | Update `site` in `astro.config.mjs` and rebuild |
