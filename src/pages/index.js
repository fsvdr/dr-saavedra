import React from 'react';
import { graphql, Link } from 'gatsby';

import styles from './index.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import { UNAMLogo, IMSSLogo, ISSSTELogo, HMGLogo } from '../components/Image';

const IndexPage = ({ data: { allMarkdownRemark } }) => (
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

    <section className={`o-section ${styles.experience}`}>
      <div className={`o-section__wrapper ${styles.experience__wrapper}`}>
        <div className={styles.experience__card}>
          <div className={styles.experience__card__decorator}>
            <UNAMLogo />
          </div>

          <div className={styles.experience__card__details}>
            <span className="o-subtitle">Educación</span>
            <h2>Universidad Nacional Autónoma de México</h2>
            <p>
              Titulado en la Licenciatura de Médico Cirujano, se especializó en
              traumatología y ortopédia
            </p>
          </div>
        </div>

        <div className={styles.experience__card}>
          <div className={styles.experience__card__decorator}>
            <IMSSLogo />
          </div>

          <div className={styles.experience__card__details}>
            <span className="o-subtitle">Profesión</span>
            <h2>Instituto Mexicano del Seguro Social</h2>
            <p>Desarrolló su carrera profesional en el Hospital Regional 2</p>
          </div>
        </div>

        <div className={styles.experience__card}>
          <div className={styles.experience__card__decorator}>
            <ISSSTELogo />
          </div>

          <div className={styles.experience__card__details}>
            <span className="o-subtitle">Profesión</span>
            <h2>
              Instituto de Seguridad y Servicios de los Trabajadores del Estado
            </h2>
            <p>
              Desarrolló su carrera profesional en el Hospital General Ignacio
              Zaragoza
            </p>
          </div>
        </div>

        <div className={styles.experience__card}>
          <div className={styles.experience__card__decorator}>
            <HMGLogo />
          </div>

          <div className={styles.experience__card__details}>
            <span className="o-subtitle">Profesión</span>
            <h2>HMG Hospital Coyoacán</h2>
            <p>
              Tras 28 años de servicio continua su práctica profesional en
              consulta privada
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="o-section">
      <header className="o-section__wrapper">
        <span className="o-subtitle -accent">Blog</span>
        <h2 className="o-section-title">Artículos Médicos</h2>
        <p className="o-section-copy">
          De la mano del Dr. Saavedra, encuentra una variedad de artículos
          explicando términos, enfermedades y tratamientos
        </p>
      </header>

      <div className={`o-section__wrapper ${styles.blog}`}>
        <div className={styles.blog__post__list}>
          {allMarkdownRemark.edges.map(({ node }) => (
            <article className={styles.blog__post} key={node.fields.slug}>
              <Link to={`blog/${node.fields.slug}`}>
                <h3>{node.frontmatter.title}</h3>
                <time dateTime={node.date} className="o-subtitle">
                  {node.frontmatter.prettyDate}
                </time>
              </Link>
              <p>{node.excerpt}</p>

              <Link to={`blog/${node.fields.slug}`}>Leer más</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query {
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
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;