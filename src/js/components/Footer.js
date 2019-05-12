class Footer extends React.Component {
    render() {
        return (<div>
            <footer className="page-footer font-small bg-info">
            <div className="text-center">2019 Copyright: Designed by @ms10596</div>
        </footer>
            </div>
        );
    }
}
ReactDOM.render(React.createElement(Footer), document.querySelector('#footer'));

