import type { Config } from '@/types/data';
import { lt } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';
import { t } from 'astro-i18n';

const config = {
  i18n: {
    locale: lt,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'dabar',
    },
  },
  meta: {
    title: t('config.main.meta.title'),
    description: t('config.main.meta.description'),
    faviconPath: '/src/assets/portfolio/Portfolio-Logo.png',
  },
  pdf: {
    footer: t('config.main.pdf.footer'),
  },
  cta: {
    title: t('config.main.cta.title'),
    description: t('config.main.cta.description'),
    icon: 'twemoji:waving-hand',
    visible: true,
    buttonLabel: t('config.main.cta.buttonLabel'),
    buttonUrl: 'mailto:labas@valiukasd.lt',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
