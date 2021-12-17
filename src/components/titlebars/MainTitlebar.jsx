import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  InnerWrapper,
  NavMenus,
  NavMenu,
  UnauthMenus,
  AuthMenus,
  NavMenuWrapper,
  NavSubMenus,
  NavSubMenu,
  NavSubMenuEmoji,
  NavSubMenuTitle,
  NavSubMenuDescription,
} from './styles';
import RoundedButton from 'src/components/buttons/RoundedButton';
import Typography from 'src/components/common/Typography';
import { Logo } from 'src/assets/images';

const HomeTitlebar = ({ hasAuthentication = false, moveUp }) => {
  const [hoverMenu, setHoverMenu] = useState('');

  return (
    <Wrapper moveUp={moveUp}>
      <InnerWrapper>
        <Logo />
        <NavMenus>
          <NavMenuWrapper
            onMouseEnter={() => setHoverMenu('templates')}
            onMouseLeave={() => setHoverMenu('')}
          >
            <NavMenu>
              Templates
              {hoverMenu === 'templates' && (
                <NavSubMenus>
                  <NavSubMenu>
                    <Link to="/templates/sell">
                      <NavSubMenuEmoji>🎁</NavSubMenuEmoji>
                      <NavSubMenuTitle>Sell My Products</NavSubMenuTitle>
                      <NavSubMenuDescription>
                        Linktree templates to help you sell your products to
                        your audience and followers
                      </NavSubMenuDescription>
                    </Link>
                  </NavSubMenu>
                  <NavSubMenu>
                    <Link to="/templates/share">
                      <NavSubMenuEmoji>👀</NavSubMenuEmoji>
                      <NavSubMenuTitle>Share My Content</NavSubMenuTitle>
                      <NavSubMenuDescription>
                        Linktree templates to help you share your content with
                        your audience and followers
                      </NavSubMenuDescription>
                    </Link>
                  </NavSubMenu>
                  <NavSubMenu>
                    <Link to="/templates/grow">
                      <NavSubMenuEmoji>🌱</NavSubMenuEmoji>
                      <NavSubMenuTitle>Sell My Products</NavSubMenuTitle>
                      <NavSubMenuDescription>
                        Linktree templates to help you grow your audience across
                        your socail media channels
                      </NavSubMenuDescription>
                    </Link>
                  </NavSubMenu>
                </NavSubMenus>
              )}
            </NavMenu>
          </NavMenuWrapper>
          <Link to="/blog">
            <NavMenuWrapper>
              <NavMenu>Blog</NavMenu>
            </NavMenuWrapper>
          </Link>
          <Link to="/pricing">
            <NavMenuWrapper>
              <NavMenu>Pricing</NavMenu>
            </NavMenuWrapper>
          </Link>
          <Link to="/help">
            <NavMenuWrapper>
              <NavMenu>Help</NavMenu>
            </NavMenuWrapper>
          </Link>
        </NavMenus>
      </InnerWrapper>

      {hasAuthentication ? (
        <AuthMenus>
          <Link to="/logout">
            <NavMenuWrapper>
              <NavMenu>Sign out</NavMenu>
            </NavMenuWrapper>
          </Link>
          <RoundedButton hoverable size="sm" to="/admin">
            <Typography level={0.75}>ADMIN</Typography>
          </RoundedButton>
        </AuthMenus>
      ) : (
        <UnauthMenus>
          <Link to="/login">
            <NavMenuWrapper>
              <NavMenu>Log in</NavMenu>
            </NavMenuWrapper>
          </Link>
          <RoundedButton hoverable size="sm" to="/register">
            <Typography level={0.75}>SIGN UP FREE</Typography>
          </RoundedButton>
        </UnauthMenus>
      )}
    </Wrapper>
  );
};

export default HomeTitlebar;
