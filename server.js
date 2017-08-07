var express = require('express');
var app = express();
var path = require('path');

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 8000));
app.use("/", express.static(path.join(__dirname, 'public')));

http.listen(app.get('port'), function(){
  console.log("Node server running in port :" + app.get('port'));
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
    for (let client in clients) {
      if (clients.hasOwnProperty(client)) {

        // if no user object exist on the client -> register
        if (typeof clients[client].user === 'undefined') {
          clients[client].user = {
            'name': name
          }
          console.log("["+ socket.id + "] " + name + " registered succesfully");
          socket.emit('registration-success', "You are registered as " + name);
        }

        // if user object exists and nick matches -> "nick name not available"
        else if (clients[client].user.name == name) {
          console.log("["+ socket.id + "] name already reserved: " + name);
          socket.emit('username-exists', "username " + name + " is already in use");
          return false;
        }

      }
    }
    
    // TODO: Make user class, that is used within the userlist
    let userlist = [];
    for (let client in clients) {
      if (clients[client].user) {
        userlist.push(clients[client].user);
      }
    }
    // Broadcast to all clients
    updateAllClients(userlist);
  });

  /** Handle chat message **/
  socket.on('new-message', (data) => {
    socket.broadcast.emit('new-message', data);
  });

  /** Handle disconnection **/
  socket.on('disconnect', function () {
    console.log('deleting client');
    delete clients[socket.id];
    let userlist = [];
    for (let client in clients) {
      if (clients[client].user) {
        userlist.push(clients[client].user);
      }
    }
    updateAllClients(userlist);
    // TODO: create a emit that the specific user disconnected. "user has disconnected..."
  });

});

function updateAllClients(data) {
  console.log("updating clients with:",  data);
  io.sockets.emit('update-userlist', data);
}
