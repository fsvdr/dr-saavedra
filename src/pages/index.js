import React from 'react';
import Layout from '../components/layout';
import { Hero, Portrait, Office, OfficeAddress, OfficeHours, Experience, Work } from '../styles/index.styles';
import { Title } from '../styles/section';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../components/image';
import OfficeAvailability from '../components/office-availability';

const IndexPage = ({ data: { portrait, unam, imss, issste } }) => (
  <Layout>
    <Hero>
      <Title>
        Médico especialista en traumatología y ortopédia. Cirugía de rodilla, artroscopía y remplazos articulares.
      </Title>

      <Portrait>
        <p>Cédula 987510</p>

        <div className="portrait__image">
          <Image src={portrait} alt="Fotografía del Dr. Saaverdra" />
        </div>
      </Portrait>

      <Office>
        <p className="office__card">
          <span>Consulta Privada</span>
          <a href="https://goo.gl/maps/WAgbfa7Pdip47SVK6" target="_blank" rel="noopener noreferrer">
            HMG Hóspital Coyoacán, Consultorio 512
          </a>
        </p>

        <OfficeAddress className="office__address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon--offset-size"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>

          <div>
            <address>División del Norte #3395, Colonia El Rosario, Ciudad de México</address>

            <button aria-label="Calcular la distancia desde mi posición actual" type="button">
              ¿Qué tan lejos estoy?
            </button>
          </div>
        </OfficeAddress>

        <OfficeHours>
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>

          <div>
            <p>Horarios de consulta flexibles. Disponibles de Lunes a Domingo</p>

            <OfficeAvailability />

            <small>¿Buscas otro horario? ¡Lláma, quizá podamos hacer un espacio!</small>
          </div>
        </OfficeHours>
      </Office>
    </Hero>

    <Experience>
      <Title as="h2">Una carrera respaldada por las principales instituciones del país</Title>

      <div>
        <Work>
          <Image fluid={false} src={unam} alt="" focusable="false" aria-hidden="true" />
          <p>Licenciatura y especialización por parte de la UNAM</p>
        </Work>
        <Work>
          <Image fluid={false} src={imss} alt="" focusable="false" aria-hidden="true" />
          <p>28 años de servicio en el Hospital Regional 2</p>
        </Work>
        <Work>
          <Image fluid={false} src={issste} alt="" focusable="false" aria-hidden="true" />
          <p>28 años de servicio en el Hospital General Ignacio Zaragoza</p>
        </Work>
      </div>
    </Experience>
  </Layout>
);

export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    unam: file(relativePath: { eq: "unam.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imss: file(relativePath: { eq: "imss.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    issste: file(relativePath: { eq: "issste.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    portrait: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
