import React from 'react';
import ReactDOM from 'react-dom';

class MessageInput extends React.Component {

  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClick() {
    let data = {
      user: this.props.username,
      message: this.state.input
    };
    if (data.message.length <= 0) return false;
    
    this.props.socket.emit('new-message', data);

    this.props.handleMsg(data)
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div id="message-input-area">
        <input value={this.state.input} onChange={(e) => this.handleChange(e)} placeholder="Type a message"/>
        <button onClick={() => this.handleClick()}>Send</button>
      </div>
    );
  }
}

export default MessageInput;
