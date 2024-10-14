import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  javaScript,
  mongoDb,
  nextJs,
  nodeJs,
  nx,
  pnpm,
  react,
  reactQuery,
  redux,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior software developer engineer',
      company: 'NTSprint',
      image: import('@/assets/logos/ntsprint.jpeg'),
      dates: [new Date('2022-09'), null],
      description: `
        - Built a full-stack application using React, Next.js, and MongoDB.
        - Implemented a robust authentication system.
        - Developed a robust API using Node.JS and MongoDB.
        - Designed and implemented a responsive user interfaces.
        - Implemented a robust error handling.
        - Conducted thorough code reviews and provided constructive feedback.
        - Collaborated with cross-functional teams to deliver high-quality software solutions.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), javaScript(), mongoDb(), nodeJs(), redux()],
      },
      links: [
        website({ url: 'https://ntsprint.com/' }),
        facebook({ url: 'https://www.facebook.com/ntsprintllc' }),
        linkedin({ url: 'https://www.linkedin.com/company/ntsprint/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
