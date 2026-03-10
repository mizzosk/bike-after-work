import { Route } from 'lucide-react';
import { RIDE, STOPS, BRIDGES } from '@/constants';
import { getIframeSrc } from '@/utils/maps';

export const RouteMap: React.FC = () => {
  const mapSrc = getIframeSrc(RIDE.mapEmbedHtml);

  return (
    <section aria-labelledby="route-map-heading" className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-trail-100 flex items-center justify-center">
          <Route className="w-4 h-4 text-trail-700" />
        </div>
        <h2 id="route-map-heading" className="text-2xl font-serif font-bold text-stone-800">
          The Route
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mb-6 text-sm">
        <span className="inline-flex items-center gap-1.5 bg-trail-50 text-trail-700 border border-trail-200 rounded-full px-3 py-1">
          <span className="font-semibold">{RIDE.distanceKm} km</span> loop
        </span>
        <span className="inline-flex items-center gap-1.5 bg-stone-50 text-stone-600 border border-stone-200 rounded-full px-3 py-1">
          {STOPS.length} stops
        </span>
        <span className="inline-flex items-center gap-1.5 bg-stone-50 text-stone-600 border border-stone-200 rounded-full px-3 py-1">
          {BRIDGES.length} bridge crossings
        </span>
      </div>

      {mapSrc ? (
        <div className="w-full aspect-[4/3] md:aspect-[2/1] relative group rounded-2xl overflow-hidden shadow-sm border border-stone-100">
          <iframe
            src={mapSrc}
            className="absolute top-0 left-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            style={{ border: 'none' }}
            loading="lazy"
            title="Full route map: After-Work Danube Loop"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
          <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs text-stone-500 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Scroll to zoom
          </div>
        </div>
      ) : (
        <div className="w-full aspect-[4/3] md:aspect-[2/1] bg-stone-100 rounded-2xl border border-stone-200 border-dashed flex flex-col items-center justify-center gap-2">
          <Route className="w-8 h-8 text-stone-300" />
          <p className="text-stone-400 text-sm">
            Map coming soon — add Mapy.cz embed URL to{' '}
            <code className="text-stone-500 bg-stone-200 px-1 rounded">constants.ts</code>
          </p>
        </div>
      )}
    </section>
  );
};
