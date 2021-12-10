import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));
const Error404Page = lazy(() => import('./pages/error/404'));

const routes = [
  { path: '/', exact: true, Component: HomePage },
  { path: '/login', exact: true, Component: LoginPage },
  { path: '/register', exact: true, Component: RegisterPage },

  { path: '*', exact: false, Component: Error404Page },
];

export default routes;
