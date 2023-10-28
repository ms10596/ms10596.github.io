import "bootstrap/dist/css/bootstrap.min.css";

import Bio from "./Bio";
import Certificates from "./Certificates";
import Footer from "./Footer";
import Intro from "./Intro";
import Milestones from "./Milestones";
import Podcast from "./podcast";
import Projects from "./Projects";
import Tools from "./Tools";

export default function Page() {
  return (
    <div className="bg-dark md:flex p-5 gap-x-9">
      <div className="w-full md:w-1/4">
        <Intro />
        <Tools />
        <Podcast />
      </div>
      <div className="w-full md:w-3/4">
        <Bio />
        <Milestones />
        <Projects />
        <Certificates />
      </div>
    </div>
  );
}
