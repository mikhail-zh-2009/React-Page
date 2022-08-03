function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            onText: '',
            offText: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    clickEvent() {}

    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
        this.clickEvent();
    }

    render() {
        return (
        <button class="simple-button" onClick={this.handleClick}>
            {this.state.isToggleOn ? this.state.offText : this.state.onText}
        </button>
        );
    }
}

class LikeButton extends Button {
    constructor(props) {
        super(props);
        this.state = {
            onText: 'Like',
            offText: 'Unlike'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    clickEvent() {
        
    }
}

class SubscribeButton extends Button {
    constructor(props) {
        super(props);
        this.state = {
            onText: 'Subscribe',
            offText: 'Unsubscribe',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    clickEvent() {
        
    }
}

function Print() {
    document.write("1")
}

function App() {
    return <div>
        <LikeButton/> <SubscribeButton/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)