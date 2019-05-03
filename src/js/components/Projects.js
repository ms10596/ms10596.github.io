const e = React.createElement;

class Projects extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tasks"/> Projects</div>
            <ul className="list-group">
                <a className="list-group-item" href="https://github.com/ms10596/ngrams">Autocomplete
                    Search
                    Query</a>
                <a className="list-group-item" href="https://github.com/ms10596/detectectioner">Face
                    Recognition Application</a>
                <a className="list-group-item" href="https://github.com/ms10596/Musicaly">Music
                    Player</a>
                <a className="list-group-item" href="https://github.com/ms10596/catalog">TV Series
                    Managment
                    System</a>
            </ul>
        </div>)
    }
}

const domContainer = document.querySelector('#projects');
ReactDOM.render(e(Projects), domContainer);