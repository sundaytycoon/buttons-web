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
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: transparent;
  stroke: none;
`;

const Facebook = ({ size = theme.size.icon, to }) => {
  return (
    <Svg size={size} viewBox="0 0 96 96">
      {to ? (
        <Link href={to} target="_blank" rel="noopener noreferrer">
          <Rect size={size} />
          <path d="M96,90.7A5.3,5.3,0,0,1,90.7,96H66.24V58.82H78.72l1.87-14.48H66.24V35.09c0-4.2,1.16-7.06,7.18-7.06h7.67v-13a101.78,101.78,0,0,0-11.18-.57c-11.06,0-18.63,6.75-18.63,19.15V44.34H38.77V58.82H51.28V96H5.3A5.3,5.3,0,0,1,0,90.7V5.3A5.3,5.3,0,0,1,5.3,0H90.7A5.3,5.3,0,0,1,96,5.3Z" />
        </Link>
      ) : (
        <>
          <Rect size={size} />
          <path d="M96,90.7A5.3,5.3,0,0,1,90.7,96H66.24V58.82H78.72l1.87-14.48H66.24V35.09c0-4.2,1.16-7.06,7.18-7.06h7.67v-13a101.78,101.78,0,0,0-11.18-.57c-11.06,0-18.63,6.75-18.63,19.15V44.34H38.77V58.82H51.28V96H5.3A5.3,5.3,0,0,1,0,90.7V5.3A5.3,5.3,0,0,1,5.3,0H90.7A5.3,5.3,0,0,1,96,5.3Z" />
        </>
      )}
    </Svg>
  );
};

export default Facebook;
