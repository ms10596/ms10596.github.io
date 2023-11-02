import { Card, Heading, Link, Separator, Table } from "@radix-ui/themes";
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
      <div className="pb-5">
        <Link size={"8"} href="https://ms10596.github.io">
          Mohamed Sayed
        </Link>
        <Heading as="h3" size={"7"} weight={"regular"}>
          Full Stack Web Developer
        </Heading>
      </div>

      <Separator size="4" />
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
          <Table.Row>
            <Table.Cell>
              <FaGithub />
            </Table.Cell>
            <Table.Cell>
              <Link target="_blank" href="https://www.github.com/ms10596">
                https://www.github.com/ms10596
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <FaStackOverflow />
            </Table.Cell>
            <Table.Cell>
              <Link
                target="_blank"
                href="https://stackoverflow.com/users/7954107/mohamed-sayed"
              >
                https://stackoverflow.com/users/7954107/mohamed-sayed
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <FaLinkedin />
            </Table.Cell>
            <Table.Cell>
              <Link target="_blank" href="https://www.linkedin.com/in/ms10596">
                https://www.linkedin.com/in/ms10596
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <div className="flex w-full justify-center items-center">
        <Image
          src="/me.jpg"
          alt="me"
          width={450}
          height={333}
          priority={false}
        />
      </div>
    </Card>
  );
}
export default Intro;
