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
      role: 'Vadovas',
      company: 'UAB Codus',
      image: import('@/assets/logos/codus.png'),
      dates: [new Date('2023-11'), null],
      description: `
        Darbas nuosavoje įmonėje, kuri teikia informacinių technologijų sprendimus. Kadangi įmonėje kol kas dirbu vienas, turiu būti labai dinamiškas - prisiimti buhalterijos tvarkymą, įmonės vystymą, klientų ieškojimą, pardavimus, programavimą, projektų administravimą. Šiame darbe išsyk vystau šiuos igūdžius:
        &nbsp;
        - **Full-Stack programavimo įgūdžiai** dirbant su projektais: sprendimų sudarymas ir įgyvendinimas atsižvelgiant į kliento norus bei poreikius.
        - **Mobiliųjų programėlių kūrimo įgūdžiai** dirbant su projektais: optimizuotų bei modernių mobiliųjų programėlių kūrimas.
        - **Sistemų administravimo įgūdžiai** prižiūrint projektus: jau užbaigtų projektų palaikymas, našumo užtikrinimas.
        - **Komunikaciniai įgūdžiai** bendraujant su klientais ir analizuojant jų norus.
        - **Verslo raidos įgūdžiai** vystant įmonę, tvarkant administracinius dokumentus, buhalterinius dokumentus.
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.codus.lt' })],
    },
    {
      role: 'Front-End Programuotojas',
      company: 'Repi',
      image: import('@/assets/logos/repi.jpg'),
      dates: [new Date('2023-09'), new Date("2024-11")],
      description: `
        Darbas komandoje kuriant naują platformą. Šioje pozicijoje išsyk vystau šiuos igūdžius:
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
      links: [
        website({
          url: 'https://rekvizitai.vz.lt/imone/sodininku_bendrija_vilniaus_msv_1/',
        }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
