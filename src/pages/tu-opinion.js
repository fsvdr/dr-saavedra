import { Link } from 'gatsby';
import React, { Fragment, useState } from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import LoadingIndicator from '../components/loading-indicator';
import { Title } from '../styles/section';
import { AgreeField, Container, Form, Rating, Submit } from '../styles/tu-opinion.styles';

const TuOpinionPage = () => {
  const statusRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rating, setRating] = useState(4);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      if (statusRef.current) statusRef.current.focus();
    }, 1000);
  };

  return (
    <Layout>
      <Helmet>
        <title>¡Comparte tu opinión! — Dr. Benito Saavedra Alvarado</title>
      </Helmet>
      <Container as="div">
        <Title>¿Qué tal te fue en tu consulta? ¡Compártenos tu opinión!</Title>

        <Form onSubmit={handleFormSubmit}>
          <Rating>
            <legend>Califica tu visita</legend>
            {[5, 4, 3, 2, 1].map((rate) => (
              <Fragment key={rate}>
                <input
                  type="radio"
                  name="rating"
                  value={rate}
                  required
                  id={`rate-${rate}`}
                  className="sr-only"
                  checked={rating == rate}
                  onChange={({ target }) => setRating(target.value)}
                  disabled={isLoading || success}
                />

                <label htmlFor={`rate-${rate}`} aria-label={`${rate} de 5 estrellas`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={rate <= rating ? 'var(--color-accent)' : 'none'}
                    stroke={rate <= rating ? 'var(--color-accent)' : 'currentColor'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon--lg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </label>
              </Fragment>
            ))}
          </Rating>

          <label htmlFor="name">¿Cuál es tu nombre?</label>
          <input type="text" name="name" required id="name" disabled={isLoading || success} />

          <label htmlFor="review">¿Cómo describirías el trato del Dr. Saavedra?</label>
          <textarea maxLength="280" required id="review" disabled={isLoading || success}></textarea>

          <AgreeField>
            <input type="checkbox" name="agrees" value="true" disabled={isLoading || success} />
            <span>Estoy de acuerdo en que mi nombre y opinión puedan ser publicados en este sitio web</span>
          </AgreeField>

          {!isLoading && !success ? <Submit type="submit">¡Enviar mi opinión!</Submit> : null}

          <p role="status" aria-live="assertive" tabIndex={0} ref={statusRef}>
            {isLoading ? <LoadingIndicator as="span">Enviando...</LoadingIndicator> : null}
            {success ? (
              <span aria-labelledby="message action">
                <span className="success-message" id="message">
                  ¡Muchas gracias por tus comentarios!
                </span>

                <Link to="action">Ir a la página principal</Link>
              </span>
            ) : null}
          </p>
        </Form>
      </Container>
    </Layout>
  );
};

export default TuOpinionPage;
