import styled from 'styled-components';

import { HEIGHT, Z_INDEX } from 'src/styles/layout';
import { spacing } from 'src/styles/util';
import theme from 'src/styles/theme';

const { BANNER, TITLEBAR, SUB_TITLEBAR } = HEIGHT;

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ mobile }) => (mobile ? TITLEBAR.MOBILE : TITLEBAR.DESKTOP)}px;
  padding: 0 ${({ mobile }) => (mobile ? spacing(2) : spacing(3))};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg.titlebar};
  box-shadow: ${({ theme }) => `${theme.base.whiteGray} 0px -1px 0px inset`};
  transform: ${({ mobile, hidingBanner }) =>
    `translateY(${
      hidingBanner ? '0' : mobile ? `${BANNER.MOBILE}px` : `${BANNER.DESKTOP}px`
    })`};
  transition: transform 0.3s ease-in-out 0s;
  z-index: ${Z_INDEX.TITLEBAR};
`;

export const LeftWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavMenuList = styled.div`
  margin-left: ${spacing(4)};
  display: flex;

  & > :not(:last-child) {
    margin-right: ${spacing(6)};
  }
`;

export const NavSubMenuWrappr = styled.ul`
  position: absolute;
  top: ${TITLEBAR.DESKTOP}px;
  left: 140px;
  width: 310px;
  border: 1px solid ${theme.base.whiteGray};
  border-radius: 0px 0px 24px 24px;
  display: none;
  background-color: ${theme.bg.titlebar};
  box-shadow: rgb(10 11 13 / 12%) 0px 12px 16px;
`;

export const NavSubMenuItem = styled.li`
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

export const NavMenuItem = styled.span`
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

  &:hover ${NavSubMenuWrappr} {
    display: block;
  }
`;

export const RightWrapper = styled.nav`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: ${({ mobile }) => (mobile ? spacing(2) : spacing(4))};
  }
`;

export const SubContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: ${TITLEBAR.MOBILE}px;
  height: ${SUB_TITLEBAR}px;
  display: flex;
  background-color: ${theme.bg.subTitlebar};

  transform: ${({ show, hidingBanner }) =>
    `translateY(${
      show
        ? hidingBanner
          ? '0'
          : `${BANNER.MOBILE}px`
        : hidingBanner
        ? `-${SUB_TITLEBAR}px`
        : `${BANNER.MOBILE - SUB_TITLEBAR}px`
    })`};
  transition: transform 0.3s ease-in-out 0s;
`;

export const SubMenuItem = styled.div`
  flex-grow: 1;
  line-height: ${SUB_TITLEBAR}px;
  text-align: center;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }

  a {
    display: block;
  }
`;

export const SideContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${theme.bg.sideMenu};
  transform: ${({ show }) => `transLateX(${show ? '0' : '100%'})`};
  transition: transform 0.5s ease 0s;
  overflow-y: auto;
  z-index: ${Z_INDEX.SIDE_MENU};
`;

export const SideHeader = styled.div`
  padding: ${spacing(3)} ${spacing(2)};
  display: flex;
  justify-content: space-between;
`;

export const SideMenuWrapper = styled.div`
  padding: ${spacing(5)} ${spacing(3)};
`;

export const SideMenuItem = styled.div`
  padding-bottom: ${spacing(3)};
  font-size: 1.25rem;

  &:hover {
    text-decoration: underline;
  }

  a {
    display: block;
  }
`;

export const SideDropdownMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SideDropdownMenuWrapper = styled.ul``;

export const SideDropdownMenuItem = styled.li``;

export const SideFooter = styled.div`
  margin: 0 ${spacing(3)} ${spacing(3)};
  padding-top: ${spacing(4)};
  border-top: 1px solid ${theme.border.sideMenu};
  display: flex;
  flex-direction: column;
`;

export const SideFooterMenuWrapper = styled.div`
  padding-bottom: ${spacing(4)};
`;

export const SideFooterMenuItem = styled.div`
  font-size: 0.875rem;

  &:not(:last-child) {
    padding-bottom: ${spacing(2)};
  }

  &:hover {
    text-decoration: underline;
  }

  a {
    display: block;
  }
`;

export const SideFooterSocailLinkWrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: ${spacing(3)};
  }
`;
