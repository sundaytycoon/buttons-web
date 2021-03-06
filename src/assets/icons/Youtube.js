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

const Youtube = ({ size = theme.size.icon, to }) => {
  return (
    <Svg size={size} viewBox="0 0 24 24">
      {to ? (
        <Link href={to} target="_blank" rel="noopener noreferrer">
          <Rect size={size} />
          <path d="M21.38 4.07C19.51 3.56 12 3.56 12 3.56C12 3.56 4.5 3.56 2.63 4.07C1.59 4.34 0.78 5.16 0.5 6.2C0 8.08 0 12.01 0 12.01C0 12.01 0 15.94 0.5 17.83C0.78 18.87 1.59 19.65 2.63 19.93C4.5 20.43 12 20.43 12 20.43C12 20.43 19.51 20.43 21.38 19.93C22.41 19.65 23.22 18.87 23.5 17.83C24 15.94 24 12.01 24 12.01C24 12.01 24 8.08 23.5 6.2C23.22 5.16 22.41 4.34 21.38 4.07ZM9.55 8.45L15.82 12.01L9.55 15.58L9.55 8.45Z" />
        </Link>
      ) : (
        <>
          <Rect size={size} />
          <path d="M21.38 4.07C19.51 3.56 12 3.56 12 3.56C12 3.56 4.5 3.56 2.63 4.07C1.59 4.34 0.78 5.16 0.5 6.2C0 8.08 0 12.01 0 12.01C0 12.01 0 15.94 0.5 17.83C0.78 18.87 1.59 19.65 2.63 19.93C4.5 20.43 12 20.43 12 20.43C12 20.43 19.51 20.43 21.38 19.93C22.41 19.65 23.22 18.87 23.5 17.83C24 15.94 24 12.01 24 12.01C24 12.01 24 8.08 23.5 6.2C23.22 5.16 22.41 4.34 21.38 4.07ZM9.55 8.45L15.82 12.01L9.55 15.58L9.55 8.45Z" />
        </>
      )}
    </Svg>
  );
};

export default Youtube;
