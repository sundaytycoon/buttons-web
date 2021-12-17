import React from 'react';

import { Wrapper } from './styles';

const RoundedButton = ({ size = 'md', onClick, children }) => {
  let coefficient;
  let fontSize;

  switch (size) {
    case 'sm':
      coefficient = 1;
      fontSize = '0.875rem';
      break;

    case 'md':
      coefficient = 2;
      fontSize = '1.25rem';
      break;

    // case 'lg':
    //   break;

    default:
      coefficient = 1;
      fontSize = '0.875rem';
  }

  return (
    <Wrapper coefficient={coefficient} fontSize={fontSize} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default RoundedButton;
