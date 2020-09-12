import styled from 'styled-components';
import { Section } from './section';

export const Container = styled(Section)`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-block-start: 4rem;

  & label {
    margin-block-end: 0.8em;
  }

  & input,
  & textarea {
    inline-size: min(90%, 40rem);
    font-weight: var(--font-weight-medium);
    background-color: transparent;
    border: 2px solid var(--color-black);
    border-radius: 0.4rem;
    padding: 0.8rem;
    margin-block-end: 2.4rem;
    transition: border-color 0.3s;

    &:hover,
    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }

  & textarea {
    min-height: 12rem;
  }

  & p:last-child {
    font-weight: var(--font-weight-demi-bold);
    margin-block-end: 0;
    outline: none;

    & > span {
      margin-block-start: 4rem;
    }

    & .success-message {
      display: block;
      margin-block-start: 4rem;
    }

    & a:last-child {
      display: inline-block;
      font-weight: var(--font-weight-medium);
      margin-block-start: 2rem;
      border-bottom: 0.2rem solid var(--color-accent);
    }
  }
`;

export const Rating = styled.fieldset`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  inline-size: 100%;
  margin-block-end: 6rem;

  & legend {
    position: absolute;
    top: 100%;
    margin: 0 auto;
    font-style: italic;
    font-size: var(--font-size-sm);
  }

  & label {
    cursor: pointer;
    margin: 0;
  }

  & svg.icon {
    transition: none;
  }

  & label[for='rate-5'] {
    order: 5;
  }

  & label[for='rate-4'] {
    order: 4;
  }

  & label[for='rate-3'] {
    order: 3;
  }

  & label[for='rate-2'] {
    order: 2;
  }

  & label[for='rate-1'] {
    order: 1;
  }

  & label:hover svg,
  & label:hover ~ label svg {
    stroke: var(--color-accent);
  }
`;

export const AgreeField = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  inline-size: min(90%, 40rem);
  font-size: var(--font-size-sm);
  text-align: left;

  & input {
    inline-size: auto;
    margin-inline-end: 1.6rem;
  }
`;

export const Submit = styled.button`
  font-weight: var(--font-weight-demi-bold);
  padding: 0.2rem;
  border-bottom: 2px solid var(--color-accent);
  margin-block-start: 4rem;
  transition: border-color 0.3s;
`;
