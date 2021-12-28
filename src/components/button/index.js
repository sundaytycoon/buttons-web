import React from 'react';
import { Link } from 'react-router-dom';

import theme from 'src/styles/theme';
import { SmallButton, MediumButton, LargeButton } from './style';

export const Button = ({
  to = '/',
  size = 'md' /* sm | md | lg */,
  bg = theme.button.primary,
  color = theme.base.white,
  children,
}) => {
  let SizeButton = null;

  switch (size) {
    case 'sm':
      SizeButton = SmallButton;
      break;

    case 'md':
      SizeButton = MediumButton;
      break;

    case 'lg':
      SizeButton = LargeButton;
      break;

    default:
  }

  return (
    <Link to={to}>
      <SizeButton bg={bg} color={color}>
        <span>{children}</span>
      </SizeButton>
    </Link>
  );
};
