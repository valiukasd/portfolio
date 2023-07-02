import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: false,
  },
  testimonials: [
    // {
    //   image: import('@/assets/testimonials/testimonial-1.jpeg'),
    //   author: 'Howard Stewart',
    //   relation: 'We work together as front-end developers at Google',
    //   content:
    //     'In nec mattis sem. Morbi purus lorem, euismod ac varius at, aliquet vitae augue. Pellentesque ut facilisis felis. In sed dui blandit, aliquet odio eu, elementum leo. In facilisis dapibus tortor ac volutpat. Cras cursus nec odio maximus elementum.',
    //   links: [github({ url: '#' }), linkedin({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
