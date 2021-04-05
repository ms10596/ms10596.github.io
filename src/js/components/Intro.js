class Intro extends React.Component {
    render() {
        return (<div className="card mt-3">
            <h1 className="card-title card-header text-dark">Mohamed Sayed</h1>
            <h4 className="font-italic font-weight-light text-center mt-2">Computer Scientist</h4>
            <table className="table table-bordered mt-1">
                <tbody>
                    <tr>
                        <td colSpan={2}><i className="fas fa-phone fa-lg" /> +201146613779</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><i className="fas fa-home fa-lg" /> Giza, Sheikh Zayed City
                    </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><i className="fas fa-envelope fa-lg" /> ms10596 [at] gmail [dot] com</td>
                    </tr>
                </tbody>
            </table>
            <img className="card-img-bottom" src="./src/img/svg/me.jpg" alt="me" />
            {/*<img src="./src/img/svg/me2.jpg" alt="me"/>*/}

            <div className="mt-1" />

            <div className="btn-group btn-group-lg">
                <a className="btn btn-outline-dark" href="https://www.github.com/ms10596" target="_blank"
                    style={{ width: "33%" }}><i className="fab fa-github fa-lg" /></a>
                <a className="btn btn-outline-dark" href="https://www.linkedin.com/in/ms10596" target="_blank"
                    style={{ width: "33%" }}><i className="fab fa-linkedin fa-lg" /></a>
                <a className="btn btn-outline-dark" href="https://stackoverflow.com/users/7954107/mohamed-sayed" target="_blank"
                    style={{ width: "33%" }}><i className="fab fa-stack-overflow" /></a>
                
            </div>
            <div className="mt-1" />
        </div>)
    }
}

ReactDOM.render(React.createElement(Intro), document.querySelector('#intro'));
