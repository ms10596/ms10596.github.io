import { Badge, Card, Heading, Strong } from "@radix-ui/themes";

import { FaToolbox } from "react-icons/fa6";
import { tools } from "./Tools";

function Tools() {
  return (
    <Card>
      <Heading>
        <FaToolbox /> Tools
      </Heading>
      <div className="flex flex-col gap-y-6">
        {Object.entries(tools).map(([key, value]) => {
          return (
            <div key={key}>
              <Strong className="pb-3">{key}</Strong>
              <div className="flex gap-x-6 gap-y-3 flex-wrap">
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
