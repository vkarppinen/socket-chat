import React from 'react';
import ReactDOM from 'react-dom';

import Messages from './messages.js';
import UserList from './user-list.js';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Socket chat</h1>
        <hr />
        <Messages />
        <UserList />
      </div>
    );
  }
}

export default Main;
