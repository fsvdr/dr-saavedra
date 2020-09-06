import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Title } from '../styles/section';
import capitalize from '../utils/capitalize';
import { Article, Author, Body, Aside, Header } from './post.styles';
import Image from '../components/image';

const Post = ({
  location: { pathname },
  data: {
    portrait,
    sanityBlogPost: { slug, title, tags, rawReleaseDate, releaseDate, summary, content },
    previous,
    next,
  },
}) => {
  console.log(previous, next);
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
          <time dateTime={rawReleaseDate}>{capitalize(releaseDate)}</time>
        </Header>

        <Author>
          <Image src={portrait} fluid={true} alt="Fotografía del Dr. Saavedra" />

          <div>
            <h3>Dr. Benito Saavedra Alvarado</h3>
            <p>Médico especialista en traumatología y ortopédia</p>
          </div>
        </Author>

        <Body as={BlockContent} blocks={content} serializers={{ types: { inlinePostImage: () => <div /> } }} />

        <Aside>
          <p>Consulta privada en HMG Hóspital Coyoacán</p>
          <p>
            Horarios disponibles <Link to="/">aqui</Link>
          </p>

          <h3>Otros artículos de interés</h3>

          {previous ? (
            <Link to={`/${previous.slug.current}`}>
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
            <Link to={`/${next.slug.current}`}>
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
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
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
