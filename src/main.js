import React from 'react';
import ReactDOM from 'react-dom';

import RegisterForm from './register-form.js';
import Messages from './messages.js';
import UserList from './user-list.js';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Socket chat</h1>
        <RegisterForm />
        <hr />
        <Messages />
        <UserList />
      </div>
    );
  }
}

export default Main;

// TODO: Move all this functionality to components.
// $(function () {

//   let username = "";
//
//   
//
//   socket.on('username-exists', (msg) => {
//     username = "";
//     $('#alert').text(msg);
//   });
//
//   socket.on('registration-success', (msg) => {
//     console.log(msg);
//     $('#users-list').show();
//     $('#message-input-area').show();
//     $('#register').hide();
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
//   socket.on('update-user-list', (data) => {
//     $('#users-online').empty();
//     for (let user in data) {
//       if (data.hasOwnProperty(user)) {
//         let nick = data[user].name;
//         $('#users-online').append($('<span>').text(nick));
//       }
//     }
//   })
//
//   socket.on('user-disconnect', (msg) => {
//     // TODO: make android like toast.
//     console.log(msg);
//   });
//
// });
