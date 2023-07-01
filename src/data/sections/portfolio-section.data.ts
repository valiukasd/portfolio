import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  astro,
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  tailwindCss,
  typescript,
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
        'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
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
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Pirmoji nuotrauka' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Antroji nuotrauka' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Trečioji nuotrauka' },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), nestJs(), postgreSql()],
      },
      links: [demo({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
