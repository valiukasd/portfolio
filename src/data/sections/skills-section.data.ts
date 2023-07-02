import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  apolloGraphql,
  astro,
  cypress,
  eslint,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  supabase,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Įgūdžiai',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Jau moku',
      skills: [
        nestJs({
          level: 3,
        }),
        react({
          level: 5,
        }),
        typescript({
          level: 4,
        }),
        tailwindCss({ level: 5 }),
        prettier({ level: 5 }),
        pnpm({ level: 5 }),
        eslint({
          level: 4,
        }),
        apolloGraphql({ level: 3 }),
        postgreSql({ level: 3 }),
        mongoDb({ level: 2 }),
        astro({ level: 1 }),
      ],
    },
    {
      title: 'Noriu išmokti',
      skills: [astro(), supabase(), cypress(), vue(), angular()],
    },
    {
      title: 'Kalbu šiomis kalbomis',
      skills: [
        { icon: 'circle-flags:lt', name: 'Lietuvių - gimtoji' },
        { icon: 'circle-flags:us', name: 'Anglų - puikiai kalbu bei rašau' },
        { icon: 'circle-flags:ru', name: 'Rusų - moku susikalbėti' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
