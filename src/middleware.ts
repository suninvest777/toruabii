import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const request = context.request;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const isRuPrefixed = pathname === '/ru' || pathname.startsWith('/ru/');
  const queryLang = url.searchParams.get('lang');
  const internalI18nRewrite = url.searchParams.get('__i18n_rewrite') === '1';

  // Only redirect HTTP to HTTPS in production (not in dev mode)
  const isProduction = import.meta.env.PROD;

  if (isProduction) {
    const forwardedProto = request.headers.get('x-forwarded-proto');
    const isHttpProtocol = url.protocol === 'http:';
    const isHttpForwarded = forwardedProto === 'http';
    const isWww = url.hostname === 'www.toruabii.ee';

    // Single 301: http+www → https apex (avoids extra hop for GSC / crawlers)
    if (isHttpProtocol || isHttpForwarded || isWww) {
      url.protocol = 'https:';
      if (isWww) {
        url.hostname = 'toruabii.ee';
      }
      return Response.redirect(url.toString(), 301);
    }
  }

  // SEO i18n normalization:
  // - Canonical RU URLs use /ru prefix (not ?lang=ru)
  // - Legacy ?lang=ru links are permanently redirected to /ru/*
  // - Home: /?lang=ru → /ru (single RU entry point)
  if (queryLang === 'ru' && pathname === '/' && !internalI18nRewrite) {
    const target = new URL(url.toString());
    target.pathname = '/ru';
    target.searchParams.delete('lang');
    return Response.redirect(target.toString(), 301);
  }

  if (queryLang === 'ru' && pathname !== '/' && !isRuPrefixed && !internalI18nRewrite) {
    const target = new URL(url.toString());
    target.pathname = pathname === '/' ? '/ru' : `/ru${pathname}`;
    target.searchParams.delete('lang');
    return Response.redirect(target.toString(), 301);
  }

  if (isRuPrefixed && queryLang === 'et' && !internalI18nRewrite) {
    const target = new URL(url.toString());
    target.pathname = pathname === '/ru' ? '/' : pathname.replace(/^\/ru/, '');
    target.searchParams.delete('lang');
    return Response.redirect(target.toString(), 301);
  }

  // Canonical RU blog category slugs (ET kuttesusteem → RU otoplenije).
  if (
    isRuPrefixed &&
    pathname === '/ru/blog/kategoria/kuttesusteem' &&
    !internalI18nRewrite
  ) {
    const target = new URL(url.toString());
    target.pathname = '/ru/blog/kategoria/otoplenije';
    return Response.redirect(target.toString(), 301);
  }

  // Internally rewrite /ru/* to existing route handlers with lang=ru.
  // This avoids duplicating every page file under /ru/.
  if (isRuPrefixed && pathname !== '/ru') {
    const rewritten = new URL(url.toString());
    rewritten.pathname = pathname.replace(/^\/ru/, '') || '/';
    rewritten.searchParams.set('lang', 'ru');
    rewritten.searchParams.set('__i18n_rewrite', '1');
    return context.rewrite(rewritten);
  }

  const response = await next();

  // Security headers (production only)
  if (import.meta.env.PROD) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }

  return response;
};
