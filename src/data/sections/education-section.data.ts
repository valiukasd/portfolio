import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Išsilavinimas',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Pagrindinis išsilavinimas',
      institution: 'Vilniaus Salininkų gimnazija',
      image: import('@/assets/logos/salininkai-logo.png'),
      dates: [new Date('2017.09'), new Date('2021.06')],
      description: 'Pagrindinis mokyklinis išsilavinimas.',
      links: [website({ url: 'https://www.salininku.vilnius.lm.lt/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
