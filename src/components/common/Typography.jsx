import React from 'react';
import styled from 'styled-components';

import theme from 'src/styles/theme';

const StyledDynamicComponent = styled.div`
  font-size: ${({ level }) => `${level}rem`};
  color: ${({ fontColor }) => fontColor};
`;

const Typography = ({
  element = 'span',
  color = theme.color.black,
  level = 1,
  children,
}) => {
  const WithComponent = StyledDynamicComponent.withComponent(element);

  return (
    <WithComponent level={level} fontColor={color}>
      {children}
    </WithComponent>
  );
};

export default Typography;
