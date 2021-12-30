import React from 'react';

import { HomeBanner } from 'src/components/banner';
import { HomeTitlebar } from 'src/components/titlebar';

const Login = () => {
  return (
    <>
      <HomeBanner />
      <HomeTitlebar banner />
      <div style={{ height: '120vh' }} />
    </>
  );
};

export default Login;
