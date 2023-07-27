import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, website } from '../helpers/links';
import { astro, eslint, nextJs, npm, pnpm, prettier, react, tailwindCss, typescript } from '../helpers/skills';

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
      image: import('@/assets/portfolio/Portfolio-Logo.png'),
      dates: [new Date('2023-06'), new Date('2023-07')],
      details: [
        { label: 'Komandos dydis', value: '1 asmuo' },
        { label: 'Mano pareigos', value: ['Front-end programuotojas', 'Dizaineris'] },
        { label: 'Įmonė', value: 'Nėra' },
        { label: 'Kategorijos', value: ['Svetainė', 'Portfolio', 'Atvirojo-kodo'] },
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
        { src: import('@/assets/portfolio/valiukasd-1.png'), alt: 'Pirmoji nuotrauka' },
        { src: import('@/assets/portfolio/valiukasd-2.png'), alt: 'Antroji nuotrauka' },
        { src: import('@/assets/portfolio/valiukasd-3.png'), alt: 'Trečioji nuotrauka' },
      ],
      description:
        'Šią svetainę sukūriau kaip savo CV svetainės formatu bei norėjau parodyti savo dabartiniu bei praeitus projektus. Šį projektą dariau apie savaitę ir labai džiaugiuosi jog pasirinkau naują technologiją su kuria ankščiau nesu dirbęs.',
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
        { label: 'Mano pareigos', value: ['Front-end programuotojas', 'Back-end programuotojas', 'Dizaineris'] },
        { label: 'Įmonė', value: 'Nėra' },
        { label: 'Kategorijos', value: ['Internetinė svetainė', 'Mobiliesiems pritaikyta svetainė'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/avimeta-1.png'), alt: 'Pirmoji nuotrauka' },
        { src: import('@/assets/portfolio/avimeta-2.png'), alt: 'Antroji nuotrauka' },
        { src: import('@/assets/portfolio/avimeta-3.png'), alt: 'Trečioji nuotrauka' },
      ],
      pdfDetails: [
        { label: 'Svetainė', value: 'https://avimeta.valiukasd.lt', url: 'https://avimeta.valiukasd.lt' },
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
      links: [website({ url: 'https://avimeta.valiukasd.lt' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
