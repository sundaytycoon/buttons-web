import styled from 'styled-components';

export const Wrapper = styled.button`
  height: ${({ theme, coefficient }) => theme.spacing(4 * coefficient)};
  padding: ${({ theme, coefficient }) => `0 ${theme.spacing(2 * coefficient)}`};
  border-radius: ${({ theme, coefficient }) => theme.spacing(1 * coefficient)};
  background-color: ${({ theme }) => theme.color.primary};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;
