import React from 'react';
import { graphql } from 'gatsby';

import styles from './index.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';

import UNAMLogo from '../components/Image/unam-logo';
import IMSSLogo from '../components/Image/imss-logo';
import ISSTELogo from '../components/Image/issste-logo';
import InstitutionCard from '../components/InstitutionCard';
import BlogPost from '../components/BlogPost';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { contact },
    },
    allMarkdownRemark,
  },
}) => (
  <Layout>
    <SEO
      lang="es"
      title="Traumatología y ortopédia"
      keywords={[
        `doctor`,
        `traumatología`,
        `ortopédia`,
        `consulta privada`,
        `cirugía de rodilla`,
        `dolor de rodilla`,
      ]}
    />

    <Hero />

    <section className={`${styles.section} ${styles.experience__section}`}>
      <header>
        <h2>Carrera de vocación</h2>
        <p>
          Tras más de 28 años de servicio en instituciones de salud, el Dr.
          Saavedra continúa su carrera ofreciendo consulta privada
        </p>
      </header>

      <div className={styles.section__content}>
        <div>
          <span className="o-subtitle">Educación</span>
          <p>
            Títulado por la Universidad Nacional Autónoma de México en la
            Licenciatura de Médico Cirujano, el Dr. Saavedra se especializó en
            traumatología y ortopédia
          </p>

          <span className="o-subtitle">Profesión</span>
          <p>
            Desarrolló su carrera profesional a la par en el Instituto Mexicano
            del Seguro Social y en el Instituto de Seguridad y Servicios de los
            Trabajadores del Estado.
          </p>
          <p>
            Hoy, tras 28 años de servicio continua su práctica profesional en el
            hospital HMG.
          </p>
        </div>

        <div className={styles.experience__section__details}>
          <InstitutionCard
            logo={<UNAMLogo />}
            institution="Universidad Nacional Autónoma de México"
            timeframe="1979 — 1984"
          />

          <InstitutionCard
            logo={<IMSSLogo />}
            institution="Instituto Mexicano del Seguro Social"
            timeframe="1989 — 2018"
          />

          <InstitutionCard
            logo={<ISSTELogo />}
            institution="Instituto de Seguridad y Servicios de los Trabajadores del Estado"
            timeframe="1989 — 2018"
          />
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.blog__section}`}>
      <header>
        <h2>Artículos Médicos</h2>
        <p>
          De la mano del Dr. Saavedra, encuentra una variedad de artículos
          explicando términos, enfermedades y tratamientos
        </p>
      </header>

      <div className={`${styles.posts__list}`}>
        {allMarkdownRemark.edges.map(({ node }) => (
          <BlogPost
            id={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            prettyDate={node.frontmatter.prettyDate}
            excerpt={node.excerpt}
            key={node.id}
          />
        ))}
      </div>
    </section>

    <section className={`${styles.section} ${styles.contact__section}`}>
      <header>
        <h2>¿Tienes alguna duda?</h2>
        <p>
          Llena los siguientes campos y el Dr. Saavedra se pondra en contacto
          contigo.
        </p>
      </header>

      <ContactForm />
    </section>

    <Footer contact={contact} />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          address {
            title
            link
            description
          }
          phone {
            title
            link
            description
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            prettyDate: date(formatString: "MMMM DD, YYYY", locale: "es")
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
