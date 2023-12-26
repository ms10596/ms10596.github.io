import {
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaPhone,
  FaStackOverflow,
} from "react-icons/fa6";

function Intro() {
  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <a href="https://ms10596.github.io" className="card-title">
          Mohamed Sayed
        </a>
        <h3>Full Stack Web Developer</h3>

        <div className="divider" />
        <table className="table table-lg">
          <tbody>
            <tr>
              <td>
                <FaHouse />
              </td>
              <td>Egypt, Giza, Sheikh Zayed City</td>
            </tr>
            <tr>
              <td>
                <FaEnvelope />
              </td>
              <td>ms10596@gmail.com</td>
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
                  https://stackoverflow.com/users/7954107/mohamed-sayed
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
