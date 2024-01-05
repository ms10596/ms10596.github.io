import { FaEnvelope, FaGithub, FaHouse, FaLinkedin, FaLocationArrow, FaLocationDot } from "react-icons/fa6";

import { ReactNode } from "react";
import { data } from "./data";

const Item = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-x-2 items-center">{children}</li>
);
function Intro() {
  return (
    <div className="card bg-base-300 card-compact">
      <div className="card-body">
        <h2 className="card-title">{data.position}</h2>

        <ul className="list-none flex flex-wrap justify-between ps-0 gap-y-3">
          <Item>
            <FaLocationDot /> {data.address}
          </Item>
          <Item>
            <FaGithub />
            <a target="_blank" href={`https://github.com/${data.github}`}>
              {data.github}
            </a>
          </Item>
          <Item>
            <FaEnvelope /> <a href={`mailto:${data.email}`}>{data.email}</a>
          </Item>
          <Item>
            <FaLinkedin />
            <a
              target="_blank"
              href={`https://linkedin.com/in/${data.linkedin}`}
            >
              {data.linkedin}
            </a>
          </Item>
        </ul>
      </div>
    </div>
  );
}
export default Intro;
