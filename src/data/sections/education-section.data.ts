import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Computer Science',
      institution: 'University Central "Marta Abreu de Las Villas"',
      image: import('@/assets/logos/uclv.png'),
      dates: [new Date('2009.09'), new Date('2014.07')],
      description: "Bachelor's degree",
      links: [website({ url: 'https://www.uclv.edu.cu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
