const e = React.createElement;

class Certificates extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-certificate"/> Certificates
            </div>
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <td><img
                        src="./src/img/svg/deeplearning-ai-icon.png" width="25"/></td>
                    <td><a
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/RF6JN7X9PNGR"> Deep
                        Learning Specialization</a></td>
                </tr>
                <tr>
                    <td><img
                        src="./src/img/svg/coursera.png" width="25"/></td>
                    <td><a
                        href="https://www.coursera.org/account/accomplishments/certificate/GTHY9XTXZ75Q"> Machine
                        Learning by
                        Stanford
                        University</a></td>
                </tr>
                <tr>
                    <td><img
                        src="./src/img/svg/udacity.svg" width="25"/></td>
                    <td><a href="https://graduation.udacity.com/confirm/6YYLUWEA"> Full Stack Web
                        Development
                        Nanodegree</a></td>
                </tr>
                </tbody>
            </table>

        </div>)
    }
}

const domContainer = document.querySelector('#certificates');
ReactDOM.render(e(Certificates), domContainer);