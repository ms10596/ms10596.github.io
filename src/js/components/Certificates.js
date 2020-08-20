class Certificates extends React.Component {
    state = {
        certificates: [
            {
                name: "Mathematics for Machine Learning Specialization",
                link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P22MNQQMTABD",
                logo: "./src/img/svg/coursera.png",
                issuer: "Udacity"
            },
            {
                name: "Cloud Developer for Enterprise Nanodegree",
                link: "https://confirm.udacity.com/QSKEQRAQ",
                logo: "./src/img/svg/udacity.svg",
                issuer: "Udacity"
            },
            {
                name: "Deep Learning Specialization",
                link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RF6JN7X9PNGR",
                logo: "./src/img/svg/deeplearning-ai-icon.png",
                issuer: "Deeplearning.ai"
            },
            {
                name: "Machine Learning by Stanford University",
                link: "https://www.coursera.org/account/accomplishments/certificate/GTHY9XTXZ75Q",
                logo: "./src/img/svg/coursera.png",
                issuer: "Coursera"
            },
            {
                name: "Full Stack Web Development Nanodegree",
                link: "https://graduation.udacity.com/confirm/6YYLUWEA",
                logo: "./src/img/svg/udacity.svg",
                issuer: "Udacity"
            }

        ]
    }

    render() {
        return (<div className="card mt-3">
                <div className="card-title card-header"><i className="fas fa-certificate"/> Certificates
                </div>
                <table className="table table-bordered">
                    <tbody>
                    {
                        this.state.certificates.map((certificate) => {
                            return (
                                <tr>
                                    <td className="text-center">
                                        <img src={certificate.logo} width="25" title={certificate.issuer}/>
                                    </td>
                                    <td>
                                        <a href={certificate.link} target="_blank">{certificate.name}</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(React.createElement(Certificates), document.querySelector('#certificates'));
