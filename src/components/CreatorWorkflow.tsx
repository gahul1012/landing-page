'use client';

import React from 'react';
import { UserPlus, UploadCloud, TrendingUp, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export const CreatorWorkflow: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: UserPlus,
      title: 'Launch Your EVO Channel',
      desc: 'Claim your unique creator handle, upload customized banners and avatars, select your niche category, and link your social profiles.',
      accent: 'from-purple-500 to-indigo-500',
    },
    {
      step: '02',
      icon: UploadCloud,
      title: 'Upload & Auto-Transcode',
      desc: 'Drag and drop your 4K/HD video master. Our pipeline automatically transcodes your video into adaptive HLS streams (1080p, 720p, 480p).',
      accent: 'from-cyan-400 to-blue-500',
    },
    {
      step: '03',
      icon: TrendingUp,
      title: 'Publish & Earn Equitably',
      desc: 'Publish immediately or schedule drafts. Reach thousands of mobile viewers, receive live comments and likes, and monitor views and watch time.',
      accent: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="creator-studio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREATOR ONBOARDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Start Your EVO Creator Journey in 3 Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            From registration to streaming across iOS and Android devices worldwide.
          </p>
        </div>

        {/* 3 Steps Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-brand-card/70 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2 shadow-xl"
              >
                {/* Step Number Watermark */}
                <div className="absolute top-4 right-6 font-display font-black text-4xl text-white/5 group-hover:text-purple-500/20 transition-colors">
                  {item.step}
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} p-0.5 mb-6 shadow-neon-purple`}
                >
                  <div className="w-full h-full bg-brand-bg rounded-[14px] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-extrabold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Step {item.step} Automated</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-95 shadow-neon-purple transition-all text-sm group"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join EVO Creator Early Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
