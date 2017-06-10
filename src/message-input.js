import React from 'react';
import ReactDOM from 'react-dom';

class MessageInput extends React.Component {
  render() {
    return (
      <div id="message-input-area">
        <form id="msg-sender" action="">
          <fieldset>
            <label>Send a message</label>
            <input name="msg" id="msg" autocomplete="off" /><button>Send</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MessageInput;
