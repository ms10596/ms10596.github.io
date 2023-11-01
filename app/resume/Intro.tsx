import { Card, Heading, SelectGroup, Table } from "@radix-ui/themes";
import {
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaPhone,
  FaStackOverflow,
} from "react-icons/fa6";

import Image from "next/image";

function Intro() {
  return (
    <Card>
      <Heading as="h1">Mohamed Sayed</Heading>
      <Heading as="h2">Full Stack Web Developer</Heading>
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <FaPhone />
            </Table.Cell>
            <Table.Cell>+201146613779</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <FaHouse />
            </Table.Cell>
            <Table.Cell>Egypt, Giza, Sheikh Zayed City</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <FaEnvelope />
            </Table.Cell>
            <Table.Cell>ms10596 [at] gmail [dot] com</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Image
        className="card-img-bottom"
        src="/me.jpg"
        alt="me"
        width={450}
        height={333}
        priority={false}
      />

      <div className="btn-group btn-group-lg">
        <a
          className="btn btn-outline-dark"
          href="https://www.github.com/ms10596"
          target="_blank"
          style={{ width: "33%" }}
        >
          <FaGithub />
        </a>
        <a
          className="btn btn-outline-dark"
          href="https://www.linkedin.com/in/ms10596"
          target="_blank"
          style={{ width: "33%" }}
        >
          <FaLinkedin />
        </a>
        <a
          className="btn btn-outline-dark"
          href="https://stackoverflow.com/users/7954107/mohamed-sayed"
          target="_blank"
          style={{ width: "33%" }}
        >
          <FaStackOverflow />
        </a>
      </div>
      <div className="mt-1" />
    </Card>
  );
}
export default Intro;
