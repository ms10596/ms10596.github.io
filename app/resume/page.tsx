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
    <div className="bg-dark container">
      <div>
        <div className="row">
          <div className="col-5">
            <Intro />
            <Tools />
            <Podcast />
          </div>
          <div className="col-7">
            <Bio />
            <Milestones />
            <Projects />
            <Certificates />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
