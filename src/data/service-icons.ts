/**
 * Teenuste ikoonid `public/photos/svgforraboti/` — staatilised URL-id,
 * et vältida Astro `/_image` (sharp / dev @fs teed).
 */
export const SITE_ORIGIN = 'https://toruabii.ee';

export const SERVICE_ICONS = {
  toruabiAvariitood: '/photos/svgforraboti/toruabi-avariitood-24h.webp',
  ujustamineLekvideerimine: '/photos/svgforraboti/ujustamine-lekvideerimine.webp',
  tehnosusteemideVideouuring: '/photos/svgforraboti/tehnosusteemide-videouuring.webp',
  rasvapuuduriPuhastus: '/photos/svgforraboti/rasvapuuduri-puhastus-survepesu.webp',
  wcPotipaigaldus: '/photos/svgforraboti/wc-potipaigaldus.webp',
  kuttesusteemideRenoveerimine: '/photos/svgforraboti/kuttesusteemide-renoveerimine.webp',
  veeJaKanalisatsiooni: '/photos/svgforraboti/vee-ja-kanalisatsiooni.webp',
  kute: '/photos/svgforraboti/kute.webp',
  saanitar: '/photos/svgforraboti/saanitar.webp',
  boileriPaigaldus: '/photos/svgforraboti/boileri-paigaldus.webp',
  kodumasinaPaigaldamine: '/photos/svgforraboti/kodumasina-paigaldamine.webp',
  hooldusleping: '/photos/svgforraboti/hooldusleping-ku-le.webp',
} as const;

export function serviceIconAbsolute(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

/** ItemList / ImageObject — sama järjekord kui avalehe teenuste plokis (HOME_SERVICES) */
export const SERVICE_IMAGE_SCHEMA_ITEMS = [
  {
    contentUrl: serviceIconAbsolute('/photos/avariitehtus.webp'),
    description: 'Toruabi ja avariitööd 24h',
    name: 'Toruabi ja avariitööd',
  },
  {
    contentUrl: serviceIconAbsolute('/photos/sanitaretehtus.webp'),
    description: 'Ummistuste likvideerimine 24h',
    name: 'Ummistuste likvideerimine',
  },
  {
    contentUrl: serviceIconAbsolute('/photos/kameraauring.webp'),
    description: 'Tehnosüsteemide videouuring',
    name: 'Tehnosüsteemide videouuring',
  },
  {
    contentUrl: serviceIconAbsolute('/photos/maintoruabii.webp'),
    description: 'Kanalisatsiooni survepesu',
    name: 'Survepesu',
  },
  {
    contentUrl: serviceIconAbsolute('/photos/potipaigaldaminejpg.webp'),
    description: 'WC potipaigaldus',
    name: 'WC potipaigaldus',
  },
  {
    contentUrl: serviceIconAbsolute('/photos/trassideremondi.webp'),
    description: 'Trasside remont ja ehitus',
    name: 'Trasside remont ja ehitus',
  },
] as const;
