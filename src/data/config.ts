import type { Config } from '@/types/data';
import { lt } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: lt,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'dabar',
    },
  },
  meta: {
    title: 'Deividas Valiukas',
    description:
      'Deivido Valiuko asmeninė CV svetainė. Deividas Valiukas suteikia web svetainių, serverių kūrimo, hostingo, bei kitas IT paslaugas.',
    faviconPath: '/src/assets/portfolio/Portfolio-Logo.png',
  },
  pdf: {
    footer: 'Sutinku, kad mano asmens duomenys, įtraukti į mano CV, būtų tvarkomi įdarbinimo proceso tikslais.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
