import React from 'react';
import ReactDOM from 'react-dom';

class RegisterForm extends React.Component {

  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClick() {
    let nick = this.state.input;
    /* TODO: socket.emit('new-user', nick);
       TODO: Here we need also the condition when the chosen nick is reserved
       TODO: $('#alert').text('');
    */
    this.props.userNameHandler(nick);
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <label>choose a nick to register to chat</label>
        <input value={this.state.input} onChange={(e) => this.handleChange(e)} id="nick" autoComplete="off" placeholder=""/>
        <button onClick={() => this.handleClick()}>Send</button>
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

// socket.on('registration-success', (msg) => {
//     console.log(msg);
//     $('#users-list').show();
//     $('#message-input-area').show();
//     $('#register').hide();
//   });
