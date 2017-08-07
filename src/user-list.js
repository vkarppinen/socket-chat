import React from 'react';
import ReactDOM from 'react-dom';

class UserList extends React.Component {
  
  componentDidMount() {
    this.props.socket.on('update-userlist', (users) => {
      this.props.userlistHandler(users);
    });
  }
  
  renderUsers() {
    const users = this.props.userlist;
    if (users != undefined && users.length > 0) {
      return (
        <div>
        {users.map(user => 
            <div key={user.name} className="user">{user.name}</div>
        )}
        </div>
      )
    } else {
      return
    }
    
  }
  
  render() {
    return (
      <div id="users-list">
        <div><strong>Users online:</strong></div>
        {this.renderUsers()}
      </div>
    );
  }
}

export default UserList;
