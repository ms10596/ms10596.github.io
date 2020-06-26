class Podcast extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fa fa-headphones"></i> Listen to me</div>
            <div class="card-body">
                <iframe src="https://anchor.fm/refaie/embed/episodes/Machine-Learning-w-Mohamed-Sayed-e5cb6p/a-anfuep"
                    height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
            </div>

        </div>)
    }
}

ReactDOM.render(React.createElement(Podcast), document.querySelector('#podcast'));