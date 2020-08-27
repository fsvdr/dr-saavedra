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
  margin-block-end: 8rem;

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
    color: rgb(34, 34, 34);
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
  margin-block-end: 2.4rem;

  & address {
    font-style: normal;
    margin-block-end: 0.8rem;
  }

  & button {
    font-weight: var(--font-weight-demi-bold);
    padding: 0.2rem 0;
    border-bottom: 0.3rem dotted var(--color-accent);
    border-radius: 0;
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
  margin-block-end: 8rem;

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

export const About = styled(Section)`
  margin-block-end: 8rem;
  padding-inline-start: 0;
  padding-inline-end: 0;

  & .about__message {
    padding-inline-start: calc(var(--inline-inset) + 2rem);
    padding-inline-end: calc(var(--inline-inset) + 2rem);
    margin-block-end: 8rem;

    & ${Title} {
      position: relative;
      margin-block-end: 4rem;

      &::before {
        content: '"';
        position: absolute;
        top: 1.6rem;
        left: -2.4rem;
        display: block;
        line-height: 1rem;
        font-size: 8rem;
        font-style: italic;
        font-weight: var(--font-weight-demi-bold);
        color: var(--color-accent);
      }
    }
  }

  & .about__services {
    & ${Title} {
      margin-block-end: 1.6rem;
      padding-inline-start: calc(var(--inline-inset) + 1.6rem);
      padding-inline-end: calc(var(--inline-inset) + 1.6rem);
    }

    & > ul {
      margin-block-end: 2.4rem;
    }

    & ul {
      list-style-type: circle;
      list-style-position: outside;
      font-size: var(--font-size-sm);
      padding-inline-start: calc(var(--inline-inset) + 3.2rem);
      padding-inline-end: calc(var(--inline-inset) + 1.6rem);
    }
  }

  & .about__conditions {
    background-color: var(--color-white);
    padding-block-start: 2.4rem;
    padding-block-end: 2.4rem;

    & ul {
      column-count: 2;
      column-gap: 3.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    & .about__message,
    & .about__services {
      flex: 1 1 0;
    }

    & .about__message {
      padding-inline-end: 4rem;
    }

    & .about__services {
      & ${Title} {
        font-size: var(--font-size-base);
        padding-inline-start: 4rem;
      }

      & ul {
        padding-inline-start: 6rem;
      }

      & ${Title}, & ul {
        padding-inline-end: var(--inline-inset);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    & .about__message {
      max-width: 50vw;
    }

    & .about__services {
      max-width: 42vw;
    }
  }
`;

export const Testimonials = styled(Section)`
  text-align: center;
  margin-block-end: 8rem;

  & ${Title} {
    position: relative;
    padding-inline-start: calc((100% - 60rem) / 2);
    padding-inline-end: calc((100% - 60rem) / 2);
    margin-block-end: 4rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      width: 8rem;
      height: 8rem;
      background-color: var(--color-accent);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }

  & .testimonials__wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, auto);
    grid-row-gap: 4rem;
    justify-items: center;

    & article {
      min-height: 4rem;
    }
  }

  @media screen and (min-width: 768px) {
    & ${Title} {
      margin-block-end: 8rem;
    }

    & .testimonials__wrapper {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto auto auto;
      grid-row-gap: 4rem;
      grid-column-gap: 4rem;

      & article {
        grid-column-start: span 2;
      }

      & article:nth-child(3) {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
  }
`;

export const Blog = styled(Section)`
  & > ${Title} {
    position: relative;
    max-width: 32rem;
    margin-inline-start: 4rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 8rem;
      height: 8rem;
      background-color: var(--color-accent);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }

  & .blog__index {
    padding-block-start: 8rem;
    max-width: 50rem;
  }

  & .blog__pagination {
    font-size: var(--font-size-sm);
    text-align: right;
    padding-block-start: 4rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-block-end: 8rem;

    & > ${Title} {
      margin-block-start: 8rem;
      margin-inline-start: 2rem;
    }

    & .blog__index {
      padding-block-start: 0;
    }
  }
`;
