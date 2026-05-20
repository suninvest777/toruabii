import type { APIRoute } from 'astro';
import {
  formatCallbackMessage,
  formatTallinnTimestamp,
  resolveSourceFromRequest,
  sendTelegramMessage,
} from '../../lib/telegram';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: {
    name?: string;
    phone?: string;
    estimate_note?: string;
    source?: string;
    pageUrl?: string;
    timestamp?: string;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').trim();

  if (!name || !phone) {
    return new Response(JSON.stringify({ success: false, error: 'Name and phone are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const source = resolveSourceFromRequest(body, request);
  const pageUrl =
    (body.pageUrl ?? '').trim() ||
    request.headers.get('Referer')?.trim() ||
    '';
  const note = (body.estimate_note ?? '').trim();

  const message = formatCallbackMessage({
    source,
    name,
    phone,
    note: note || undefined,
    pageUrl: pageUrl || undefined,
    timestamp: body.timestamp || formatTallinnTimestamp(),
  });

  const sent = await sendTelegramMessage(message);

  if (!sent.ok) {
    if (sent.skipped) {
      console.warn('[Callback API] Telegram not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Telegram not configured' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } },
      );
    }
    console.error('[Callback API] Telegram error:', sent.error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to send notification',
        detail: sent.error,
      }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
