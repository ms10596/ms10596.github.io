class Bio extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-body">
                <p className="card-text">
                    Bringing ideas into real world through python development. Had some experience in data science and natural language processing.
                </p>
            </div>
        </div>);
    }
}
ReactDOM.render(React.createElement(Bio), document.querySelector('#bio'));

