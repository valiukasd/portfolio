import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: false,
  },
  books: {
    title: 'Books I read',
    data: [
      // {
      //   image: import('@/assets/favorites/books/book-1.jpeg'),
      //   title: 'The Pragmatic Programmer: From Journeyman to Master',
      //   author: 'Andy Hunt, Dave Thomas',
      //   url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      // },
    ],
  },
  people: {
    title: 'People I learn from',
    data: [
      // {
      //   image: import('@/assets/favorites/people/person-1.jpg'),
      //   name: 'Kent C. Dodds',
      //   url: 'https://kentcdodds.com/',
      // },
    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [
      // {
      //   image: import('@/assets/favorites/videos/video-1.jpeg'),
      //   title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
      //   url: 'https://youtu.be/TqfbAXCCVwE',
      // },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      // {
      //   image: import('@/assets/favorites/media/media-1.jpeg'),
      //   title: 'Fireship.io',
      //   type: 'YouTube channel',
      //   url: 'https://www.youtube.com/c/Fireship',
      // },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
