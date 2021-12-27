import styled from 'styled-components';

import {
  HOME_BANNER_HEIGHT,
  TITLEBAR_HEIGHT,
  MEDIA_BREAK,
  zIndex,
} from 'src/styles/layout';
import { spacing } from 'src/styles/util';

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
`;

export const AuthMenuWrapper = styled.nav`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: ${spacing(4)};
  }
`;

// export const NavigationContainer = styled.nav``;
