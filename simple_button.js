'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      text:'Hello'
     };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { class: "simple-button", onClick: () => this.setState({ liked: true }) },
      this.state.text
    );
  }
}
const domContainer = document.querySelector('#test');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));