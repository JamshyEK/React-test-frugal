import React, { Component } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  HashRouter,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../containers/DashboardContainer";
import Login from "../containers/LoginContainer";
import Signup from "../containers/SignupContainer";

import DefaultLayout from "../containers/DefaultLayout";
import PoggyLogin from "../components/Icons/SimpleLineIcons/SimpleLineIcons";

var history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("userdata") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function AppNavigator() {
  return (
    <Switch>
      <Route
        exact
        path="/login"
        name="Login Page"
        render={(props) => <Login {...props} />}
      />
      <Route
        exact
        path="/signup"
        name="Signup Page"
        render={(props) => <Signup {...props} />}
      />
      <Route path="/dashboard" name="Dashboard" component={DefaultLayout} />
      <Route path="/simplelineicons" component={PoggyLogin} />
      {/* <Route exact path="/" name="Login Page" render={props => <Login {...props} />} /> */}
      {/* <Redirect to='/login' /> */}
      <Route path="/" name="Dashboard" component={DefaultLayout} />
    </Switch>
  );
}
export default AppNavigator;
