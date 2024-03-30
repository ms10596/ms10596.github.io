import { FaFlag } from 'react-icons/fa6';
import { Timeline } from './Timeline';
import { prepareMilestones } from './milestones';

function Milestones() {
  const milestones = prepareMilestones();
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <h2 className="card-title">
          <FaFlag /> Milestones
        </h2>
        <div>
          <Timeline milestones={milestones} />
        </div>
      </div>
    </div>
  );
}
export default Milestones;
