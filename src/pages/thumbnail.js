import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Title } from '../styles/section';
import Image from '../components/image';
import useFOITStrategy from '../hooks/useFOITStrategy';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  inline-size: min(90%, 1200px);
  block-size: 630px;
  padding-inline-start: 4vw;
  padding-inline-end: 4vw;
  padding-block-start: 2.4rem;
  padding-block-end: 2.4rem;
  margin: 0 auto;

  & ${Title} {
    font-size: 8rem;
  }

  & footer {
    align-self: flex-end;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
    font-size: var(--font-size-md);
  }
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-weight: var(--font-weight-demi-bold);

  & > div {
    margin-inline-end: 1.6rem;
  }
`;

const ThumbnailPage = ({ location }) => {
  useFOITStrategy();
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!location.href) return null;

  const url = new URL(location.href);
  const title = url.searchParams.get('title');

  return (
    <Container>
      <Title>{title}</Title>

      <footer>
        <Logo>
          <Image fluid={false} src={images.logo} alt="" aria-hidden="true" />
          Dr. Saavedra
        </Logo>

        <span>Agenda tu cita (55) 3683 7578</span>

        <span>HMG Hospital Coyoacán, Consultorio 512</span>
      </footer>
    </Container>
  );
};

ThumbnailPage.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThumbnailPage;
