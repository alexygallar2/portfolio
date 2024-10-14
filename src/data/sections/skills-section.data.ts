import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  mongoDb,
  pnpm,
  postgreSql,
  react,
  supabase,
  tailwindCss,
  typescript,
  nextJs,
  nodeJs,
  javaScript,
  python,
  php,
  laravel,
  sqlServer,
  materialUi,
  java,
  git,
  html,
  css,
  antDesign,
  redux,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({ level: 5 }),
        nextJs({ level: 5 }),
        nodeJs({ level: 5 }),
        mongoDb({ level: 5 }),
        javaScript({ level: 5 }),
        git({ level: 4 }),
        laravel({ level: 4 }),
        html({ level: 4 }),
        redux({ level: 4 }),
        css({ level: 3 }),
        python({ level: 3 }),
        php({ level: 3 }),
        astro({ level: 3 }),
        sqlServer({ level: 3 }),
        java({ level: 3 }),
        antDesign({ level: 3 }),
        typescript({ level: 2 }),
        tailwindCss({ level: 2 }),
        materialUi({ level: 2 }),
        postgreSql({ level: 2 }),
        pnpm({ level: 2 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [supabase()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - Native' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
