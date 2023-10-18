import { FaCode } from "react-icons/fa6";
function Languages() {
  return (
    <div className="card mt-3">
      <div className="card-title card-header">
        <FaCode /> Programming Languages
      </div>
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <td>Python</td>
          </tr>
          <tr>
            <td>Java</td>
          </tr>
          <tr>
            <td>C++</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Languages;
