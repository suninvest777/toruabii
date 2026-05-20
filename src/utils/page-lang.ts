/** Active page language (ET default; RU via middleware rewrite `?lang=ru` or `/ru` home). */
export function pageLang(url: URL): 'et' | 'ru' {
  const path = url.pathname;
  if (path === '/ru' || path.startsWith('/ru/')) return 'ru';
  return url.searchParams.get('lang') === 'ru' ? 'ru' : 'et';
}
