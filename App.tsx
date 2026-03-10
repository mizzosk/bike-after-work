import React from 'react';
import { Hero } from '@/components/Hero';
import { RouteMap } from '@/components/RouteMap';
import { StopCard } from '@/components/StopCard';
import { BridgeCard } from '@/components/BridgeCard';
import { STOPS, BRIDGES } from '@/constants';

const App: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-trail-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-stone-50">
        <Hero />

        <main id="main-content" className="container mx-auto px-4 py-12 max-w-5xl">
          <RouteMap />

          {/* Stops */}
          <section aria-labelledby="stops-heading" className="mb-20">
            <h2
              id="stops-heading"
              className="text-3xl font-serif font-bold text-stone-800 mb-2"
            >
              Stops Along the Way
            </h2>
            <p className="text-stone-500 mb-8">Two places to rest, refuel, and take it all in.</p>
            <div className="space-y-8">
              {STOPS.map((stop, i) => (
                <StopCard key={stop.id} stop={stop} index={i + 1} />
              ))}
            </div>
          </section>

          {/* Bridges */}
          <section aria-labelledby="bridges-heading">
            <h2
              id="bridges-heading"
              className="text-3xl font-serif font-bold text-stone-800 mb-2"
            >
              Bridges You'll Cross
            </h2>
            <p className="text-stone-500 mb-8">
              Two very different spans — one built under communism, one defining the modern city.
            </p>
            <div className="space-y-8">
              {BRIDGES.map((bridge, i) => (
                <BridgeCard key={bridge.id} bridge={bridge} crossingOrder={i + 1} />
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-20 border-t border-stone-200 bg-white py-10 text-center text-stone-400 text-sm">
          <p className="font-medium text-stone-500">After-Work Danube Loop · Bratislava</p>
          <p className="mt-1 text-xs opacity-70">Map data © Mapy.cz</p>
        </footer>
      </div>
    </>
  );
};

export default App;
