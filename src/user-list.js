import React from 'react';
import ReactDOM from 'react-dom';

class UserList extends React.Component {
  render() {
    return (
      <div id="users-list">
        <div><strong>Users online:</strong></div>
        <div id="users-online"></div>
      </div>
    );
  }
}

export default UserList;
