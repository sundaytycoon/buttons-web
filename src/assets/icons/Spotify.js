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

const Spotify = ({ size = theme.size.icon, to }) => {
  return (
    <Svg size={size} viewBox="0 0 96 96">
      {to ? (
        <Link href={to} target="_blank" rel="noopener noreferrer">
          <path d="M48,0A48,48,0,1,0,96,48,48.14,48.14,0,0,0,48,0ZM70.08,69.36a2.85,2.85,0,0,1-4.08,1c-11.28-7-25.44-8.4-42.24-4.56A3,3,0,1,1,22.32,60c18.24-4.08,34.08-2.4,46.56,5.28A2.88,2.88,0,0,1,70.08,69.36Zm5.76-13.2c-1.2,1.68-3.36,2.4-5,1.2C57.84,49.44,38.16,47,23,51.84a3.64,3.64,0,0,1-2.16-7c17.52-5.28,39.12-2.64,54,6.48A3.39,3.39,0,0,1,75.84,56.16Zm6.72-14.64a5,5,0,0,1-6.24,1.2C61,33.6,35.28,32.64,20.64,37.2A4.4,4.4,0,1,1,18,28.8c17-5,45.12-4.08,62.88,6.48A4.64,4.64,0,0,1,82.56,41.52Z" />
        </Link>
      ) : (
        <path d="M48,0A48,48,0,1,0,96,48,48.14,48.14,0,0,0,48,0ZM70.08,69.36a2.85,2.85,0,0,1-4.08,1c-11.28-7-25.44-8.4-42.24-4.56A3,3,0,1,1,22.32,60c18.24-4.08,34.08-2.4,46.56,5.28A2.88,2.88,0,0,1,70.08,69.36Zm5.76-13.2c-1.2,1.68-3.36,2.4-5,1.2C57.84,49.44,38.16,47,23,51.84a3.64,3.64,0,0,1-2.16-7c17.52-5.28,39.12-2.64,54,6.48A3.39,3.39,0,0,1,75.84,56.16Zm6.72-14.64a5,5,0,0,1-6.24,1.2C61,33.6,35.28,32.64,20.64,37.2A4.4,4.4,0,1,1,18,28.8c17-5,45.12-4.08,62.88,6.48A4.64,4.64,0,0,1,82.56,41.52Z" />
      )}
    </Svg>
  );
};

export default Spotify;
