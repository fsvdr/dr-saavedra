import React from 'react';

import styles from './index.module.css';

import Form from './Form';

const Contact = () => (
  <section className="o-section" id="contact">
    <header className="o-section__wrapper">
      <span className="o-subtitle -accent">Contacto</span>
      <h2 className="o-section-title">¿Tienes alguna duda?</h2>
      <p className="o-section-copy">
        Llena los siguientes campos y el Dr. Saavedra se pondrá en contacto
        contigo
      </p>
    </header>

    <div className={styles.contact__form}>
      <Form />
    </div>
  </section>
);

export default Contact;
