import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  HOME_BANNER_HEIGHT,
  HOME_BANNER_EXPANDED_HEIGHT,
  MEDIA_BREAK,
  zIndex,
} from 'src/styles/layout';
import { spacing } from 'src/styles/util';

export const HomeBannerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: ${HOME_BANNER_HEIGHT}px;
  padding: 0 ${spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.banner};
  transform: ${({ show }) =>
    `translateY(${show ? '0' : `-${HOME_BANNER_HEIGHT}px`})`};
  transition: transform 0.3s ease-in-out 0s;
  font-size: 1.25rem;
  z-index: ${zIndex.banner};

  @media (max-width: ${MEDIA_BREAK}px) {
    height: ${HOME_BANNER_EXPANDED_HEIGHT}px;
    font-size: 1rem;
  }
`;

export const HomeBannerContent = styled.span`
  padding: ${spacing(3)};
  color: ${({ theme }) => theme.base.white};
  /* font-size: 1.25rem; */
`;

export const HomeBannerContentLink = styled(Link)`
  color: ${({ theme }) => theme.base.white};
  /* font-size: 1.25rem; */
  text-decoration: underline;
`;
