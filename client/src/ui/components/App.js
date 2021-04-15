import React, { useEffect } from "react";
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

const App = ({ fetchCurrentUser }) => {
  useEffect(() => {
    fetchCurrentUser();
  });

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/demos" component={Demos} />
          <Route path="/about" component={About} />
          <Route path="/_scenes/:sceneId?" component={Scenes} />
          <Route path="/Profile" component={Profile} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
