import { Badge, Card, Heading, Strong } from "@radix-ui/themes";

import { FaToolbox } from "react-icons/fa6";

function Tools() {
  const state = {
    Backend: [
      "Rest APIS",
      "Typescript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "GraphQL",
      "AWS",
    ],
    Frontend: ["Typescript", "React", "Vite", "NextJS", "React-Query", "TailwindCSS", "Electron", "Antd", "MUI"],
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
                      {skill}
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
