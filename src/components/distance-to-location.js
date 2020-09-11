import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';
import useGeolocation from '../hooks/useGeolocation';
import asyncWrap from '../utils/asyncWrap';
import LoadingIndicator from './loading-indicator';

const Container = styled.div`
  & p {
    font-size: var(--font-size-xs);
    padding: 0.2rem 0;
    margin-block-end: 0;
  }
`;

const StyledButton = styled.button`
  font-weight: var(--font-weight-demi-bold);
  padding: 0.2rem 0;
  border-bottom: 0.2rem solid var(--color-accent);
  border-radius: 0;
`;

const initialState = { loading: false, travel: '', error: null };
const reducer = (state, action) => {
  if (action.type === 'REQUEST_LOCATION') return { loading: true, error: null };
  if (action.type === 'ERROR') return { loading: false, error: action.payload.error };
  if (action.type === 'SUCCESS') return { loading: false, travel: action.payload.travel };
  return state;
};

const mapNavigatorToAppError = (code) => {
  if (code === 1)
    return 'Necesitamos tu permiso para obtener tu ubicación actual, por favor intenta recargar la página';
  if (code === 2) return 'No pudimos obtener tu ubicación en estos momentos, por favor intenta más tarde';
  if (code === 3) return 'Lo sentimos, no pudimos calcular la distancia en estos momentos, por favor intenta más tarde';
};

const DistanceToLocation = () => {
  const statusRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  const locate = useGeolocation();

  // If there's no geolocation service on the user's device we'll go right ahead and
  // not show the button
  if (typeof window === 'undefined' || !('geolocation' in navigator)) return null;

  const handleClick = async () => {
    dispatch({ type: 'REQUEST_LOCATION' });
    const [error, position] = await asyncWrap(locate());

    if (error) {
      statusRef.current.focus();
      return dispatch({ type: 'ERROR', payload: { error: mapNavigatorToAppError(error.code) } });
    }

    const [e, response] = await asyncWrap(
      fetch(
        `/.netlify/functions/navigation-matrix?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
      )
    );

    if (e) {
      statusRef.current.focus();
      return dispatch({ type: 'ERROR', payload: { error: 3 } });
    }

    const travel = await response.json();
    const travelMessage = `Te encuentras a aproximadamente ${(travel.time / 100).toFixed(0)} minutos (${(
      travel.distance / 1000
    ).toFixed(1)} km) del consultorio`;

    dispatch({ type: 'SUCCESS', payload: { travel: travelMessage } });
    statusRef.current.focus();
  };

  return (
    <Container>
      {!state.loading && !state.travel && !state.error ? (
        <StyledButton
          onClick={handleClick}
          aria-label="Calcular distancia al consultorio desde mi posición actual"
          type="button"
        >
          ¿Qué tan lejos estoy?
        </StyledButton>
      ) : null}

      <p role="status" aria-live="assertive" ref={statusRef} tabIndex={0}>
        {state.loading ? <LoadingIndicator>Calculando distancia</LoadingIndicator> : null}
        {!state.loading && state.error ? state.error : ''}
        {!state.loading && state.travel ? state.travel : ''}
      </p>
    </Container>
  );
};

export default DistanceToLocation;
