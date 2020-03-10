class Tools extends React.Component {
    state = {
        "Data": ["Numpy", "Pandas", "Matplotlib", "NLTK", "Keras", "Scikit-learn"],
        "Backend": ["Flask", "Docker", "Kubernetes", "Linux", "PostgreSQL", "Elastic Search"],
        "Others": ["Git", "React", "Bootstrap"]
    }

    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tools"/> Tools</div>
            <table className="table table-bordered table-striped">
                {
                    Object.keys(this.state).map((key) => {
                        return (
                            <tbody>
                                <tr>
                                    <td rowSpan={this.state[key].length + 1}>{key}</td>
                                </tr>
                                {
                                    this.state[key].map((skill) => {
                                        return (
                                            <tr>
                                                <td>{skill}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        )
                    })
                }
            </table>
        </div>)
    }
}

ReactDOM.render(React.createElement(Tools), document.querySelector('#tools'));