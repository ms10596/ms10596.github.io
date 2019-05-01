'use strict';

const e = React.createElement;

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {

        return (<div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card mt-3">
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
                                                                 target="_blank"><i
                                        className="fab fa-linkedin fa-lg"/></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card mt-3">
                            <div className="card-title card-header"><i className="fas fa-book"/> Skills</div>
                            <ul className="list-group">
                                <li className="list-group-item">OOP & Data Structure</li>
                                <li className="list-group-item">Neural Network</li>
                                <li className="list-group-item">Web Development</li>
                            </ul>

                        </div>
                        <div className="card mt-3">
                            <div className="card-title card-header"><i className="fas fa-code"/> Tools</div>
                            <ul className="list-group">
                                <li className="list-group-item">Python (Tensorflow, Keras, Numpy, Matplotlib,
                                    Flask)
                                </li>
                                <li className="list-group-item">Linux</li>
                                <li className="list-group-item">SQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mt-3">
                            <div className="card-body">
                                <p className="card-text">
                                    Finishing my last year at University. Capable of learning new technologies in
                                    no
                                    time. Looking for an internship in Back End Development, Data Analysis or
                                    Machine Learning.
                                </p>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-title card-header"><i className="far fa-flag"/> Milestones</div>
                            <table className="table table-bordered">
                                <tr>
                                    <td>
                                        <img src="../src/img/svg/Cairo_University_Crest.png" width="50"/>
                                    </td>
                                    <td>
                                        2015-2019 Cairo University<br/>
                                        Bachelor's degree<br/>
                                        Major: Computer Science
                                        Minor: Decision Support
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-baby fa-4x"/></td>
                                    <td>1996-05-10</td>
                                </tr>
                            </table>
                        </div>


                        <div className="card mt-3">
                            <div className="card-title card-header"><i className="fas fa-certificate"/> Certificates
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <a className="list-group-item"
                                       href="https://www.coursera.org/account/accomplishments/specialization/certificate/RF6JN7X9PNGR"><img
                                        src="../src/img/svg/deeplearning-ai-icon.png" width="25"/> Deep
                                        Learning
                                        Specialization
                                    </a></tr>
                                <tr>
                                    <a className="list-group-item"
                                       href="https://www.coursera.org/account/accomplishments/certificate/GTHY9XTXZ75Q"><img
                                        src="../src/img/svg/coursera.png" width="25"/> Machine Learning by
                                        Stanford
                                        University</a></tr>
                                <tr>
                                    <a className="list-group-item"
                                       href="https://graduation.udacity.com/confirm/6YYLUWEA"><img
                                        src="../src/img/svg/udacity.svg" width="25"/> Full Stack Web
                                        Development
                                        Nanodegree</a></tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="card mt-3">
                            <div className="card-title card-header"><i className="fas fa-tasks"/> Projects</div>
                            <ul className="list-group">
                                <a className="list-group-item" href="https://github.com/ms10596/ngrams">Autocomplete
                                    Search
                                    Query</a>
                                <a className="list-group-item" href="https://github.com/ms10596/detectectioner">Face
                                    Recognition Application</a>
                                <a className="list-group-item" href="https://github.com/ms10596/Musicaly">Music
                                    Player</a>
                                <a className="list-group-item" href="https://github.com/ms10596/catalog">TV Series
                                    Managment
                                    System</a>
                            </ul>
                        </div>
                    </div>
                </div>
                < /div>
                    <br/>
                    < /div>

                        )
                        ;
                        }
                        }

                        const domContainer = document.querySelector('#root');
                        ReactDOM.render(e(Greeting), domContainer);

