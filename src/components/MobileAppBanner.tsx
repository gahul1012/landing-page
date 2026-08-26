'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  QrCode,
  CheckCircle2,
  Apple,
  Play,
  Share2,
} from 'lucide-react';

export const MobileAppBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="mobile-app" className="py-24 relative overflow-hidden bg-brand-surface/60 border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel-glow p-8 sm:p-12 lg:p-16 border border-purple-500/30 shadow-2xl bg-brand-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <Smartphone className="w-4 h-4" />
                <span>NATIVE REACT NATIVE MOBILE APP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                Stream EVO on <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">iOS & Android</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Take your favorite channels everywhere. Enjoy smooth 1080p HLS adaptive streaming, full-screen theater mode, instant commenting, and synchronized watch history.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Adaptive HLS Multi-Bitrate Streaming</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Playback Speed (0.5x – 2.0x)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Watch History & Saved Originals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero Ads at Launch</span>
                </div>
              </div>

              {/* Store Buttons & QR Code */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                {/* Apple App Store */}
                <button
                  onClick={handleCopyLink}
                  className="px-5 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all flex items-center gap-3 text-xs shadow-lg"
                >
                  <Apple className="w-5 h-5 fill-current" />
                  <div className="text-left">
                    <span className="block text-[9px] font-normal leading-tight">Pre-Order on the</span>
                    <span className="text-xs font-bold leading-tight">App Store</span>
                  </div>
                </button>

                {/* Google Play Store */}
                <button
                  onClick={handleCopyLink}
                  className="px-5 py-3 rounded-xl bg-brand-surface border border-white/20 text-white font-bold hover:bg-brand-card transition-all flex items-center gap-3 text-xs shadow-lg"
                >
                  <Play className="w-5 h-5 fill-current text-cyan-400" />
                  <div className="text-left">
                    <span className="block text-[9px] text-slate-400 font-normal leading-tight">PRE-REGISTER ON</span>
                    <span className="text-xs font-bold leading-tight">Google Play</span>
                  </div>
                </button>

                {copied && (
                  <span className="text-xs font-semibold text-emerald-400 animate-pulse flex items-center gap-1">
                    ✓ Link copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: QR Code Card */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6">
              {/* QR Code Container */}
              <div className="p-6 rounded-2xl bg-brand-surface/90 border border-white/15 text-center shadow-2xl flex flex-col items-center gap-3">
                <div className="w-40 h-40 rounded-2xl bg-white p-3 flex items-center justify-center shadow-md">
                  {/* Decorative QR code pattern */}
                  <div className="w-full h-full border-4 border-slate-950 rounded-lg flex flex-col justify-between p-1.5">
                    <div className="flex justify-between">
                      <div className="w-7 h-7 bg-slate-950 rounded-sm" />
                      <div className="w-7 h-7 bg-slate-950 rounded-sm" />
                    </div>
                    <div className="flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-purple-600" />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-7 h-7 bg-slate-950 rounded-sm" />
                      <div className="w-3.5 h-3.5 bg-cyan-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white">Scan with mobile camera</p>
                  <p className="text-[11px] text-slate-400">Instantly preview EVO on iOS & Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
