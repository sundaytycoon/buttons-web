import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes';

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, exact, Component }, i) => (
            <Route key={i} exact={exact} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
