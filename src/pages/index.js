import React from 'react';

import Layout from '../components/layout';
import PortraitImage from '../components/portrait-image';
import SEO from '../components/seo';
import CTA from '../components/cta';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO lang="es" title="Traumatología y ortopédia" keywords={[`doctor`, `traumatología`, `ortopédia`, `consulta privada`, `cirugía de rodilla`, `dolor de rodilla`]} />

    <header className={styles.hero}>
      <div className={styles.hero__body}>
        <div className={styles.hero__portrait}>
          <PortraitImage />
        </div>

        <div className={styles.hero__copy}>
          <span className="o-subtitle -primary">Cédula Profesional 987510</span>
          <h1>Dr. Benito Saavedra Alvarado</h1>
          <p className="o-lead-paragraph">Médico especialista en traumatología y ortopédia.</p>
          <p className="o-lead-paragraph">Cirjuía de rodilla, artroscopía y remplazos articulares.</p>
        </div>
      </div>

      <div className={styles.hero__cta}>
        <CTA
          label="Consulta Privada"
          action={(
            <a href="https://goo.gl/maps/WAgbfa7Pdip47SVK6" tagret="_blank">HMG Hospital Coyoacán, Consultorio 512</a>
          )}
          description="División del Norte #3395, Colonia El Rosario, Ciudad de México"
        />

        <CTA
          label="Agenda tu Cita"
          action={(
            <a href="tel:5536837578">(55) 3683 7578</a>
          )}
          description="Teléfono del consultorio"
        />
      </div>
    </header>
  </Layout>
);

export default IndexPage;
