class Milestones extends React.Component {
    states = {
        milestones: [
            {
                company: "Lyra",
                role: "AI Launchpad",
                start_date: "2020-02-10",
                end_date: "2020-04-01",
                logo_link: "https://media-exp1.licdn.com/dms/image/C4D0BAQHrMuIlyTBdGw/company-logo_200_200/0?e=1589414400&v=beta&t=g9Dfs3SLEuVFhcRmhbTrC7KNCSq5Y_MrOkt4Jj37KOM",
                link:"https://lyranalytics.com"
            },
            {
                company: "Agolo",
                role: "Natural Language Processing Engineering Internship",
                start_date: "2019-07-01",
                end_date: "2019-10-01",
                logo_link: "https://www.agolo.com/images/favicon.ico",
                link:"https://www.agolo.com"
            },
            {
                company: "Cairo University",
                role: "Bachelor's degree, Computer Science",
                start_date: "2015-09-25",
                end_date: "2019-06-25",
                note: "Faculty of Computers and Artificial Intelligence",
                logo_link: "https://fci.cu.edu.eg/images/logo_fci.png",
                link: "https://fci.cu.edu.eg/Home"
            },
            {
                company: "",
                role: "",
                start_date: "1996-05-10",
                logo_link: "./src/img/svg/small_me.jpg",
                end_date: ""
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
                                    <img height="70px" width="70px" src={milestone.logo_link} />
                                </a>
                            </td>
                            <td>
                                {milestone.start_date} <i className="fas fa-arrow-right" /> {milestone.end_date}<br/>
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