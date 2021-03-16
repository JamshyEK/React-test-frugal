import React from 'react';


const Dashboard = React.lazy(() => import('./components/Dashboard'));

const PoggyLogin = React.lazy(() => import('./components/PoggyLogin'));
const DogsList = React.lazy(() => import('./containers/DogContainer/index'));
const CatsList = React.lazy(() => import('./containers/CatContainer/index'));
const Users = React.lazy(() => import('./containers/UsersContainer/index'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dogslist', name: 'Dogs', component: DogsList },
  { path: '/catslist', name: 'Cats', component: CatsList },
  { path: '/users', name: 'Users', component: Users },
  //{ path: '/poggylogin', name: 'Login', component: PoggyLogin },
  // { path: '/sign', name: 'Sign', component: Sign },

 


];

export default routes;
