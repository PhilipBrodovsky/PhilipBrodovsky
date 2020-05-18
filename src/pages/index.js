// React
import React, { memo } from 'react';

// React Router
import { Route } from 'react-router-dom';

// Pages
import Login from './Login';
import Home from './Home';
import Course from './course';

const routes = [
   {
      path: '/login',
      component: Login
   },
   {
      path: '/course',
      component: Course
   },
   {
      path: '/',
      component: Home
   }
];

export default routes.map(route => {
   return <Route key={route.path} {...route} />;
});
