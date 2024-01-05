import { FaEnvelope, FaGithub, FaHouse, FaLinkedin } from "react-icons/fa6";

import { data } from "./data";

function Intro() {
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <h3>{data.position}</h3>

        <div className="divider" />
        <table className="table table-md w-5">
          <tbody>
            <tr>
              <td>
                <FaHouse />
              </td>
              <td>{data.address}</td>
            </tr>
            <tr>
              <td>
                <FaEnvelope />
              </td>
              <td>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </td>
            </tr>
            <tr>
              <td>
                <FaGithub />
              </td>
              <td>
                <a target="_blank" href={data.github}>
                  {data.github}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaLinkedin />
              </td>
              <td>
                <a target="_blank" href={data.linkedin}>
                  {data.linkedin}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Intro;
