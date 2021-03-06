import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import RegisterForm from './register-form.js';
import Messages from './messages.js';
import UserList from './user-list.js';

let socket = io();

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      socket: socket,
      username: '',
      userlist: [],
    }
    this.userNameHandler = this.userNameHandler.bind(this);
    this.userlistHandler = this.userlistHandler.bind(this);
  }

  userNameHandler(name) {
    this.setState({
      username: name
    });
  }

  userlistHandler(users) {
     this.setState({
        userlist: users
    });
  }

  render() {
    return (
      <div>
        <h1>Socket chat</h1>
        <RegisterForm 
          socket={this.state.socket}
          userNameHandler={this.userNameHandler} />
        <hr />
        <Messages 
          socket={this.state.socket}
          username={this.state.username} />
        <UserList
          socket={this.state.socket}
          userlistHandler={this.userlistHandler} 
          userlist={this.state.userlist} />
      </div>
    );
  }
}

export default Main;

// TODO: Move all this functionality to components.
// $(function () {

//
//
//
//
//   socket.on('username-exists', (msg) => {
//     username = "";
//     $('#alert').text(msg);
//   });
//
//   // render user message
//   socket.on('new-message', (data) => {
//     let $container = $("<div>", {"class": "message-container"});
//     let $userinfo = $("<div>", {"class": "user"}).html(data.user);
//     let $msg = $("<div>", {"class": "message"}).html(data.message);
//     $userinfo.append($msg);
//     $container.append($userinfo);
//     $('#messages').append($container);
//   });
//
//   socket.on('user-disconnect', (msg) => {
//     // TODO: make android like toast.
//     console.log(msg);
//   });
//
// });
