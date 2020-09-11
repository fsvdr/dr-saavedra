import React from 'react';
import SiteNav from './site-nav';
import { PropTypes } from 'prop-types';
import Footer from './footer';
import useFOITStrategy from '../hooks/useFOITStrategy';

const Layout = ({ children, isHome }) => {
  useFOITStrategy();

  return (
    <>
      <SiteNav showInternalLinks={isHome} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  isHome: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
