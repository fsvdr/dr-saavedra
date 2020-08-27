import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import capitalize from '../utils/capitalize';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: min(100%, 50rem);
  text-align: center;

  & .testimonial__content {
    margin-block-end: 0.8rem;
  }

  & .testimonial__author {
    font-size: var(--font-size-sm);
    margin-block-end: 0.8rem;

    & time {
      display: block;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-block-end: 2rem;
`;

const Star = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={active ? 'var(--color-accent)' : 'none'}
    stroke={active ? 'var(--color-accent)' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="icon"
    focusable="false"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

Star.propTypes = {
  active: PropTypes.bool,
};

Star.defaultProps = {
  active: false,
};

const Testimonial = ({ testimonial: { rate, content, author, datetime } }) => {
  return (
    <Container>
      <Rating aria-label={`${author} calificó su consulta con ${rate} de 5 estrellas`}>
        <Star active={rate >= 1} />
        <Star active={rate >= 2} />
        <Star active={rate >= 3} />
        <Star active={rate >= 4} />
        <Star active={rate === 5} />
      </Rating>

      <p className="testimonial__content">{content}</p>

      <p className="testimonial__author">
        — {author}
        <time>{capitalize(format(new Date(datetime), 'LLLL d, y', { locale: es }))}</time>
      </p>
    </Container>
  );
};

Testimonial.propTypes = {
  testimonial: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
  }).isRequired,
};

export default Testimonial;
