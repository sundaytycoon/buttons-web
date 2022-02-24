import React from 'react';

// common pages
const HomePage = React.lazy(() => import('@pages/Home/Home'));
const LoginPage = React.lazy(() => import('@pages/Login/Login'));

// error
const Error404Page = React.lazy(() => import('@pages/Error/404'));

const routes = [
  { path: '/', Component: HomePage },
  { path: '/login', Component: LoginPage },

  { path: '*', Component: Error404Page },
];

export default routes;
