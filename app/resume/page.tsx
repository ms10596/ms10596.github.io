import Bio from "./Bio";
import Intro from "./Intro";
import Milestones from "./Milestones";
import Tools from "./Tools";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-3 gap-x-9 md:flex-row md:p-10">
      <div className="w-full flex flex-col md:w-1/3 gap-y-3">
        <Intro />
        <Tools />
      </div>
      <div className="w-full flex flex-col md:w-2/3 gap-y-3">
        <Bio />
        <Milestones />
      </div>
    </div>
  );
}
