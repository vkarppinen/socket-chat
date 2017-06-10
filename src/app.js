import React from 'react';
import ReactDOM from 'react-dom';

// Classes
import Main from './main.js'

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// $(function () {
//
//   var socket = io();
//   let username = "";
//
//   /** User registers to chat **/
//   $('#register').submit(function (e) {
//     e.preventDefault();
//     let nick = $('#nick').val();
//     username = nick;
//     socket.emit('new-user', nick);
//     $('#nick').val('');
//     $('#alert').text('');
//     return false;
//   });
//
//   // User sends message
//   $('#msg-sender').submit(function (e) {
//     e.preventDefault();
//     let data = {
//       user: username,
//       message: $('#msg').val()
//     }
//     if (data.message.length <= 0) return false;
//     socket.emit('new-message', data);
//     $('#msg').val('');
//     return false;
//   });
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
