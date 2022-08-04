const root = ReactDOM.createRoot(document.getElementById('root'))

var fieldText = ' '

function Equals() {
    root.render(<App/>)
    var text = fieldText.trim().split(' ')
    var result = Number(text[0])
    for(var i = 0; i < text.length; i++) {
        if(text[i] == '+')
            result += Number(text[i + 1])
        if(text[i] == '-')
            result -= Number(text[i + 1])
    }
    fieldText = result
}

// Button main class for "calculator"
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
        else if(this.props.type == 'equals')
            Equals()
    }

    render() {
        return (
        <button className="simple-button" onClick={this.handleClick}>
            {this.props.text}
        </button>
        )
    }
}

function DrawText(props) {
    return <div className="simple-text-field">{props.text}</div>
}

function App() {
    //Buttons that will be on page
    return <div>
        <DrawText text={fieldText} />
        <Button text="1"/><Button text="2"/><Button text="3"/><Button text=" + "/><Button text="C" type="clear_all"/>
        <Button text="4"/><Button text="5"/><Button text="6"/><Button text=" - "/>
        <Button text="7"/><Button text="8"/><Button text="9"/><Button text=" / "/>
        <Button text="."/><Button text="0"/><Button text=" = " type="equals"/><Button text=" X "/>
    </div>
}

root.render(<App/>)