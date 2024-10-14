import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Alexy Gallardo Segura',
  role: 'Senior Software Developer Engineer',
  details: [
    { label: 'Phone', value: '+5358727662', url: 'tel:5358727662' },
    { label: 'Email', value: 'alexy.gallardo@ntsprint.com', url: 'mailto:alexy.gallardo@ntsprint.com' },
    { label: 'From', value: 'Villa Clara, Cuba' },
    { label: 'Location', value: 'Remote' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '5358727662' },
    { label: 'Email', value: 'alexy.gallardo@ntsprint.com' },
    { label: 'LinkedIn', value: '/in/alexy-gallardo-b81880109/', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/alexygallar2', url: 'https://github.com' },
    { label: 'Website', value: 'alexygallar2.com', url: '/', fullRow: true },
  ],
  description:
    'A full-stack developer with 10 years of experience in the analysis and development of software.<br/>' +
    '<br/>' +
    'Capable of managing multiple tasks concurrently with a focus on achieving outcomes, employing all abilities to the fullest extent, and leveraging the expertise in a collaborative environment. <br/>' +
    '<br/>' +
    'Able to work under pressure<br/>' +
    '<br/>' +
    'Always delighted to acquire knowledge and skills in new technologies and take up challenging projects that require technical expertise.<br/>' +
    '<br/>' +
    'Dedicated, hardworking, and committed to delivering high-quality software solutions that meet or exceed their clients’ expectations.',
  tags: [{ name: 'Team-player' }, { name: 'Hard-working' }, { name: 'Proactive' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Alexy_Gallardo.pdf',
  },
  links: [
    facebook({ url: 'https://www.facebook.com/alexy.gallar2/' }),
    github({ url: 'https://github.com/alexygallar2' }),
    linkedin({ url: 'https://www.linkedin.com/in/alexy-gallardo-b81880109/' }),
    twitter({ url: 'https://x.com/alexy_gallardo' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
