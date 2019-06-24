import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Footer = ({ address, phone }) => (
  <footer className={`o-section ${styles.footer}`}>
    <div className={`o-section__wrapper ${styles.footer__wrapper}`}>
      <div className={styles.master}>
        <span>Cédula Profesional 987510</span>
        <h3>Dr. Benito Saavedra Alvarado</h3>
        <p className="o-lead-paragraph">
          Médico especialista en traumatología y ortopédia.
        </p>
        <p className="o-lead-paragraph">
          Cirjuía de rodilla, artroscopía y remplazos articulares.
        </p>
      </div>

      <div className={styles.contact}>
        <a href={address.link}>
          <h4>{address.title}</h4>
          <span>{address.description}</span>
        </a>

        <a href={phone.link}>
          <h4>{phone.title}</h4>
          <span>{phone.description}</span>
        </a>
      </div>

      <small>
        &copy; Dr. Benito Saavedra Alvarado {new Date().getFullYear()}
      </small>
    </div>
  </footer>
);

Footer.propTypes = {
  address: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  phone: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Footer;
