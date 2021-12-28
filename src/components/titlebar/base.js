import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { NavigationContext } from 'src/context/navigation';
import { HOME_BANNER_HEIGHT } from 'src/styles/layout';
import theme from 'src/styles/theme';
import { MainLogo } from 'src/assets/images';
import {
  Container,
  MenuWrapper,
  MenuList,
  MenuItem,
  SubMenuWrappr,
  SubMenuItem,
  AuthMenuWrapper,
} from './style';
import { Button } from 'src/components/button';

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
            <MenuItem>
              <span>Templates</span>
              <SubMenuWrappr>
                <SubMenuItem>
                  <Link to="/s/templates/sell">
                    <div>
                      <span>🛍</span>
                      <p>Sell My Products</p>
                    </div>
                    <p>
                      Linktree templates to help you sell your products to your
                      audience and followers
                    </p>
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/s/templates/share">
                    <div>
                      <span>👀</span>
                      <p>Share My Content</p>
                    </div>
                    <p>
                      Linktree templates to help you share your content with
                      your audience and followers
                    </p>
                  </Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/s/templates/grow">
                    <div>
                      <span>🌱</span>
                      <p>Sell My Products</p>
                    </div>
                    <p>
                      Linktree templates to help you grow your audience across
                      your socail media channels
                    </p>
                  </Link>
                </SubMenuItem>
              </SubMenuWrappr>
            </MenuItem>

            <Link to="/blog">
              <MenuItem>Blog</MenuItem>
            </Link>
            <Link to="/s/pricing">
              <MenuItem>Pricing</MenuItem>
            </Link>
            <Link to="/help">
              <MenuItem>Help</MenuItem>
            </Link>
          </MenuList>
        </MenuWrapper>
        <AuthMenuWrapper>
          {hasAuthentication ? (
            <>
              <Link to="/logout">
                <MenuItem>Sign out</MenuItem>
              </Link>
              <Button
                to="/admin"
                size="sm"
                bg={theme.button.secondary}
                color={theme.base.black}
              >
                ADMIN
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <MenuItem>Log in</MenuItem>
              </Link>
              <Button
                to="/login"
                size="sm"
                bg={theme.button.secondary}
                color={theme.base.black}
              >
                SIGN UP FREE
              </Button>
            </>
          )}
        </AuthMenuWrapper>
      </Container>
      <div ref={$trigger} />
    </>
  );
};

export default BaseTitlebar;
