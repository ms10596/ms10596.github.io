class Projects extends React.Component {
    state = {
        projects: [
            {
                name: "scrapest",
                link: "https://github.com/ms10596/scrape",
                description: "Scraping engine based on Python Scrapy module. Deployed onto AWS kubernetes cluster. It scrapes and stores Egyptian news articles in an elasticsearch instance. I have used Travis continuous integration for smooth rolling updates while pushing changes on the remote branch."
            },
            {
                name: "match",
                link: "https://github.com/ms10596/match",
                description: "My graduation project is based on a popular natural language processing problem which is Text Readability Assessment. We aim in this project to classify any given text to one of 3 levels Easy, Intermediate and hard. We are using OneStopEnglish corpus to build our deep learning model. All text processing, learning and deployment is done using Python."
            },
            {
                name: "catalog",
                link: "https://github.com/ms10596/catalog",
                description: "TV series management system using Python-Flask as a micro framework, SqlAlchemy as a operational relational mapping and AWS lightsail instance for deployment."
            },
            {
                name: "personal-resume",
                link: "https://github.com/ms10596/ms10596.github.io",
                description: "Simple single page resume using HTML, CSS and Bootstrap. Every card in that resume is a separate react component for easy manipulation and reusability."
            },
            {
                name: "detectioner",
                link: "https://github.com/ms10596/detectioner",
                description: "Face recognition application using Convolution Neural Network. Dataset was gathered from team members. The code was written in python using Keras framework. Validation accuracy has reached 0.82."
            }
        ]
    }

    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tasks"/> Recent Projects</div>
            <table className="table table-bordered table-striped">
                <tbody>
                {
                    this.state.projects.map((project) => {
                        return (
                            <tr>
                                <td>
                                    <a href={project.link} target="_blank">
                                        {project.name}
                                    </a>
                                </td>
                                <td>
                                    {project.description}
                                </td>
                            </tr>)
                    })
                }
                </tbody>
            </table>
        </div>)
    }
}

ReactDOM.render(React.createElement(Projects), document.querySelector('#projects'));