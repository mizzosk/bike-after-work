import { Calendar, Ruler, Landmark, Image as ImageIcon } from 'lucide-react';
import type { Bridge } from '@/types';

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

        {/* Photo */}
        {bridge.imageUrl ? (
          <img
            src={bridge.imageUrl}
            alt={bridge.name}
            className="w-full aspect-[4/3] md:aspect-[2/1] object-cover rounded-xl"
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-[4/3] md:aspect-[2/1] bg-stone-100 rounded-xl border border-stone-200 border-dashed flex flex-col items-center justify-center gap-2">
            <ImageIcon className="w-6 h-6 text-stone-300" />
            <p className="text-stone-400 text-xs">
              Add photo URL to{' '}
              <code className="text-stone-500 bg-stone-200 px-1 rounded">constants.ts</code>
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
