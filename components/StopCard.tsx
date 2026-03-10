import { Beer, Trophy, MapPin, Map } from 'lucide-react';
import type { Stop } from '@/types';
import { getIframeSrc } from '@/utils/maps';

interface Props {
  stop: Stop;
  index: number;
}

export const StopCard: React.FC<Props> = ({ stop, index }) => {
  const mapSrc = getIframeSrc(stop.mapEmbedHtml);
  const StopIcon = stop.type === 'bar' ? Beer : Trophy;

  return (
    <article
      id={stop.id}
      className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden border-l-4 border-l-trail-500"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-trail-600 bg-trail-50 border border-trail-200 px-3 py-1 rounded-full mb-3">
              Stop {index}
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-trail-100 flex items-center justify-center flex-shrink-0">
                <StopIcon className="w-5 h-5 text-trail-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-800">{stop.name}</h2>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-1.5 text-stone-400 text-sm mb-4">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{stop.address}</span>
        </div>

        <p className="text-stone-600 leading-relaxed mb-6">{stop.description}</p>

        {mapSrc ? (
          <div className="w-full aspect-[4/3] md:aspect-[2/1] relative group rounded-xl overflow-hidden border border-stone-100">
            <iframe
              src={mapSrc}
              className="absolute top-0 left-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              style={{ border: 'none' }}
              loading="lazy"
              title={`Map of ${stop.name}`}
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs text-stone-500 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Scroll to zoom
            </div>
          </div>
        ) : (
          <div className="w-full aspect-[4/3] md:aspect-[2/1] bg-stone-50 rounded-xl border border-stone-200 border-dashed flex flex-col items-center justify-center gap-2">
            <Map className="w-6 h-6 text-stone-300" />
            <p className="text-stone-400 text-xs">
              Map coming soon — add Mapy.cz embed URL to{' '}
              <code className="text-stone-500 bg-stone-100 px-1 rounded">constants.ts</code>
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
