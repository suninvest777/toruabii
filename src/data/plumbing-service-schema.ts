/** Shared JSON-LD for BaseLayout: full graph on / and /ru only; compact elsewhere. Main entity `@id` is `${siteUrl}#business`. */

const serviceTypes = [
  'toruabi',
  'avarii toruabi',
  'Emergency Plumbing',
  'Drain Cleaning',
  'Heating Installation',
  'Boiler Repair',
  'Sanitary Services',
  'Video Inspection',
  'Pressure Washing',
] as const;

const areaServedFull = [
  {
    '@type': 'City',
    name: 'Tallinn',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Viimsi',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Maardu',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Keila',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Saue',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Rae',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Saku',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Harku',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Jõelähtme',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Kiili',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Kose',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  {
    '@type': 'City',
    name: 'Anija',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  { '@type': 'State', name: 'Harjumaa', addressCountry: 'EE' },
] as const;

const areaServedCompact = [
  {
    '@type': 'City',
    name: 'Tallinn',
    containedIn: { '@type': 'State', name: 'Harjumaa' },
  },
  { '@type': 'State', name: 'Harjumaa', addressCountry: 'EE' },
] as const;

const hasOfferCatalog = {
  '@type': 'OfferCatalog',
  name: 'Avarii Toruabi Teenused',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Toruabi ja avariitööd 24h',
        description: 'Toruabi ja sanitaartehnilised avariitööd 24/7 Tallinnas ja Harjumaal',
        serviceType: 'Emergency Plumbing',
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '35',
        unitText: 'hour',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Ummistuste likvideerimine 24h',
        description: 'Toruabi ja kanalisatsiooni ummistuste likvideerimine — kiire reageerimine',
        serviceType: 'Drain Cleaning',
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '50',
        unitText: 'from',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tehnosüsteemide videouuring',
        description: 'Professionaalne kaamerauuring',
        serviceType: 'Video Inspection',
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '45',
        unitText: 'hour',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Survepesu',
        description: 'Kanalisatsioonisüsteemide survepesu',
        serviceType: 'Pressure Washing',
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '200',
        unitText: 'from',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Küttesüsteemi renoveerimine',
        description: 'Küttesüsteemide renoveerimine, ehitus ja remont',
        serviceType: 'Heating System Renovation',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Boileri paigaldus ja remont',
        description: 'Boileri paigaldus, remont ja hooldus',
        serviceType: 'Boiler Installation and Repair',
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '120',
        unitText: 'from',
      },
    },
  ],
} as const;

export function buildPlumbingServiceSchema(opts: {
  siteUrl: string;
  full: boolean;
}): Record<string, unknown> {
  const { siteUrl, full } = opts;
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Plumber', 'PlumbingService'],
    '@id': `${siteUrl}#business`,
    name: 'Toruabi toruabii.ee',
    alternateName: ['toruabii.ee', 'Toruabi Tallinnas', 'Avarii toruabi 24/7'],
    url: siteUrl,
    logo: `${siteUrl}/photos/toruabii.webp`,
    image: `${siteUrl}/photos/maintoruabii.webp`,
    description:
      'toruabii.ee pakub toruabi, avarii toruabi, toruabi tallinn ja toruabi harjumaa teenuseid 24/7 — kanalisatsiooni ummistuste likvideerimine, lekked ja boiler.',
    telephone: '+37256333332',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tallinn',
      addressRegion: 'Harjumaa',
      addressCountry: 'EE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.437,
      longitude: 24.7536,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: full ? [...areaServedFull] : [...areaServedCompact],
    serviceType: [...serviceTypes],
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'EUR',
    email: 'info@toruabii.ee',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+37256333332',
      contactType: 'customer service',
      areaServed: 'EE',
      availableLanguage: ['et', 'ru'],
      email: 'info@toruabii.ee',
    },
    foundingDate: '2014',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
    slogan: 'Toruabi 24/7 – avarii toruabi Tallinnas ja toruabi Harjumaa',
    knowsAbout: [
      'Emergency Plumbing',
      'Drain Cleaning',
      'Heating System Installation',
      'Boiler Repair',
      'Sanitary Services',
      'Video Inspection',
      'Pressure Washing',
      'Sewer System Maintenance',
      'Water System Repair',
    ],
    award: '10+ aastat kogemust Eestis ja Skandinavias',
    sameAs: [],
  };

  if (full) {
    base.hasOfferCatalog = JSON.parse(JSON.stringify(hasOfferCatalog)) as Record<string, unknown>;
  }

  return base;
}
