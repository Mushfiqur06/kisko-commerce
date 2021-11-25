import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../module/auth/containers/login";
import Home from "../module/home/containers/Home";
import Profile from "../module/profile/containers/profile";
import { PrivateRoute } from "./AuthanticatedApp";
import { AuthRoute } from "./UnauthenticatedApp";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <AuthRoute path='/auth/login' component={() => <Login />} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </Switch>
    );
  }
}

export default App;
