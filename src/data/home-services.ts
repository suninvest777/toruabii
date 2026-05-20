export type ServiceIconId = 'emergency' | 'clog' | 'camera' | 'pressure' | 'toilet' | 'pipes';

export type HomeServiceItem = {
  path: string;
  icon: ServiceIconId;
  image: string;
  titleEt: string;
  titleRu: string;
  descEt: string;
  descRu: string;
};

/** Avalehe teenuste grid ja menüü */
export const HOME_SERVICES: HomeServiceItem[] = [
  {
    path: '/toruabi-avariiline-valjakutse',
    icon: 'emergency',
    image: '/photos/avariitehtus.webp',
    titleEt: 'Toruabi ja avariitööd 24h',
    titleRu: 'Сантехнические аварийные работы 24ч',
    descEt: 'Ööpäevaringne sanitaartehniline abi',
    descRu: 'Круглосуточная сантехническая помощь',
  },
  {
    path: '/toruabi-ummistuste-likvideerimine',
    icon: 'clog',
    image: '/photos/sanitaretehtus.webp',
    titleEt: 'Ummistuste likvideerimine',
    titleRu: 'Устранение засоров',
    descEt: 'Toruabi ummistus ja kanalisatsiooni toruabi 24/7',
    descRu: 'Торуаби при засоре канализации — выезд 24/7',
  },
  {
    path: '/hinnakiri',
    icon: 'camera',
    image: '/photos/kameraauring.webp',
    titleEt: 'Tehnosüsteemide videouuring',
    titleRu: 'Видеообследование техносистем',
    descEt: 'Professionaalne kaamerauuring',
    descRu: 'Профессиональное видеообследование',
  },
  {
    path: '/toruabi-kanalisatsiooni-survepesu',
    icon: 'pressure',
    image: '/photos/maintoruabii.webp',
    titleEt: 'Survepesu',
    titleRu: 'Гидродинамическая промывка',
    descEt: 'Kanalisatsiooni trasside survepesu',
    descRu: 'Гидропромывка канализационных линий',
  },
  {
    path: '/hinnakiri',
    icon: 'toilet',
    image: '/photos/potipaigaldaminejpg.webp',
    titleEt: 'WC potipaigaldus',
    titleRu: 'Установка унитаза',
    descEt: 'WC potipaigaldus, vahetus ja remont',
    descRu: 'Установка, замена и ремонт унитаза',
  },
  {
    path: '/hinnakiri',
    icon: 'pipes',
    image: '/photos/trassideremondi.webp',
    titleEt: 'Trasside remont ja ehitus',
    titleRu: 'Ремонт и строительство трасс',
    descEt: 'Vee ja kanalisatsiooni trasside remont ja ehitus',
    descRu: 'Ремонт и строительство водопроводных и канализационных трасс',
  },
];
