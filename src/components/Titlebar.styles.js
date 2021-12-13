import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
  box-shadow: rgb(215 220 225) 0px -1px 0px inset;
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

export const MenuLink = styled(Link)`
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

  &:hover {
    background-size: 100% 2px;
  }
`;

export const RoundedButton = styled.button`
  height: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => `0 ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;
