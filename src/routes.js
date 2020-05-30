import React from 'react';


const Dashboard = React.lazy(() => import('./components/Dashboard'));
const StoreDetails = React.lazy(() => import('./components/StoreDetails'));
const PoggyLogin = React.lazy(() => import('./components/PoggyLogin'));
const PoggyUsers = React.lazy(() => import('./components/PoggyUsers'));

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
