import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import routes from './routes';
import GlobalStyle from './styles/global';
import theme from '@src/styles/theme';

interface AppProps { }

const App: React.FC<AppProps> = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.Suspense>
);

export default App;
