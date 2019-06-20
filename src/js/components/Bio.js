class Bio extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-body">
                <p className="card-text">
                    A fresh graduate.
                </p>
            </div>
        </div>);
    }
}
ReactDOM.render(React.createElement(Bio), document.querySelector('#bio'));

