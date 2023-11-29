import { Badge, Card, Heading, Strong } from "@radix-ui/themes";
import {
  SiAmazonaws,
  SiAntdesign,
  SiElectron,
  SiGraphql,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";

import { FaToolbox } from "react-icons/fa6";

function Tools() {
  const state = {
    Backend: [
      { name: "Rest APIS", icon: null },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "AWS", icon: <SiAmazonaws /> },
    ],
    Frontend: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "React-Query", icon: <SiReactquery /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Electron", icon: <SiElectron /> },
      { name: "Antd", icon: <SiAntdesign /> },
      { name: "MUI", icon: <SiMui /> },
      { name: "React-Hook-Form", icon: <SiReacthookform /> },
      { name: "Zod", icon: <SiZod />},
    ],
  };
  return (
    <Card className="md:!sticky md:top-[690px]">
      <Heading>
        <FaToolbox /> Tools
      </Heading>
      <div className="flex flex-col gap-y-2">
        {Object.entries(state).map(([key, value]) => {
          return (
            <div key={key}>
              <Strong>{key}</Strong>
              <div className="flex gap-x-4 gap-y-2 flex-wrap">
                {value.map((skill, j) => {
                  return (
                    <Badge size={"2"} key={j}>
                      {skill.name}
                      {skill.icon}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default Tools;
