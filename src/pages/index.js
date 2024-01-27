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
import readingTimeForPortableTextContent from '../utils/readingTimeForPortableTextContent';

const IndexPage = ({
  data: {
    portrait,
    unam,
    imss,
    issste,
    allSanityTestimonial: { edges: testimonials },
    allSanityBlogPost: { pageInfo: pagination, edges: posts },
  },
}) => (
  <Layout>
    <SEO />
    <Hero aria-label="Principal">
      <Title>
        Médico especialista en traumatología <wbr />y ortopedia. <wbr />
        Cirugía de rodilla, artroscopia y reemplazos articulares.
      </Title>

      <Portrait>
        <p aria-label="Cédula Profesional 987510">Cédula 987510</p>

        <div className="portrait__image">
          <Image src={portrait} alt="" focusable="false" aria-hidden="true" />
        </div>
      </Portrait>

      <Office>
        <div className="office__card" aria-labelledby="office-location">
          <span>Consulta Privada</span>
          <address aria-label="Consulta privada">
            <a
              href="https://goo.gl/maps/WAgbfa7Pdip47SVK6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ubicación del consultorio en Google Maps"
            >
              HMG Hospital Coyoacán, Consultorio 512
            </a>
          </address>

          <p className="sr-only" aria-hidden="true" id="office-location">
            Consulta privada en HMG Hospital Coyoacán, Consultorio 512
          </p>
        </div>

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
            <address aria-label="Dirección del hospital">
              División del Norte #3395, Colonia El Rosario, Ciudad de México
            </address>

            <DistanceToLocation />
          </div>
        </OfficeAddress>
      </Office>
    </Hero>

    <Experience aria-label="Experiencia">
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

    <About aria-label="Acerca de">
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
        <Title as="h3">Especialidades del Dr. Saavedra:</Title>

        <ul>
          <li>Artroscopia de hombro y rodilla</li>
          <li>Colocación de prótesis de cadera y rodilla</li>
        </ul>

        <div className="about__conditions">
          <Title as="h3">Algunas de las enfermedades y condiciones con las que te puedo ayudar:</Title>

          <ul>
            <li>Cervicalgias</li>
            <li>Codo de tenista</li>
            <li>Dedos en gatillo de mano </li>
            <li>Desgaste articular o artrosis de cadera</li>
            <li>Desgaste articular o artrosis de hombro</li>
            <li>Desgaste o Artrosis de rodilla</li>
            <li>Enfermedades de la columna vertebral</li>
            <li>Enfermedades del mango rotador en hombro</li>
            <li>Espolón calcáneo</li>
            <li>Fracturas y luxaciones de hombro, codo, muñeca, cadera,rodilla, tobillo y pie</li>
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

    {testimonials.length ? (
      <Testimonials id="testimonios" aria-label="Testimonios">
        <Title as="h2">
          Confianza que se traduce en trato humano, profesional y respetuoso asi como transparencia en todo momento
        </Title>

        <div className="testimonials__wrapper">
          {testimonials.map(({ node: testimonial }) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </Testimonials>
    ) : null}

    <Blog id="articulos" aria-label="Artículos">
      <Title as="h2">Procedimientos quirúrgicos explicados por el Dr. Saavedra</Title>

      <div className="blog__index">
        {posts.map(({ node: post }) => (
          <Post
            post={{ ...post, slug: post.slug.current, timeToRead: readingTimeForPortableTextContent(post.textContent) }}
            key={post.id}
          />
        ))}

        <div className="blog__pagination">
          <p>
            Se muestra la página {pagination.currentPage} de {pagination.pageCount}
          </p>

          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Archivo RSS de los artículos médicos"
          >
            Feed RSS
          </a>
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
    allSanityTestimonial(limit: 10, filter: { approved: { eq: true } }, sort: { fields: submissionDate, order: DESC }) {
      edges {
        node {
          id
          rating
          submissionDate(formatString: "MMMM D, y", locale: "es")
          author
          content
        }
      }
    }
    allSanityBlogPost(limit: 5, sort: { fields: releaseDate, order: DESC }) {
      pageInfo {
        currentPage
        pageCount
      }
      edges {
        node {
          id
          releaseDate
          formattedReleaseDate: releaseDate(formatString: "MMMM D, y", locale: "es")
          slug {
            current
          }
          summary
          title
          textContent: content {
            children {
              text
            }
          }
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
    allSanityBlogPost: PropTypes.shape({
      pageInfo: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired,
      }).isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            slug: PropTypes.shape({ current: PropTypes.string.isRequired }),
            releaseDate: PropTypes.string.isRequired,
            formattedReleaseDate: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            textContent: PropTypes.arrayOf(PropTypes.object).isRequired,
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
