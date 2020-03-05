class Bio extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-body">
                <p className="card-text">
                    Interested in machine learning pipeline stages and software development in general. Starting from researching, prototyping and evaluating models, passing by integrating the model in an API and finally deploying in the cloud.
                </p>
            </div>
        </div>)
    }
}
ReactDOM.render(React.createElement(Bio), document.querySelector('#bio'));

