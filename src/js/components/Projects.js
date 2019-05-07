class Projects extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tasks"/> Recent Projects</div>
            <table className="table table-bordered table-striped">
                <tbody>
                <tr>
                    <td><a href="https://github.com/ms10596/match" target="_blank">match</a></td>
                    <td> My graduation project is based on a popular natural language processing problem which is Text
                        Readability Assessment. We aim in this project to classify any given text to one of 3 levels
                        Easy, Intermediate and hard. We are using OneStopEnglish corpus to build our deep learning
                        model. All text processing, learning and deployment is done using <b>Python</b>.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/catalog" target="_blank">catalog</a></td>
                    <td> TV series management system using <b>Python</b>-Flask as a micro
                        framework, <b>SqlAlchemy</b> as a operational relational mapping and <b>Amazon Web
                            Services</b> for deployment.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/ms10596.github.io" target="_blank">My personal resume</a>
                    </td>
                    <td> I have built this website using React which is a
                        frontend <b>javascript</b> framework, <b>HTML</b> and <b>Bootstrap</b>. I have deployed this
                        website on github hosting service.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Projects), document.querySelector('#projects'));