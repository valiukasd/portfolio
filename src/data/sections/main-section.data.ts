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
  role: 'Mokinys, IT specialistas',
  details: [
    { label: 'Gyvenamoji vieta', value: 'Vilnius, Lietuva' },
    { label: 'Amžius', value: '18 metų' },
    { label: 'El paštas', value: 'deivis.valiukas@gmail.com', url: 'mailto:deivis.valiukas@gmail.com' },
    { label: 'Specializacija', value: 'Internetinių svetainių kūrimas, sistemų kūrimas' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'deivis.valiukas@gmail.com' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://www.linkedin.com/in/valiukasd/' },
    { label: 'GitHub', value: '/valiukasd', url: 'https://github.com/valiukasd/' },
    { label: 'Website', value: 'valiukasd.lt', url: 'https://valiukasd.lt/', fullRow: true },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
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
