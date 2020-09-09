import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Title } from '../styles/section';
import { Link } from 'gatsby';
import { useRef } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 32rem);
  text-align: center;
  padding-block-start: 4rem;
  margin-block-end: 4rem;

  & span {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12rem;
    font-weight: var(--font-weight-demi-bold);
    inline-size: 30rem;
    block-size: 30rem;
    background-color: var(--color-accent);
    border-radius: 50%;
    margin-block-end: 4rem;
  }

  & ${Title} {
    max-width: 80rem;
    padding-inline-start: 2.4rem;
    padding-inline-end: 2.4rem;
    margin-block-end: 4rem;
  }

  & .links {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  & a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    &:first-of-type {
      margin-inline-end: 1.6rem;
    }

    & svg {
      margin-inline-end: 1.6rem;
      transition: color 0.3s;
    }

    &:hover svg {
      color: var(--color-accent);
    }
  }
`;

const NotFoundPage = () => {
  const titleRef = useRef();

  useEffect(() => {
    if (!titleRef.current) return;

    titleRef.current.focus();
  }, []);

  return (
    <Layout isHome={false}>
      <Container>
        <span>404</span>
        <Title tabIndex={0} ref={titleRef}>
          La página que solicitaste no existe pero no te preocupes, aquí hay algunos links que te pueden ayudar
        </Title>

        <div className="links">
          <Link to="/" aria-label="Página principal">
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
            Página principal
          </Link>

          <Link to="/#articulos" aria-label="Artículos médicos">
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
            Artículos Médicos
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
