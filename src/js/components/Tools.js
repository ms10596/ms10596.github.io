const e = React.createElement;

class Tools extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tools"/> Tools</div>
            <table className="table table-bordered table-striped">

                <tbody>
                <tr>
                    <td rowSpan={4}>Web</td>
                    <td>Flask</td>
                </tr>
                <tr>
                    <td>PostgreSQL</td>
                </tr>
                <tr>
                    <td>React</td>
                </tr>
                <tr>
                    <td>Bootstrap</td>
                </tr>
                <tr>
                    <td rowSpan={6}>Data</td>
                    <td>Numpy</td>
                </tr>
                <tr>
                    <td>Keras</td>
                </tr>
                <tr>
                    <td>Pandas</td>
                </tr>
                <tr>
                    <td>Scikit-learn</td>
                </tr>
                <tr>
                    <td>Matplotlib</td>
                </tr>
                <tr>
                    <td>Natural Language Toolkit</td>
                </tr>
                <tr>
                    <td rowSpan={3}>Others</td>
                    <td>Linux</td>
                </tr>
                <tr>
                    <td>Git</td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}

const domContainer = document.querySelector('#tools');
ReactDOM.render(e(Tools), domContainer);