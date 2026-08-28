'use client';

import React from 'react';

const FEATURES = [
  {
    id: 'f1',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: '4K UHD Streaming',
    desc:  'Adaptive HLS bitrate streaming up to 4K at 60fps. Crystal-clear picture with Dolby Vision support on compatible devices.',
  },
  {
    id: 'f3',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Continue Anywhere',
    desc:  'Seamless cross-device sync. Start on your TV, continue on your phone. Your position, watchlist and settings follow you.',
  },
  {
    id: 'f5',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Secure & Private',
    desc:  'Bank-grade encryption on all streams. No data sold to third parties. GDPR-compliant with full account control.',
  },
  {
    id: 'f6',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Content',
    desc:  'Titles subtitled or dubbed in 40+ languages. Explore Korean dramas, Bollywood blockbusters, Hollywood originals, and more.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="section-label mb-3 block">Platform Features</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-black text-slate-900 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Everything you need,<br />
              <span className="text-[#E31B23]">built right in.</span>
            </h2>
            <p className="text-slate-600 text-base max-w-xs md:text-right leading-relaxed">
              Stream effortlessly across every device, every creator, and every mood.
            </p>
          </div>
        </div>

        {/* Feature Grid (4 cards in responsive grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div id={f.id} key={f.id} className="card p-8 group hover:-translate-y-1 transition-all duration-300">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100
                flex items-center justify-center text-[#E31B23] mb-6
                group-hover:bg-[#E31B23] group-hover:border-[#E31B23] group-hover:text-white
                transition-all duration-300 shadow-sm">
                {f.icon}
              </div>
              {/* Text */}
              <h3 className="text-slate-900 font-bold text-lg mb-2.5">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
