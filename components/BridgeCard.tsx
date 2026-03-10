import { Calendar, Ruler, Landmark, Map } from 'lucide-react';
import type { Bridge } from '@/types';
import { getIframeSrc } from '@/utils/maps';

interface Props {
  bridge: Bridge;
  crossingOrder: number;
}

const CROSSING_LABELS: Record<number, string> = {
  1: 'First Crossing',
  2: 'Second Crossing',
  3: 'Third Crossing',
};

export const BridgeCard: React.FC<Props> = ({ bridge, crossingOrder }) => {
  const mapSrc = getIframeSrc(bridge.mapEmbedHtml);
  const crossingLabel = CROSSING_LABELS[crossingOrder] ?? `Crossing ${crossingOrder}`;

  return (
    <article
      id={bridge.id}
      className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-stone-500 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full mb-4">
          {crossingLabel}
        </span>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-trail-100 flex items-center justify-center flex-shrink-0">
              <Landmark className="w-5 h-5 text-trail-700" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-800">{bridge.name}</h2>
              <p className="text-stone-400 text-sm italic">{bridge.localName}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-4 py-2.5 border border-stone-100">
              <Calendar className="w-4 h-4 text-stone-400" />
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">Opened</div>
                <div className="text-sm font-semibold text-stone-700">{bridge.yearOpened}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-4 py-2.5 border border-stone-100">
              <Ruler className="w-4 h-4 text-stone-400" />
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">Length</div>
                <div className="text-sm font-semibold text-stone-700">{bridge.lengthM} m</div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-stone-100 mb-6" />

        {/* History + Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-3">
              History
            </h3>
            <p className="text-stone-600 leading-relaxed font-serif text-sm">{bridge.history}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-3">
              Facts
            </h3>
            <ul className="space-y-2">
              {bridge.facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-trail-500 mt-0.5 flex-shrink-0">•</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map */}
        {mapSrc ? (
          <div className="w-full aspect-[4/3] md:aspect-[2/1] relative group rounded-xl overflow-hidden border border-stone-100">
            <iframe
              src={mapSrc}
              className="absolute top-0 left-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              style={{ border: 'none' }}
              loading="lazy"
              title={`Map of ${bridge.name}`}
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
