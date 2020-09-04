import React from 'react';
import Layout from '../components/layout';
import {
  Hero,
  Portrait,
  Office,
  OfficeAddress,
  OfficeHours,
  Experience,
  Work,
  About,
  Testimonials,
  Blog,
} from '../styles/index.styles';
import { Title } from '../styles/section';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Image from '../components/image';
import OfficeAvailability from '../components/office-availability';
import SEO from '../components/seo';
import Testimonial from '../components/testimonial';
import Post from '../components/post';
import DistanceToLocation from '../components/distance-to-location';

const IndexPage = ({
  data: {
    portrait,
    unam,
    imss,
    issste,
    allSanityTestimonial: { edges: testimonials },
  },
}) => (
  <Layout>
    <SEO />
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
            HMG Hospital Coyoacán, Consultorio 512
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

            <DistanceToLocation />
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

    <About>
      <div className="about__message">
        <Title as="h2">
          ¡Hola! Soy el Dr. Benito Saavedra, especialista en ortopedia y traumatología. Enfocado durante muchos años a
          las enfermedades de rodilla.
        </Title>

        <p>
          Mi especialidad se encarga de atender enfermedades degenerativas o traumáticas del sistema músculo
          esquelético.
        </p>
        <p>
          Mi objetivo principal es darle el tratamiento adecuado a las enfermedades del paciente, siendo responsable y
          honesto.
        </p>
        <p>Te invito a visitarme para ayudarte a tratar tu enfermedad. ¡Espero ser digno de tu confianza!</p>
      </div>

      <div className="about__services">
        <Title as="h2">Especialidades del Dr. Saavedra:</Title>

        <ul>
          <li>Artroscopia de hombro y rodilla</li>
          <li>Colocación de prótesis de cadera y rodilla</li>
        </ul>

        <div className="about__conditions">
          <Title as="h2">Algunas de las enfermedades y condiciones con las que te puedo ayudar:</Title>

          <ul>
            <li>Cervicalgias</li>
            <li>Codo de tenista</li>
            <li>Dedos en gatillo de mano </li>
            <li>Desgaste articular o artrosis de cadera</li>
            <li>Desgaste articular o artrosis de hombro</li>
            <li>Desgaste o Artrosis de rodilla</li>
            <li>Enfermedades de la columna vertebral</li>
            <li>Enfermedades del mango rotador en hombro</li>
            <li>Espolón calcaneo</li>
            <li>Fracturas y luxaciones de hombro, codo, muñeca,</li>
            <li>cadera,rodilla, tobillo y pie</li>
            <li>Lesiones de ligamentos de rodilla</li>
            <li>Lesiones de meniscos</li>
            <li>Lumbalgias </li>
            <li>Osteoartritis</li>
            <li>Pie plano</li>
            <li>Pinzamiento de hombro </li>
            <li>Sinovitis</li>
            <li>Túnel del carpo</li>
          </ul>
        </div>
      </div>
    </About>

    <Testimonials id="testimonios">
      <Title as="h2">
        Confianza que se traduce en trato humano, profesional y respetuoso asi como transparencia en todo momento
      </Title>

      <div className="testimonials__wrapper">
        {testimonials.map(({ node: testimonial }) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </Testimonials>

    <Blog>
      <Title as="h2">Procedimientos quirurgicos explicados por el Dr. Saavedra</Title>

      <div className="blog__index">
        <Post
          post={{
            slug: 'protesis-total-en-artrosis-de-rodilla',
            title: 'Prótesis Total en Artrosis de Rodilla',
            datetime: '2019-04-08',
            timeToRead: 2,
            extract:
              'Gonartrosis desgaste artícular de rodilla — es una enfermedad frecuente en pacientes adultos mayores. Generalmente degenerativa, esta…',
          }}
        />

        <div className="blog__pagination">
          <p>Se muestran 5 de 5 artículos</p>
        </div>
      </div>
    </Blog>
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
    allSanityTestimonial(limit: 5, filter: { approved: { eq: true } }, sort: { fields: submissionDate, order: DESC }) {
      edges {
        node {
          id
          rating
          submissionDate(formatString: "MMMM d, y", locale: "es")
          author
          content
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    portrait: PropTypes.object.isRequired,
    unam: PropTypes.object.isRequired,
    imss: PropTypes.object.isRequired,
    issste: PropTypes.object.isRequired,
    testimonials: PropTypes.arrayOf(
      PropTypes.shape({
        rate: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
      })
    ),
    allSanityTestimonial: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            submissionDate: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

IndexPage.defaultProps = {
  data: {
    testimonials: [],
  },
};

export default IndexPage;
