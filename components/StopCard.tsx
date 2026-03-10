import { Beer, Trophy, MapPin, Image as ImageIcon } from 'lucide-react';
import type { Stop } from '@/types';

interface Props {
  stop: Stop;
  index: number;
}

export const StopCard: React.FC<Props> = ({ stop, index }) => {
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

        {stop.imageUrl ? (
          <img
            src={stop.imageUrl}
            alt={stop.name}
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
