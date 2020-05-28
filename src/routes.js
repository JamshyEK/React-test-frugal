import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));

// const Location = React.lazy(() => import('./views/Location'))
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/location', name: 'Location', component: Location },



];

export default routes;
