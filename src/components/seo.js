import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang, title, description, canonical, image, imageAlt, og }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <html lang={lang} dir="ltr" />
      <title>{title || site.siteMetadata.title}</title>

      <meta name="description" content={description || site.siteMetadata.description} />

      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${canonical}`} />

      <meta property="og:type" content={og.type || 'website'} />
      <meta property="og:site_name" content="Dr. Benito Saavedra Alvarado" />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={description || site.siteMetadata.description} />
      <meta property="og:image" content={`${site.siteMetadata.siteUrl}${image}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={`${site.siteMetadata.siteUrl}${canonical}`} />
      <meta property="og:locale" content="es_MX" />
      {og.type === 'article' && (
        <meta property="article:published_time" content={new Date(og.published_time).toISOString()} />
      )}
      {og.type === 'article' && <meta property="article:author" content={site.siteMetadata.author} />}
      {og.type === 'article' && <meta property="og:section" content={og.section} />}
      {og.type === 'article' && og.tag.map((t, i) => <meta property="og:tag" content={t} key={i} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:id" content={site.siteMetadata.author} />
      <meta name="twitter:creator" content={site.author} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={description || site.siteMetadata.description} />
      <meta name="twitter:image" content={`${site.siteMetadata.siteUrl}${image}`} />
      <meta name="twitter:image_alt" content={imageAlt} />
      <meta name="twitter:url" content={`${site.siteMetadata.siteUrl}${canonical}`} />
    </Helmet>
  );
}

SEO.propTypes = {
  lang: PropTypes.string,
  canonical: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  og: PropTypes.shape({
    type: PropTypes.oneOf(['website', 'article']),
    published_time: PropTypes.string,
    section: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.string),
  }),
};

SEO.defaultProps = {
  lang: 'es',
  canonical: '',
  title: '',
  description: '',
  image: `/site-thumbnail.png`,
  imageAlt:
    'Lee: Médico especialista en traumatología y ortopédia. Cirugía de rodilla, artroscopía y remplazos articulares.',
  og: { type: 'website' },
};

export default SEO;
