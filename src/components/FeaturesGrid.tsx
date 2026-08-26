'use client';

import React from 'react';
import {
  Film,
  Sparkles,
  Heart,
  Search,
  Lock,
  FileText,
  Sliders,
  DollarSign,
  Zap,
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Film,
      title: 'Adaptive Multi-Bitrate HLS Streaming',
      desc: 'Seamless multi-bitrate delivery (4K, 1080p, 720p, 480p) dynamically adjusting to the viewer network conditions without buffering or frame drops.',
      accent: 'from-purple-500 to-indigo-500',
    },
    {
      icon: DollarSign,
      title: 'Equitable Creator Monetization',
      desc: 'Fair, transparent revenue splits and direct channel ownership. Zero hidden algorithmic cuts or unfair shadowbans.',
      accent: 'from-cyan-400 to-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Dedicated Creator Studio',
      desc: '1-Click channel creation, custom banners & avatars, drag-and-drop video upload, automatic HLS transcoding, and instant publishing.',
      accent: 'from-purple-600 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Real-Time Engagement Engine',
      desc: 'Atomic likes, nested comments with real-time updates, channel follows, and synchronized watch history across all devices.',
      accent: 'from-rose-500 to-pink-500',
    },
    {
      icon: Search,
      title: 'High-Speed Full-Text Search',
      desc: 'Instant search indexing across video titles, descriptions, categories, tags, and creator channel handles powered by PostgreSQL full-text search.',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      icon: Lock,
      title: 'Role-Based Governance & Security',
      desc: 'Multi-role JWT authentication (Admin, Creator, Viewer) with refresh tokens, Resend email verification, and central moderation tools.',
      accent: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-brand-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Engineered for High-Performance Video Delivery
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A production-ready stack combining NestJS, PostgreSQL, Prisma, Next.js, and Bunny.net HLS streaming.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl glass-panel hover:bg-brand-cardHover border border-white/10 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-lg bg-brand-surface/60"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} p-0.5 mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full bg-brand-bg rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
