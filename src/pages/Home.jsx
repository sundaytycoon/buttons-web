import React, { useRef, useState, useEffect } from 'react';

import { Banner, Titlebar } from '../components';

const Home = () => {
  const [hidingBanner, setHidingBanner] = useState(false);
  const $scrollTrigger = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidingBanner(entry.rootBounds.y > entry.boundingClientRect.y);
      },
      { threshold: 0.5, rootMargin: '74px' }
    );
    observer.observe($scrollTrigger.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Banner hide={hidingBanner} />
      <Titlebar moveUp={hidingBanner} />
      <div ref={$scrollTrigger} />
      {/* FIXME - 테스트성코드 */}
      <div style={{ height: '150vh' }}>home</div>
    </>
  );
};

export default Home;
