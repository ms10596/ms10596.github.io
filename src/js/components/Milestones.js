class Milestones extends React.Component {
    states = {
        milestones: [
            {
                company: "Lyra",
                role: "AI Launchpad",
                start_date: "2020-02",
                end_date: "2020-04",
                logo_link: "https://media-exp1.licdn.com/dms/image/C4D0BAQHrMuIlyTBdGw/company-logo_200_200/0?e=1589414400&v=beta&t=g9Dfs3SLEuVFhcRmhbTrC7KNCSq5Y_MrOkt4Jj37KOM",
                link:"https://lyranalytics.com",
                duration: "2 mos"
            },
            {
                company: "Agolo",
                role: "Natural Language Processing Engineering Internship",
                start_date: "2019-07",
                end_date: "2019-10",
                logo_link: "https://www.agolo.com/images/favicon.ico",
                link:"https://www.agolo.com",
                duration: "3 mos"
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
                                    <img height="70px" width="70px" src={milestone.logo_link} />
                                </a>
                            </td>
                            <td>
                                {milestone.start_date} <i className="fas fa-arrow-right" /> {milestone.end_date} . {milestone.duration}<br/>
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