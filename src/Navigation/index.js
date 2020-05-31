import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Dashboard from '../containers/DashboardContainer';
import Login from '../containers/LoginContainer'
import PoggyUsers from '../screens/PoggyUsers'
import DefaultLayout from '../containers/DefaultLayout'

var history = createBrowserHistory()
// const Login = React.lazy(() => import('../components/Pages/Login'));
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("userdata") ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

function AppNavigator() {
    return (
        <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route path='/dashboard' name='Dashboard' component={DefaultLayout} />

            {/* <Route path ='/login' component={Login}/> */}
            <Route path='/PoggyLogin' component={PoggyUsers} />
            <Route path='/' name='Dashboard' component={DefaultLayout} />
        </Switch>
    )
}
export default AppNavigator

