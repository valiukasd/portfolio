import { defineAstroI18nConfig } from 'astro-i18n';

export default defineAstroI18nConfig({
  defaultLangCode: 'lt',
  supportedLangCodes: ['en'],
  showDefaultLangCode: false,
  translations: {
    en: 'i18n/en.json',
    lt: 'i18n/lt.json',
  },
  routeTranslations: {},
});
