import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
//import { fetchUser2 } from '../actions/userActions';

class Users extends Component {
  getNames() {
    if(this.props.users[0]) {
      let names = this.props.users.map(user => {
          return <tr key={user.name}><td>{user.name}</td><td>{user.age}</td><td>{user.id}</td></tr>;
      });

      return ( <div>
              <h1>User's Table</h1>
              <table>
                <tbody>
                  <tr>
                    <th> Name </th>
                    <th> Age </th>
                    <th> User ID </th>
                  </tr>
                  {names}
                </tbody>
              </table>
            </div>);
         }
    }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <button onClick={this.props.fetchUser}>fetch simmy users</button>
        {this.getNames()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    scenes: state.scenes
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUser : () => dispatch(fetchUser())
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Users);


export default connect(
  mapStateToProps,
  {
    fetchUser: fetchUser
  }
)(Users);