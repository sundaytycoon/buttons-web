import React from 'react';
import { Link } from 'react-router-dom';

import theme from 'src/styles/theme';
import { Small, Medium, Large, Icon } from './style';

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
      SizeButton = Small;
      break;

    case 'md':
      SizeButton = Medium;
      break;

    case 'lg':
      SizeButton = Large;
      break;

    default:
  }

  return (
    <SizeButton bg={bg} color={color}>
      <Link to={to}>
        <span>{children}</span>
      </Link>
    </SizeButton>
  );
};

export const IconButton = ({ icon, ...props }) => {
  return <Icon {...props}>{icon}</Icon>;
};
