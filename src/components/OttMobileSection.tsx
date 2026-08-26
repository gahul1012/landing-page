'use client';

import React, { useState } from 'react';
import { Smartphone, Apple, Play, QrCode, CheckCircle2 } from 'lucide-react';

export const OttMobileSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="mobile-app" className="py-20 relative bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#0c0c12] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase">
                <Smartphone className="w-3.5 h-3.5" />
                <span>NATIVE REACT NATIVE APPS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                Stream on <span className="text-brand-red">iOS & Android</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Enjoy theater mode, download for offline viewing, customized watch history, and lightning-fast social reactions on the go.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleCopyLink}
                  className="px-5 py-3 rounded-xl bg-white text-black font-extrabold hover:bg-slate-200 transition-all flex items-center gap-3 text-xs shadow-lg cursor-pointer"
                >
                  <Apple className="w-5 h-5 fill-current" />
                  <div className="text-left">
                    <span className="block text-[9px] font-normal leading-tight">Download on</span>
                    <span className="text-xs font-bold leading-tight">App Store</span>
                  </div>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-5 py-3 rounded-xl bg-[#181822] border border-white/20 text-white font-extrabold hover:bg-[#20202e] transition-all flex items-center gap-3 text-xs shadow-lg cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-brand-red text-brand-red" />
                  <div className="text-left">
                    <span className="block text-[9px] text-slate-400 font-normal leading-tight">GET IT ON</span>
                    <span className="text-xs font-bold leading-tight">Google Play</span>
                  </div>
                </button>

                {copied && (
                  <span className="text-xs font-bold text-emerald-400 animate-pulse">
                    ✓ Link copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: QR Code */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-2xl bg-[#12121a] border border-brand-red/30 text-center shadow-2xl flex flex-col items-center gap-3">
                <div className="w-36 h-36 rounded-xl bg-white p-2.5 flex items-center justify-center">
                  <div className="w-full h-full border-4 border-black rounded-lg flex flex-col justify-between p-1">
                    <div className="flex justify-between">
                      <div className="w-6 h-6 bg-black rounded-sm" />
                      <div className="w-6 h-6 bg-black rounded-sm" />
                    </div>
                    <div className="flex items-center justify-center">
                      <QrCode className="w-10 h-10 text-brand-red" />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-6 h-6 bg-black rounded-sm" />
                      <div className="w-3 h-3 bg-brand-red rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-white">Scan with Camera</p>
                  <p className="text-[11px] text-slate-400">Instantly launch on mobile device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
