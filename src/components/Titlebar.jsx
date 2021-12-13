import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  InnerWrapper,
  NavMenus,
  UnauthMenus,
  AuthMenus,
  MenuLink,
  RoundedButton,
} from './Titlebar.styles';
import Logo from './Logo';

const Titlebar = ({ hasAuthentication = false }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <NavMenus>
          <MenuLink to="#">Templates</MenuLink>
          <MenuLink to="/blog">Blog</MenuLink>
          <MenuLink to="/pricing">Pricing</MenuLink>
          <MenuLink to="/help">Help</MenuLink>
        </NavMenus>
      </InnerWrapper>
      <InnerWrapper>
        {hasAuthentication ? (
          <AuthMenus>
            <MenuLink to="/logout">Sign out</MenuLink>
            <Link to="/admin">
              <RoundedButton>ADMIN</RoundedButton>
            </Link>
          </AuthMenus>
        ) : (
          <UnauthMenus>
            <MenuLink to="/login">Log in</MenuLink>
            <Link to="/register">
              <RoundedButton>SIGN UP FREE</RoundedButton>
            </Link>
          </UnauthMenus>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Titlebar;
