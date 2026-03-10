/**
 * A stop along the route (bar, buffet, or event/sports venue)
 */
export interface Stop {
  /** Unique identifier used for anchor links */
  id: string;
  /** Display name of the stop */
  name: string;
  /** Short description of what the place is */
  description: string;
  /** Category of the stop */
  type: 'bar' | 'event';
  /** Street address or landmark description */
  address: string;
  /** Full iframe HTML string for the embedded Mapy.cz map — empty string shows placeholder */
  mapEmbedHtml: string;
}

/**
 * A bridge crossed during the route, with historical context
 */
export interface Bridge {
  /** Unique identifier used for anchor links */
  id: string;
  /** English display name */
  name: string;
  /** Slovak/local name */
  localName: string;
  /** Year the bridge opened */
  yearOpened: number;
  /** Total span length in meters */
  lengthM: number;
  /** Multi-sentence historical narrative */
  history: string;
  /** Array of short fact strings */
  facts: string[];
  /** Full iframe HTML string for the embedded Mapy.cz map — empty string shows placeholder */
  mapEmbedHtml: string;
}

/**
 * Top-level metadata for the entire ride
 */
export interface RideInfo {
  /** Display title of the ride */
  title: string;
  /** Short subtitle or tagline */
  subtitle: string;
  /** Prose description of the ride concept */
  description: string;
  /** Start and end address */
  startEndAddress: string;
  /** Total distance in kilometers */
  distanceKm: number;
  /** Estimated duration in hours */
  estimatedDurationH: number;
  /** Elevation gain in meters */
  ascentM: number;
  /** Full iframe HTML string for the complete route map — empty string shows placeholder */
  mapEmbedHtml: string;
}
