import {
  blogCategoryBoiler,
  blogCategoryHeating,
  blogCategorySewer,
  type BlogCategoryBreadcrumb,
} from '../utils/seo-jsonld';

export type BlogArticleBreadcrumbMeta = {
  category: BlogCategoryBreadcrumb;
  crumbNameEt: string;
  crumbNameRu: string;
};

/** Breadcrumb labels for JSON-LD overrides on blog post pages. */
export const blogArticleBreadcrumbMeta: Record<string, BlogArticleBreadcrumbMeta> = {
  'tsirkulatsioonipump': {
    category: blogCategoryHeating,
    crumbNameEt: 'Tsirkulatsioonipump küttesüsteemis',
    crumbNameRu: 'Циркуляционный насос в системе отопления',
  },
  'radiaatori-valik': {
    category: blogCategoryHeating,
    crumbNameEt: 'Radiaatori valik',
    crumbNameRu: 'Выбор радиатора',
  },
  'pump-margi-ja-kuiva-rootoriga': {
    category: blogCategoryHeating,
    crumbNameEt: 'Pump margi ja kuiva rootoriga',
    crumbNameRu: 'Насос с мокрым и сухим ротором',
  },
  'puhvermahuti': {
    category: blogCategoryHeating,
    crumbNameEt: 'Puhvermahuti',
    crumbNameRu: 'Буферная ёмкость',
  },
  'laienduspaak-kutte-ja-gvs': {
    category: blogCategoryHeating,
    crumbNameEt: 'Laienduspaak kütte ja GVS',
    crumbNameRu: 'Расширительный бак отопления и ГВС',
  },
  'kuttesusteemi-hooldus-radiaatorite-tyhjendamine': {
    category: blogCategoryHeating,
    crumbNameEt: 'Küttesüsteemi hooldus ja radiaatorite tühjendamine',
    crumbNameRu: 'Обслуживание отопления и стравливание радиаторов',
  },
  'kuttesusteem-eramaja': {
    category: blogCategoryHeating,
    crumbNameEt: 'Küttesüsteem eramajas',
    crumbNameRu: 'Система отопления в частном доме',
  },
  'kollektorigrupp': {
    category: blogCategoryHeating,
    crumbNameEt: 'Kollektorigrupp',
    crumbNameRu: 'Коллекторная группа',
  },
  'kanalisatsiooni-ummistus-mida-teha': {
    category: blogCategorySewer,
    crumbNameEt: 'Kanalisatsiooni ummistus - mida teha?',
    crumbNameRu: 'Засор канализации - что делать?',
  },
  'hudroakumulaatorid-ja-laienduspaagid': {
    category: blogCategoryHeating,
    crumbNameEt: 'Hüdroakumulaatorid ja laienduspaagid',
    crumbNameRu: 'Гидроаккумуляторы и расширительные баки',
  },
  'elektrikatla-ulehendamine': {
    category: blogCategoryHeating,
    crumbNameEt: 'Elektrikatla ühendamine',
    crumbNameRu: 'Подключение электрокотла',
  },
  'boileri-hooldus-ja-loputus': {
    category: blogCategoryBoiler,
    crumbNameEt: 'Boileri hooldus ja loputus',
    crumbNameRu: 'Обслуживание и промывка бойлера',
  },
  'bimetalliline-radiaator': {
    category: blogCategoryHeating,
    crumbNameEt: 'Bimetalliline radiaator',
    crumbNameRu: 'Биметаллический радиатор',
  },
  'avatud-ja-suletud-kuttesusteemid': {
    category: blogCategoryHeating,
    crumbNameEt: 'Avatud ja suletud küttesüsteemid',
    crumbNameRu: 'Открытые и закрытые системы отопления',
  },
};
