import { Badge, Card, Heading, Strong, Table } from "@radix-ui/themes";

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
    Frontend: ["Typescript", "React", "React-Query", "TailwindCSS", "Electron", "Antd", "MUI"],
  };
  return (
    <Card>
      <Heading>
        <FaToolbox /> Tools
      </Heading>
      <div className="flex flex-col gap-y-2">
        {Object.entries(state).map(([key, value], i) => {
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
