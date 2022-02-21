import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import routes from './routes';
// import GlobalStyle from './styles/global';
import theme from '@src/styles/theme';

interface AppProps { }

const App: React.FC<AppProps> = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={theme}>
      <div>App</div>

    </ThemeProvider>

  </React.Suspense>
);

export default App;
