import React from 'react';
import styled from 'styled-components';

import theme from 'src/styles/theme';

const Svg = styled.svg`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: currentcolor;
  stroke: none;
  transition: transform 0.2s linear 0s;
`;

const Link = styled.a`
  color: rgb(196, 196, 196);
  fill: inherit;
  stroke: inherit;
  pointer-events: initial;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Rect = styled.rect`
  fill: transparent;
  stroke: none;
`;

const Twitch = ({ size = theme.size.icon, to }) => {
  return (
    <Svg size={size} viewBox="0 0 21.04 24">
      {to ? (
        <Link href={to} target="_blank" rel="noopener noreferrer">
          <Rect />
          <path d="M1.19,0,0,3.85,0,21.63H4.44V24H6.81l2.38-2.37h4.14L21,13.93V0ZM19,12.74,15.7,16H10.37l-3,3V16H3V2.07H19Z" />
          <rect x="13.63" y="5.93" width="2.07" height="5.93" />
          <rect x="8.3" y="5.93" width="2.07" height="5.93" />
        </Link>
      ) : (
        <>
          <Rect />
          <path d="M1.19,0,0,3.85,0,21.63H4.44V24H6.81l2.38-2.37h4.14L21,13.93V0ZM19,12.74,15.7,16H10.37l-3,3V16H3V2.07H19Z" />
          <rect x="13.63" y="5.93" width="2.07" height="5.93" />
          <rect x="8.3" y="5.93" width="2.07" height="5.93" />
        </>
      )}
    </Svg>
  );
};

export default Twitch;
