import styled from 'styled-components';

export const Article = styled.article`
  --inline-inset: calc(env(safe-area-inset-left) + 1.6rem);

  padding-block-start: 6rem;

  @media screen and (min-width: 768px) {
    --inline-inset: calc(env(safe-area-inset-left) + 4vw);

    display: grid;
    grid-template-columns: min(calc(60% - 2rem), 800px) min(calc(40% - 2rem), 500px);
    justify-content: space-between;
    grid-column-gap: 4rem;
    grid-row-gap: 2.4em;
    grid-template-areas:
      'header author'
      'body aside';
  }

  @media screen and (min-width: 1024px) {
    grid-column-gap: 8rem;
    grid-template-columns: min(calc(60% - 4rem), 900px) min(calc(40% - 4rem), 500px);
  }

  @media screen and (min-width: 1600px) {
    --inline-inset: calc((100vw - 1600px) / 2 + 4vw);

    grid-template-columns: min(calc(60% - 4rem), calc(800px + var(--inline-inset))) min(
        calc(40% - 4rem),
        calc(500px + var(--inline-inset))
      );
  }
`;

export const Header = styled.header`
  grid-area: header;
  padding-inline-start: var(--inline-inset);
  padding-inline-end: var(--inline-inset);
  margin-block-end: 2.4rem;

  & span {
    margin-inline-start: 1.6rem;
  }

  @media screen and (min-width: 768px) {
    margin-block-end: 0;
    padding-inline-end: 0;
  }
`;

export const Author = styled.div`
  grid-area: author;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-inline-start: var(--inline-inset);
  padding-inline-end: var(--inline-inset);
  margin-block-end: 2rem;

  & .gatsby-image-wrapper {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.12);

    & img,
    & picture {
      margin-block-start: 0.8rem;
    }
  }

  & > div:last-of-type {
    flex: 1 1 0;
    margin-inline-start: 2.4rem;

    & h3 {
      font-weight: var(--font-weight-regular);
    }

    & p {
      font-size: var(--font-size-sm);
    }
  }

  @media screen and (min-width: 768px) {
    padding-inline-start: 0;
    padding-block-start: 1.6rem;
    margin-block-end: 0;

    & p {
      margin-block-end: 0;
    }
  }
`;

export const Body = styled.div`
  grid-area: body;
  inline-size: 100%;
  font-weight: var(--font-weight-regular);
  background-color: var(--color-white);
  padding-inline-start: var(--inline-inset);
  padding-inline-end: var(--inline-inset);
  padding-block-start: 4rem;
  padding-block-end: 4rem;
  margin-block-end: 4rem;

  & h2 {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    margin-block-end: 4rem;

    &:not(:first-of-type) {
      margin-block-start: 8rem;
    }
  }

  & ul,
  & ol {
    list-style-position: outside;
    padding-inline-start: 1.6rem;

    & li {
      margin-block-end: 0.8rem;
    }
  }

  & p {
    max-width: none;
  }

  @media screen and (min-width: 768px) {
    padding-block-start: 6rem;
    padding-block-end: 6rem;
  }

  @media screen and (min-width: 1600px) {
    padding-inline-end: 4vw;
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-block-start: 8rem;
  margin-block-end: 8rem;

  & .gatsby-image-wrapper {
    border: 1.6rem solid var(--color-background);
    border-radius: 0.8rem;
    background-color: var(--color-background);
    margin-block-end: 1.6rem;

    & img,
    & picture {
      border-radius: 0.8rem;
    }
  }

  & figcaption {
    font-style: italic;
    font-size: var(--font-size-sm);
  }
`;

export const Aside = styled.div`
  grid-area: aside;
  padding-inline-start: var(--inline-inset);
  padding-inline-end: var(--inline-inset);
  margin-block-end: 6rem;

  & p:first-of-type {
    margin-block-end: 0.8rem;
  }

  & p a {
    font-weight: var(--font-weight-demi-bold);
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  & h3 {
    font-weight: var(--font-weight-medium);
    margin-block-start: 4rem;
    margin-block-end: 1.6rem;
  }

  & > a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-weight: var(--font-weight-demi-bold);

    &:hover svg {
      color: var(--color-accent);
    }
  }

  & svg {
    margin-inline-end: 0.8rem;
    transition: color 0.3s;
  }

  @media screen and (min-width: 768px) {
    padding-inline-start: 0;
  }
`;
