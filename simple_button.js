'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clicked: false
     };
  }

  render() {
    if(this.state.clicked) {
      return e(
        'button',
        { id: "simple-button", onClick: () => this.setState({ clicked: !this.state.clicked }) },
        'Goodbye'
      );
    } else {
      return e(
        'button',
        { id: "simple-button", onClick: () => this.setState({ clicked: !this.state.clicked }) },
        'Hello!'
      );
    }
  }
}
const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));