import React from 'react';

import styles from './index.module.css';

import { PortraitImage } from '../Image';

const Hero = () => (
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
            <span className={styles.cta__title}>
              HMG Hospital Coyoacán, Consultorio 512
            </span>
            <span className={styles.cta__description}>
              División del Norte #3395, Colonia El Rosario, Ciudad de México
            </span>
          </a>

          <a
            href="tel:5536837578"
            className={`${styles.hero__cta__card} o-card -accent`}
          >
            <span className="o-subtitle -accent">Agenda tu Cita</span>
            <span className={styles.cta__title}>(55) 3683 7578</span>
            <span className={styles.cta__description}>
              Teléfono del consultorio
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
