import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Deividas Valiukas',
    description:
      'Mano asmeninė CV svetainė. Deividas Valiukas suteikia web svetainių, serverių kūrimo, hostingo, bei kitas IT paslaugas',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer: 'Sutinku, kad mano asmens duomenys, įtraukti į mano CV, būtų tvarkomi įdarbinimo proceso tikslais.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
