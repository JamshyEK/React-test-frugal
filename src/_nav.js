export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
    },
    {
      name: 'Categories',
     // route: '',
      icon: 'icon-list',
      children: [
        {
          name: 'Dog',
          url: '/dogslist',
          icon: 'icon-book-open',
        },
        {
          name: 'Cat',
          url: '/catslist',
          icon: 'icon-book-open',
        },
   
       
      ],
    },
   
    // {
    //   name: 'Login',
    //   url: '/poggylogin',
    //   icon: 'icon-user',

    // },
       
    // {
    //   name: 'Login2',
    //   url: '/poggylogin',
    //   icon: 'icon-user',

    // },
  ],
};
