import React from 'react';
import ReactDOM from 'react-dom';

import MessageInput from './message-input.js'

class Messages extends React.Component {
  
  constructor() {
    super();
    this.handleMsg = this.handleMsg.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('new-message', (data) => {
      this.handleMsg(data);
    });
  }

  handleMsg(data) {
    let msg = data.user + ": " + data.message;

    // Some cooler element can be created.
    let container = document.getElementById("messages");
    let msge = document.createElement('div');
    msge.className = "message";
    msge.innerHTML = msg;
    container.appendChild(msge);
  }
  
  render() {
    return (
      <div className="col-md-12">
        <div id="messages"></div>
        <MessageInput
          socket={this.props.socket}
          username={this.props.username}
          handleMsg={this.handleMsg} />
      </div>
    );
  }
}

export default Messages;
