import React from 'react';
import SiteNav from './site-nav';
import { PropTypes } from 'prop-types';
import Footer from './footer';
import { useEffect } from 'react';

const Layout = ({ children, isHome }) => {
  // Use a system font until our custom font is fully loaded in order to avoid
  // FOIT (Flash of Invisible Text)
  useEffect(() => {
    Promise.allSettled([
      '400 Greycliff CF',
      'italic 400 Greycliff CF',
      '500 Greycliff CF',
      'italic 500 Greycliff CF',
      '600 Greycliff CF',
      'italic 600 Greycliff CF',
    ]).then(() => {
      console.log('ready');
      document.body.classList.add('has-custom-font');
    });
  }, []);

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
