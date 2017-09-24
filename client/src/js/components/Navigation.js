import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
        <ul className='nav'>
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/demos">Demos</Link></li>
          <li id="log"><Link to="/logout">Logout</Link></li>
        </ul>
    );
  }
}

export default Navigation;
