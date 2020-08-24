import styled from 'styled-components';
import { Section, Title } from './section';

export const Hero = styled(Section)`
  display: grid;
  grid-template-columns: min(100%, 60rem);
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'title'
    'portrait'
    'office-info';
  grid-row-gap: 1.6rem;
  justify-content: center;
  justify-items: center;

  & ${Title} {
    grid-area: title;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    grid-template-columns: minmax(30rem, min(45%, 55rem)) min(calc(100% - 4rem - 40%), 50rem);
    grid-template-rows: auto auto;
    grid-template-areas:
      'portrait title'
      'office-info office-info';
    grid-column-gap: 4rem;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    grid-template-areas:
      'portrait title'
      'portrait office-info';
    justify-items: flex-start;
    grid-row-gap: 4rem;
  }
`;

export const Portrait = styled.div`
  grid-area: portrait;
  display: flex;
  flex-flow: column nowrap;
  width: min(100%, 40rem);

  & p {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 6rem;
    height: 6rem;
    font-size: var(--font-size-xs);
    color: var(--color-white);
    background-color: var(--color-accent);
    border-radius: 50%;
    margin-inline-end: 2.5%;
    margin-block-end: -3rem;
  }

  & .portrait__image {
    position: relative;
    margin-block-start: 4rem;

    &::before {
      content: '';
      position: absolute;
      top: -4rem;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--color-accent);
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0%;
      left: 0%;
      width: 100%;
      height: 20%;
      box-shadow: inset 0 -32px 16px 8px var(--color-sand);
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    align-self: center;
  }
`;

export const Office = styled.div`
  grid-area: office-info;
  max-width: 50rem;

  & .office__card {
    display: flex;
    flex-flow: column nowrap;
    font-weight: var(--font-weight-demi-bold);
    padding: 1.6rem;
    background-color: var(--color-white);
    border-radius: 8px;
    border-left: 0.8rem solid var(--color-accent);

    & span {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      margin-block-end: -0.4rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

const OfficeDetail = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  font-size: var(--font-size-sm);
  padding-inline-start: 0.8rem;
  padding-inline-end: 0.8rem;
  margin-block-end: 2.4rem;

  & svg {
    font-weight: var(--font-weight-demi-bold);
    margin-inline-end: 2.4rem;
    margin-block-start: 0.4rem;
  }

  & > div {
    flex: 1 1 0;
  }
`;

export const OfficeAddress = styled(OfficeDetail)`
  & address {
    font-style: normal;
    margin-block-end: 0.8rem;
  }

  & button {
    font-weight: var(--font-weight-demi-bold);
    color: var(--color-accent);
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 2px;
    padding: 0;
  }
`;

export const OfficeHours = styled(OfficeDetail)`
  & > div {
    position: relative;
  }

  @media screen and (max-width: 320px) {
    & table {
      position: absolute;
      right: -3.3rem;
    }

    & small {
      display: block;
      margin-block-start: 20rem;
    }
  }

  @media screen and (min-width: 768px) {
    & small {
      margin-block-start: 1.6rem;
    }
  }
`;

export const Experience = styled(Section)`
  inline-size: 95%;
  background-color: var(--color-white);

  & ${Title} {
    padding-inline-start: 1.6rem;
    margin-block-end: 4rem;
  }

  @media screen and (min-width: 768px) {
    & > div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: stretch;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    & ${Title} {
      margin-block-end: 0;
    }

    & > div {
      min-width: 70rem;
      margin-inline-start: 1.6rem;
    }
  }
`;

export const Work = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: var(--font-size-sm);
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  margin-block-end: 4rem;

  &:last-child {
    margin-block-end: 0;
  }

  & p {
    flex: 1 1 0;
    margin-inline-start: 2rem;
    margin-block-end: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-block-end: 0;

    & p {
      margin-block-start: 0;
      margin-inline-start: 1rem;
    }
  }
`;
