import { Map, Timer, Mountain, MapPin } from 'lucide-react';
import { RIDE } from '@/constants';

export const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-trail-800 via-trail-700 to-trail-600 text-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-trail-200 bg-trail-900/40 px-3 py-1 rounded-full">
            Evening Ride · Bratislava
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3 leading-tight">
          {RIDE.title}
        </h1>

        <p className="text-trail-100 text-lg font-light mb-6 italic">{RIDE.subtitle}</p>

        <p className="text-trail-50/90 text-base leading-relaxed max-w-2xl mb-8">
          {RIDE.description}
        </p>

        <div className="flex items-center gap-2 text-trail-200 text-sm mb-10">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{RIDE.startEndAddress}</span>
        </div>

        <dl className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
            <Map className="w-5 h-5 text-trail-200" />
            <div>
              <dt className="text-xs text-trail-200 uppercase tracking-wider">Distance</dt>
              <dd className="text-xl font-semibold">{RIDE.distanceKm} km</dd>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
            <Timer className="w-5 h-5 text-trail-200" />
            <div>
              <dt className="text-xs text-trail-200 uppercase tracking-wider">Est. Time</dt>
              <dd className="text-xl font-semibold">~{RIDE.estimatedDurationH} hr</dd>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
            <Mountain className="w-5 h-5 text-trail-200" />
            <div>
              <dt className="text-xs text-trail-200 uppercase tracking-wider">Elevation</dt>
              <dd className="text-xl font-semibold">{RIDE.ascentM} m</dd>
            </div>
          </div>
        </dl>
      </div>
    </header>
  );
};
