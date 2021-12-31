import styled from 'styled-components';

import { spacing, tint } from 'src/styles/util';

const Base = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => bg};
  font-weight: 700;
  cursor: pointer;

  span {
    text-align: center;
    color: ${({ color }) => color};
  }

  &:hover {
    background-color: ${({ bg }) => tint(bg, -10)};
  }
`;

export const Small = styled(Base)`
  height: ${spacing(4)};
  padding: 0 ${spacing(2)};
  border-radius: ${spacing(1)};
`;

export const Medium = styled(Base)`
  height: ${spacing(6)};
  padding: 0 ${spacing(3)};
  border-radius: ${spacing(1.5)};
`;

export const Large = styled(Base)`
  height: ${spacing(8)};
  padding: 0 ${spacing(4)};
  border-radius: ${spacing(2)};
`;

export const Icon = styled.button`
  background: none;
  cursor: pointer;

  i {
    font-size: 1.5rem;
  }
`;

// will be deprecated
export const Wrapper = styled.div`
  position: relative;
`;

// will be deprecated
export const HoverLayer = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ theme, coefficient }) => theme.spacing(4 * coefficient)};
  padding: ${({ theme, coefficient }) => `0 ${theme.spacing(2 * coefficient)}`};
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  ${({ rounded, theme, coefficient }) =>
    rounded && `border-radius: ${theme.spacing(1 * coefficient)}`};
`;

export const Button = styled.button`
  height: ${({ theme, coefficient }) => theme.spacing(4 * coefficient)};
  padding: ${({ theme, coefficient }) => `0 ${theme.spacing(2 * coefficient)}`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  font-weight: 700;
  cursor: pointer;

  ${({ rounded, theme, coefficient }) =>
    rounded && `border-radius: ${theme.spacing(1 * coefficient)}`};

  & > * {
    z-index: 1;
  }
`;
