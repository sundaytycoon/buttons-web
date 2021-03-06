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

const LinkedIn = ({ size = theme.size.icon, to }) => {
  return (
    <Svg size={size} viewBox="0 0 24 24">
      {to ? (
        <Link href={to} target="_blank" rel="noopener noreferrer">
          <Rect size={size} />
          <path
            fill="currentColor"
            d="M1.71 0C0.77 0 0 0.78 0 1.73C0 3.78 0 20.22 0 22.27C0 23.22 0.77 24 1.71 24C3.77 24 20.23 24 22.29 24C23.23 24 24 23.22 24 22.27C24 20.22 24 3.78 24 1.73C24 0.78 23.23 0 22.29 0C18.17 0 3.77 0 1.71 0ZM7.25 20.57L3.7 20.57L3.7 9.12L7.26 9.12L7.26 20.57L7.25 20.57ZM3.41 5.49C3.41 4.36 4.33 3.43 5.48 3.43C6.61 3.43 7.54 4.36 7.54 5.49C7.54 6.63 6.62 7.55 5.48 7.55C4.33 7.55 3.41 6.63 3.41 5.49ZM17.03 20.57C17.03 17.23 17.03 15.37 17.03 15C17.03 13.67 17 11.96 15.18 11.96C13.33 11.96 13.04 13.41 13.04 14.9C13.04 15.28 13.04 17.17 13.04 20.57L9.49 20.57L9.49 9.12L12.9 9.12L12.9 10.68C12.93 10.68 12.94 10.68 12.95 10.68C13.42 9.78 14.59 8.83 16.32 8.83C19.92 8.83 20.59 11.21 20.59 14.29C20.59 14.71 20.59 16.8 20.59 20.57L17.03 20.57Z"
          />
        </Link>
      ) : (
        <>
          <Rect size={size} />
          <path
            fill="currentColor"
            d="M1.71 0C0.77 0 0 0.78 0 1.73C0 3.78 0 20.22 0 22.27C0 23.22 0.77 24 1.71 24C3.77 24 20.23 24 22.29 24C23.23 24 24 23.22 24 22.27C24 20.22 24 3.78 24 1.73C24 0.78 23.23 0 22.29 0C18.17 0 3.77 0 1.71 0ZM7.25 20.57L3.7 20.57L3.7 9.12L7.26 9.12L7.26 20.57L7.25 20.57ZM3.41 5.49C3.41 4.36 4.33 3.43 5.48 3.43C6.61 3.43 7.54 4.36 7.54 5.49C7.54 6.63 6.62 7.55 5.48 7.55C4.33 7.55 3.41 6.63 3.41 5.49ZM17.03 20.57C17.03 17.23 17.03 15.37 17.03 15C17.03 13.67 17 11.96 15.18 11.96C13.33 11.96 13.04 13.41 13.04 14.9C13.04 15.28 13.04 17.17 13.04 20.57L9.49 20.57L9.49 9.12L12.9 9.12L12.9 10.68C12.93 10.68 12.94 10.68 12.95 10.68C13.42 9.78 14.59 8.83 16.32 8.83C19.92 8.83 20.59 11.21 20.59 14.29C20.59 14.71 20.59 16.8 20.59 20.57L17.03 20.57Z"
          />
        </>
      )}
    </Svg>
  );
};

export default LinkedIn;
