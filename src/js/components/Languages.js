const e = React.createElement;
class Languages extends React.Component {
    render() {
        return(<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-code"/> Programming Languages</div>
            <table className="table table-bordered table-striped">
                <tbody>
                <tr><td>Python</td></tr>
                <tr><td>Java</td></tr>
                <tr><td>C++</td></tr>
                <tr><td>Javascript</td></tr>
                </tbody>
            </table>
        </div>)
    }
}
const domContainer = document.querySelector('#languages');
ReactDOM.render(e(Languages), domContainer);