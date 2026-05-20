# Telegram notifications (toruabii.ee)

Lead notifications go to one Telegram chat. Messages use **blue block markers** for toruabii.ee leads.

## Environment variables

Set on **each** deployment (local `.env`, Cloudflare Worker **Settings → Variables and Secrets**). Never commit real tokens.

| Variable | Description |
|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | From [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | Your chat or group id (e.g. from `@userinfobot`) |

Copy from `.env.example` and fill in values.

### Getting your chat ID

If you do not know `TELEGRAM_CHAT_ID`:

1. Message [@userinfobot](https://t.me/userinfobot) — it replies with your numeric **Id** (use that for a private chat).
2. Or message your bot once, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and read `message.chat.id` from the JSON.
3. For a **group**, add the bot to the group, send a message there, then use `getUpdates` (group ids are usually negative, e.g. `-100…`).

## toruabii.ee (this project)

Frontend always sends `source: toruabii.ee` (and header `X-Site-Source: toruabii.ee`).

### Phone click (`/api/track-call`)

Example message shape:

```
🔵 TORUABII.EE 🔵
📞 Uus kõne / tagasihelistamine
📍 Allikas: toruabii.ee
🕐 21.05.2026, 14:30:00
📱 Tel: +3725181112
🌐 Leht: /toruabi-lasnamae
```

### Callback form (`/api/callback`)

```
🔵 TORUABII.EE — UUS PÄRING 🔵
👤 Nimi: Mari Mets
📞 Telefon: +372 5555 5555
📝 Märkus: Email: x@y.ee
🌐 toruabii.ee
🔗 https://toruabii.ee/#kontaktivorm
🕐 21.05.2026, 14:31:00
```

## API routes

| Route | Method | Body |
|-------|--------|------|
| `/api/callback` | POST JSON | `name`, `phone`, `estimate_note?`, `source?`, `pageUrl?` |
| `/api/track-call` | POST JSON | `url` (page), `tel?`, `source?`, `userAgent?`, `timestamp?` |

Test page (dev or `PUBLIC_SHOW_TEST_PAGE=true`): `/test-call-buttons`

## Files

- `src/lib/telegram.ts` — formatting + send
- `src/pages/api/callback.ts`, `src/pages/api/track-call.ts`
- `src/scripts/callback-fetch.ts` — forms
- `public/scripts/track-call-clicks.js` — `tel:` clicks
- `src/layouts/BaseLayout.astro` — loads track-call script
- `astro.config.mjs` — `env.schema` for `TELEGRAM_*` (required for runtime secrets)

## Troubleshooting

### Notifications stopped after a deploy

**Most common cause:** Telegram secrets must be declared in Astro’s `env.schema` **and** read from `astro:env/server` in `src/lib/telegram.ts`. Using bare `import.meta.env.TELEGRAM_*` gets constant-folded at build time, so production always skips Telegram even when Cloudflare env vars are set.

Fix: keep `env.schema` in `astro.config.mjs`, use `import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from 'astro:env/server'`, set variables in Cloudflare Worker **Variables and Secrets**, redeploy.

### Quick checks

1. **Env vars** — Cloudflare dashboard (or local `.env` for `npm run dev`). Names must match exactly: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
2. **Test page** — `/test-call-buttons` (dev, or `PUBLIC_SHOW_TEST_PAGE=true` in production). Open browser console: `[Call Tracking]` logs and API test status.
3. **API health** — diagnostic POST (no Telegram send):

```bash
curl -s -X POST http://localhost:4322/api/track-call \
  -H "Content-Type: application/json" \
  -d '{"source":"toruabii.ee","url":"test","userAgent":"diagnostic-test"}'
```

Expect: `{"success":true,"message":"Test request - API is available",...}`

4. **Real call click** (needs valid `.env`):

```bash
curl -s -X POST http://localhost:4322/api/track-call \
  -H "Content-Type: application/json" \
  -H "X-Site-Source: toruabii.ee" \
  -d '{"source":"toruabii.ee","url":"https://toruabii.ee/test","tel":"tel:+3725181112","timestamp":"21.05.2026, 14:30:00"}'
```

Expect: `{"success":true,"requestId":"..."}`. Telegram message should show **blue** toruabii markers.

5. **Callback form**:

```bash
curl -s -X POST http://localhost:4322/api/callback \
  -H "Content-Type: application/json" \
  -H "X-Site-Source: toruabii.ee" \
  -d '{"name":"Test","phone":"+37255555555","source":"toruabii.ee","pageUrl":"https://toruabii.ee/"}'
```

### HTTP errors from API

| Status | Meaning |
|--------|---------|
| `503` | `Telegram not configured` — missing env vars |
| `502` | Telegram API rejected the message — see JSON `detail` (invalid token, wrong chat id, bot blocked, etc.) |
| `400` | Bad JSON or missing `name`/`phone`/`url` |

Server logs in dev: `[Telegram]`, `[Callback API]`, `[Track Call API]`.

### Forms vs call clicks

- Forms use `src/scripts/callback-fetch.ts` → `POST /api/callback` with JSON.
- Phone links use `public/scripts/track-call-clicks.js` on every page via `BaseLayout.astro`.
- Do not use HTML `multipart/form` POST to `/api/callback` (Cloudflare blocks cross-site form posts); the Astro components use `fetch` + JSON instead.