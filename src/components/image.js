import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({ fluid, src, ...props }) => {
  return fluid ? (
    <Img fluid={src.childImageSharp.fluid} {...props} />
  ) : (
    <Img fixed={src.childImageSharp.fixed} {...props} />
  );
};

Image.propTypes = {
  fluid: PropTypes.bool,
  src: PropTypes.object.isRequired,
};

Image.defaultProps = {
  fluid: true,
};

export default Image;
