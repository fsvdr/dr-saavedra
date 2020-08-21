import React from 'react';
import SiteNav from './site-nav';

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />

      {children}
    </>
  );
};

export default Layout;
