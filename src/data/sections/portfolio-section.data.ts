import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github } from '../helpers/links';
import { astro, eslint, nextJs, pnpm, prettier, react, tailwindCss, typescript } from '../helpers/skills';

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
    {
      name: 'valiukasd.lt',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2023-06'), null],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        { label: 'Mano pareigos', value: ['Front-end programuotojas', 'Dizaineris'] },
        { label: 'Įmonė', value: 'Nėra' },
        { label: 'Kategorija', value: ['Svetainė', 'Portfolio', 'Atvirojo-kodo'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://valiukasd.lt/', url: 'https://valiukasd.lt/' },
        {
          label: 'Github',
          value: 'https://github.com/valiukasd/portfolio',
          url: 'https://github.com/valiukasd/portfolio',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Pirmoji nuotrauka' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Antroji nuotrauka' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Trečioji nuotrauka' },
      ],
      description:
        'Šią svetainę sukūriau kaip savo CV svetainės formatu bei norėjau parodyti savo dabartiniu bei praeitus projektus. Šį projektą dariau apie savaitę ir labai džiaugiuosi jog pasirinkau naują technologiją su kuria ankščiau nesu dirbęs.',
      tagsList: {
        title: 'Technologijos',
        tags: [astro(), typescript(), tailwindCss(), pnpm(), eslint(), prettier()],
      },
      links: [demo({ url: 'https://valiukasd.lt/' }), github({ url: 'https://github.com/valiukasd/portfolio' })],
    },
    {
      name: 'Avimeta',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2023-02'), null],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        { label: 'Mano pareigos', value: ['Front-end programuotojas', 'Back-end programuotojas', 'Dizaineris'] },
        { label: 'Įmonė', value: 'Nėra' },
        { label: 'Kategorija', value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Pirmoji nuotrauka' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Antroji nuotrauka' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Trečioji nuotrauka' },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://avimeta.valiukasd.lt', url: 'https://avimeta.valiukasd.lt' },
        {
          label: 'Repository',
          value: 'https://github.com/valiukasd/avimeta',
          url: 'https://github.com/valiukasd/avimeta',
        },
      ],
      description:
        'Šią internetinę parduotuvę sukūriau kaip savo pirmąjį pilną projektą, savo įgūdžiams įtvirtinti. Darbo įdėjau labai daug, kadangi viską dariau nuo nulio, tačiau išmokau labai daug ir labai džiaugiuosi jog užbaigiau šį projektą.',
      tagsList: {
        title: 'Technologijos',
        tags: [nextJs(), react(), typescript(), tailwindCss(), eslint(), pnpm()],
      },
      links: [demo({ url: 'https://avimeta.valiukasd.lt' }), github({ url: 'https://github.com/valiukasd/avimeta' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
