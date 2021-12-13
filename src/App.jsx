import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, exact, Component }, i) => (
              <Route
                key={i}
                exact={exact}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;
