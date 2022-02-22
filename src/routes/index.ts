import React from 'react';

const SamplePage = React.lazy(() => import('../pages/Sample/SamplePage'));
const Error404Page = React.lazy(() => import('../pages/Error/Error404Page'))

const routes =  [
  { path: '/', Component: SamplePage },

  { path: '*', Component: Error404Page },
] 

export default routes;
