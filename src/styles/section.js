import styled from 'styled-components';

export const Section = styled.section`
  --inline-inset: calc(env(safe-area-inset-left) + 1.6rem);

  width: 100%;
  padding-block-start: 4rem;
  padding-block-end: 4rem;
  padding-inline-start: var(--inline-inset);
  padding-inline-end: var(--inline-inset);

  @media screen and (min-width: 768px) {
    --inline-inset: calc(env(safe-area-inset-left) + 4vw);
  }

  @media screen and (min-width: 1600px) {
    --inline-inset: calc((100vw - 1600px) / 2 + 4vw);
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);

  &:not(h1) {
    font-size: var(--font-size-md);
  }
`;
