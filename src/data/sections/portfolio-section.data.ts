import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  javaScript,
  jest,
  Lookerstudio,
  mongoDb,
  MySQL,
  nestJs,
  nextJs,
  nodeJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  recharts,
  redux,
  sass,
  sqlServer,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'The Tasty Plate',
      image: import('@/assets/portfolio/thetastyplate.png'),
      dates: [new Date('2022-09'), null],
      details: [
        { label: 'Team size', value: '2 people' },
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Company', value: 'NtSprint' },
        { label: 'Category', value: ['Web app', 'E-commerce'] },
      ],
      pdfDetails: [{ label: 'WebSite', value: 'https://thetastyplate.com', url: 'https://thetastyplate.com' }],
      screenshots: [
        { src: import('@/assets/portfolio/thetastyplate-screen1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/thetastyplate-screen2.png'), alt: 'Second screenshot' },
      ],
      description: `
      - An inherited e-commerce platform that presented numerous technical challenges.
      - Integrated with Merchant One payment gateway
      - Integrated with the SendGrid platform.
      - Many jobs were created to charge orders using the dates defined and taking into account the delivery dates. Also, they are programmed to change automatically the status of the orders.
      - Led efforts to address and rectify existing issues within the platform, ensuring a seamless user experience.
      - Played a key role in deploying the revamped e-commerce platform to live production, achieving a successful implementation.
      - Integration with an affiliates platform (GoAffPro).
      - Integration with the Attentive platform.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), react(), redux(), javaScript(), nodeJs(), mongoDb()],
      },
      links: [website({ url: 'https://thetastyplate.com' })],
    },
    {
      name: 'Clinic GymHybrid Solutions',
      image: import('@/assets/logos/janeApp-logo.png'),
      dates: [new Date('2023-07'), new Date('2023-08')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Company', value: 'NtSprint' },
        { label: 'Category', value: ['Web app', 'Medical services', 'Charts', 'Reports'] },
      ],
      pdfDetails: [],
      screenshots: [
        { src: import('@/assets/portfolio/clinic-1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/clinic-3.png'), alt: 'Second screenshot' },
      ],
      description: `
        - Implementing Chart in Next.js SAAS platform
        - Replicating Lookerstudio report using any Charts tools
        - Ensuring the data visualizations are accurate and responsive
      `,
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), react(), javaScript(), MySQL(), nodeJs(), Lookerstudio(), recharts()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
