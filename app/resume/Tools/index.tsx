import { FaToolbox } from "react-icons/fa6";
import { tools } from "./Tools";

function Tools() {
  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">
          <FaToolbox /> Tools
        </h2>
        <div className="divider" />
        <div className="flex flex-col gap-y-6">
          {Object.entries(tools).map(([key, value]) => {
            return (
              <div key={key}>
                <em style={{ textShadow: "0 0 2px #ffffff" }}>{key}</em>
                <div className="flex gap-x-6 gap-y-3 flex-wrap pt-3">
                  {value.map((skill, j) => {
                    return (
                      <span className="badge badge-lg flex gap-x-1 bg-base-300" key={j}>
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
