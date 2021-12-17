import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

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
