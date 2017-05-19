$(function () {

  var socket = io();

  /** User registers to chat **/
  $('#register').submit(function (e) {
    e.preventDefault();
    let nick = $('#nick').val();
    socket.emit('new-user', nick);
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

  // render user message
  socket.on('new-message', (msg) => {
    $('#messages').append($('<li>').text(msg));
  });

  socket.on('user-disconnect', (msg) => {
    // TODO: make android like toast.
    console.log(msg);
  });

});
