class Projects extends React.Component {
    state = {
        projects: [
            {
                name: "scrapest",
                link: "https://github.com/ms10596/scrape",
                description: "Scraping engine based on Python Scrapy module. Deployed onto AWS Kubernetes cluster. It scrapes and stores Egyptian news articles in an elasticsearch instance. I have used Travis CI/CD for smooth rolling updates while pushing changes on the remote branch."
            },
            {
                name: "match",
                link: "https://github.com/ms10596/match",
                description: "My graduation project is based on a popular NLP problem which is Text Readability Assessment. We aim in this project to classify any given text to one of 3 levels Easy, Intermediate and hard. We have done multiple experiments using different types of network architecture like LSTM and CNN using Keras framework and based on OneStopEnglish corpus."
            },
            {
                name: "catalog",
                link: "https://github.com/ms10596/catalog",
                description: "TV series management system with CRUD operations based Flask as a web server, SqlAlchemy as a operational relational mapping and AWS lightsail instance for deployment."
            },
            {
                name: "personal-resume",
                link: "https://github.com/ms10596/ms10596.github.io",
                description: "Simple single page resume using HTML, CSS and Bootstrap. Every card in that resume is a separate react component for easy manipulation and reusability."
            },
            {
                name: "detectioner",
                link: "https://github.com/ms10596/detectioner",
                description: "Face recognition application using CNN. Dataset was gathered from team members. The code was written in python using Keras framework. Validation accuracy has reached 82%."
            }
        ],
        buzzwords: {"html":true, "css":true, "js":true,"lstm":true,"cnn":true,"nlp":true, "ci/cd":true,"aws":true,"python":true,"numpy":true, "pandas":true, "matplotlib":true, "nltk":true, "keras":true, "scikit-learn":true, "flask":true, "docker":true, "kubernetes":true, "linux":true, "postgresql":true, "elasticsearch":true, "git":true, "react":true, "bootstrap":true}
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
                                    {
                                        project.description.split(/[\s]/).map((word) => {
                                            console.log(word)
                                           if(this.state.buzzwords[word.toLowerCase()] || this.state.buzzwords[word.slice(0,word.length-1).toLowerCase()]) {
                                                return (
                                               <strong>{word} </strong>
                                           )
                                           }
                                           else {
                                               return (word+" ")
                                           }

                                        })
                                    }

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