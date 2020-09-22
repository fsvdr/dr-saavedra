import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from './image';
import PropTypes from 'prop-types';

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  display: grid;
  grid-template:
    'logo . cta' auto
    'nav nav nav' auto
    / auto minmax(0, 1fr) auto;
  grid-row-gap: 2.4rem;
  align-items: flex-end;
  inline-size: 100%;
  padding-block-start: 1.6rem;
  padding-block-end: 1.6rem;
  padding-inline-start: calc(env(safe-area-inset-left) + 1.6rem);
  padding-inline-end: calc(env(safe-area-inset-left) + 1.6rem);

  @media screen and (min-width: 768px) {
    grid-template:
      'logo nav cta' auto
      / auto minmax(0, 1fr) auto;
    padding-inline-start: calc(env(safe-area-inset-left) + 4vw);
    padding-inline-end: calc(env(safe-area-inset-left) + 4vw);
  }

  @media screen and (min-width: 1600px) {
    padding-inline-start: calc((100vw - 1600px) / 2 + 4vw);
    padding-inline-end: calc((100vw - 1600px) / 2 + 4vw);
  }
`;

const StyledList = styled.ul`
  grid-area: nav;
  flex: 1 1 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  & ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    list-style-type: none;
  }

  & li:not(:last-child) {
    margin-inline-end: 1.6rem;
  }

  & a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: var(--font-size-sm);

    & .icon {
      margin-inline-end: 0.6rem;
    }
  }

  & a:hover .icon {
    stroke: var(--color-accent);
  }

  @media screen and (max-width: 320px) {
    & a {
      flex-wrap: wrap;
      justify-content: center;
    }

    & .icon--offset-fix {
      margin-block-start: 0;
    }
  }

  @media screen and (min-width: 768px) {
    padding-inline-start: 2.4rem;
    padding-inline-end: 2.4rem;
    padding-block-end: 0.1rem;
  }
`;

const Logo = styled(Link)`
  grid-area: logo;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-demi-bold);

  & > div {
    margin-inline-end: 0.8rem;
  }
`;

const AppointmentLink = styled.a`
  grid-area: cta;
  font-size: var(--font-size-base);
  text-align: right;

  & .title {
    display: block;
    font-size: var(--font-size-xs);
    line-height: 100%;
  }

  & span:not(.title) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-weight: var(--font-weight-demi-bold);
  }

  & .icon {
    color: var(--color-accent);
    margin-inline-end: 0.8rem;
  }
`;

const InternalLinks = () => (
  <ul>
    <li>
      <Link to="/#testimonios">
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
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
        Testimonios
      </Link>
    </li>
    <li>
      <Link to="/#articulos">
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
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        Artículos
      </Link>
    </li>
  </ul>
);

const SiteNav = ({ showInternalLinks }) => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledNav aria-label="Navegación principal">
      <Logo to="/" aria-label="Inicio">
        <Image fluid={false} src={images.logo} alt="" aria-hidden="true" />
        Dr. Saavedra
      </Logo>

      <StyledList>
        <li>{showInternalLinks ? <InternalLinks /> : null}</li>

        <li>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/benito-saavedra-alvarado-5b9b59181">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon--offset-fix"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/drsaavedramx">
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
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                Twitter
              </a>
            </li>
          </ul>
        </li>
      </StyledList>

      <AppointmentLink href="tel:5536837578">
        <address aria-label="Teléfono del consultorio">
          <span className="title">Agenda tu cita</span>
          <span>
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            (55) 3683 7578
          </span>
        </address>
      </AppointmentLink>
    </StyledNav>
  );
};

SiteNav.propTypes = {
  showInternalLinks: PropTypes.bool,
};

SiteNav.defaultProps = {
  showInternalLinks: true,
};

export default SiteNav;
