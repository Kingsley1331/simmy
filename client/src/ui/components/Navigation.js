import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="auth">
            <a href="/auth/google">Sign in with Google</a>
          </li>
        );
      default:
        return (
          <li className="auth">
            <a href="/api/logout">logout</a>
          </li>
        );
    }
  }

  render() {
    // console.log("Navigation", this.props);
    return (
      <ul className="nav">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/demos">Demos</Link>
        </li>
        <li>
          <Link to="/_scenes">Scenes</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {this.renderContent()}
      </ul>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth }
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navigation);
