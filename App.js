const root = ReactDOM.createRoot(document.getElementById('root'));
// Button main class
var text = ' ';
var splitted = text.split(' ');

function Equals() {
    var result = Number(splitted[0])
    for(var i in splitted) {
        if(splitted[i] == '+') {
            result += Number(splitted[i + 1]);
        }
    }
    text = result;
}

function CheckText() {
    if(splitted[splitted.length] == '=') {
        Equals();
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // Click event that will be executed when button clicked
    clickEvent() {
        root.render(<App />)
        text += this.props.text
    }

    handleClick() {
        this.clickEvent();
    }

    render() {
        return (
        <button class="simple-button" onClick={this.handleClick}>
            {this.props.text}
        </button>
        );
    }
}

// Like button
class NumberButton extends Button {
    constructor(props) {
        super(props);
        this.state = {
            text: '1',
        };
        this.handleClick = this.handleClick.bind(this);
    }
}

function DrawText(props) {
    return <div class="simple-text-field">{props.text}</div>;
}


function App() {
    return <div>
        <DrawText text={text} /><br/>
        <NumberButton text="1"/><NumberButton text="2"/><NumberButton text="3"/><NumberButton text=" + "/>
        <NumberButton text="4"/><NumberButton text="5"/><NumberButton text="6"/><NumberButton text=" - "/>
        <NumberButton text="7"/><NumberButton text="8"/><NumberButton text="9"/><NumberButton text=" / "/>
        <NumberButton text="."/><NumberButton text="0"/><NumberButton text=" = "/><NumberButton text=" X "/>
    </div>
}

setInterval(CheckText, 1);

root.render(<App/>)