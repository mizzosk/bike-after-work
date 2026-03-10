/**
 * Extracts the src URL from a raw iframe HTML string.
 * Returns undefined if the string is empty or contains no valid src attribute.
 *
 * Usage: store raw Mapy.cz <iframe> HTML in constants.ts, call this to get the URL for rendering.
 *
 * Example input:  '<iframe src="https://mapy.cz/..." width="700" ...></iframe>'
 * Example output: 'https://mapy.cz/...'
 */
export const getIframeSrc = (html: string): string | undefined => {
  if (!html) return undefined;
  const match = html.match(/src="([^"]+)"/);
  return match?.[1];
};
