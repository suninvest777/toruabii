/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Server-only: Telegram Bot API token */
  readonly TELEGRAM_BOT_TOKEN?: string;
  /** Server-only: Telegram chat/group id */
  readonly TELEGRAM_CHAT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
