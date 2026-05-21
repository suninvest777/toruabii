import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from 'astro:env/server';
import { SITE_IDENTITY } from '../data/site-identity';

export const SITE_SOURCE_TORUABII = SITE_IDENTITY.brand;
export const SITE_SOURCE_24TORUABI = '24toruabi.ee';
export const LEGACY_SOURCE_LABEL = '24toruabi.ee (legacy)';

export type SiteSourceKind = 'toruabii' | '24toruabi' | 'legacy';

const TELEGRAM_TIMEOUT_MS = 10_000;

function divider(): string {
  return '━━━━━━━━━━━━━━━━━━';
}

export function formatTallinnTimestamp(ts?: string): string {
  if (ts?.trim()) return ts.trim();
  return new Date().toLocaleString('et-EE', {
    timeZone: 'Europe/Tallinn',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function resolveSiteSource(
  bodySource?: string | null,
  headerSource?: string | null,
): SiteSourceKind {
  const raw = (bodySource || headerSource || '').trim().toLowerCase();
  if (raw === SITE_SOURCE_TORUABII) return 'toruabii';
  if (raw === SITE_SOURCE_24TORUABI) return '24toruabi';
  return 'legacy';
}

export function extractPhoneFromTel(tel?: string | null): string {
  if (!tel?.trim()) return '';
  const href = tel.trim();
  if (href.startsWith('tel:')) {
    return href.slice(4).replace(/\s/g, '');
  }
  return href;
}

export function pagePathFromUrl(url: string): string {
  try {
    const u = new URL(url);
    return u.pathname + u.search + u.hash;
  } catch {
    return url;
  }
}

function readEnvString(
  source: Record<string, unknown> | undefined,
  key: 'TELEGRAM_BOT_TOKEN' | 'TELEGRAM_CHAT_ID',
): string {
  const value = source?.[key];
  return typeof value === 'string' ? value.trim() : '';
}

/** Cloudflare Worker `env` from `locals.runtime.env` (API routes). */
export type TelegramRuntimeEnv = Record<string, unknown>;

export function getTelegramConfig(
  runtimeEnv?: TelegramRuntimeEnv,
): { token: string; chatId: string } | null {
  let token = TELEGRAM_BOT_TOKEN?.trim() ?? '';
  let chatId = TELEGRAM_CHAT_ID?.trim() ?? '';

  if (!token || !chatId) {
    token = readEnvString(runtimeEnv, 'TELEGRAM_BOT_TOKEN') || token;
    chatId = readEnvString(runtimeEnv, 'TELEGRAM_CHAT_ID') || chatId;
  }

  if (!token || !chatId) return null;
  return { token, chatId };
}

export async function sendTelegramMessage(
  text: string,
  runtimeEnv?: TelegramRuntimeEnv,
): Promise<{
  ok: boolean;
  error?: string;
  skipped?: boolean;
}> {
  const config = getTelegramConfig(runtimeEnv);
  if (!config) {
    if (import.meta.env.DEV) {
      console.warn('[Telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing');
    }
    return { ok: false, error: 'Telegram not configured', skipped: true };
  }

  const apiUrl = `https://api.telegram.org/bot${config.token}/sendMessage`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: config.chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      let detail = res.statusText;
      try {
        const err = (await res.json()) as { description?: string };
        detail = err.description || detail;
      } catch {
        /* ignore */
      }
      if (import.meta.env.DEV) {
        console.error('[Telegram] sendMessage failed:', res.status, detail);
      }
      return { ok: false, error: detail };
    }

    if (import.meta.env.DEV) {
      console.info('[Telegram] Message sent');
    }
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Network error';
    if (import.meta.env.DEV) {
      console.error('[Telegram] sendMessage error:', message);
    }
    return { ok: false, error: message };
  } finally {
    clearTimeout(timeoutId);
  }
}

export function formatCallClickMessage(params: {
  source: SiteSourceKind;
  pageUrl: string;
  tel?: string;
  timestamp?: string;
}): string {
  const ts = formatTallinnTimestamp(params.timestamp);
  const phone = extractPhoneFromTel(params.tel) || '—';
  const pagePath = pagePathFromUrl(params.pageUrl);

  if (params.source === 'toruabii') {
    return [
      '🟦🟦🟦 TORUABII.EE 🟦🟦🟦',
      divider(),
      '📞 Uus kõne / tagasihelistamine',
      `🌐 Allikas: ${SITE_SOURCE_TORUABII}`,
      `⏰ ${ts}`,
      divider(),
      `📱 Tel: ${phone}`,
      `📄 Leht: ${pagePath}`,
    ].join('\n');
  }

  const sourceLabel =
    params.source === '24toruabi' ? SITE_SOURCE_24TORUABI : LEGACY_SOURCE_LABEL;
  const header =
    params.source === '24toruabi'
      ? '🟥🟥 24TORUABI.EE 🟥🟥'
      : '🟥 24TORUABI (pärand) 🟥';

  return [
    header,
    divider(),
    '📞 Uus kõne / tagasihelistamine',
    `🌐 Allikas: ${sourceLabel}`,
    `⏰ ${ts}`,
    divider(),
    `📱 Tel: ${phone}`,
    `📄 Leht: ${pagePath}`,
  ].join('\n');
}

export function formatCallbackMessage(params: {
  source: SiteSourceKind;
  name: string;
  phone: string;
  note?: string;
  pageUrl?: string;
  timestamp?: string;
}): string {
  const ts = formatTallinnTimestamp(params.timestamp);
  const note = (params.note || '').trim() || '—';
  const pageUrl = (params.pageUrl || '').trim() || '—';

  if (params.source === 'toruabii') {
    return [
      '🟦 TORUABII.EE · UUS PÄRING 🟦',
      divider(),
      `👤 Nimi: ${params.name}`,
      `📱 Telefon: ${params.phone}`,
      `📝 Märkus: ${note}`,
      `🌐 ${SITE_SOURCE_TORUABII}`,
      `🔗 ${pageUrl}`,
      `⏰ ${ts}`,
    ].join('\n');
  }

  const sourceLabel =
    params.source === '24toruabi' ? SITE_SOURCE_24TORUABI : LEGACY_SOURCE_LABEL;

  return [
    '🟥 24TORUABI.EE · UUS PÄRING 🟥',
    divider(),
    `👤 Nimi: ${params.name}`,
    `📱 Telefon: ${params.phone}`,
    `📝 Märkus: ${note}`,
    `🌐 ${sourceLabel}`,
    `🔗 ${pageUrl}`,
    `⏰ ${ts}`,
  ].join('\n');
}

export function resolveSourceFromRequest(
  body: { source?: string },
  request: Request,
): SiteSourceKind {
  const header = request.headers.get('X-Site-Source');
  return resolveSiteSource(body.source, header);
}
