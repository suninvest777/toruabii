/// <reference path="../.astro/types.d.ts" />
import type { Runtime } from '@astrojs/cloudflare';

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  /** Server-only: Telegram Bot API token */
  readonly TELEGRAM_BOT_TOKEN?: string;
  /** Server-only: Telegram chat/group id */
  readonly TELEGRAM_CHAT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
