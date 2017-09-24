import React, { Component } from 'react';
import Table from './Table';
import Home from './Home';
import Demos from './Demos';
import About from './About';
import Users from './Users';
import Navigation from './Navigation';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  // constructor(){
  //   super()
  // }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={Users}/>
            <Route path="/demos" component={Demos}/>
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
