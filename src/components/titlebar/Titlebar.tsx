import React from 'react';
import { Link } from 'react-router-dom';

const Titlebar = () => {
  return (
    <>
      <Link to="/">home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/login">login</Link>
    </>
  );
};

export default Titlebar;