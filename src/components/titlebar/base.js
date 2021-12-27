import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { NavigationContext } from 'src/context/navigation';
import { HOME_BANNER_HEIGHT } from 'src/styles/layout';
import { MainLogo } from 'src/assets/images';
import {
  Container,
  MenuWrapper,
  MenuList,
  MenuItem,
  AuthMenuWrapper,
} from './style';

const BaseTitlebar = ({ banner, hasAuthentication = false }) => {
  const [putUp, setPutUp] = useState(!banner);
  const $trigger = useRef(null);

  useEffect(() => {
    let observer = null;

    if (banner) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setPutUp(entry.rootBounds.y > entry.boundingClientRect.y);
        },
        { threshold: 0.5, rootMargin: `${HOME_BANNER_HEIGHT}px` }
      );
      observer.observe($trigger.current);
    }

    return () => observer && observer.disconnect();
  });

  return (
    <>
      <Container putUp={putUp}>
        <MenuWrapper>
          <Link to="/">
            <MainLogo />
          </Link>
          <MenuList>
            <MenuItem>Templates</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Help</MenuItem>
          </MenuList>
        </MenuWrapper>
        <AuthMenuWrapper>
          {hasAuthentication ? (
            <>
              <Link to="/logout">
                <MenuItem>Sign out</MenuItem>
              </Link>
              <button>ADMIN</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <MenuItem>Log in</MenuItem>
              </Link>
              <button>SIGN UP FREE</button>
            </>
          )}
        </AuthMenuWrapper>
      </Container>
      <div ref={$trigger} />
    </>
  );
};

export default BaseTitlebar;
