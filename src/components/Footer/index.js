import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './index.module.css';

const Footer = ({
  site: {
    siteMetadata: {
      contact: { address, phone },
    },
  },
}) => (
  <footer className={`o-section ${styles.footer}`}>
    <div className={`o-section__wrapper ${styles.footer__wrapper}`}>
      <div className={styles.master}>
        <span>Cédula Profesional 987510</span>
        <h3>Dr. Benito Saavedra Alvarado</h3>
        <p className="o-lead-paragraph">
          Médico especialista en traumatología y ortopédia.
        </p>
        <p className="o-lead-paragraph">
          Cirugía de rodilla, artroscopía y remplazos articulares.
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

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              address {
                title
                link
                description
              }
              phone {
                title
                link
                description
              }
            }
          }
        }
      }
    `}
    render={Footer}
  />
);
