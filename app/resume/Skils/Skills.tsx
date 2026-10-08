import {
  SiAntdesign,
  SiCss,
  SiCypress,
  SiDaisyui,
  SiDocker,
  SiElectron,
  SiGraphql,
  SiHtml5,
  SiJenkins,
  SiLinux,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiZod
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { GrHeroku } from 'react-icons/gr';

export const skills = {
  Backend: [
    { name: 'Rest APIS', icon: null },
    { name: 'NodeJS', icon: <SiNodedotjs /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'NestJS', icon: <SiNestjs /> },
    { name: 'Prisma', icon: <SiPrisma /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'Linux', icon: <SiLinux /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Heroku', icon: <GrHeroku /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Jenkins', icon: <SiJenkins /> }
  ],
  Frontend: [
    { name: 'React', icon: <SiReact /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'CSS', icon: <SiCss /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'NextJS', icon: <SiNextdotjs /> },
    { name: 'React-Query', icon: <SiReactquery /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Electron', icon: <SiElectron /> },
    { name: 'Antd', icon: <SiAntdesign /> },
    { name: 'MUI', icon: <SiMui /> },
    { name: 'PWA', icon: <SiPwa /> },
    { name: 'React-Hook-Form', icon: <SiReacthookform /> },
    { name: 'Zod', icon: <SiZod /> },
    { name: 'Redux Toolkit', icon: <SiRedux /> },
    { name: 'React-Router', icon: <SiReactrouter /> },
    { name: 'Testing Library', icon: <SiTestinglibrary /> },
    { name: 'Cypress', icon: <SiCypress /> },
    { name: 'Daisy UI', icon: <SiDaisyui /> }
  ]
};
