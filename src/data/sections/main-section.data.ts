import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profilis',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Deividas Valiukas',
  role: 'Mokinys, Full-stack web programuotojas',
  details: [
    { label: 'Gyvenamoji vieta', value: 'Vilnius' },
    { label: 'Amžius', value: '18 metų' },
    { label: 'El paštas', value: 'labas@valiukasd.lt', url: 'mailto:labas@valiukasd.lt' },
    { label: 'Specializacija', value: 'Internetinių svetainių kūrimas, programų sistemų kūrimas' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'labas@valiukasd.lt' },
    { label: 'LinkedIn', value: '/in/valiukasd', url: 'https://www.linkedin.com/in/valiukasd/' },
    { label: 'GitHub', value: '/valiukasd', url: 'https://github.com/valiukasd/' },
    { label: 'Website', value: 'valiukasd.lt', url: 'https://valiukasd.lt/', fullRow: true },
  ],
  description:
    'Sveiki! Aš esu Deividas. Šiuo metu man yra 18 metų, gyvenu Vilniuje, ten pat ir mokausi, šiuo metu esu dvyliktoje klasėje. Esu labai kūrybingas, moku dirbti komandoje, man svarbi kiekviena detalė, taip pat labai greit įgaunu naujų įgūdžių bei žinių. Nuo vaikystės be galo domėjausi kompiuteriais, pradėjau tyrinėti kaip ir kodėl jie veikia, maždaug tuo metu ir atradau programavimą, tad būdamas trylikos metų jau sukūriau pirmąją savo internetinę svetainę, būdamas keturiolikos - pirmąjį savo kompiuterinį žaidimą, o penkiolikos - pirmą API serverį, tačiau čia nesustojau ir tobulėju iki šiol, ir dabar jau galiu savarankiškai kurti projektus, be problemų išmokdamas naują programavimo kalbą ar technologiją.',
  tags: [
    { name: 'Atviras laisvai samdomam darbui' },
    { name: 'Laisvas patarti IT problemomis' },
    { name: 'Šiuo metu jokiu projektu neužsiemu' },
  ],
  action: {
    label: 'Atsisiūsti CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Deividas_Valiukas.pdf',
  },
  links: [
    github({ url: 'https://github.com/valiukasd/' }),
    linkedin({ url: 'https://www.linkedin.com/in/valiukasd/' }),
    twitter({ url: 'https://twitter.com/valiukasd' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
