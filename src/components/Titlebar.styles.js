import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgb(215 220 225) 0px -1px 0px inset;
  transform: ${({ theme, moveUp }) =>
    `translateY(${moveUp ? '0' : theme.space.bannerHeight})`};
  transition: transform 0.3s ease-in-out 0s;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const NavMenus = styled.div`
  & > :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(6)};
  }
`;

export const NavMenu = styled.span`
  line-height: 1.6;
`;

export const UnauthMenus = styled.div`
  & > :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const AuthMenus = styled.div`
  & > :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const NavMenuWrapper = styled.span`
  display: inline-block;
  height: ${({ theme }) => theme.spacing(9.25)};
  line-height: ${({ theme }) => theme.spacing(9.25)};
  background-image: ${({ theme }) => `
    linear-gradient(
      to right,
      ${theme.color.secondary},
      ${theme.color.tertiary} 20%,
      ${theme.color.quaternary} 40%,
      ${theme.color.quinary} 60%,
      ${theme.color.senary} 80%,
      ${theme.color.septenary}
    )
  `};
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.1s ease-out 0s;
  cursor: pointer;

  &:hover {
    background-size: 100% 2px;
  }
`;

export const NavSubMenus = styled.ul`
  position: absolute;
  top: 73px;
  left: 140px;
  width: 310px;
  margin: 0;
  padding: 0;
  border: ${({ theme }) => `1px solid ${theme.color.whiteGray}`};
  box-shadow: rgb(10 11 13 / 12%) 0px 12px 16px;
  border-radius: 0px 0px 24px 24px;
`;

export const NavSubMenuEmoji = styled.span`
  padding-right: ${({ theme }) => theme.spacing(1.5)};
`;

export const NavSubMenuTitle = styled.span`
  font-weight: 700;
`;

export const NavSubMenuDescription = styled.span`
  display: block;
  padding: ${({ theme }) => `${theme.spacing(1.5)} 0`};
  font-size: 0.875rem;
`;

export const NavSubMenu = styled.li`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
  background-color: ${({ theme }) => theme.color.white};

  &:not(:last-child) {
    padding: ${({ theme }) =>
      `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(1.5)}`};
  }

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 285px;
    height: 1px;
    background-color: ${({ theme }) => theme.color.whiteGray};
  }

  &:hover ${NavSubMenuTitle} {
    text-decoration: underline;
  }
  &:hover ${NavSubMenuDescription} {
    text-decoration: underline;
  }
`;
