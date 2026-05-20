'use strict';

import { SITE_IDENTITY } from '../data/site-identity';

/** Default lead source for this deployment (toruabii.ee). */
export const CALLBACK_SITE_SOURCE = SITE_IDENTITY.brand;

export type CallbackPayload = {
  name: string;
  phone: string;
  estimate_note?: string;
  /** Site hostname sent to API; defaults to toruabii.ee */
  source?: string;
  /** Full page URL; defaults to window.location.href in browser */
  pageUrl?: string;
};

export type CallbackResult = {
  ok: boolean;
  status: number;
  data: { success?: boolean; error?: string };
  /** Non-JSON body snippet when server/WAF returns HTML or plain text */
  rawHint?: string;
};

/**
 * POST /api/callback as JSON (multipart is blocked by Cloudflare "Cross-site POST form submissions").
 */
export async function submitCallbackRequest(payload: CallbackPayload): Promise<CallbackResult> {
  const source = payload.source ?? CALLBACK_SITE_SOURCE;
  const pageUrl =
    payload.pageUrl ??
    (typeof window !== 'undefined' ? window.location.href : undefined);

  const body = {
    name: payload.name,
    phone: payload.phone,
    estimate_note: payload.estimate_note,
    source,
    pageUrl,
  };

  const res = await fetch('/api/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Site-Source': source,
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  const ct = res.headers.get('content-type') || '';
  let data: { success?: boolean; error?: string } = {};

  if (ct.includes('application/json')) {
    try {
      data = JSON.parse(text) as { success?: boolean; error?: string };
    } catch {
      data = {};
    }
    return { ok: res.ok, status: res.status, data };
  }

  return {
    ok: res.ok,
    status: res.status,
    data: {},
    rawHint: text.replace(/\s+/g, ' ').slice(0, 180),
  };
}
