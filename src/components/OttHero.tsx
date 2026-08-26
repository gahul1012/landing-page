'use client';

import React from 'react';
import { Play, Info, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface OttHeroProps {
  onPlay: (movieTitle: string) => void;
  onMoreInfo: (movieTitle: string) => void;
}

export const OttHero: React.FC<OttHeroProps> = ({ onPlay, onMoreInfo }) => {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[700px] flex items-center pt-24 pb-12 overflow-hidden rounded-b-3xl">
      {/* Cinematic Hero Backdrop Image with Red Atmospheric Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&auto=format&fit=crop&q=80"
          alt="Beyond Entertainment Key Art"
          className="w-full h-full object-cover object-right md:object-center opacity-85 scale-105"
        />

        {/* Deep Dark Red Atmospheric Color Grading & Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/30 via-transparent to-black/60 mix-blend-color-burn" />

        {/* Left & Bottom Gradient Fades for Seamless Dark Integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/80 to-transparent w-full md:w-3/4" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050507] via-[#050507]/85 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050507]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Trending Location Badge */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-brand-red tracking-wide drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
            <span>#1 in Pakistan Today</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            Beyond Entertainment.{' '}
            <span className="text-brand-red block sm:inline drop-shadow-[0_0_25px_rgba(229,9,20,0.7)]">
              Stream Beyond.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
            Discover unlimited movies, TV shows and originals.{' '}
            <span className="text-white font-medium">High quality streaming, anytime, anywhere.</span>
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex items-center gap-4 flex-wrap">
            {/* Play Now Button */}
            <button
              onClick={() => onPlay('Beyond Entertainment: Originals')}
              className="px-8 py-3.5 rounded-xl font-extrabold text-white bg-brand-red hover:bg-[#ff1e27] transition-all flex items-center gap-2.5 text-sm shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_rgba(229,9,20,0.85)] hover:scale-105 cursor-pointer active:scale-95"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Play Now</span>
            </button>

            {/* More Info Button */}
            <button
              onClick={() => onMoreInfo('Beyond Entertainment: Originals')}
              className="px-7 py-3.5 rounded-xl font-bold text-white bg-black/50 hover:bg-white/15 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all flex items-center gap-2.5 text-sm cursor-pointer active:scale-95"
            >
              <Info className="w-5 h-5 text-slate-200" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
