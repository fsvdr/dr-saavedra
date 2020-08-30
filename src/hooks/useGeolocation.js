/**
 * Get the device's geographic position using the native Geolocation API
 * @return () => Promise<GeolocationPosition | GeolocationPositionError>
 */
const useGeolocation = () => {
  /**
   * If service available, will get the current geographic position of the device
   *
   * ERROR CODES: { 1: PERMISSION_DENIED, 2: POSITION_UNAVAILABLE, 3: TIMEOUT }
   */
  const requestGeolocation = () => {
    return new Promise((resolve, reject) => {
      if (!('geolocation' in navigator)) return reject({ code: 2, message: 'Geolocation is not available.' });

      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  };

  return requestGeolocation;
};

export default useGeolocation;
