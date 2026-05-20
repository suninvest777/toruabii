# toruabii

Marketing site for **toruabii.ee** - emergency plumbing (Toruabi) in Estonia. Built with Astro and deployed to **Cloudflare Workers** (static assets + Worker for API routes).

## Stack

- [Astro](https://astro.build/) 5
- Tailwind CSS (`@astrojs/tailwind`)
- Partytown (analytics forwarding)
- [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) - build output in `dist/`, Worker entry `dist/_worker.js`
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - project name **`toruabii`** (`wrangler.jsonc`)

## Local development (Windows)

Double-click **`start.bat`** (or run it from the project folder). It installs dependencies if needed and starts the dev server:

- **URL:** http://localhost:4322  
- **Port:** `4322` (see `astro.config.mjs` → `server.port`)

Manual:

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Astro dev server (port 4322) |
| `npm run build` | Production build to `dist/` |
| `npm run deploy` | `build` then `wrangler deploy` |
| `npm test` | Vitest |
| `npm run photo:webp` | Convert JPGs to WebP (`scripts/`) |
| `npm run photo:compress` | Compress WebP assets (`node scripts/compress-webp.mjs <paths>`) |

## Environment variables

Copy **`.env.example`** to **`.env`** for local development only. **Never commit `.env`** (listed in `.gitignore`).

| Variable | Where used | Notes |
|----------|------------|--------|
| `TELEGRAM_BOT_TOKEN` | Server / Worker (`src/lib/telegram.ts`, API routes) | Secret - Cloudflare dashboard → Worker → Settings → Variables |
| `TELEGRAM_CHAT_ID` | Server / Worker | Secret - same as above |

For production, set the same names in the **Cloudflare Workers** dashboard (or via `wrangler secret put`). See **[DEPLOY-CLOUDFLARE.md](./DEPLOY-CLOUDFLARE.md)**.

## Build & deploy (Cloudflare Workers)

1. `npm run build` - produces `dist/` including `_worker.js` for Wrangler.
2. `npm run deploy` - runs build + `wrangler deploy` using **`wrangler.jsonc`** (`name`: `toruabii`, `nodejs_compat`, assets binding `ASSETS`).

Full steps, domain, DNS, and checklist: **[DEPLOY-CLOUDFLARE.md](./DEPLOY-CLOUDFLARE.md)** and **[CLOUDFLARE-CHECKLIST.md](./CLOUDFLARE-CHECKLIST.md)**.

## Cloudflare notes

- **Worker name:** `toruabii` (Wrangler `name` in `wrangler.jsonc`).
- **Site URL:** `https://toruabii.ee` (`site` in `astro.config.mjs`).
- **Adapter:** `@astrojs/cloudflare` - output must match Wrangler (`main`: `./dist/_worker.js/index.js`, `assets.directory`: `./dist`).
- **API routes:** `src/pages/api/callback.ts`, `track-call.ts` (Telegram notifications) - require Worker env vars above.
- **Excluded from repo scope:** separate Telegram callback bot and AI chat (`/api/chat`) per project docs.

## Other docs

- [SETUP.md](./SETUP.md), [TELEGRAM-SETUP.md](./TELEGRAM-SETUP.md)
- [AI-DISCOVERY.md](./AI-DISCOVERY.md) - `public/llms.txt`, `.well-known/llm.txt`
- [RENDER-DEPLOY.md](./RENDER-DEPLOY.md) - legacy/alternate host notes (primary deploy is Cloudflare)

## Repository

- GitHub: https://github.com/suninvest777/toruabii.git
- Default branch: `main`
