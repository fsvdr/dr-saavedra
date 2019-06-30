import React from 'react';

import styles from './index.module.css';

const Form = () => (
  <div className={`o-section ${styles.container}`}>
    <form
      className={`o-section__wrapper ${styles.form}`}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className={styles.control} htmlFor="name">
        <span>Nombre</span>
        <input
          type="text"
          name="name"
          placeholder="Ex. Juan Pérez"
          required
          id="name"
        />
      </label>

      <label className={styles.control} htmlFor="email">
        <span>Correo</span>
        <input
          type="email"
          name="email"
          placeholder="Ex. tu@email.com"
          required
          id="email"
        />
      </label>

      <label className={styles.control} htmlFor="occupation">
        <span>Ocupación</span>
        <input
          type="text"
          name="occupation"
          placeholder="Ex. Deportista"
          id="occupation"
        />
      </label>

      <label className={styles.control} htmlFor="age">
        <span>Edad</span>
        <input
          type="number"
          min="1"
          max="100"
          name="age"
          placeholder="Ex. 32"
          required
          id="age"
        />
      </label>

      <label className={styles.control} htmlFor="referral">
        <span>¿Quién te refirió con el Dr. Saavedra?</span>
        <select name="referral" required id="referral">
          <option value="human">Un conocido</option>
          <option value="seo">Búsqueda en internet</option>
          <option value="advertising">Publicidad impresa</option>
        </select>
      </label>

      <label className={styles.control} htmlFor="message">
        <span>¿Cuál es tu duda?</span>
        <textarea
          name="message"
          placeholder="Ex. Tengo dolor..."
          required
          id="message"
        />
      </label>

      <div className={`${styles.submit} o-flex -justify-end`}>
        <button type="submit" className={`${styles.submit__btn} o-card`}>
          Enviar <i>&#8594;</i>
        </button>
      </div>
    </form>
  </div>
);

export default Form;
