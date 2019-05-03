const e = React.createElement;
class Intro extends React.Component {
    render() {
        return(<div className="card mt-3">
            <h1 className="card-title card-header text-dark">Mohamed Sayed</h1>
            <h4 className="font-italic font-weight-light text-center mt-2">Computer Science
                Student</h4>
            <table className="table table-bordered mt-1">
                <tbody>
                <tr>
                    <td colSpan={2}><i className="fas fa-phone fa-lg"/> +201146613779</td>
                </tr>
                <tr>
                    <td colSpan={2}><i className="fas fa-home fa-lg"/> 2XMM+83 Sheikh Zayed City
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}><i className="fas fa-envelope fa-lg"/> ms10596@gmail.com</td>
                </tr>
                <tr>
                    <td className="text-right"><a className="btn btn-outline-primary btn-block"
                                                  href="https://www.github.com/ms10596"
                                                  target="_blank"><i
                        className="fab fa-github fa-lg"/></a></td>
                    <td className="text-left"><a className="btn btn-outline-primary btn-block"
                                                 href="https://www.linkedin.com/in/ms10596"
                                                 target="_blank">
                        <i className="fab fa-linkedin fa-lg"/></a></td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}
const domContainer = document.querySelector('#intro');
ReactDOM.render(e(Intro), domContainer);