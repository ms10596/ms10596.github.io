import Bio from "./Bio";
import Intro from "./Intro";
import Milestones from "./Milestones";
import Skills from "./Skils";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col md:flex-row gap-x-9 gap-y-3 items-stretch">
        <div className="w-full md:w-1/3 flex">
          <Intro />
        </div>
        <div className="w-full md:w-3/4 flex">
          <Bio />
        </div>
      </div>
      <Skills />
      <Milestones />
    </div>
  );
}
