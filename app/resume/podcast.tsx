import { FaHeadphones } from "react-icons/fa6";

function Podcast() {
  return (
    <div className="card mt-3">
      <div className="card-title card-header">
        <FaHeadphones /> Listen to me
      </div>
      <div className="card-body">
        <iframe
          src="https://anchor.fm/refaie/embed/episodes/Machine-Learning-w-Mohamed-Sayed-e5cb6p/a-anfuep"
          height="102px"
          width="400px"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
export default Podcast;
