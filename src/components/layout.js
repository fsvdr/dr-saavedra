/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../styles/settings/breakpoints.css';
import '../styles/settings/typography.css';
import '../styles/settings/font-face.css';
import '../styles/settings/color.css';
import '../styles/settings/spacing.css';
import '../styles/settings/z-index.css';

import '../styles/generic/reset.css';
import '../styles/generic/base.css';

import '../styles/elements/block.css';
import '../styles/elements/inline.css';

import '../styles/objects/flex-grid.css';
import '../styles/objects/lists.css';
import '../styles/objects/cards.css';
import '../styles/objects/branding.css';

const Layout = ({ children }) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
