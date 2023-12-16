import { FaToolbox } from "react-icons/fa6";
import { tools } from "./Tools";

function Tools() {
  return (
    <div className="card bg-primary-content">
      <div className="card-body">
        <h2 className="card-title">
          <FaToolbox /> Tools
        </h2>
        <div className="divider" />
        <div className="flex flex-col gap-y-6">
          {Object.entries(tools).map(([key, value]) => {
            return (
              <div key={key}>
                <strong className="pb-3">{key}</strong>
                <div className="flex gap-x-6 gap-y-3 flex-wrap">
                  {value.map((skill, j) => {
                    return (
                      <span className="badge flex gap-x-1" key={j}>
                        {skill.name}
                        {skill.icon}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tools;
