import { FaToolbox } from "react-icons/fa6";

function Tools() {
  const state = {
    Data: ["Numpy", "Pandas", "Matplotlib", "NLTK", "Keras", "Scikit-learn"],
    Backend: [
      "Flask",
      "Docker",
      "Kubernetes",
      "Linux",
      "PostgreSQL",
      "Elastic Search",
    ],
    Others: ["Git", "React", "Bootstrap"],
  };
  return (
    <div className="card mt-3">
      <div className="card-title card-header">
        <FaToolbox /> Tools
      </div>
      <table className="table table-bordered table-striped">
        {Object.entries(state).map(([key, value], i) => {
          return (
            <tbody key={i}>
              <tr>
                <td rowSpan={value.length + 1}>{key}</td>
              </tr>
              {value.map((skill, j) => {
                return (
                  <tr key={`${i}${j}`}>
                    <td>{skill}</td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Tools;
