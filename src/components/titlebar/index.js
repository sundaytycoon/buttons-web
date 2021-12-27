import React from 'react';
import BaseTitlebar from './base';

export const HomeMobileTitlebar = ({ banner }) => (
  <BaseTitlebar banner={banner} />
);

export const HomeDesktopTitlebar = ({ banner }) => (
  <BaseTitlebar banner={banner} />
);

export const BlogTitlebar = () => <BaseTitlebar />;
