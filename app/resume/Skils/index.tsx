import { FaToolbox } from 'react-icons/fa6';
import { skills } from './Skills';

function Skills() {
  return (
    <div className="card bg-base-300 card-compact">
      <div className="card-body">
        <h2 className="card-title">
          <FaToolbox /> Skills
        </h2>
        <div className="flex justify-between">
          {Object.entries(skills).map(([key, value], i) => {
            return (
              <div key={key} className="max-w-2xl">
                <em style={{ textShadow: '0 0 2px #ffffff' }}>{key}</em>
                <div className={'flex gap-x-6 gap-y-3 flex-wrap pt-3'}>
                  {value.map((skill, j) => {
                    return (
                      <span
                        className="badge badge-lg flex gap-x-1 bg-base-100"
                        key={j}
                      >
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

export default Skills;
