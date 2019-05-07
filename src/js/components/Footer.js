class Footer extends React.Component {
    render() {
        return (<div>
            <footer className="page-footer font-small bg-danger">
            <div className="text-center">2019 Copyright: Designed by me</div>
        </footer>
            </div>
        );
    }
}
ReactDOM.render(React.createElement(Footer), document.querySelector('#footer'));

