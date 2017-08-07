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
    this.props.socket.emit('new-user', nick);

    this.props.socket.on('registration-success', (msg) => {
      this.setState({
        registrationError: '',
        registrationSuccess: msg
      });
      document.getElementById("nick").style.display = 'none';
      this.props.userNameHandler(nick)
    });

    this.props.socket.on('username-exists', (msg) => {
      this.setState({
        registrationError: msg
      });
    });

    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <div id="nick">
          <label>choose a nick to register to chat</label>
          <input value={this.state.input} onChange={(e) => this.handleChange(e)} 
                 autoComplete="off" placeholder=""/>
          <button onClick={() => this.handleClick()}>Send</button>
        </div>
        <div id="alert" className="text-danger">{this.state.registrationError}</div>
        <div id="alert" className="text-info">{this.state.registrationSuccess}</div>
      </div>
    );
  }
}

export default RegisterForm;
