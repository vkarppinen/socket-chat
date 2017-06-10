import React from 'react';
import ReactDOM from 'react-dom';

import MessageInput from './message-input.js'

class Messages extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div id="messages"></div>
        <MessageInput />
      </div>
    );
  }
}

export default Messages;
