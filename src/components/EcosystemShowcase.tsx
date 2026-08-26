'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Sparkles,
  Shield,
  Check,
  Film,
  TrendingUp,
  Layers,
  Heart,
  MessageSquare,
  ArrowRight,
  UploadCloud,
  CheckCircle,
  Eye,
  Sliders,
} from 'lucide-react';

export const EcosystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'creator' | 'admin'>('mobile');

  const pillars = {
    mobile: {
      title: 'Mobile Application for Viewers',
      badge: 'iOS & Android (React Native)',
      headline: 'Watch, Discover & Engage on the Go',
      desc: 'Engineered for smooth video playback, personalized watch history, saved offline-ready libraries, and lightning-fast social interactions without ads or clutter.',
      features: [
        'Adaptive HLS Streaming (4K, 1080p, 720p, 480p)',
        'Personalized Trending & Latest Category feeds',
        'Interactive Video Scrubber & Playback Speed (0.5x – 2.0x)',
        'Full-screen Landscape Theater Mode',
        'Instant Likes, Comments Drawer & Channel Follows',
        'Watch History & Saved Videos Library',
      ],
      ctaText: 'Explore Mobile Features',
      ctaHref: '#mobile-app',
      mockupType: 'mobile',
    },
    creator: {
      title: 'Creator Portal & Studio',
      badge: 'Next.js + TypeScript Studio',
      headline: 'The Equitable Studio for Next-Gen Creators',
      desc: 'Build your brand with a dedicated channel, upload 4K/HD videos with automated HLS transcoding, manage drafts, and track transparent real-time audience metrics.',
      features: [
        'Single Channel Setup with Custom Banner & Logo',
        'Drag-and-Drop Video Uploader with Live Progress',
        'Automated Multi-Quality HLS Transcoding Pipeline',
        'Custom Thumbnail, Tags & Category Taxonomy',
        'Draft vs Instant Publish Workflow',
        'Real-time Dashboard: Views, Followers & Watch Time',
      ],
      ctaText: 'Launch Creator Studio',
      ctaHref: '#creator-studio',
      mockupType: 'creator',
    },
    admin: {
      title: 'Admin Moderation & Governance Panel',
      badge: 'Secure Governance Suite',
      headline: 'Platform Oversight, Security & Safety',
      desc: 'Complete administrative control over user accounts, creators, channels, videos, category taxonomies, and live markdown policy management.',
      features: [
        'Platform KPI Dashboard: Total Users, Creators, Videos & Views',
        'User & Creator Management: Search, Inspect, Suspend & Delete',
        'Channel Moderation & Violations Enforcement',
        'Video Management: Playback preview, Hide, or Delete',
        'Category CRUD: Create, Edit & Reorder categories',
        'Live Markdown Editor for Guidelines, Terms & Privacy',
      ],
      ctaText: 'View Admin Capabilities',
      ctaHref: '#features',
      mockupType: 'admin',
    },
  };

  const current = pillars[activeTab];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-brand-bg/50">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>3-PILLAR EVO PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Tailored Experiences for Every Role
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A cohesive architecture seamlessly connecting viewers, creators, and platform moderators in one unified system.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-brand-surface border border-white/10 flex flex-wrap gap-2 shadow-2xl">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white shadow-neon-purple'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile App (Viewers)</span>
            </button>

            <button
              onClick={() => setActiveTab('creator')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'creator'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-neon-cyan'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Creator Studio (Portal)</span>
            </button>

            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'admin'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-neon-purple'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Admin & Moderation</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-glass-card bg-brand-surface/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono">
                {current.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug">
                {current.headline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">{current.desc}</p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-purple-400" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className="pt-4">
                <a
                  href={current.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 transition-all text-xs shadow-lg group"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Custom Visual Mockups */}
            <div className="lg:col-span-6">
              {activeTab === 'mobile' && (
                <div className="relative mx-auto max-w-xs sm:max-w-sm rounded-[36px] p-4 bg-slate-950 border-4 border-slate-800 shadow-2xl">
                  {/* Phone Notch */}
                  <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-3" />

                  {/* Simulated App Feed */}
                  <div className="space-y-3.5">
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-1 border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center text-[9px] font-bold text-white">
                          E
                        </div>
                        <span className="text-xs font-bold text-white tracking-wider">EVO</span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono">1080p HLS</span>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-1 text-[10px]">
                      <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold">
                        All
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                        Originals
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">Tech</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">Gaming</span>
                    </div>

                    {/* Video Card in App */}
                    <div className="rounded-2xl overflow-hidden bg-brand-surface border border-white/10">
                      <div className="relative aspect-video bg-gradient-to-tr from-slate-900 via-indigo-950 to-purple-950 flex items-center justify-center">
                        <Film className="w-8 h-8 text-purple-400/80" />
                        <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-white">
                          12:40
                        </span>
                      </div>
                      <div className="p-3 flex gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                          EV
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-white truncate">
                            Equitable Visual Originals — Film Showcase
                          </p>
                          <p className="text-[10px] text-slate-400">EVO Creator • 120K views</p>
                        </div>
                      </div>
                    </div>

                    {/* Mini Bottom Nav Bar */}
                    <div className="pt-2 border-t border-white/10 flex justify-around text-slate-400 text-[10px]">
                      <span className="text-cyan-400 font-bold flex flex-col items-center">Feed</span>
                      <span className="flex flex-col items-center">Explore</span>
                      <span className="flex flex-col items-center">Saved</span>
                      <span className="flex flex-col items-center">Profile</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'creator' && (
                <div className="rounded-2xl bg-brand-surface border border-white/10 p-5 space-y-4 shadow-2xl">
                  {/* Studio Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold text-white">EVO Studio Dashboard</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Channel: @evomakers
                    </span>
                  </div>

                  {/* Studio Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-brand-card border border-white/5">
                      <p className="text-[10px] text-slate-400">Total Views</p>
                      <p className="text-base font-extrabold text-white">348,200</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-brand-card border border-white/5">
                      <p className="text-[10px] text-slate-400">Followers</p>
                      <p className="text-base font-extrabold text-cyan-400">28.4K</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-brand-card border border-white/5">
                      <p className="text-[10px] text-slate-400">Watch Time</p>
                      <p className="text-base font-extrabold text-purple-400">1,940 hrs</p>
                    </div>
                  </div>

                  {/* Video Upload Status Box */}
                  <div className="p-3.5 rounded-xl bg-brand-card/80 border border-purple-500/30 space-y-2">
                    <div className="flex justify-between text-xs font-medium text-white">
                      <span className="truncate max-w-[180px]">evo_cinematic_4k.mov</span>
                      <span className="text-cyan-400 font-mono">HLS Transcoding (92%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 w-[92%] rounded-full animate-pulse" />
                    </div>
                    <p className="text-[10px] text-slate-400">
                      Generated: 4K 60FPS • 1080p • 720p • 480p adaptive stream playlist.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'admin' && (
                <div className="rounded-2xl bg-brand-surface border border-white/10 p-5 space-y-4 shadow-2xl">
                  {/* Admin Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white">EVO Admin Governance Console</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 text-[10px] font-mono">
                      v1.0.0-MVP
                    </span>
                  </div>

                  {/* Admin Metrics */}
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                    <div className="p-2 rounded-lg bg-brand-card border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Users</span>
                      <span className="font-extrabold text-white">12,840</span>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-card border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Creators</span>
                      <span className="font-extrabold text-purple-400">1,240</span>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-card border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Channels</span>
                      <span className="font-extrabold text-cyan-400">1,240</span>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-card border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Videos</span>
                      <span className="font-extrabold text-emerald-400">8,920</span>
                    </div>
                  </div>

                  {/* Moderation Actions Table Preview */}
                  <div className="rounded-xl bg-brand-card border border-white/5 p-3 space-y-2 text-xs">
                    <p className="text-[11px] font-semibold text-slate-300">Live Video Moderation Queue</p>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-[11px]">
                      <span className="text-white truncate max-w-[150px]">Copyright check #891</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">
                        Approved
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 text-[11px]">
                      <span className="text-white truncate max-w-[150px]">Community Flag #104</span>
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px]">
                        Hidden
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
