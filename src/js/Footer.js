const e = React.createElement;
class Footer extends React.Component {
    render() {
        return (<div>
                {/*<Bio />*/}
            {/*<Greeting />*/}
            <footer className="page-footer font-small bg-danger">
            <div className="text-center">2019 Copyright: Designed by me</div>
                {/*<Greeting />*/}
                {/*<Bio />*/}
        </footer>
            </div>
        );
    }
}
const domContainer = document.querySelector('#footer');
ReactDOM.render(e(Footer), domContainer);

