import React, { Component } from "react";
import Home from "./Home";
import Demos from "./Demos";
import About from "./About";
import Users from "./Users";
import Profile from "./Profile";
import Scenes from "./Scenes";
import Navigation from "./Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  // constructor(){
  //   super()
  // }
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/demos" component={Demos} />
            <Route path="/about" component={About} />
            <Route path="/scenes" component={Scenes} />
            <Route path="/Profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
