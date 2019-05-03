const e = React.createElement;

class Milestones extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="far fa-flag"/> Milestones</div>
            <table className="table table-bordered">
                <tr>
                    <td>
                        <img src='./src/img/svg/Cairo_University_Crest.png'
                             className="img-thumbnail rounded mx-auto d-block"
                             width="75" title="Cairo University"/>
                    </td>
                    <td>
                        2015-2019 Cairo University<br/>
                        Bachelor's degree<br/>
                        Major: Computer Science
                        Minor: Decision Support
                    </td>
                </tr>
                <tr>
                    <td className="text-center"><i className="fas fa-baby fa-4x" /></td>
                    <td>1996-05-10</td>
                </tr>
            </table>
        </div>)
    }
}

const domContainer = document.querySelector('#milestones');
ReactDOM.render(e(Milestones), domContainer);