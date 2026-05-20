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

/** ItemList / ImageObject — sama järjekord kui avalehe teenuste plokis */
export const SERVICE_IMAGE_SCHEMA_ITEMS = [
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.toruabiAvariitood),
    description: 'Toruabi ja avariitööd 24h - Sanitaartehnilised avariitööd',
    name: 'Toruabi ja avariitööd',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.ujustamineLekvideerimine),
    description: 'Ummistuste likvideerimine 24h - Kiire reageerimine ummistustele',
    name: 'Ummistuste likvideerimine',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.tehnosusteemideVideouuring),
    description: 'Tehnosüsteemide videouuring - Professionaalne kaamerauuring',
    name: 'Tehnosüsteemide videouuring',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.ujustamineLekvideerimine),
    description: 'Survepesu - Kanalisatsioonisüsteemide survepesu',
    name: 'Survepesu',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.rasvapuuduriPuhastus),
    description: 'Rasvapüüduri puhastus - Rasvapüüduri puhastus ja trasside survepesu',
    name: 'Rasvapüüduri puhastus',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.wcPotipaigaldus),
    description: 'WC potipaigaldus - WC potipaigaldus, vahetus ja remont',
    name: 'WC potipaigaldus',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.kuttesusteemideRenoveerimine),
    description: 'Küttesüsteemi renoveerimine - Küttesüsteemide renoveerimine, ehitus ja remont',
    name: 'Küttesüsteemi renoveerimine',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.veeJaKanalisatsiooni),
    description: 'Kaevetööd - Vee ja kanalisatsiooni trasside remont ja ehitus',
    name: 'Kaevetööd',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.veeJaKanalisatsiooni),
    description: 'Trasside remont ja ehitus - Vee ja kanalisatsiooni trasside remont ja ehitus',
    name: 'Trasside remont ja ehitus',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.kute),
    description: 'Küttesüsteemi läbipesu - Kütte, põrandaküte, soojusõlme hooldus',
    name: 'Küttesüsteemi läbipesu',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.saanitar),
    description: 'Sanitaarseadmete paigaldus - Kraanikausid, segistid, segisti vahetus',
    name: 'Sanitaarseadmete paigaldus',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.boileriPaigaldus),
    description: 'Boileri paigaldus ja remont - Boileri paigaldus, remont ja hooldus',
    name: 'Boileri paigaldus ja remont',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.kodumasinaPaigaldamine),
    description: 'Kodumasina paigaldamine - Kodumasina paigaldamine, vahetus ja hooldus',
    name: 'Kodumasina paigaldamine',
  },
  {
    contentUrl: serviceIconAbsolute(SERVICE_ICONS.hooldusleping),
    description: 'Hooldusleping KÜ-le - Pikaajaline hooldusleping',
    name: 'Hooldusleping KÜ-le',
  },
] as const;
