import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, HoverLayer, Button } from './style';
import theme from 'src/styles/theme';

const RoundedButton = ({
  size = 'md',
  color = theme.color.primary,
  hoverable,
  to,
  children,
  ...props
}) => {
  const [visibleHoverLayer, setVisibleHoverLayer] = useState(false);

  let coefficient;

  switch (size) {
    case 'sm':
      coefficient = 1;
      break;

    case 'md':
      coefficient = 2;
      break;

    // case 'lg':
    //   break;

    default:
      coefficient = 1;
  }

  return (
    <Wrapper>
      {hoverable && (
        <HoverLayer
          rounded
          coefficient={coefficient}
          visible={visibleHoverLayer}
        />
      )}
      {to ? (
        <Link to={to}>
          <Button
            rounded
            coefficient={coefficient}
            bgColor={color}
            onMouseEnter={() => setVisibleHoverLayer(true)}
            onMouseLeave={() => setVisibleHoverLayer(false)}
            {...props}
          >
            {children}
          </Button>
        </Link>
      ) : (
        <Button
          rounded
          coefficient={coefficient}
          bgColor={color}
          onMouseEnter={() => setVisibleHoverLayer(true)}
          onMouseLeave={() => setVisibleHoverLayer(false)}
          {...props}
        >
          {children}
        </Button>
      )}
    </Wrapper>
  );
};

export default RoundedButton;
