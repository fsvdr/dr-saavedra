import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './index.module.css';

import { PortraitImage } from '../Image';

const Hero = ({
  site: {
    siteMetadata: {
      contact: { address, phone },
    },
  },
}) => (
  <header className={styles.hero}>
    <div className={styles.hero__card}>
      <div className={styles.hero__card__wrapper}>
        <div className={styles.hero__card__details}>
          <span className="o-subtitle -primary">Cédula Profesional 987510</span>
          <h1>Dr. Benito Saavedra Alvarado </h1>
          <p className="o-lead-paragraph">
            Médico especialista en trumatología y ortopédia. Cirugía de rodilla,
            artroscopía y remplazos articulares.
          </p>
        </div>

        <div className={styles.hero__card__portrait}>
          <PortraitImage />
        </div>

        <div className={styles.hero__cta}>
          <a
            href="https://goo.gl/maps/WAgbfa7Pdip47SVK6"
            className={`${styles.hero__cta__card} o-card -accent`}
          >
            <span className="o-subtitle -accent">Consulta Privada</span>
            <span className={styles.cta__title}>{address.title}</span>
            <span className={styles.cta__description}>
              {address.description}
            </span>
          </a>

          <a
            href="tel:5536837578"
            className={`${styles.hero__cta__card} o-card -accent`}
          >
            <span className="o-subtitle -accent">Agenda tu Cita</span>
            <span className={styles.cta__title}>{phone.title}</span>
            <span className={styles.cta__description}>{phone.description}</span>
          </a>
        </div>
      </div>
    </div>
  </header>
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
    render={Hero}
  />
);
