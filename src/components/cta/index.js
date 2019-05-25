import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const CTA = ({ label, action, description }) => (
  <div className={`${styles.container} o-card -accent`}>
    <span className="o-subtitle -accent">{label}</span>
    <h1>{action}</h1>
    <p>{description}</p>
  </div >
);

CTA.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default CTA;
