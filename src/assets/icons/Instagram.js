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

const Instagram = () => {
  return (
    <Svg viewBox="0 0 24 24">
      <Link
        href="https://www.instagram.com/linktr.ee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Rect />
        <path
          d="M23.93,7.05a8.76,8.76,0,0,0-.56-2.91A6.07,6.07,0,0,0,19.86.63,8.76,8.76,0,0,0,17,.07C15.67,0,15.26,0,12,0S8.33,0,7.05.07A8.76,8.76,0,0,0,4.14.63,6.07,6.07,0,0,0,.63,4.14,8.76,8.76,0,0,0,.07,7.05C0,8.33,0,8.74,0,12S0,15.67.07,17a8.76,8.76,0,0,0,.56,2.91,6.07,6.07,0,0,0,3.51,3.51,8.76,8.76,0,0,0,2.91.56C8.33,24,8.74,24,12,24s3.67,0,4.95-.07a8.76,8.76,0,0,0,2.91-.56,6.07,6.07,0,0,0,3.51-3.51A8.76,8.76,0,0,0,23.93,17C24,15.67,24,15.26,24,12s0-3.67-.07-4.95M12,18.16A6.16,6.16,0,1,1,18.16,12,6.16,6.16,0,0,1,12,18.16M18.41,7a1.44,1.44,0,1,1,1.44-1.44A1.43,1.43,0,0,1,18.41,7M16,12a4,4,0,1,1-4-4,4,4,0,0,1,4,4"
          fill-rule="evenodd"
        ></path>
      </Link>
    </Svg>
  );
};

export default Instagram;