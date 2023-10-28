import { Card, Heading, Table } from "@radix-ui/themes";

import { FaToolbox } from "react-icons/fa6";
import { Fragment } from "react";

function Tools() {
  const state = {
    Data: ["Numpy", "Pandas", "Matplotlib", "NLTK", "Keras", "Scikit-learn"],
    Backend: [
      "Flask",
      "Docker",
      "Kubernetes",
      "Linux",
      "PostgreSQL",
      "Elastic Search",
    ],
    Others: ["Git", "React", "Bootstrap"],
  };
  return (
    <Card>
      <Heading>
        <FaToolbox /> Tools
      </Heading>
      <Table.Root>
        <Table.Body>
          {Object.entries(state).map(([key, value], i) => {
            return (
              <Fragment key={i}>
                <Table.Row>
                  <Table.Cell rowSpan={value.length + 1}>{key}</Table.Cell>
                </Table.Row>
                {value.map((skill, j) => {
                  return (
                    <Table.Row key={`${i}${j}`}>
                      <Table.Cell>{skill}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Fragment>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}

export default Tools;
