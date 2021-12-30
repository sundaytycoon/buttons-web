import React from 'react';

import { HomeBanner } from 'src/components/banner';
import { HomeDesktopTitlebar } from 'src/components/titlebar';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeDesktopTitlebar banner />
      <div style={{ height: '120vh' }}></div>
    </>
  );
};

export default Home;
