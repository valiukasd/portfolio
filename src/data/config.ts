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
    title: 'Pradžia - Deividas Valiukas',
    description:
      'Deivido Valiuko asmeninė CV svetainė. Deividas Valiukas suteikia web svetainių, dizaino, serverių kūrimo, hostingo, bei kitas IT paslaugas.',
    faviconPath: '/src/assets/portfolio/Portfolio-Logo.png',
  },
  pdf: {
    footer: 'Sutinku, kad mano asmens duomenys, įtraukti į mano CV, būtų tvarkomi įdarbinimo proceso tikslais.',
  },
  cta: {
    title: 'Reikia svetainės?',
    description: 'Suteikiu svetainės kūrimo bei administravimo paslaugas nuo idėjos iki įgyvendinimo. Susisiekime!',
    icon: 'twemoji:waving-hand',
    visible: true,
    buttonLabel: 'Susisiekti →',
    buttonUrl: 'mailto:labas@valiukasd.lt',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
