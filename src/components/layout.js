import React from 'react';
import SiteNav from './site-nav';
import { PropTypes } from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />

      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
