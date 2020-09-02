import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../styles/section';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import capitalize from '../utils/capitalize';

const StyledArticle = styled.article`
  width: 100%;
  padding-block-end: 4rem;
  padding-inline-start: 1.6rem;
  padding-inline-end: 1.6rem;

  &:not(:first-child) {
    padding-block-start: 4rem;
  }

  &:not(:last-of-type) {
    border-bottom: 2px dashed var(--color-grey);
  }

  & ${Title} {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-demi-bold);
  }

  & .post__metadata {
    font-size: var(--font-size-sm);

    & span {
      margin-inline-start: 1.6rem;
    }
  }

  & .post__link {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: var(--font-size-sm);

    & svg {
      display: inline-block;
      color: var(--color-accent);
      margin-inline-end: 0.8rem;
    }

    & span {
      display: inline-block;
      border-bottom: 2px dotted var(--color-accent);
    }
  }
`;

const Post = ({ post }) => {
  return (
    <StyledArticle>
      <header>
        <Title as="h3">
          <Link to={post.slug}>{post.title}</Link>
        </Title>

        <p className="post__metadata">
          {capitalize(format(new Date(post.datetime), 'MMMM d, y', { locale: es }))}
          <span>Lectura de {`${post.timeToRead} minuto${post.timeToRead > 1 ? 's' : ''}`}</span>
        </p>
      </header>

      <p>{post.extract}</p>

      <Link to={post.slug} className="post__link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>

        <span>Leer artículo completo</span>
      </Link>
    </StyledArticle>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    extract: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
