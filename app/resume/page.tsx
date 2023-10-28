import "bootstrap/dist/css/bootstrap.min.css";

import Bio from "./Bio";
import Certificates from "./Certificates";
import Intro from "./Intro";
import Milestones from "./Milestones";
import Projects from "./Projects";
import Tools from "./Tools";

export default function Page() {
  return (
    <div className="md:flex p-5 gap-x-9">
      <div className="w-full flex flex-col md:w-1/4 gap-y-3">
        <Intro />
        <Tools />
      </div>
      <div className="w-full flex flex-col md:w-3/4 gap-y-3">
        <Bio />
        <Milestones />
        <Projects />
        <Certificates />
      </div>
    </div>
  );
}
