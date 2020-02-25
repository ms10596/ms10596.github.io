class Projects extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tasks"/> Recent Projects</div>
            <table className="table table-bordered table-striped">
                <tbody>
                <tr>
                    <td><a href="https://github.com/ms10596/scrape" target="_blank">scrapest</a></td>
                    <td> Scraping engine based on <b>Python Scrapy</b> module. Deployed onto <b>AWS kubernetes</b> cluster. It scrapes and stores Egyptian news articles in an <b>elasticsearch</b> instance. I have used <b>Travis continuous integration</b> for smooth rolling updates while pushing changes on the remote branch.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/match" target="_blank">match</a></td>
                    <td> My graduation project is based on a popular natural language processing problem which is Text
                        Readability Assessment. We aim in this project to classify any given text to one of 3 levels
                        Easy, Intermediate and hard. We are using OneStopEnglish corpus to build our deep learning
                        model. All text processing, learning and deployment is done using <b>Python</b>.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/catalog" target="_blank">catalog</a></td>
                    <td> TV series management system using <b>Python</b>-Flask as a micro
                        framework, <b>SqlAlchemy</b> as a operational relational mapping and <b>AWS lightsail</b> instance for deployment.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/ms10596.github.io" target="_blank">My personal resume</a>
                    </td>
                    <td> Simple single page resume using <b>HTML</b>, <b>CSS</b> and <b>Bootstrap</b>. Every card in that resume is a separate <b>react</b> component for easy manipulation and reusability.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://github.com/ms10596/detectioner" target="_blank">detectioner</a></td>
                    <td>
                        Face recognition application using <b>Convolution Neural Network</b>. Dataset was gathered from team members. The code was written in <b>python</b> using <b>Keras</b> framework. Validation accuracy has reached <b>0.82</b>.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Projects), document.querySelector('#projects'));