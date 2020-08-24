import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding-block-start: 4rem;
  padding-block-end: 4rem;
  padding-inline-start: calc(env(safe-area-inset-left) + 1.6rem);
  padding-inline-end: calc(env(safe-area-inset-left) + 1.6rem);

  @media screen and (min-width: 768px) {
    padding-inline-start: calc(env(safe-area-inset-left) + 4vw);
    padding-inline-end: calc(env(safe-area-inset-left) + 4vw);
  }

  @media screen and (min-width: 1600px) {
    padding-inline-start: calc((100vw - 1600px) / 2 + 4vw);
    padding-inline-end: calc((100vw - 1600px) / 2 + 4vw);
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
`;
