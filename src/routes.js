import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const StoreDetails = React.lazy(() => import('./views/StoreDetails'));
const PoggyLogin = React.lazy(() => import('./views/PoggyLogin'));
const PoggyUsers = React.lazy(() => import('./views/PoggyUsers'));

// const Location = React.lazy(() => import('./views/Location'))
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/location', name: 'Location', component: Location },
  { path: '/storedetails', name: 'Store Details', component: StoreDetails },
  { path: '/poggylogin', name: 'Login', component: PoggyLogin },
  { path: '/poggyusers', name: 'Users', component: PoggyUsers }



];

export default routes;
