require('es6-promise').polyfill();
require('isomorphic-fetch');

const MAPBOX_API = 'https://api.mapbox.com/directions-matrix/v1/mapbox/driving-traffic';

// For our specific purposes: HMG hospital Coyoacán, CDMX Mexico https://goo.gl/maps/WAgbfa7Pdip47SVK6
const destination = { latitude: 19.3283151, longitude: -99.1442897 };

/**
 * Get the travel time and distance between the invoking geographical coordinates
 * and the pre-defined destination coordinates using the Mapbox Navigation Matrix API
 */
exports.handler = async (event) => {
  const qs = new URLSearchParams(event.queryStringParameters);
  const latitude = qs.get('latitude');
  const longitude = qs.get('longitude');

  const response = await fetch(
    `${MAPBOX_API}/${longitude},${latitude};${destination.longitude},${destination.latitude}?annotations=duration,distance&approaches=curb;curb&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
  );
  const data = await response.json();

  if (response.ok === false) return { statusCode: response.status, body: JSON.stringify(data) };

  return {
    statusCode: response.status,
    body: JSON.stringify({ distance: data.distances[0][1], time: data.durations[0][1] }),
  };
};
