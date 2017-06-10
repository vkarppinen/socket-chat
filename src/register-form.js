import React from 'react';
import ReactDOM from 'react-dom';

class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <form id="register">
          <label for="nick">choose a nick to register to chat</label>
          <input id="nick" name="nick" autocomplete="off" placeholder=""/>
          <button>Send</button>
          <div id="alert" class="text-danger"></div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
