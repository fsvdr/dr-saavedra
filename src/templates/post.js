import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Title } from '../styles/section';
import capitalize from '../utils/capitalize';
import { Article, Author, Body, Aside, Header, Figure } from './post.styles';
import Image from '../components/image';
import readingTimeForPortableTextContent from '../utils/readingTimeForPortableTextContent';

const portableTextSerializer = {
  types: {
    inlinePostImage: ({
      // eslint-disable-next-line react/prop-types
      node: {
        // eslint-disable-next-line react/prop-types
        asset: { id },
        // eslint-disable-next-line react/prop-types
        alt,
      },
    }) => (
      <Figure>
        <Img
          fluid={getFluidGatsbyImage(id, { maxWidth: 400 }, { projectId: '34yh9fgc', dataset: 'production' })}
          alt={alt}
        />

        <figcaption>{alt}</figcaption>
      </Figure>
    ),
  },
};

const Post = ({
  location: { pathname },
  data: {
    portrait,
    sanityBlogPost: { slug, title, tags, rawReleaseDate, releaseDate, summary, content, textContent },
    previous,
    next,
  },
}) => {
  const readingTime = readingTimeForPortableTextContent(textContent);

  return (
    <Layout isHome={pathname === ''}>
      <SEO
        title={`${title} . Dr. Benito Saavedra Alvarado`}
        description={summary}
        canonical={`/${slug.current}`}
        og={{
          type: 'article',
          published_time: rawReleaseDate,
          section: 'Artículo Médico',
          tag: tags,
        }}
      />

      <Article>
        <Header>
          <Title>{title}</Title>
          <p>
            <time dateTime={rawReleaseDate}>{capitalize(releaseDate)}</time>
            <span>
              Lectura de {readingTime} minuto{readingTime > 1 ? 's' : ''}
            </span>
          </p>
        </Header>

        <Author>
          <Image src={portrait} fluid={false} alt="Fotografía del Dr. Saavedra" />

          <address>
            <p>Dr. Benito Saavedra Alvarado</p>
            <p>Médico especialista en traumatología y ortopédia</p>
          </address>
        </Author>

        <Body as={BlockContent} blocks={content} serializers={portableTextSerializer} />

        <Aside>
          <p>Consulta privada en HMG Hóspital Coyoacán</p>
          <div aria-labelledby="link">
            <span id="schedule" aria-hidden="true">
              Horarios disponibles{' '}
            </span>
            <Link to="/" aria-label="Horarios de consulta disponibles" id="link">
              aqui
            </Link>
          </div>

          <h2>Otros artículos de interés</h2>

          {previous ? (
            <Link to={`/${previous.slug.current}`} aria-label={`Leer artículo ${previous.title}`}>
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

              {previous.title}
            </Link>
          ) : null}

          {next ? (
            <Link to={`/${next.slug.current}`} aria-label={`Leer articulo ${next.title}`}>
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

              {next.title}
            </Link>
          ) : null}
        </Aside>
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $previous: String, $next: String) {
    portrait: file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sanityBlogPost(id: { eq: $id }) {
      slug {
        current
      }
      title
      tags
      rawReleaseDate: releaseDate
      releaseDate(formatString: "MMMM d, y", locale: "es")
      summary
      content: _rawContent(resolveReferences: { maxDepth: 10 })
      textContent: content {
        children {
          text
        }
      }
    }
    previous: sanityBlogPost(id: { eq: $previous }) {
      title
      slug {
        current
      }
    }
    next: sanityBlogPost(id: { eq: $next }) {
      title
      slug {
        current
      }
    }
  }
`;

Post.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    portrait: PropTypes.object.isRequired,
    sanityBlogPost: PropTypes.shape({
      slug: PropTypes.shape({ current: PropTypes.string.isRequired }).isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      rawReleaseDate: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.object).isRequired,
      textContent: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    previous: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({ current: PropTypes.string.isRequired }).isRequired,
    }),
    next: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({ current: PropTypes.string.isRequired }).isRequired,
    }),
  }).isRequired,
};

export default Post;
