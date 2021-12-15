import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 20px;
  height: 20px;
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
  width: 20px;
  height: 20px;
  fill: transparent;
  stroke: none;
`;

const Tiktok = () => {
  return (
    <Svg viewBox="0 0 24 24">
      <Link
        href="https://www.tiktok.com/@linktr.ee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Rect />
        <path
          fill="currentColor"
          d="M22.5 9.84C20.44 9.85 18.42 9.2 16.74 8C16.74 8.84 16.74 15.54 16.74 16.38C16.74 20.59 13.33 24 9.12 24C4.91 24 1.5 20.58 1.5 16.38C1.5 12.17 4.92 8.75 9.12 8.76C9.47 8.76 9.82 8.78 10.17 8.83C10.17 9.25 10.17 12.62 10.17 13.04C8.32 12.46 6.36 13.49 5.78 15.33C5.2 17.17 6.23 19.14 8.07 19.72C9.91 20.3 11.88 19.27 12.46 17.43C12.56 17.09 12.62 16.74 12.62 16.38C12.62 15.29 12.62 9.83 12.62 0C15.09 0 16.47 0 16.74 0C16.74 0.35 16.77 0.7 16.83 1.04C16.83 1.04 16.83 1.04 16.83 1.04C17.12 2.59 18.03 3.95 19.36 4.8C20.29 5.42 21.38 5.74 22.5 5.74C22.5 6.56 22.5 9.02 22.5 9.84Z"
        ></path>
      </Link>
    </Svg>
  );
};

export default Tiktok;
