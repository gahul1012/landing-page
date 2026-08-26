'use client';

import React from 'react';
import { Play, Sparkles, Crown, ArrowRight } from 'lucide-react';

interface ContinueItem {
  id: string;
  title: string;
  image: string;
  timeLeft: string;
  progressPercent: number;
}

interface ContinueWatchingRowProps {
  onPlay: (movieTitle: string) => void;
  onSubscribe: () => void;
}

export const ContinueWatchingRow: React.FC<ContinueWatchingRowProps> = ({
  onPlay,
  onSubscribe,
}) => {
  const items: ContinueItem[] = [
    {
      id: 'batman',
      title: 'The Batman',
      image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80',
      timeLeft: '1h 32m left',
      progressPercent: 72,
    },
    {
      id: 'interstellar',
      title: 'Interstellar',
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80',
      timeLeft: '48m left',
      progressPercent: 46,
    },
    {
      id: 'night-agent',
      title: 'The Night Agent',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
      timeLeft: '2 Episodes left',
      progressPercent: 28,
    },
  ];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Continue Watching Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-brand-red rounded-full shadow-[0_0_10px_#E50914]" />
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                Continue Watching
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onPlay(item.title)}
                  className="group relative rounded-2xl overflow-hidden bg-[#0e0e14] border border-white/10 hover:border-brand-red/50 transition-all cursor-pointer shadow-lg hover:-translate-y-1"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-brand-red group-hover:border-transparent group-hover:scale-110 transition-all shadow-xl">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Progress Bar at Bottom of Thumbnail */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20">
                      <div
                        className="h-full bg-brand-red shadow-[0_0_8px_#E50914]"
                        style={{ width: `${item.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Title & Time Left */}
                  <div className="p-3 space-y-0.5">
                    <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-brand-red transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">{item.timeLeft}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Subscription CTA Box (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1b080b] via-[#12080a] to-[#0a0a0f] border border-brand-red/30 shadow-[0_0_35px_rgba(229,9,20,0.15)] flex flex-col justify-between relative overflow-hidden group">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/15 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-extrabold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5" />
                  <span>EVO Premium Access</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                  Unlimited Entertainment.{' '}
                  <span className="text-brand-red block">One Subscription.</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Watch on any device. Cancel anytime. Stream 4K HLS with zero ads and offline downloads.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <button
                  onClick={onSubscribe}
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-white bg-brand-red hover:bg-[#ff1e27] transition-all flex items-center justify-center gap-2.5 text-xs sm:text-sm shadow-[0_0_25px_rgba(229,9,20,0.5)] hover:shadow-[0_0_35px_rgba(229,9,20,0.8)] cursor-pointer active:scale-95"
                >
                  <Crown className="w-4 h-4 fill-white" />
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
