import React from 'react';
import { graphql } from 'gatsby';

import styles from './blog-post.module.css';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => (
  <Layout>
    <SEO
      lang="es"
      title={frontmatter.title}
      description={frontmatter.description}
      keywords={frontmatter.tags}
    />

    <header className={styles.hero}>
      <div className={styles.hero__card}>
        <div className={styles.hero__card__wrapper}>
          <div className={styles.hero__card__details}>
            <span className="o-subtitle">Del Blog del Dr. Saavedra</span>
            <h1>{frontmatter.title}</h1>
            <time dateTime={frontmatter.date}>{frontmatter.prettyDate}</time>
          </div>
        </div>
      </div>
    </header>

    <main className={styles.post}>
      <div className="o-section">
        <div
          className={`o-section__wrapper ${styles.post__content}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        prettyDate: date(formatString: "MMMM DD, YYYY", locale: "es")
        tags
        description
      }
    }
  }
`;
