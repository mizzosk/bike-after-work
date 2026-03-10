import type { RideInfo, Stop, Bridge } from './types';

export const RIDE: RideInfo = {
  title: 'After-Work Danube Loop',
  subtitle: 'Bratislava — Evening Ride',
  description:
    'A 14.3 km loop departing from IBM headquarters, following the Danube riverside cycle path west to the Mark Twain bar, then crossing the Lafranconi Bridge to the quieter south bank. The return leg passes Tyršák events venue and swings back over the Apollo Bridge to base. Flat, fast, and best done with colleagues.',
  startEndAddress: 'Prievozská 2, 821 09 Bratislava (IBM Slovakia HQ)',
  distanceKm: 14.3,
  estimatedDurationH: 1.0,
  ascentM: 30,
  // Add Mapy.cz embed HTML here: go to mapy.cz → Share → Embed map → copy <iframe> HTML
  mapEmbedHtml: '<iframe style="border:none" src="https://mapy.com/s/pehabupefo" width="700" height="466" frameborder="0"></iframe>',
};

export const STOPS: Stop[] = [
  {
    id: 'mark-twain',
    name: 'Mark Twain',
    description:
      'A laid-back bar and buffet sitting directly on the Danube bank — the perfect mid-ride stop for a cold drink before the Lafranconi crossing. Named after the American author who passed through Bratislava on his 1867 European journey, documented in "The Innocents Abroad".',
    type: 'bar',
    address: 'Nábrežie armádneho generála Ludvíka Svobodu, Bratislava',
    imageUrl: `${import.meta.env.BASE_URL}mark_twain.png`,
  },
  {
    id: 'tyrsak',
    name: 'Tyršák',
    description:
      'A multi-purpose sports and events venue on the southern Danube bank, used for outdoor gatherings, sport events, and community activities. Marks the turnaround point on the far bank before the Apollo Bridge return crossing.',
    type: 'event',
    address: 'Tyršovo nábrežie, Bratislava',
    imageUrl: `${import.meta.env.BASE_URL}tyrsak.png`,
  },
];

export const BRIDGES: Bridge[] = [
  {
    id: 'lafranconi',
    name: 'Lafranconi Bridge',
    localName: 'Most Lafranconi',
    yearOpened: 1985,
    lengthM: 456,
    history:
      'Built during the communist era and opened in 1985, Lafranconi Bridge was a major infrastructure project connecting the city centre with the Petržalka district on the south bank. It is named in honour of Enrico Lafranconi (1837–1896), an Italian-born hydraulic engineer who settled in Bratislava and spent decades working on Danube flood regulation and waterway improvements that protected the city. The naming was a rare Cold War-era acknowledgement of a foreign technical expert whose work shaped the city. The bridge carries four lanes of road traffic and features a dedicated separated lane for cyclists and pedestrians — making it the natural outbound crossing for this route.',
    facts: [
      'Opened: 1985',
      'Total length: 456 m',
      'Dedicated cycling and pedestrian lane on the downstream side',
      'Named after Italian engineer Enrico Lafranconi (1837–1896)',
      'Lafranconi spent decades improving Danube flood defences around Bratislava',
    ],
    // Photo: Wikimedia Commons, CC BY-SA
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Most_lafranconi.jpg',
  },
  {
    id: 'apollo',
    name: 'Apollo Bridge',
    localName: 'Most Apollo',
    yearOpened: 2005,
    lengthM: 851,
    history:
      "The Apollo Bridge opened in 2005 as a modern landmark reshaping Bratislava's riverside skyline. Its cable-stayed form — with a single asymmetric pylon — was designed by the Slovak engineering firm Doprastav. It is named after the Apollo oil refinery that once stood nearby on the south bank, which became infamous during World War II: on 16 June 1944, Allied bombers targeted the facility, then a key supplier of refined fuel for German forces, in one of the largest air raids on the city. Today the bridge carries tram line 4 alongside vehicle traffic, forming a vital east–west crossing and the return leg of this route.",
    facts: [
      'Opened: 2005',
      'Total length: 851 m',
      'Cable-stayed bridge with a single asymmetric pylon',
      'Carries tram line 4 and motor vehicle traffic',
      'Named after the nearby Apollo oil refinery, bombed by Allied forces on 16 June 1944',
      'Designed by Slovak engineering firm Doprastav',
    ],
    // Photo: Wikimedia Commons, CC BY-SA
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Most_Apollo_Bratislava.jpg',
  },
];
