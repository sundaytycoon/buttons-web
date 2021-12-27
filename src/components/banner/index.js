import React, { useState, useEffect, useRef } from 'react';

import { HOME_BANNER_HEIGHT } from 'src/styles/layout';
import {
  HomeBannerContainer,
  HomeBannerContent,
  HomeBannerContentLink,
} from './style';

export const HomeBanner = () => {
  const [show, setShow] = useState(true);
  const $trigger = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.rootBounds.y <= entry.boundingClientRect.y);
      },
      { threshold: 0.5, rootMargin: `${HOME_BANNER_HEIGHT}px` }
    );
    observer.observe($trigger.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HomeBannerContainer show={show}>
        <HomeBannerContent>
          <span>🎉 We just announced our new Shopify store feature! </span>
          <HomeBannerContentLink to="/stores">Learn more</HomeBannerContentLink>
        </HomeBannerContent>
      </HomeBannerContainer>
      <div ref={$trigger} />
    </>
  );
};
