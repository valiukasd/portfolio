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
      role: 'Front-end Programuotojas',
      company: 'Gaveikenai UAB',
      image: import('@/assets/logos/repi.png'),
      dates: [new Date('2023-09'), null],
      description: `
        Darbas komandoje kuriant naują platformą. Šiame darbe išsyk vystau šiuos igūdžius:
        &nbsp;
        - **Komunikacijos igūdžiai** dirbant su kitomis komandomis: dizaineiriais, pardavimu bei kitomis.
        - **Komandinio darbo įgūdžiai** dirbant ir komunikuojant su komandos nariais.
        - **Problemų sprendimas** kuriant internetinę platformą skirtą apdoroti daug užsakymu bei talpinti daug duomenų.
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://repi.lt' })],
    },
    {
      role: 'Direktorius',
      company: 'Gaveikenai UAB',
      image: import('@/assets/logos/gaveikenai.png'),
      dates: [new Date('2023-03'), null],
      description: `
        Darbas smulkioje įmonėje su klientais, transportavimo paslaugomis, mokesčių tvarkymu bei dokumentų įforminimu, kuriame išvysčiau šiuos įgūdžius:
        &nbsp;
        - **Įmonės valdymas** dirbant su dokumentais, valstybės bei kitomis įstaigomis.
        - **Komandinio darbo įgūdžiai** dirbant ir komunikuojant su darbuotojais.
        - **Finansiniai įgūdžiai** mokant mokesčius, užsakant paslaugas bei perkant įmonei reikalingas prekes.
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
        Dirbu savo sodininkų bendrijoje su pinigais, mokesčių ir dokumentų tvarkymu, ir vystau šiuos įgūdžius:
        &nbsp;
        - **Finansiniai įgūdžiai** mokant mokeščius, užsakant paslaugas bei perkant įmonei reikalingas prekes.
        - **Komunikacijos įgūdžiai** renkant pinigus iš sodininkų.
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://rekvizitai.vz.lt/imone/sodininku_bendrija_vilniaus_msv_1/' })],
    }
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
