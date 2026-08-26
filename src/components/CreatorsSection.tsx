'use client';

import React from 'react';

const CREATOR_PERKS = [
  {
    id: 'cp1',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    text: 'Keep up to 85% of your subscription revenue',
  },
  {
    id: 'cp2',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    text: 'Built-in HLS encoder — upload any format',
  },
  {
    id: 'cp3',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    text: 'Analytics dashboard with viewer retention heatmaps',
  },
  {
    id: 'cp4',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    text: 'Weekly payouts to your bank or crypto wallet',
  },
  {
    id: 'cp5',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    text: 'Custom channel branding and subscriber perks',
  },
  {
    id: 'cp6',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    text: 'Priority support and EVO Creator Partner badge',
  },
];

const STEPS = [
  { num: '01', title: 'Create your channel', desc: 'Sign up in minutes. Customise your channel page, upload a banner, and write your bio.' },
  { num: '02', title: 'Upload & publish',    desc: 'Drop any video file. Our encoder handles conversion to adaptive HLS automatically.' },
  { num: '03', title: 'Grow & earn',         desc: 'Set subscription or pay-per-view pricing. Get paid weekly with transparent analytics.' },
];

export const CreatorsSection: React.FC = () => {
  return (
    <section id="creators" className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="section-label justify-center mb-4 block">For Creators</span>
          <h2 className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
            Your audience. <span className="text-brand-red">Your income.</span><br />
            Your platform.
          </h2>
          <p className="text-brand-muted text-base leading-relaxed">
            EVO gives independent creators the tools and the revenue share that big platforms won't.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Steps */}
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div key={s.num}
                className="flex gap-6 p-6 rounded-2xl bg-brand-surface border border-brand-border
                           hover:border-brand-red/40 transition-all duration-300 group">
                <span className="font-display font-black text-3xl text-brand-red/30
                  group-hover:text-brand-red transition-colors duration-300 leading-none flex-shrink-0 w-10">
                  {s.num}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}

            <a id="creator-apply" href="#" className="btn-primary mt-2 w-full sm:w-auto justify-center">
              Apply as a Creator
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"/>
              </svg>
            </a>
          </div>

          {/* Right — Perks list + revenue highlight */}
          <div>
            {/* Revenue card */}
            <div className="card p-7 mb-6 border-brand-red/30 bg-brand-red/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-red flex items-center justify-center flex-shrink-0 shadow-red">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-black text-3xl text-white">85%</p>
                  <p className="text-brand-muted text-sm">Revenue share for creators</p>
                </div>
              </div>
              <p className="text-brand-muted text-xs mt-4 leading-relaxed">
                Industry-leading split. No hidden fees. No algorithm suppression. Pure creator-first economics.
              </p>
            </div>

            {/* Perks list */}
            <div className="space-y-3">
              {CREATOR_PERKS.map((p) => (
                <div key={p.id} id={p.id} className="flex items-center gap-3">
                  <span className="text-brand-red flex-shrink-0">{p.icon}</span>
                  <p className="text-white text-sm">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
