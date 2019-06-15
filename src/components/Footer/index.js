import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Footer = ({ contact }) => (
  <footer className={styles.container}>
    <div className={styles.master}>
      <span>Cédula Profesional 987510</span>
      <h3>Dr. Benito Saavedra Alvarado</h3>
      <p className="o-lead-paragraph">Médico especialista en traumatología y ortopédia.</p>
      <p className="o-lead-paragraph">Cirjuía de rodilla, artroscopía y remplazos articulares.</p>
    </div>

    <div className={styles.contact}>
      <a href={contact.address.link}>
        <h4>{contact.address.title}</h4>
        <span>{contact.address.description}</span>
      </a>

      <a href={contact.phone.link}>
        <h4>{contact.phone.title}</h4>
        <span>{contact.phone.description}</span>
      </a>
    </div>

    <small>&copy; Dr. Benito Saavedra Alvarado {new Date().getFullYear()}</small>
  </footer>
);

Footer.propTypes = {
  contact: PropTypes.shape({
    address: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
    phone: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
    }).isRequired
  }).isRequired
};

export default Footer;