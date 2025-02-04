import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { android, github, ios, website } from '../helpers/links';
import {
  astro,
  eslint,
  nextJs,
  npm,
  pnpm,
  prettier,
  react,
  tailwindCss,
  typescript,
  angular,
  reactNative,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projektai',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Nuotraukos',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    // {
    //   name: 'Maestros',
    //   image: import('@/assets/logos/maestros.png'),
    //   dates: [new Date('2024-07'), null],
    //   details: [
    //     { label: 'Komandos dydis', value: '1 asmuo' },
    //     {
    //       label: 'Mano pareigos',
    //       value: ['Mobiliosios aplikacijos programuotojas'],
    //     },
    //     { label: 'Įmonė', value: 'UAB Termobaltic' },
    //     {
    //       label: 'Kategorijos',
    //       value: ['Mobilioji programėlė'],
    //     },
    //   ],
    //   pdfDetails: [
    //     {
    //       label: 'Android',
    //       value: 'https://www.maestros.lt/',
    //       url: 'https://www.maestros.lt/',
    //     },
    //     {
    //       label: 'iOS',
    //       value: 'https://www.maestros.lt/',
    //       url: 'https://www.maestros.lt/',
    //     },
    //   ],
    //   description:
    //     'Maestros mobilioji programėlė - svetainės versija tiesiogiai vartotojų telefone. Programėlė pilnai optimizuota, sukurta iOS ir Android versija.',
    //   tagsList: {
    //     title: 'Technologijos',
    //     tags: [reactNative(), typescript(), tailwindCss(), npm(), prettier(), eslint()],
    //   },
    //   links: [android({ url: 'https://www.maestros.lt/' }), ios({ url: 'https://www.maestros.lt/' })],
    // },
    {
      name: 'www.lioness.lt',
      image: import('@/assets/logos/lioness.png'),
      dates: [new Date('2024-11'), new Date("2024-12")],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Full-Stack programuotojas'],
        },
        { label: 'Įmonė', value: 'MB Lioness LT' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė', 'Internetinė platforma'],
        },
      ],
      pdfDetails: [
        {
          label: 'Svetainė',
          value: 'https://www.lioness.lt/',
          url: 'https://www.lioness.lt/',
        },
      ],
      description:
        'Lioness - sveikatingumo studijos treniruočių rezervavimo platforma. Pagrindinis fokusas buvo skirtas laikų ir registracijų automatizacijai ir geriausiai vartotojo patirčiai.',
      tagsList: {
        title: 'Technologijos',
        tags: [react(), nextJs(), typescript(), tailwindCss(), npm(), prettier(), eslint()],
      },
      links: [website({ url: 'https://www.maestros.lt/' })],
    },
    {
      name: 'www.maestros.lt',
      image: import('@/assets/logos/maestros.png'),
      dates: [new Date('2024-05'), null],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Full-Stack programuotojas'],
        },
        { label: 'Įmonė', value: 'UAB Termobaltic' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė', 'Internetinė platforma'],
        },
      ],
      pdfDetails: [
        {
          label: 'Svetainė',
          value: 'https://www.maestros.lt/',
          url: 'https://www.maestros.lt/',
        },
      ],
      description:
        'Maestros - nauja paslaugų skelbimo platforma. Šia platformą kūriau atsižvelgiant į kliento norus, dabartinę paslaugų portalų rinką, geriausią vartotojo patirtį.',
      tagsList: {
        title: 'Technologijos',
        tags: [react(), nextJs(), typescript(), tailwindCss(), npm(), prettier(), eslint()],
      },
      links: [website({ url: 'https://www.maestros.lt/' })],
    },
    {
      name: 'www.codus.lt',
      image: import('@/assets/logos/codus.png'),
      dates: [new Date('2023-12'), new Date('2024-02')],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Full-Stack programuotojas'],
        },
        { label: 'Įmonė', value: 'UAB Codus' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė'],
        },
      ],
      pdfDetails: [
        {
          label: 'Svetainė',
          value: 'https://www.codus.lt/',
          url: 'https://www.codus.lt/',
        },
      ],
      description: 'Mano įmonės reprezentacinė svetainė.',
      tagsList: {
        title: 'Technologijos',
        tags: [react(), nextJs(), typescript(), tailwindCss(), npm(), prettier(), eslint()],
      },
      links: [website({ url: 'https://www.codus.lt/' })],
    },
    {
      name: 'www.vilagnis.lt',
      image: import('@/assets/logos/vilagnis.png'),
      dates: [new Date('2024-01'), new Date('2024-02')],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Front-End programuotojas'],
        },
        { label: 'Įmonė', value: 'UAB Vilagnis' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė'],
        },
      ],
      pdfDetails: [
        {
          label: 'Svetainė',
          value: 'https://vilagnis.lt/',
          url: 'https://vilagnis.lt/',
        },
      ],
      description:
        'UAB Vilagnis reprezentacinė internetinė svetainė su papildomu funkcionalumu - katilų klaidų kodų paieška, atsarginių dalių katalogas.',
      tagsList: {
        title: 'Technologijos',
        tags: [react(), nextJs(), typescript(), tailwindCss(), npm(), prettier(), eslint()],
      },
      links: [website({ url: 'https://vilagnis.lt/' })],
    },
    {
      name: 'www.repi.lt',
      image: import('@/assets/logos/repi.jpg'),
      dates: [new Date('2023-09'), null],
      details: [
        { label: 'Komandos dydis', value: '3 asmenys' },
        {
          label: 'Mano pareigos',
          value: ['Front-end programuotojas'],
        },
        { label: 'Įmonė', value: 'Repi' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė', 'Internetinė platforma'],
        },
      ],
      pdfDetails: [
        {
          label: 'Svetainė',
          value: 'https://repi.lt/',
          url: 'https://repi.lt/',
        },
      ],
      description: 'Repi - automobilių remonto platforma, sujungianti galutinį vartotoją su remonto įmonėmis.',
      tagsList: {
        title: 'Technologijos',
        tags: [angular(), typescript(), tailwindCss(), npm(), prettier(), eslint()],
      },
      links: [website({ url: 'https://repi.lt/' })],
    },
    {
      name: 'www.gaveikenai.lt',
      image: import('@/assets/portfolio/Gaveikenai-Logo.png'),
      dates: [new Date('2023-07'), new Date('2023-08')],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Front-end programuotojas', 'Dizaineris'],
        },
        { label: 'Įmonė', value: 'UAB Gaveikenai' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė'],
        },
      ],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'https://gaveikenai.lt/',
          url: 'https://gaveikenai.lt/',
        },
      ],
      screenshots: [
        {
          src: import('@/assets/portfolio/gaveikenai-1.png'),
          alt: 'Pirmoji nuotrauka',
        },
        {
          src: import('@/assets/portfolio/gaveikenai-2.png'),
          alt: 'Antroji nuotrauka',
        },
        {
          src: import('@/assets/portfolio/gaveikenai-3.png'),
          alt: 'Trečioji nuotrauka',
        },
      ],
      description:
        'Šią svetainę sukūriau kaip įmonės UAB Gaveikenai informacinį puslapį, kuriame pateikiami įmonės kontaktai, bei trumpas aprašas apie įmonės veiklą. Svetainė pilnai optimizuota SEO, bei turi labai greitą krovimo laiką.',
      tagsList: {
        title: 'Technologijos',
        tags: [astro(), typescript(), tailwindCss(), pnpm(), eslint(), prettier()],
      },
      links: [website({ url: 'https://gaveikenai.lt/' })],
    },
    {
      name: 'www.valiukasd.lt',
      image: import('@/assets/portfolio/Portfolio-Logo.png'),
      dates: [new Date('2023-06'), new Date('2023-07')],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Front-end programuotojas', 'Dizaineris'],
        },
        { label: 'Įmonė', value: 'Nėra' },
        {
          label: 'Kategorijos',
          value: ['Svetainė', 'Portfolio', 'Atvirojo-kodo'],
        },
      ],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'https://valiukasd.lt/',
          url: 'https://valiukasd.lt/',
        },
        {
          label: 'Github',
          value: 'https://github.com/valiukasd/portfolio',
          url: 'https://github.com/valiukasd/portfolio',
        },
      ],
      screenshots: [
        {
          src: import('@/assets/portfolio/valiukasd-1.png'),
          alt: 'Pirmoji nuotrauka',
        },
        {
          src: import('@/assets/portfolio/valiukasd-2.png'),
          alt: 'Antroji nuotrauka',
        },
        {
          src: import('@/assets/portfolio/valiukasd-3.png'),
          alt: 'Trečioji nuotrauka',
        },
      ],
      description:
        'Šią svetainę sukūriau kaip savo CV svetainės formatu bei dabartinių ir praeitų projektų parodą. Šį projektą dariau apie savaitę ir labai džiaugiuosi jog pasirinkau naują technologiją, su kuria anksčiau nesu dirbęs.',
      tagsList: {
        title: 'Technologijos',
        tags: [astro(), react(), typescript(), tailwindCss(), npm(), eslint(), prettier()],
      },
      links: [website({ url: 'https://valiukasd.lt/' }), github({ url: 'https://github.com/valiukasd/portfolio' })],
    },
    {
      name: 'Avimeta',
      image: import('@/assets/portfolio/Avimeta-Logo.png'),
      dates: [new Date('2023-02'), new Date('2023-07')],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        {
          label: 'Mano pareigos',
          value: ['Front-end programuotojas', 'Back-end programuotojas', 'Dizaineris'],
        },
        { label: 'Įmonė', value: 'Nėra' },
        {
          label: 'Kategorijos',
          value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė'],
        },
      ],
      screenshots: [
        {
          src: import('@/assets/portfolio/avimeta-1.png'),
          alt: 'Pirmoji nuotrauka',
        },
        {
          src: import('@/assets/portfolio/avimeta-2.png'),
          alt: 'Antroji nuotrauka',
        },
        {
          src: import('@/assets/portfolio/avimeta-3.png'),
          alt: 'Trečioji nuotrauka',
        },
      ],
      pdfDetails: [
        {
          label: 'Svetainė',
          value: 'https://avimeta.valiukasd.lt',
          url: 'https://avimeta.valiukasd.lt',
        },
      ],
      description:
        'Šią internetinę parduotuvę sukūriau kaip savo pirmąjį pilną projektą, savo įgūdžiams įtvirtinti. Darbo įdėjau labai daug, kadangi viską dariau nuo nulio, tačiau išmokau labai daug ir labai džiaugiuosi jog užbaigiau šį projektą. Deja, ši svetainė nėra pasiekiama šiandien.',
      tagsList: {
        title: 'Technologijos',
        tags: [nextJs(), react(), typescript(), tailwindCss(), eslint(), pnpm()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
