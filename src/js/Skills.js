const e = React.createElement;

class Skills extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-book"/> Skills</div>
            <ul className="list-group">
                <li className="list-group-item">OOP & Data Structure</li>
                <li className="list-group-item">Neural Network</li>
                <li className="list-group-item">Web Development</li>
            </ul>

        </div>)
    }
}

const domContainer = document.querySelector('#skills');
ReactDOM.render(e(Skills), domContainer);