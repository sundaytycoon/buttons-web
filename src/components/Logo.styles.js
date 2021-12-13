import styled from 'styled-components';

export const Wrapper = styled.svg`
  width: calc(85px);
  height: calc(20px);
`;

export const Rect = styled.rect`
  width: calc(85px);
  height: calc(20px);
  fill: transparent;
  stroke: none;
`;

export const LeftIconPath = styled.path`
  fill: ${({ theme }) => theme.color.primary};
`;

export const RightIconPath = styled.path`
  fill: ${({ theme }) => theme.color.secondary};
`;

export const TextPath = styled.path`
  fill: ${({ theme }) => theme.color.black};
`;
