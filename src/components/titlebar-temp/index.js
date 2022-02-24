import React, { useState, useRef, useEffect } from 'react';

import { MEDIA_BREAK } from 'src/styles/layout';
import { Mobile, Desktop } from './home';
import { Blog } from './blog';

export const HomeTitlebar = (props) => {
  const [device, setDevice] = useState(''); // '' | 'desktop' | 'mobile'
  const resizeRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { inlineSize } = entry.contentBoxSize[0];

      if (inlineSize >= MEDIA_BREAK.TABLET) {
        setDevice('desktop');
      } else {
        setDevice('mobile');
      }
    });
    resizeObserver.observe(resizeRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      {device === 'mobile' && <Mobile {...props} />}
      {device === 'desktop' && <Desktop {...props} />}
      <div ref={resizeRef} />
    </>
  );
};

export const BlogTitlebar = () => <Blog />;
