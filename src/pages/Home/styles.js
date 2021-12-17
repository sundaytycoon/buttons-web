import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  padding-top: ${({ theme }) => {
    const { combine, banner, titlebar } = theme.height;
    return combine(banner, titlebar);
  }};
  display: flex;
`;

export const IntroSection = styled.section`
  padding: 8.8vw 0 10vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    padding-top: ${({ theme }) => theme.spacing(1.25)};
    line-height: 1.5;
  }

  & > :last-child {
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const IntroLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
