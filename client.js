$(function () {

  var socket = io();

  /** User registers to chat **/
  $('#register').submit(function (e) {
    e.preventDefault();
    let nick = $('#nick').val();
    socket.emit('new-user', nick);
    $('#nick').val('');
    $('#alert').text('');
    return false;
  });

  // User sends message
  $('#msg-sender').submit(function (e) {
    e.preventDefault();
    let message = $('#msg').val();
    socket.emit('new-message', message);
    $('#msg').val('');
    return false;
  });

  socket.on('username-exists', (msg) => {
    $('#alert').text(msg);
  });

  socket.on('registration-success', (msg) => {
    console.log(msg);
    $('#users-list').show();
    $('#message-input-area').show();
    $('#register').hide();
  });

  // render user message
  socket.on('new-message', (msg) => {
    $('#messages').append($('<li>').text(msg));
  });

  socket.on('user-disconnect', (msg) => {
    // TODO: make android like toast.
    console.log(msg);
  });

});
