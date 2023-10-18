import {
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaPhone,
  FaStackOverflow,
} from "react-icons/fa6";

import Image from "next/image";

function Intro() {
  return (
    <div className="card mt-3">
      <h1 className="card-title card-header text-dark">Mohamed Sayed</h1>
      <h4 className="font-italic font-weight-light text-center mt-2">
        Computer Scientist
      </h4>
      <table className="table table-bordered mt-1">
        <tbody>
          <tr>
            <td colSpan={2}>
              <FaPhone /> +201146613779
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <FaHouse /> Giza, Sheikh Zayed City
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <FaEnvelope /> ms10596 [at] gmail [dot] com
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <Image
        className="card-img-bottom"
        src="/me.jpg"
        alt="me"
        width={450}
        height={333}
        priority={false}
      />

      <div className="mt-1" />

      <div className="btn-group btn-group-lg">
        <a
          className="btn btn-outline-dark"
          href="https://www.github.com/ms10596"
          target="_blank"
          style={{ width: "33%" }}
        >
          <FaGithub />
        </a>
        <a
          className="btn btn-outline-dark"
          href="https://www.linkedin.com/in/ms10596"
          target="_blank"
          style={{ width: "33%" }}
        >
          <FaLinkedin />
        </a>
        <a
          className="btn btn-outline-dark"
          href="https://stackoverflow.com/users/7954107/mohamed-sayed"
          target="_blank"
          style={{ width: "33%" }}
        >
          <FaStackOverflow />
        </a>
      </div>
      <div className="mt-1" />
    </div>
  );
}
export default Intro;
