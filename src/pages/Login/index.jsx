import React from 'react';

import { HomeBanner } from 'src/components/banner';
import { HomeTitlebar } from 'src/components/titlebar';

const Login = () => {
  return (
    <>
      <HomeBanner />
      <HomeTitlebar banner />
      <div style={{ height: '1200vh' }} />
    </>
  );
};

export default Login;
