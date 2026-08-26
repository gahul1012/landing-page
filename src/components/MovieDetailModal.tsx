'use client';

import React from 'react';
import { X, Play, Plus, Star, Check, Film, Tv, Shield } from 'lucide-react';

interface MovieDetailModalProps {
  movieTitle: string | null;
  onClose: () => void;
  onPlay: (title: string) => void;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({
  movieTitle,
  onClose,
  onPlay,
}) => {
  if (!movieTitle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-[#0c0c12] border border-white/20 shadow-[0_0_50px_rgba(229,9,20,0.3)] flex flex-col max-h-[90vh]">
        {/* Banner with close button */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&auto=format&fit=crop&q=80"
            alt={movieTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-[#0c0c12]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-brand-red transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Play CTA on Banner */}
          <div className="absolute bottom-6 left-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white drop-shadow-lg">
              {movieTitle}
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onPlay(movieTitle);
                }}
                className="px-6 py-2.5 rounded-xl font-extrabold text-white bg-brand-red hover:bg-[#ff1e27] transition-all flex items-center gap-2 text-xs sm:text-sm shadow-neon-red cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Play Stream</span>
              </button>
              <span className="px-2.5 py-1 rounded bg-white/20 text-[11px] font-bold text-white">
                4K Ultra HD
              </span>
              <span className="px-2 py-0.5 rounded border border-brand-red/40 text-brand-red text-[11px] font-bold">
                18+
              </span>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-300 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-white/10 text-xs">
            <div>
              <span className="text-slate-500 block">Release Year:</span>
              <span className="font-bold text-white">2026 Original</span>
            </div>
            <div>
              <span className="text-slate-500 block">Streaming Engine:</span>
              <span className="font-bold text-brand-red">Multi-Bitrate HLS</span>
            </div>
            <div>
              <span className="text-slate-500 block">Audio:</span>
              <span className="font-bold text-white">Dolby Atmos 5.1</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white">Synopsis</h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Experience the pinnacle of visual storytelling on EVO. Transcoded directly with high-efficiency edge distribution, this original title delivers immersive action, zero buffering, and ultra-high dynamic range streaming across mobile and smart screens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
