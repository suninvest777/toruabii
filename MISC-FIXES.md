# MISC-FIXES summary (2026-05-21)

## Git
- Branch `main`, **up to date** with `origin/main` before commit (no ahead/behind until push).
- Committed intentional project changes with message: **SEO polish, LangOnly, fixes** (`.env` not committed).

## Favicon
- Ran `node scripts/generate-favicon.mjs` from `public/photos/toruabii.webp`.
- Regenerated: `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`.

## Speed / images
- `npm run photo:compress` **failed** by default: missing `public/photos/blog/` directory.
- Explicit compress on `maintoruabii.webp` and `mobileversion-main.webp` hit **EPERM** on Windows when renaming `.tmp.webp` → target (file lock / antivirus). **Action:** close apps locking those files and run:
  `node scripts/compress-webp.mjs public/photos/maintoruabii.webp public/photos/mobileversion-main.webp`

## Docs cleanup
- **README.md:** removed `PUBLIC_GOOGLE_REVIEW_URL` / `/tagasiside-soodus`; documented explicit compress paths.
- **DEPLOY-CLOUDFLARE.md:** removed Google review env and obsolete verify step.
- **CLOUDFLARE-CHECKLIST.md:** removed review-page env checklist item.
- **TELEGRAM-SETUP.md:** toruabii-only doc (removed 24toruabi.ee live-site sections).

## Build fix (this pass)
- Added missing `import { pageLang } from '../../utils/page-lang'` and `import LangOnly from '../../components/LangOnly.astro'` on blog articles using those APIs.
- **`npm run build`:** passes.

## Still obsolete in other markdown (not in task list)
- `ROUTE-AUDIT.md`, `RU-AUDIT.md`, legacy SEO audit files may still mention `/tagasiside-soodus` or 24toruabi.ee; update when convenient.

## Not committed (by design)
- `.env` (gitignored)
- Optional agent notes: `AGENT_SEO_POLISH_*.md`, `TELEGRAM-TEST-RESULTS.md` (left untracked unless you want them in repo)