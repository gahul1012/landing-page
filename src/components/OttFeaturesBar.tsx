'use client';

import React from 'react';
import { Tv, Download, Smartphone, ShieldCheck } from 'lucide-react';

export const OttFeaturesBar: React.FC = () => {
  const features = [
    {
      icon: Tv,
      title: 'HD Streaming',
      desc: 'Crystal clear quality up to 4K Ultra HD',
    },
    {
      icon: Download,
      title: 'Download & Watch',
      desc: 'Save and watch offline anytime, anywhere',
    },
    {
      icon: Smartphone,
      title: 'Watch Everywhere',
      desc: 'Stream on your phone, tablet, laptop or TV',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Secure',
      desc: 'Your data is protected with advanced security',
    },
  ];

  return (
    <section className="py-10 relative z-10 border-t border-white/10 bg-[#07070b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e0e14] border border-white/5 hover:border-brand-red/40 transition-all duration-300 group"
              >
                {/* Red Glowing Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(229,9,20,0.15)] group-hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]">
                  <Icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-red transition-colors truncate">
                    {f.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
