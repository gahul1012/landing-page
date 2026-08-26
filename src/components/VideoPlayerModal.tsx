'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Heart,
  MessageCircle,
  Share2,
  Radio,
  Sliders,
  Settings,
} from 'lucide-react';

interface VideoPlayerModalProps {
  movieTitle: string | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ movieTitle, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [selectedQuality, setSelectedQuality] = useState<'4K' | '1080p' | '720p'>('1080p');
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(48200);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.3));
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!movieTitle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-[#0a0a0f] border border-white/20 shadow-[0_0_60px_rgba(229,9,20,0.35)] flex flex-col">
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-black/70 border-b border-white/10 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-white truncate max-w-[240px] sm:max-w-md">
              EVO Player • {movieTitle}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-brand-red/20 text-brand-red text-[10px] font-mono font-bold border border-brand-red/30">
              HLS LIVE ADAPTIVE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-black via-slate-950 to-red-950/40 flex items-center justify-center overflow-hidden">
          {/* Ambient red backlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.2)_0%,transparent_70%)]" />

          {/* Large Center Play/Pause toggle */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="z-10 p-5 rounded-full bg-brand-red/90 text-white shadow-[0_0_30px_#E50914] hover:scale-110 transition-transform cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 fill-white" />
            ) : (
              <Play className="w-10 h-10 fill-white ml-1" />
            )}
          </div>

          {/* Video Status Overlay */}
          <div className="absolute bottom-20 left-6 z-10 space-y-1">
            <p className="text-sm font-bold text-white tracking-wide">
              {isPlaying ? 'Streaming via Adaptive HLS Engine' : 'Playback Paused'}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Current Bitrate: <span className="text-brand-red font-bold">{selectedQuality} 60FPS</span> • 0 Buffer Drops
            </p>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="p-4 bg-[#0a0a0f] border-t border-white/10 space-y-3">
          {/* Scrubber */}
          <div className="relative cursor-pointer group">
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-red shadow-[0_0_10px_#E50914] transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md"
              style={{ left: `calc(${progress}% - 7px)` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg text-white hover:bg-white/10"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-lg text-white hover:bg-white/10"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-brand-red" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-slate-400 font-mono text-[11px]">
                01:24:18 / 02:30:00
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Quality Switcher */}
              <div className="flex items-center rounded-lg bg-black/60 p-0.5 border border-white/10">
                {(['720p', '1080p', '4K'] as const).map((q) => (
                  <button
                    key={q}
                    onClick={() => setSelectedQuality(q)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                      selectedQuality === q
                        ? 'bg-brand-red text-white shadow-[0_0_8px_#E50914]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Like */}
              <button
                onClick={() => {
                  setLiked(!liked);
                  setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                  liked
                    ? 'bg-brand-red/20 text-brand-red border-brand-red/40'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:text-brand-red'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-brand-red' : ''}`} />
                <span className="font-bold text-[11px]">{likesCount.toLocaleString()}</span>
              </button>

              {/* Close / Done */}
              <button
                onClick={onClose}
                className="px-3.5 py-1 rounded-lg bg-brand-red text-white text-xs font-bold hover:bg-[#ff1e27] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
