import React from 'react';
import ReactDOM from 'react-dom';

class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <label>choose a nick to register to chat</label>
        <input id="nick" autoComplete="off" placeholder=""/>
        <button>Send</button>
        <div id="alert" className="text-danger"></div>
      </div>
    );
  }
}

export default RegisterForm;

/** TODO: User registers to chat **/
//   $('#register').submit(function (e) {
//     e.preventDefault();
//     let nick = $('#nick').val();
//     username = nick;
//     socket.emit('new-user', nick);
//     $('#nick').val('');
//     $('#alert').text('');
//     return false;
//   });
