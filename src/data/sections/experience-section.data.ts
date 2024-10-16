import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  javaScript,
  laravel,
  mongoDb,
  MySQL,
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
      dates: [new Date('2022-10'), null],
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

    {
      role: 'Software developer engineer',
      company: 'TecnoSHR SURL',
      image: import('@/assets/logos/tecnohsr.png'),
      dates: [new Date('2021-09'), new Date('2022-10')],
      description: `
        - Implemented a internal control applications
        - Built a full-stack application using React, Laravel, and MySQL.
        - Implemented a robust authentication and permissions system using Laravel.
        - Developed a robust API using Laravel.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), javaScript(), laravel(), MySQL()],
      },
      links: [website({ url: 'https://elyerromenu.com/b/tecnohsr/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
