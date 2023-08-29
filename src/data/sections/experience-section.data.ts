import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, website } from '../helpers/links';
import { t } from 'astro-i18n';

const experienceSectionData = {
  config: {
    title: t('config.main.sections.experience.config.title'),
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: t('config.main.sections.experience.jobs.job1.role'),
      company: t('config.main.sections.experience.jobs.job1.company'),
      image: import('@/assets/logos/gaveikenai.png'),
      dates: [new Date('2023-03'), null],
      description: t('config.main.sections.experience.jobs.job1.description'),
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://gaveikenai.lt' })],
    },
    {
      role: t('config.main.sections.experience.jobs.job2.role'),
      company: t('config.main.sections.experience.jobs.job2.company'),
      image: import('@/assets/logos/msv.png'),
      dates: [new Date('2023-03'), null],
      description: t('config.main.sections.experience.jobs.job2.description'),
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://rekvizitai.vz.lt/imone/sodininku_bendrija_vilniaus_msv_1/' })],
    },
    {
      role: t('config.main.sections.experience.jobs.job3.role'),
      company: t('config.main.sections.experience.jobs.job3.company'),
      image: import('@/assets/logos/kebappa.png'),
      dates: [new Date('2021-06'), new Date('2021-07')],
      description: t('config.main.sections.experience.jobs.job3.description'),
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.kebappa.lt/' }), facebook({ url: 'https://www.facebook.com/kebappa/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
