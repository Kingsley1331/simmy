import React, { Component } from 'react';
import Table from './Table';

class Home extends Component {
  render() {
    return (
      <div>
        <a href='/auth/google'>Sign in with Google</a>
        <Table/>
      </div>
    );
  }
}

export default Home;
