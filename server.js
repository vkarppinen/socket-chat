var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/*
Array to store connected clients.
*/
let clients = {};

// Handle connection
io.on('connection', function(socket) {

  /** Add new client **/
  clients[socket.id] = socket;

  /** Handle username registration **/
  socket.on('new-user', (name) => {
    console.log("["+ socket.id + "] new user trying to register: " + name);
    for (var client in clients) {
      if (clients.hasOwnProperty(client)) {

        // if no user object exist on the client -> register
        if (typeof clients[client].user === 'undefined') {
          clients[client].user = {
            'name': name
          }
          console.log("["+ socket.id + "] " + name + " registered succesfully");
          socket.emit('registration-success', "You are registered as " + name);
          // TODO: broadcast user data to ALL clients
        }

        // if user object exists and nick matches -> "nick name not available"
        else if (clients[client].user.name == name) {
          console.log("["+ socket.id + "] name already reserved: " + name);
          socket.emit('username-exists', "username " + name + " is already in use");
          return false;
        }

      }
    }
  });

  /** Handle chat message **/
  socket.on('new-message', (data) => {
    io.emit('new-message', data);
  });

  /** Handle disconnection **/
  socket.on('disconnect', function () {
    console.log('deleting client');
    delete clients[socket.id];
  });

});

http.listen(8000, function(){
  console.log('listening on *:8000');
});