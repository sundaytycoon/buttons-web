import React, { useState, useEffect, useRef } from "react";

import { MEDIA_BREAK, HEIGHT } from "src/styles/layout";
import {
  HomeBannerContainer,
  HomeBannerContent,
  HomeBannerContentLink,
} from "./style";

export const HomeBanner = () => {
  const [device, setDevice] = useState(""); // '' | 'desktop' | 'mobile'
  const [show, setShow] = useState(true);
  const resizeRef = useRef(null);
  const intersectionRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { inlineSize } = entry.contentBoxSize[0];

      if (inlineSize >= MEDIA_BREAK.TABLET) {
        setDevice("desktop");
      } else {
        setDevice("mobile");
      }
    });
    resizeObserver.observe(resizeRef.current);

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
      <HomeBannerContainer mobile={device === "mobile"} show={show}>
        <HomeBannerContent>
          <span>🎉 We just announced our new Shopify store feature! </span>
          <HomeBannerContentLink to="/stores">Learn more</HomeBannerContentLink>
        </HomeBannerContent>
      </HomeBannerContainer>
      <div ref={intersectionRef} />
      <div ref={resizeRef} />
    </>
  );
};
