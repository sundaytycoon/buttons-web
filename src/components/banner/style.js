import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HEIGHT, MEDIA_BREAK, Z_INDEX } from 'src/styles/layout';
import { spacing } from 'src/styles/util';

const { BANNER } = HEIGHT;
const { TABLET, LAPTOP } = MEDIA_BREAK;

export const HomeBannerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: ${BANNER.DESKTOP}px;
  padding: 0 ${spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.banner};
  transform: ${({ show }) =>
    `translateY(${show ? '0' : `-${BANNER.DESKTOP}px`})`};
  transition: transform 0.3s ease-in-out 0s;
  font-size: 1.25rem;
  z-index: ${Z_INDEX.BANNER};

  @media screen and (max-width: ${TABLET}px) {
    height: ${BANNER.MOBILE}px;
  }

  @media screen and (max-width: ${LAPTOP}px) {
    font-size: 1rem;
  }
`;

export const HomeBannerContent = styled.span`
  padding: ${spacing(3)};
  color: ${({ theme }) => theme.base.white};
`;

export const HomeBannerContentLink = styled(Link)`
  color: ${({ theme }) => theme.base.white};
  text-decoration: underline;
`;
