'use client';

import React from 'react';
import { Sparkles, UploadCloud, TrendingUp, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';

interface OttCreatorSectionProps {
  onOpenWaitlist: () => void;
}

export const OttCreatorSection: React.FC<OttCreatorSectionProps> = ({ onOpenWaitlist }) => {
  const steps = [
    {
      step: '01',
      icon: Sparkles,
      title: 'Create Your Channel',
      desc: 'Claim your brand handle, customize banner, logo, and categories in seconds.',
    },
    {
      step: '02',
      icon: UploadCloud,
      title: 'Auto HLS Transcoding',
      desc: 'Upload 4K masters. Our cloud pipeline automatically generates multi-bitrate HLS streams.',
    },
    {
      step: '03',
      icon: DollarSign,
      title: 'Equitable Monetization',
      desc: '100% transparent metrics, zero algorithmic shadowbans, and direct audience engagement.',
    },
  ];

  return (
    <section id="creator-studio" className="py-20 relative bg-[#09090e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-[#17080a] via-[#10090c] to-[#07070b] border border-brand-red/30 shadow-2xl relative overflow-hidden">
          {/* Ambient red backlight */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FOR CREATORS & FILMMAKERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                Publish on EVO.{' '}
                <span className="text-brand-red block">Own Your Value.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Join the modern streaming ecosystem built for creators. Enjoy dedicated channel studios, automated 4K HLS transcoding pipelines, and equitable revenue distribution.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenWaitlist}
                  className="px-7 py-3.5 rounded-xl font-extrabold text-white bg-brand-red hover:bg-[#ff1e27] transition-all flex items-center gap-2.5 text-xs sm:text-sm shadow-neon-red cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join Creator Early Access</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: 3 Steps Cards */}
            <div className="lg:col-span-6 space-y-3.5">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 hover:border-brand-red/40 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0 text-brand-red font-extrabold text-sm shadow-[0_0_10px_rgba(229,9,20,0.2)]">
                      {item.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
