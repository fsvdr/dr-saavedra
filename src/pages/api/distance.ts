import { getSecret } from 'astro:env/server';
import type { APIContext } from 'astro';

export const prerender = false;

const MAPBOX_API = 'https://api.mapbox.com/directions-matrix/v1/mapbox/driving-traffic';

// HMG Hospital Coyoacán, CDMX — https://goo.gl/maps/WAgbfa7Pdip47SVK6
const DESTINATION = { latitude: 19.3283151, longitude: -99.1442897 };

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export async function GET({ url }: APIContext): Promise<Response> {
  const token = getSecret('MAPBOX_ACCESS_TOKEN');
  if (!token) return json({ message: 'Mapbox token is not configured.' }, 500);

  const latitude = url.searchParams.get('latitude');
  const longitude = url.searchParams.get('longitude');
  if (!latitude || !longitude) return json({ message: 'Missing coordinates.' }, 400);

  const endpoint = `${MAPBOX_API}/${longitude},${latitude};${DESTINATION.longitude},${DESTINATION.latitude}?annotations=duration,distance&approaches=curb;curb&access_token=${token}`;

  const response = await fetch(endpoint);
  const data = (await response.json()) as { distances?: number[][]; durations?: number[][] };

  if (!response.ok) return json(data, response.status);

  return json({ distance: data.distances?.[0]?.[1], time: data.durations?.[0]?.[1] });
}
