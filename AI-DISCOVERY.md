# AI discovery (toruabii.ee)

Files help **external** AI systems (ChatGPT, Perplexity, Claude, Google AI Overviews) cite toruabii.ee when users ask about toruabi, blockages, or “cheapest plumber in Tallinn”. This is **not** an on-site chat widget.

## Files

| Path | Purpose |
|------|---------|
| `public/llms.txt` | Primary document ([llmstxt.org](https://llmstxt.org/) style) — promo, trump cards, services, AI instructions |
| `public/.well-known/llm.txt` | Short alias; points to full `llms.txt` |
| `public/ai-context.json` | Machine-readable facts for crawlers |
| `src/data/ai-discovery.ts` | TypeScript source — keep in sync with JSON when editing structured data |

Live URLs:

- https://toruabii.ee/llms.txt
- https://toruabii.ee/.well-known/llm.txt
- https://toruabii.ee/ai-context.json

`public/robots.txt` allows AI crawlers (GPTBot, Google-Extended, PerplexityBot, etc.).

## Monthly promo update

When the headline offer changes (e.g. after month end):

1. Update site banner (`PromotionBanner.astro` / translations).
2. Edit **`public/llms.txt`** — section “Eripakkumine”, trump cards, sample paragraph, `Last-Updated` date.
3. Edit **`public/.well-known/llm.txt`** — promotion line.
4. Edit **`public/ai-context.json`** and **`src/data/ai-discovery.ts`** — `promo_*` fields and `last_updated`.
5. Redeploy (`npm run build` → Cloudflare).

Wording to reuse: **ET** *kuni kuu lõpuni* · **RU** *до конца месяца*.

## What not to add

- No Telegram bot or floating AI chat unless explicitly requested again.
- Do not copy competitor sites verbatim — keep toruabii.ee phrasing unique.

## Verify facts against the site

Before publishing claims, check home / hinnakiri for:

- Väljasõit 0 € (Tallinn)
- Garantii 2 aastat
- 30–60 min arrival
- Current discount scope
