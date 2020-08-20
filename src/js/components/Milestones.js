class Milestones extends React.Component {
    states = {
        milestones: [
            {
                company: "Optomatica",
                role: "Data Scientist",
                start_date: "2020-04",
                end_date: "present",
                logo_link: "https://optomatica.com/wp-content/uploads/thegem-logos/logo_0b9c89473cb8fbb09958b6be57d67bd0_1x.png",
                link: "https://optomatica.com/"

            },
            {
                company: "Agolo",
                role: "Natural Language Processing Engineering Internship",
                start_date: "2019-07",
                end_date: "2019-10",
                logo_link: "https://www.agolo.com/images/favicon.ico",
                link: "https://www.agolo.com",
                duration: "3 mos"
            },
            {
                company: "Udacity",
                role: "Session Lead",
                start_date: "2019-06",
                end_date: "2020-10",
                logo_link: "./src/img/svg/udacity.svg",
                link: "https://udacity.com",
                duration: "4 mos"
            },
            {
                company: "Cairo University",
                role: "Bachelor's degree, Computer Science",
                start_date: "2015-09",
                end_date: "2019-06",
                note: "Faculty of Computers and Artificial Intelligence",
                logo_link: "https://fci.cu.edu.eg/images/logo_fci.png",
                link: "https://fci.cu.edu.eg/Home",
                duration: "4 yrs"
            }
        ]
    }

    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="far fa-flag"/> Milestones</div>
            <table className="table table-bordered">
                {
                    this.states.milestones.map((milestone) => {
                        return (<tr>
                            <td className="text-center" style={{width: "15px"}}>
                                <a href={milestone.link} target="_blank">
                                    <img height="70px" width="70px" src={milestone.logo_link}/>
                                </a>
                            </td>
                            <td>
                                {milestone.start_date} <i
                                className="fas fa-arrow-right"/> {milestone.end_date} . {milestone.duration}<br/>
                                <strong>{milestone.company}</strong><br/>
                                {milestone.role}<br/>
                                <em>{milestone.note}</em>
                            </td>
                        </tr>)
                    })
                }
            </table>
        </div>)
    }
}

ReactDOM.render(React.createElement(Milestones), document.querySelector('#milestones'));
