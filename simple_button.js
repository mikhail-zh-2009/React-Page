'use strict';

const e = React.createElement;

class SimpleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clicked: false
     };
  }

  render() {
    if(this.state.clicked)
      return <button class="simple-button" onclick="this.setState({clicked: !this.state.clicked})">Goodbye</button>
    return <button class="simple-button" onclick="this.setState({clicked: !this.state.clicked})">Hello</button>
  }
}
const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(<SimpleButton/>);