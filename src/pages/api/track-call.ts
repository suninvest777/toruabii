import type { APIRoute } from 'astro';
import {
  formatCallClickMessage,
  formatTallinnTimestamp,
  resolveSourceFromRequest,
  sendTelegramMessage,
} from '../../lib/telegram';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const requestId = Date.now().toString(36);

  let data: {
    url?: string;
    tel?: string;
    userAgent?: string;
    timestamp?: string;
    source?: string;
  };

  try {
    data = await request.json();
  } catch (parseError) {
    console.error(`[Track Call API] [${requestId}] JSON parse error:`, parseError);
    return new Response(JSON.stringify({ success: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { url, tel, userAgent, timestamp } = data;

  if (!url) {
    return new Response(JSON.stringify({ success: false, error: 'URL is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const isTestRequest = url === 'test' || userAgent === 'diagnostic-test';
  if (isTestRequest) {
    return new Response(
      JSON.stringify({ success: true, message: 'Test request - API is available', requestId }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const source = resolveSourceFromRequest(data, request);
  const message = formatCallClickMessage({
    source,
    pageUrl: url,
    tel,
    timestamp: timestamp || formatTallinnTimestamp(),
  });

  const sent = await sendTelegramMessage(message);

  if (!sent.ok) {
    if (sent.skipped) {
      console.warn(`[Track Call API] [${requestId}] Telegram not configured`);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Telegram not configured',
          requestId,
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } },
      );
    }
    console.error(`[Track Call API] [${requestId}] Telegram error:`, sent.error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to send notification',
        detail: sent.error,
        requestId,
      }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ success: true, requestId }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
