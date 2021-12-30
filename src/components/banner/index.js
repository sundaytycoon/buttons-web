import React, { useState, useEffect, useRef } from 'react';

import { HEIGHT } from 'src/styles/layout';
import {
  HomeBannerContainer,
  HomeBannerContent,
  HomeBannerContentLink,
} from './style';

export const HomeBanner = () => {
  const [show, setShow] = useState(true);
  const intersectionRef = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.rootBounds.y <= entry.boundingClientRect.y);
      },
      { threshold: 0.5, rootMargin: `${HEIGHT.BANNER.MOBILE}px` }
    );
    intersectionObserver.observe(intersectionRef.current);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <HomeBannerContainer show={show}>
        <HomeBannerContent>
          <span>🎉 We just announced our new Shopify store feature! </span>
          <HomeBannerContentLink to="/stores">Learn more</HomeBannerContentLink>
        </HomeBannerContent>
      </HomeBannerContainer>
      <div ref={intersectionRef} />
    </>
  );
};
