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
        <i className="fas fa-tools" /> Tools
      </div>
      <table className="table table-bordered table-striped">
        {Object.entries(state).map(([key, value]) => {
          return (
            <tbody>
              <tr>
                <td rowSpan={value.length + 1}>{key}</td>
              </tr>
              {value.map((skill) => {
                return (
                  <tr>
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
