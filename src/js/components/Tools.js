const e = React.createElement;

class Tools extends React.Component {
    render() {
        return (<div className="card mt-3">
                <div className="card-title card-header"><i className="fas fa-code"/> Tools</div>
                <ul className="list-group">
                    <li className="list-group-item">Python (Tensorflow, Keras, Numpy, Matplotlib,
                        Flask)
                    </li>
                    <li className="list-group-item">Linux</li>
                    <li className="list-group-item">SQL</li>
                </ul>
            </div>)
    }
}

const domContainer = document.querySelector('#tools');
ReactDOM.render(e(Tools), domContainer);