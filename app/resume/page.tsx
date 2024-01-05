import Bio from "./Bio";
import Intro from "./Intro";
import Milestones from "./Milestones";
import Tools from "./Tools";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-9 items-stretch">
        <div className="w-1/3 flex">
          <Intro />
        </div>
        <div className="w-3/4 flex">
          <Bio />
        </div>
      </div>
      <Tools />
      <Milestones />
    </div>
  );
}
