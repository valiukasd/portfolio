import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import { t } from 'astro-i18n';

const educationSectionData = {
  config: {
    title: t('config.main.sections.education.config.title'),
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: t('config.main.sections.education.diploma1.title'),
      institution: t('config.main.sections.education.diploma1.institution'),
      image: import('@/assets/logos/salininkai.png'),
      dates: [new Date('2017.09'), new Date('2021.06')],
      description: t('config.main.sections.education.diploma1.description'),
      links: [website({ url: 'https://www.salininku.vilnius.lm.lt/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
