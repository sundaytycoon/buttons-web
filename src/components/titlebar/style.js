import styled from 'styled-components';

import {
  HOME_BANNER_HEIGHT,
  TITLEBAR_HEIGHT,
  MEDIA_BREAK,
  zIndex,
} from 'src/styles/layout';
import { spacing } from 'src/styles/util';
import theme from 'src/styles/theme';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 ${spacing(3)};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.base.white};
  box-shadow: ${({ theme }) => `${theme.base.whiteGray} 0px -1px 0px inset`};
  transform: ${({ putUp }) =>
    `translateY(${putUp ? '0' : `${HOME_BANNER_HEIGHT}px`})`};
  transition: transform 0.3s ease-in-out 0s;
  z-index: ${zIndex.titlebar};
`;

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuList = styled.div`
  margin-left: ${spacing(4)};
  display: flex;

  & > :not(:last-child) {
    margin-right: ${spacing(6)};
  }
`;

export const SubMenuWrappr = styled.ul`
  position: absolute;
  top: ${TITLEBAR_HEIGHT}px;
  left: 140px;
  width: 310px;
  border: 1px solid ${theme.base.whiteGray};
  border-radius: 0px 0px 24px 24px;
  display: none;
  background-color: ${theme.base.white};
  box-shadow: rgb(10 11 13 / 12%) 0px 12px 16px;
`;

export const SubMenuItem = styled.li`
  padding: ${spacing(2)} ${spacing(3)};
  position: relative;

  &:not(:last-child) {
    padding: ${spacing(2)} ${spacing(3)} ${spacing(1.5)};
  }
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 285px;
    height: 1px;
    background-color: ${theme.base.whiteGray};
  }

  div {
    display: flex;
    align-items: center;

    span {
      padding-right: ${spacing(1.5)};
      line-height: initial;
    }

    p {
      padding: 0;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  p {
    padding: ${spacing(1.5)} 0;
    line-height: 1.6;
    font-size: 0.875rem;
    letter-spacing: 0;
  }

  &:hover {
    p {
      text-decoration: underline;
    }
  }
`;

export const MenuItem = styled.span`
  height: ${TITLEBAR_HEIGHT}px;
  line-height: ${TITLEBAR_HEIGHT}px;
  display: inline-block;
  letter-spacing: 0.5px;
  background-image: linear-gradient(
    to right,
    rgb(40, 191, 123),
    rgb(46, 211, 186) 20%,
    rgb(68, 194, 215) 40%,
    rgb(90, 162, 220) 60%,
    rgb(112, 141, 224) 80%,
    rgb(138, 134, 229)
  );
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.1s ease-out 0s;
  cursor: pointer;

  &:hover {
    background-size: 100% 2px;
  }

  &:hover ${SubMenuWrappr} {
    display: block;
  }
`;

export const AuthMenuWrapper = styled.nav`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: ${spacing(4)};
  }
`;

// export const NavigationContainer = styled.nav``;
