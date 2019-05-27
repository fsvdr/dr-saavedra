import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const BlogPost = ({ title, date, prettyDate, excerpt }) => (
  <article className={`${styles.container} o-card`}>
    <header>
      <h3><a href="">{ title }</a></h3>
      <time dateTime={date}>{ prettyDate.split('').map((char, index) => {
        if (index === 0) return char.toUpperCase();
        return char;
      }).join('') }</time>
    </header>

    <p>{ excerpt }</p>
    <a href="">Continuar leyendo</a>
  </article>
);

BlogPost.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  prettyDate: PropTypes.string,
  excerpt: PropTypes.string.isRequired,
};

export default BlogPost;