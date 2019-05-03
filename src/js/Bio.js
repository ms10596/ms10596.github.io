const e = React.createElement;

class Bio extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-body">
                <p className="card-text">
                    Finishing my last year at University. Capable of learning new technologies in no time. Looking
                    for
                    an internship in Back End Development, Data Analysis or Machine Learning.
                </p>
            </div>
        </div>);
    }
}

const domContainer = document.querySelector('#bio');
ReactDOM.render(e(Bio), domContainer);

