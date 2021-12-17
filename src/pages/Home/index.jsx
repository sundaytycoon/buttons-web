import React, { useRef, useState, useEffect } from 'react';

import HomeBanner from 'src/components/banners/HomeBanner';
import MainTitlebar from 'src/components/titlebars/MainTitlebar';
import MainFooter from 'src/components/footers/MainFooter';

const Home = () => {
  const [hidingBanner, setHidingBanner] = useState(false);
  const $bannerTrigger = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidingBanner(entry.rootBounds.y > entry.boundingClientRect.y);
      },
      { threshold: 0.5, rootMargin: '74px' }
    );
    observer.observe($bannerTrigger.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HomeBanner hide={hidingBanner} />
      <MainTitlebar moveUp={hidingBanner} />
      <div ref={$bannerTrigger} />

      {/* FIXME - 테스트성코드 */}
      <div style={{ height: '150vh' }}>home</div>

      <MainFooter />
    </>
  );
};

export default Home;
