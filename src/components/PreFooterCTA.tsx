'use client';

import React from 'react';
import { Sparkles, Smartphone, ArrowRight, Play } from 'lucide-react';

export const PreFooterCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-purple-500/30 shadow-2xl bg-gradient-to-r from-purple-900/90 via-indigo-950/90 to-brand-surface">
          {/* Ambient shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
              <Play className="w-3 h-3 fill-white" />
              <span>THE FUTURE OF VIDEO STREAMING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              Ready to Experience Equitable Visual Originals?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Join creators and mobile viewers on EVO. Zero hidden cuts, 4K/1080p adaptive HLS streaming, and dedicated channel ownership.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Join Creator Early Access</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#mobile-app"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-black/40 hover:bg-black/60 border border-white/20 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Preview Mobile App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
