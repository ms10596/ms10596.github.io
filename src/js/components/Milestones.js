class Milestones extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="far fa-flag"/> Milestones</div>
            <table className="table table-bordered">
                <tr>
                    <td className="text-center">
                        <img src='./src/img/svg/Cairo_University_Crest.png' title="Cairo University" width="50px" style={{webkitFilter: "grayscale(40%)"}}/>
                    </td>
                    <td>
                        2015-2019 Cairo University<br/>
                        Bachelor's degree<br/>
                        Major: Computer Science<br />
                        Minor: Decision Support
                    </td>
                </tr>
                <tr>
                    <td className="text-center"><i className="fas fa-baby fa-3x" /></td>
                    <td>1996-05-10</td>
                </tr>
            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Milestones), document.querySelector('#milestones'));