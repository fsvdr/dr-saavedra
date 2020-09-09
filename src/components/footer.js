import React from 'react';
import styled from 'styled-components';
import { Section, Title } from '../styles/section';

const StyledFooter = styled(Section)`
  padding-block-end: calc(env(safe-area-inset-bottom) + 4rem);

  & ${Title} {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-demi-bold);
  }

  & nav ul {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-block-end: 1.6rem;

    & li:first-child {
      margin-inline-end: 1.6rem;
    }

    & a {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      &:hover svg {
        color: var(--color-accent);
      }
    }

    & svg {
      margin-inline-end: 0.8rem;
      transition: color 0.3s;
    }
  }

  & small {
    font-size: var(--font-size-xs);
  }

  & .footer__contact {
    margin-block-end: 2.4rem;

    & p {
      margin-block-end: 0.8rem;
    }

    & a {
      font-weight: var(--font-weight-demi-bold);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    & .footer__contact {
      order: 1;
      max-width: 30rem;
      text-align: right;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter as="footer" aria-label="Pie de página">
      <div className="footer__contact">
        <p>Consulta Privada en HMG Hóspital Coyoacán, Consultorio 512</p>
        <a href="tel:5536837578" aria-label="Teléfono del consultorio">
          <abbr title="Teléfono">Tel.</abbr> (55) 3683 7578
        </a>
      </div>

      <div>
        <Title as="p">Dr. Benito Saavedra Alvarado</Title>
        <p>Cédula Profesional 987510</p>

        <nav aria-label="Redes sociales">
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
        </nav>

        <small>&copy; Dr. Benito Saavedra Alvarado 2019 - {new Date().getFullYear()}</small>
      </div>
    </StyledFooter>
  );
};

export default Footer;
