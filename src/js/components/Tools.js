class Tools extends React.Component {
    state = {
        "Data": ["Numpy", "Keras", "Pandas", "Scikit-learn", "Matplotlib", "NLTK"],
        "Web": ["Flask", "PostgreSQL", "React", "Bootstrap"],
        "Others": ["Linux", "Git", "Docker", "Kubernetes"]
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