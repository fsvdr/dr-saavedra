/** Uppercase the first character of a string (mirrors the old `capitalize` util). */
export const capitalize = (text: string): string => text.replace(/^\w/, (c) => c.toUpperCase());

const dateFormatter = new Intl.DateTimeFormat('es-MX', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Mexico_City',
});

/** Format an ISO date as e.g. "Enero 5, 2024" in Spanish. */
export const formatDate = (isoDate: string): string => {
  const parts = dateFormatter.formatToParts(new Date(isoDate));
  const month = capitalize(parts.find((p) => p.type === 'month')?.value ?? '');
  const day = parts.find((p) => p.type === 'day')?.value ?? '';
  const year = parts.find((p) => p.type === 'year')?.value ?? '';
  return `${month} ${day}, ${year}`;
};

/** Estimated reading time in whole minutes (~200 wpm), minimum 1. */
export const readingTime = (text: string): number => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};
