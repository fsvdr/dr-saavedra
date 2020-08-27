import React from 'react';
import SiteNav from './site-nav';
import { PropTypes } from 'prop-types';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />

      <main>{children}</main>

      <Footer />
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
