import {
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa6";

function Intro() {
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <h3>Full Stack Web Developer</h3>

        <div className="divider" />
        <table className="table table-md w-5">
          <tbody>
            <tr>
              <td>
                <FaHouse />
              </td>
              <td>Egypt, Giza, Sheikh Zayed</td>
            </tr>
            <tr>
              <td>
                <FaEnvelope />
              </td>
              <td>
                <a href="mailto:ms10596@gmail.com">ms10596@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td>
                <FaGithub />
              </td>
              <td>
                <a target="_blank" href="https://www.github.com/ms10596">
                  https://www.github.com/ms10596
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaStackOverflow />
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/7954107/mohamed-sayed"
                >
                  https://stackoverflow.com/users...
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaLinkedin />
              </td>
              <td>
                <a target="_blank" href="https://www.linkedin.com/in/ms10596">
                  https://www.linkedin.com/in/ms10596
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
