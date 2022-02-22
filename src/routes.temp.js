import { lazy } from 'react';

const HomePage = lazy(() => import('src/pages/Home/index1'));
const LoginPage = lazy(() => import('src/pages/Login'));
const RegisterPage = lazy(() => import('src/pages/Register'));
const Error404Page = lazy(() => import('@src/pages/Error/404'));

const routes = [
  { path: '/', exact: true, Component: HomePage },
  { path: '/login', exact: true, Component: LoginPage },
  { path: '/register', exact: true, Component: RegisterPage },

  { path: '*', exact: false, Component: Error404Page },
];

export default routes;
