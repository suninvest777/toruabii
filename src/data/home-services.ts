import { SERVICE_ICONS } from './service-icons';

export type HomeServiceItem = {
  path: string;
  icon: string;
  image: string;
  titleEt: string;
  titleRu: string;
  descEt: string;
  descRu: string;
};

/** Avalehe teenuste grid ja menüü (9 põhiteenust) */
export const HOME_SERVICES: HomeServiceItem[] = [
  {
    path: '/toruabi-avariiline-valjakutse',
    icon: SERVICE_ICONS.toruabiAvariitood,
    image: '/photos/luk-na-ulice.webp',
    titleEt: 'Toruabi ja avariitööd 24h',
    titleRu: 'Сантехнические аварийные работы 24ч',
    descEt: 'Ööpäevaringne sanitaartehniline abi',
    descRu: 'Круглосуточная сантехническая помощь',
  },
  {
    path: '/toruabi-ummistuste-likvideerimine',
    icon: SERVICE_ICONS.ujustamineLekvideerimine,
    image: '/photos/sifon.webp',
    titleEt: 'Ummistuste likvideerimine',
    titleRu: 'Устранение засоров',
    descEt: 'Toruabi ummistus ja kanalisatsiooni toruabi 24/7',
    descRu: 'Торуаби при засоре канализации — выезд 24/7',
  },
  {
    path: '/hinnakiri',
    icon: SERVICE_ICONS.tehnosusteemideVideouuring,
    image: '/photos/prokladka1.webp',
    titleEt: 'Tehnosüsteemide videouuring',
    titleRu: 'Видеообследование техносистем',
    descEt: 'Professionaalne kaamerauuring',
    descRu: 'Профессиональное видеообследование',
  },
  {
    path: '/toruabi-kanalisatsiooni-survepesu',
    icon: SERVICE_ICONS.ujustamineLekvideerimine,
    image: '/photos/maintoruabii.webp',
    titleEt: 'Survepesu',
    titleRu: 'Гидродинамическая промывка',
    descEt: 'Kanalisatsiooni trasside survepesu',
    descRu: 'Гидропромывка канализационных линий',
  },
  {
    path: '/toruabi-rasvapuuduri-puhastus',
    icon: SERVICE_ICONS.rasvapuuduriPuhastus,
    image: '/photos/boiler1.webp',
    titleEt: 'Rasvapüüduri puhastus',
    titleRu: 'Очистка жироуловителя',
    descEt: 'Rasvapüüduri puhastus ja trasside survepesu',
    descRu: 'Очистка жироуловителя и промывка трасс',
  },
  {
    path: '/hinnakiri',
    icon: SERVICE_ICONS.wcPotipaigaldus,
    image: '/photos/sifon.webp',
    titleEt: 'WC potipaigaldus',
    titleRu: 'Установка унитаза',
    descEt: 'WC potipaigaldus, vahetus ja remont',
    descRu: 'Установка, замена и ремонт унитаза',
  },
  {
    path: '/hinnakiri',
    icon: SERVICE_ICONS.kuttesusteemideRenoveerimine,
    image: '/photos/otoplenije-batarei-liking.webp',
    titleEt: 'Küttesüsteemi renoveerimine',
    titleRu: 'Реконструкция системы отопления',
    descEt: 'Küttesüsteemide renoveerimine, ehitus ja remont',
    descRu: 'Реконструкция, строительство и ремонт отопления',
  },
  {
    path: '/hinnakiri',
    icon: SERVICE_ICONS.veeJaKanalisatsiooni,
    image: '/photos/luk-na-ulice.webp',
    titleEt: 'Kaevetööd',
    titleRu: 'Земляные работы',
    descEt: 'Professionaalsed kaevetööd',
    descRu: 'Профессиональные земляные работы',
  },
  {
    path: '/hinnakiri',
    icon: SERVICE_ICONS.veeJaKanalisatsiooni,
    image: '/photos/prokladka1.webp',
    titleEt: 'Trasside remont ja ehitus',
    titleRu: 'Ремонт и строительство трасс',
    descEt: 'Vee ja kanalisatsiooni trasside remont ja ehitus',
    descRu: 'Ремонт и строительство водопроводных и канализационных трасс',
  },
];
