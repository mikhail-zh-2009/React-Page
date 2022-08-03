const root = ReactDOM.createRoot(document.getElementById('root'));

var text = ' ';

// Button main class for "calculator"
class NumberButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Click event that will be executed when button clicked

    handleClick() {
        root.render(<App />)
        text += this.props.text
    }

    render() {
        return (
        <button className="simple-button" onClick={this.handleClick}>
            {this.props.text}
        </button>
        );
    }
}

function DrawText(props) {
    return <div className="simple-text-field">{props.text}</div>;
}

function App() {
    //Buttons that will be on page
    return <div>
        <DrawText text={text} /><br/>
        <NumberButton text="1"/><NumberButton text="2"/><NumberButton text="3"/><NumberButton text=" + "/>
        <NumberButton text="4"/><NumberButton text="5"/><NumberButton text="6"/><NumberButton text=" - "/>
        <NumberButton text="7"/><NumberButton text="8"/><NumberButton text="9"/><NumberButton text=" / "/>
        <NumberButton text="."/><NumberButton text="0"/><NumberButton text=" = "/><NumberButton text=" X "/>
    </div>
}

root.render(<App/>)