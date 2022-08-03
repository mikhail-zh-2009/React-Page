function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    clickEvent() {}

    handleClick() {
        this.clickEvent();
    }

    render() {
        return (
        <button class="simple-button" onClick={this.handleClick}>
            {this.state.text}
        </button>
        );
    }
}

class NumberButton extends Button {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
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
        <NumberButton state={{text:"q"}}/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)