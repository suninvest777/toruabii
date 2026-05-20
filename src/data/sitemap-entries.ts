/**
 * Single source of truth for /sitemap.xml (see src/pages/sitemap.xml.ts).
 * Update lastmod when content changes meaningfully.
 */

export const SITE_ORIGIN = 'https://toruabii.ee';

export type SitemapImage = {
  loc: string;
  title: string;
  caption: string;
};

export type SitemapEntry = {
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  /** RU slug path when ET/RU use different paths (blog category) */
  ruPath?: string;
  /** ET path when current `path` is the RU category URL */
  etPath?: string;
  images?: SitemapImage[];
};

export const sitemapEntries: SitemapEntry[] = [
  {
    path: '/',
    lastmod: '2026-05-20',
    changefreq: 'weekly',
    priority: '1.0',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Avarii toruabi meister tööl Tallinnas',
        caption: 'Professionaalne toruabi ja kanalisatsiooni toruabi 24/7',
      },
      {
        loc: '/photos/toruabii.webp',
        title: 'toruabii.ee logo',
        caption: 'toruabii.ee - Avarii Toruabi Tallinnas ja Harjumaal',
      },
    ],
  },
  { path: '/ru', lastmod: '2026-05-20', changefreq: 'weekly', priority: '0.95' },
  { path: '/hinnakiri', lastmod: '2026-05-20', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', lastmod: '2026-05-20', changefreq: 'monthly', priority: '0.7' },
  { path: '/tagasiside-soodus', lastmod: '2026-05-20', changefreq: 'monthly', priority: '0.65' },
  { path: '/sitemap', lastmod: '2026-04-04', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', lastmod: '2026-04-04', changefreq: 'yearly', priority: '0.5' },
  { path: '/blog', lastmod: '2026-04-04', changefreq: 'weekly', priority: '0.6' },
  {
    path: '/blog/kanalisatsiooni-ummistus-mida-teha',
    lastmod: '2026-02-25',
    changefreq: 'monthly',
    priority: '0.6',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Kanalisatsiooni ummistus Tallinnas',
        caption: 'Kuidas lahendada kanalisatsiooni ummistus ja millal kutsuda toruabi',
      },
    ],
  },
  {
    path: '/blog/boileri-hooldus-ja-loputus',
    lastmod: '2026-02-25',
    changefreq: 'monthly',
    priority: '0.6',
    images: [
      {
        loc: '/photos/toruabii.webp',
        title: 'Boileri hooldus ja läbipesu',
        caption: 'Boileri toruabi ja hooldus Tallinnas ja Harjumaal',
      },
    ],
  },
  {
    path: '/blog/kuttesusteemi-hooldus-radiaatorite-tyhjendamine',
    lastmod: '2026-01-27',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Küttesüsteemi hooldus ja radiaatorite tühjendamine Tallinnas',
        caption: 'Kuidas tühjendada radiaatoreid ja miks see on oluline',
      },
    ],
  },
  {
    path: '/blog/kuttesusteem-eramaja',
    lastmod: '2026-01-27',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Küttesüsteem eramajas Tallinnas',
        caption: 'Küttesüsteemi valik, paigaldus ja hooldus Tallinnas',
      },
    ],
  },
  {
    path: '/blog/kollektorigrupp',
    lastmod: '2026-01-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Kollektorigrupp küttesüsteemis Tallinnas',
        caption: 'Kollektorsüsteemi eelised ja paigaldus',
      },
    ],
  },
  {
    path: '/blog/puhvermahuti',
    lastmod: '2026-04-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Puhvermahuti küttesüsteemis Tallinnas',
        caption: 'Puhvermahuti paigaldus ja hooldus Tallinnas',
      },
    ],
  },
  {
    path: '/blog/radiaatori-valik',
    lastmod: '2026-03-20',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/otoplenije-batarei-liking.webp',
        title: 'Radiaatori valik küttesüsteemile Tallinnas',
        caption: 'Kuidas valida õige radiaator küttesüsteemile',
      },
    ],
  },
  {
    path: '/blog/bimetalliline-radiaator',
    lastmod: '2026-02-06',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/otoplenije-batarei-liking.webp',
        title: 'Bimetalliline radiaator küttesüsteemis Tallinnas',
        caption: 'Bimetalliliste radiaatorite eelised ja paigaldus',
      },
    ],
  },
  {
    path: '/blog/pump-margi-ja-kuiva-rootoriga',
    lastmod: '2026-04-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Pump margi ja kuiva rootoriga Tallinnas',
        caption: 'Erinevused pumpade vahel margi ja kuiva rootoriga',
      },
    ],
  },
  {
    path: '/blog/laienduspaak-kutte-ja-gvs',
    lastmod: '2026-04-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Laienduspaak küttesüsteemi ja soojavee jaoks Tallinnas',
        caption: 'Erinevused küttesüsteemi ja soojaveevarustuse laienduspaakide vahel',
      },
    ],
  },
  {
    path: '/blog/tsirkulatsioonipump',
    lastmod: '2026-04-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Tsirkulatsioonipump küttesüsteemis Tallinnas',
        caption: 'Kuidas tsirkulatsioonipump töötab ja milline on selle otstarve',
      },
    ],
  },
  {
    path: '/blog/hudroakumulaatorid-ja-laienduspaagid',
    lastmod: '2026-04-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Hüdroakumulaatorid ja laienduspaagid Tallinnas',
        caption: 'Erinevused hüdroakumulaatorite ja laienduspaakide vahel',
      },
    ],
  },
  {
    path: '/blog/elektrikatla-ulehendamine',
    lastmod: '2026-01-31',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Elektrikatla ühendamine küttesüsteemiga Tallinnas',
        caption: 'Kuidas ühendada elektrikatla küttesüsteemiga',
      },
    ],
  },
  {
    path: '/blog/avatud-ja-suletud-kuttesusteemid',
    lastmod: '2026-04-08',
    changefreq: 'monthly',
    priority: '0.7',
    images: [
      {
        loc: '/photos/sistema-otoplenija-connectors-liking.webp',
        title: 'Avatud ja suletud küttesüsteemid Tallinnas',
        caption: 'Erinevused avatud ja suletud küttesüsteemide vahel',
      },
    ],
  },
  {
    path: '/blog/kategoria/kuttesusteem',
    lastmod: '2026-04-04',
    changefreq: 'weekly',
    priority: '0.6',
    ruPath: '/blog/kategoria/otoplenije',
  },
  {
    path: '/blog/kategoria/otoplenije',
    lastmod: '2026-04-04',
    changefreq: 'weekly',
    priority: '0.6',
    etPath: '/blog/kategoria/kuttesusteem',
  },
  {
    path: '/toruabi-avariiline-valjakutse',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Avarii toruabi väljakutse Tallinnas',
        caption: 'Ööpäevaringne toruabi ja avarii toruabi 24/7',
      },
    ],
  },
  {
    path: '/toruabi-ummistuste-likvideerimine',
    lastmod: '2026-05-20',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi ummistuste likvideerimine',
        caption: 'Kanalisatsiooni toruabi ja ummistuste likvideerimine Tallinnas',
      },
    ],
  },
  {
    path: '/toruabi-kanalisatsiooni-survepesu',
    lastmod: '2026-04-26',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi kanalisatsiooni survepesu',
        caption: 'Kõrgsurve kanalisatsiooni puhastus ja toruabi Tallinnas',
      },
    ],
  },
  {
    path: '/toruabi-rasvapuuduri-puhastus',
    lastmod: '2026-04-26',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi rasvapüüduri puhastus',
        caption: 'Rasvapüüdurite hooldus ja toruabi Tallinnas ning Harjumaal',
      },
    ],
  },
  { path: '/toruabi-lasnamae', lastmod: '2026-05-20', changefreq: 'monthly', priority: '0.9' },
  { path: '/toruabi-mustamae', lastmod: '2026-05-20', changefreq: 'monthly', priority: '0.9' },
  { path: '/toruabi-kesklinn', lastmod: '2026-05-20', changefreq: 'monthly', priority: '0.9' },
  {
    path: '/toruabi-pirita',
    lastmod: '2026-04-04',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Avarii toruabi meister tööl Pirita piirkonnas',
        caption: 'Professionaalne toruabi ja kanalisatsiooni toruabi Piritas 24/7',
      },
    ],
  },
  {
    path: '/toruabi-viimsi',
    lastmod: '2026-04-04',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Avarii toruabi meister tööl Viimsi piirkonnas',
        caption: 'Professionaalne toruabi ja kanalisatsiooni toruabi Viimsis 24/7',
      },
    ],
  },
  {
    path: '/toruabi-maardu',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Maardus',
        caption: 'Avarii toruabi ja kanalisatsiooni toruabi Maardus ning Harjumaal',
      },
    ],
  },
  {
    path: '/toruabi-keila',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Keilas',
        caption: 'Toruabi Keilas ja Keila vallas 24/7',
      },
    ],
  },
  {
    path: '/toruabi-saue',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Sauel',
        caption: 'Toruabi Saue vallas ja lähistel',
      },
    ],
  },
  {
    path: '/toruabi-rae',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Rae piirkonnas',
        caption: 'Toruabi Rae vallas ja lähistel',
      },
    ],
  },
  {
    path: '/toruabi-saku',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Sakus',
        caption: 'Toruabi Saku vallas 24/7',
      },
    ],
  },
  {
    path: '/toruabi-harku',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Harkus',
        caption: 'Toruabi Harkus ja Harku vallas',
      },
    ],
  },
  {
    path: '/toruabi-joelahtme',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Jõelähtme vallas',
        caption: 'Toruabi Jõelähtme vallas ja lähistel',
      },
    ],
  },
  {
    path: '/toruabi-kiili',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Kiilis',
        caption: 'Toruabi Kiili vallas',
      },
    ],
  },
  {
    path: '/toruabi-kose',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Kose vallas',
        caption: 'Toruabi Kose vallas ja lähistel',
      },
    ],
  },
  {
    path: '/toruabi-anija',
    lastmod: '2026-04-25',
    changefreq: 'monthly',
    priority: '0.9',
    images: [
      {
        loc: '/photos/maintoruabii.webp',
        title: 'Toruabi Anija vallas',
        caption: 'Toruabi Anija vallas ja Kehra piirkonnas',
      },
    ],
  },
];
