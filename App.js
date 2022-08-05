const root = ReactDOM.createRoot(document.getElementById('root'))

// Text of upper field
var fieldText = ' '

// This function checks the expression length and cuts it if length too big.
function Check() {
    var text = fieldText.trim().split(' ')
    if(text.length > 3) {
        fieldText = ' ' + text[0] + ' ' + text[1] + ' '
    }
}

setInterval(Check, 100)


// This function calls when user presses '='
function Equals(source) {
    root.render(<App/>)
    var text = source.trim().split(' ')
    var result = Number(text[0])
    for(var i = 0; i < text.length; i++) {
        if(text[i] == '+')
            result += Number(text[i + 1])
        if(text[i] == '-')
            result -= Number(text[i + 1])
        if(text[i] == 'X')
            result *= Number(text[i + 1])
        if(text[i] == '/')
            result /= Number(text[i + 1])
        if(text[i] == '^')
            result **= Number(text[i + 1])
    }
    if(result == NaN || result == Infinity)
        fieldText = 'Result too big or not a number'
    else
        fieldText = result
}

// Button main class
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // Click event that will be executed when button clicked
    handleClick() {
        root.render(<App/>)
        // When Button clicked, it text adds to text of Text Field
        if(this.props.type == 'text' || this.props.type == null)
            fieldText += this.props.text
        else if(this.props.type == 'clear_all')
            fieldText = ''
        else if(this.props.type == 'remove')
            fieldText = fieldText.slice(0, fieldText.length - 1)
        else if(this.props.type == 'equals')
            Equals(fieldText)
    }

    render() {
        return (
        <button className="simple-button" onClick={this.handleClick}>
            {this.props.text}
        </button>
        )
    }
}

// Function that draw text field
function DrawText(props) {
    return <div className="simple-text-field">{props.text}</div>
}

function App() {
    //Buttons that will be on page
    return <div>
        <DrawText text={fieldText} />
        <Button text="1"/><Button text="2"/><Button text="3"/><Button text=" + "/><Button text="C" type="clear_all"/>
        <Button text="4"/><Button text="5"/><Button text="6"/><Button text=" - "/><Button text="<" type="remove"/>
        <Button text="7"/><Button text="8"/><Button text="9"/><Button text=" / "/><Button text="=" type="equals"/>
        <Button text="."/><Button text="0"/><Button text="000"/><Button text=" X "/><Button text=" ^ "/>
    </div>
}

root.render(<App/>)