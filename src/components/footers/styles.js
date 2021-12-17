import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.footer`
  margin: ${({ theme }) => `0 ${theme.spacing(6)}`};
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const Navs = styled.ul`
  padding-bottom: ${({ theme }) => theme.spacing(9)};
  display: flex;
`;

export const Nav = styled.li``;

export const SubMenus = styled.div`
  padding-right: ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: column;
`;

export const SubMenuHeader = styled.h5`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  line-height: 1.7;
`;

export const SubMenuLink = styled(Link)`
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  line-height: 1.5;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const BaseLine = styled.div`
  padding: ${({ theme }) => `${theme.spacing(3)} 0`};
  border-top: ${({ theme }) => `1px solid ${theme.color.whiteGray}`};
  display: flex;
  flex-direction: column;
`;

export const SocialLinkWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(2)};

  & > * {
    margin-right: ${({ theme }) => theme.spacing(2.5)};
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const AcknowledgementStatmentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  border-top: ${({ theme }) => `1px solid ${theme.color.whiteGray}`};
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :first-child {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

export const AcknowledgementStatmentDescription = styled.span`
  line-height: 2;
  font-size: 0.75rem;
  letter-spacing: -0.24px;
`;
