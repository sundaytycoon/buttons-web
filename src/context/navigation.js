import React from 'react';

export const NavigationContext = React.createContext({
  isOpen: false,
  setIsOpen: () => {},
});
