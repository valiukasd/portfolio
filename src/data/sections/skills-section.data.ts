import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  apolloGraphql,
  astro,
  cypress,
  eslint,
  mongoDb,
  nextJs,
  npm,
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
    title: 'Apie mane',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Kalbu šiomis kalbomis',
      skills: [
        { icon: 'circle-flags:lt', name: 'Lietuvių - gimtoji' },
        { icon: 'circle-flags:us', name: 'Anglų - puikiai kalbu bei rašau' },
        { icon: 'circle-flags:ru', name: 'Rusų - moku susikalbėti' },
      ],
    },
    {
      title: 'Įgūdžiai',
      skills: [
        { icon: 'fa6-solid:comments', name: 'Komunikabilumas', level: 5 },
        { icon: 'fa6-solid:person-digging', name: 'Darbštumas', level: 5 },
        { icon: 'fa6-solid:brain', name: 'Kritinis mastymas', level: 5 },
        { icon: 'fa6-solid:calendar-week', name: 'Laiko planavimas', level: 5 },
        { icon: 'fa6-solid:people-roof', name: 'Prisitaikymas', level: 4 },
        { icon: 'fa6-solid:chart-line', name: 'Vadovybė', level: 4 },
        { icon: 'fa6-solid:people-group', name: 'Komandinis darbas', level: 4 },
      ],
    },
    {
      title: 'IT Įgūdžiai',
      skills: [
        react({
          level: 5,
        }),
        nextJs({
          level: 5,
        }),
        tailwindCss({ level: 5 }),
        typescript({
          level: 4,
        }),
        prettier({ level: 5 }),
        pnpm({ level: 5 }),
        npm({ level: 5 }),
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
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
