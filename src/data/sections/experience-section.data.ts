import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const experienceSectionData = {
  config: {
    title: 'Darbo patirtis',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Direktorius',
      company: 'Gaveikenai UAB',
      image: import('@/assets/logos/gaveikenai.png'),
      dates: [new Date('2023-08'), null],
      description: `
        Darbas smulkioje įmonėje su klientais, transportavimo paslaugomis, mokeščių tvarkymu bei dokumentų forminimu, kuriame išvysčiau šiuos įgūdžius:

        - **Įmonės valdymas** dirbant su dokumentais, valstybės bei kitomis įstaigomis.
        - **Komandos valdymas** dirbant ir komunikuojant su darbuotojais.
        - **Pinigų valdymas** mokant mokeščius, užsakant paslaugas bei perkant įmonei reikalingas prekes.

        Ir daug kitų kurių nespėsiu čia išvardinti...
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [],
    },
    {
      role: 'Buhalteris',
      company: 'Vilniaus MSV-1',
      image: import('@/assets/logos/msv.png'),
      dates: [new Date('2023-08'), null],
      description: `
        Dirbu savo sodininkų bendrijoje su pinigais, mokeščių ir dokumentų tvarkymu, ir vystau šiuos įgūdžius:

        - **Pinigų valdymas** mokant mokeščius, užsakant paslaugas bei perkant įmonei reikalingas prekes.
        - **Komunikacijos igūdžiai** renkant pinigus iš sodininkų.

        Ir daug kitų kurių nespėsiu čia išvardinti...
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://rekvizitai.vz.lt/imone/sodininku_bendrija_vilniaus_msv_1/' })],
    },
    {
      role: 'Maisto darbuotojas',
      company: 'Kebappa',
      image: import('@/assets/logos/kebappa.png'),
      dates: [new Date('2021-06'), new Date('2021-07')],
      description: `
        Darbas su maistu, klientų aptarnavimas, kuriame buvo vystomi šie įgūdžiai:

        - **Kritinis mastymas** įtemptomis darbo valandomis.
        - **Komandinis darbas** su bendradarbiais maisto gaminimo procese.
        - **Atsakomybė** gaminant maistą bei besirūpinant švara.
        - **Bendravimas** aptarnaujant klientus.

        Ir daug kitų kurių nespėsiu čia išvardinti...
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.kebappa.lt/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
