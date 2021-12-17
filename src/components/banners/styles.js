import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.height.banner};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple};
  padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
  transform: ${({ theme, hide }) =>
    `translateY(${hide ? `-${theme.height.banner}` : '0'})`};
  transition: transform 0.3s ease-in-out 0s;
`;

export const Content = styled.span`
  padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
`;

export const ContentLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: underline;
  font-size: 1.25rem;
`;
