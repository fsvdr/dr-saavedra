import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const InstitutionCard = ({ logo, institution, timeframe }) => (
  <div className={`${styles.container} o-card`}>
    {logo || null}

    <div className={styles.details}>
      <span>
        <p>{institution}</p>
        <span>{timeframe}</span>
      </span>
    </div>
  </div>
);

InstitutionCard.propTypes = {
  logo: PropTypes.node,
  institution: PropTypes.string.isRequired,
  timeframe: PropTypes.string.isRequired,
};

InstitutionCard.defaultProps = {
  institution: '',
  timeframe: ''
};

export default InstitutionCard;