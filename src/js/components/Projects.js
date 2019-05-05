const e = React.createElement;

class Projects extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tasks"/> Recent Projects</div>
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <td><a href="https://github.com/ms10596/match" target="_blank">match:</a> My graduation project is based on a popular natural language processing problem which is Text Readability Assessment. We aim in this project to classify any given text to one of 3 levels Easy, Intermediate and hard. We are using OneStopEnglish corpus to build our deep learning model. </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/catalog" target="_blank">catalog:</a> TV series management system using <b>Python</b>-Flask as a micro framework, SqlAlchemy as a operational relational mapping and Amazon Web Services for deployment. </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/ms10596.github.io" target="_blank">My personal resume:</a> I have built this website using React which is a frontend <b>javascript</b> framework, <b>HTML</b> and <b>Bootstrap</b>. I have deployed this website on github hosting service.</td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}

const domContainer = document.querySelector('#projects');
ReactDOM.render(e(Projects), domContainer);