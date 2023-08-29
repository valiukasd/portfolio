import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, website } from '../helpers/links';

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
      dates: [new Date('2023-03'), null],
      description: `
        Darbas smulkioje įmonėje su klientais, transportavimo paslaugomis, mokeščių tvarkymu bei dokumentų forminimu, kuriame išvysčiau šiuos įgūdžius:
        &nbsp;
        - **Įmonės valdymas** dirbant su dokumentais, valstybės bei kitomis įstaigomis.
        - **Komandinio darbo igūdžiai** dirbant ir komunikuojant su darbuotojais.
        - **Finansiniai įgūdžiai** mokant mokeščius, užsakant paslaugas bei perkant įmonei reikalingas prekes.
        &nbsp;

        Ir daug kitų kurių nespėsiu čia išvardinti...
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://gaveikenai.lt' })],
    },
    {
      role: 'Buhalteris',
      company: 'Vilniaus MSV-1',
      image: import('@/assets/logos/msv.png'),
      dates: [new Date('2023-03'), null],
      description: `
        Dirbu savo sodininkų bendrijoje su pinigais, mokeščių ir dokumentų tvarkymu, ir vystau šiuos įgūdžius:
        &nbsp;
        - **Finansiniai igūdžiai** mokant mokeščius, užsakant paslaugas bei perkant įmonei reikalingas prekes.
        - **Komunikacijos igūdžiai** renkant pinigus iš sodininkų.
        &nbsp;

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
        &nbsp;
        - **Kritinis mastymas** įtemptomis darbo valandomis.
        - **Komandinis darbas** su bendradarbiais maisto gaminimo procese.
        - **Atsakomybė** gaminant maistą bei besirūpinant švara.
        - **Bendravimas** aptarnaujant klientus.
        &nbsp;

        Ir daug kitų kurių nespėsiu čia išvardinti...
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.kebappa.lt/' }), facebook({ url: 'https://www.facebook.com/kebappa/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
