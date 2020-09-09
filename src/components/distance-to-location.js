import React, { useReducer, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import useGeolocation from '../hooks/useGeolocation';
import asyncWrap from '../utils/asyncWrap';

const RotateAnimation = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

const Container = styled.div`
  & p {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: var(--font-size-xs);
    padding: 0.2rem 0;
    margin-block-end: 0;
  }

  & svg {
    color: var(--color-accent);
    margin-inline-end: 0.8rem;
    margin-block-start: 0;
    animation: ${RotateAnimation} 2s infinite;
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
  if (!('geolocation' in navigator)) return null;

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
        {state.loading ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
              focusable="false"
              aria-hidden="true"
            >
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>

            <span>Calculando distancia</span>
          </>
        ) : (
          ''
        )}
        {!state.loading && state.error ? state.error : ''}
        {!state.loading && state.travel ? state.travel : ''}
      </p>
    </Container>
  );
};

export default DistanceToLocation;
