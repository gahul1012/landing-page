'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';

const CREATOR_PERKS = [
  'Keep up to 85% of your subscription and pay-per-view revenue',
  'Built-in automated HLS encoder — upload 4K, 1080p, and any video format',
  'Real-time analytics dashboard with viewer retention and revenue metrics',
  'Weekly direct payouts to your bank account or payment provider',
  'Custom channel branding with banner, logo, social links, and bio',
  'Priority creator support and verified EVO Partner badge',
];

const STEPS = [
  { num: '01', title: 'Create your channel', desc: 'Sign up in minutes. Customise your dedicated channel page, upload your branding banner and logo.' },
  { num: '02', title: 'Upload & publish',    desc: 'Drag & drop any video file. Our cloud encoder handles multi-bitrate HLS conversion automatically.' },
  { num: '03', title: 'Monetize & grow',      desc: 'Set subscription or pay-per-view access. Track live watch time, followers, and receive weekly payouts.' },
];

export const CreatorsSection: React.FC = () => {
  return (
    <section id="creators" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="section-label justify-center mb-3 block">For Content Creators</span>
          <h2 className="font-display font-black text-slate-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
            Your audience. <span className="text-[#E31B23]">Your income.</span><br />
            Your creative freedom.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            EVO gives independent filmmakers and creators the studio tools, transcoding pipeline, and equitable revenue share that legacy platforms hold back.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — Steps */}
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 group"
              >
                <span className="font-display font-black text-2xl text-red-500/30 group-hover:text-[#E31B23] transition-colors duration-300 leading-none flex-shrink-0 w-8">
                  {s.num}
                </span>
                <div>
                  <h3 className="text-slate-900 font-bold text-base mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <a
                id="creator-apply"
                href="#hero"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full"
              >
                <span>Launch Creator Studio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Perks list + revenue highlight */}
          <div>
            {/* Revenue card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-200/80 shadow-sm mb-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#E31B23] flex items-center justify-center flex-shrink-0 text-white shadow-[0_4px_20px_rgba(227,27,35,0.35)]">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-display font-black text-4xl text-slate-900 leading-none">85%</p>
                  <p className="text-slate-700 font-bold text-sm mt-1">Creator Revenue Share</p>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed">
                Industry-leading payout ratio. Zero hidden transcoding fees, zero algorithmic suppression. Pure creator-first economics.
              </p>
            </div>

            {/* Perks list */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3.5">
              {CREATOR_PERKS.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E31B23] flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
