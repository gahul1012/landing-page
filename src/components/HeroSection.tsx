'use client';

import React from 'react';
import {
  Play,
  ChevronRight,
  Tv,
  Globe,
  Bookmark,
  Users,
  Heart,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white min-h-[92vh] flex flex-col justify-between"
    >
      {/* Subtle warm ambient background aura & dot pattern */}
      <div className="absolute top-1/4 right-0 w-[750px] h-[750px] bg-gradient-to-bl from-rose-100/70 via-red-50/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative subtle dot pattern behind right illustration */}
      <div
        className="absolute top-12 right-0 w-[600px] h-[600px] pointer-events-none -z-10 opacity-35"
        style={{
          backgroundImage: 'radial-gradient(#E31B23 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at 70% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 20%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 items-center">

          {/* ════════════════════════════════════════════════════════
              LEFT COLUMN: Headings, Copy, Buttons, Feature Badges
             ════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left z-20">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800">
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-[#E31B23]">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>Equitable Visual Originals. For Everyone.</span>
            </div>

            {/* Main Headline (Precisely 3 Lines) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-display font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.05]">
              <span className="block whitespace-nowrap">Watch Bold.</span>
              <span className="block whitespace-nowrap">Watch Original.</span>
              <span className="block whitespace-nowrap text-[#E31B23]">Watch EVO.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md font-normal">
              Original series. Global hits. Regional stories.<br className="hidden sm:inline" />
              All in one place. All for you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#content"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E31B23] hover:bg-[#c91218] text-white font-bold text-sm shadow-[0_6px_20px_rgba(227,27,35,0.4)] hover:shadow-[0_8px_25px_rgba(227,27,35,0.55)] transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Start Watching Free</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#content"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-200 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <Play className="w-3.5 h-3.5 text-[#E31B23] fill-transparent" />
                <span>Explore Content</span>
              </a>
            </div>

            {/* Three Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-slate-100">
              {/* Feature 1 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full border border-red-200 bg-red-50/80 flex items-center justify-center text-[#E31B23] flex-shrink-0 mt-0.5">
                  <Play className="w-3 h-3 text-[#E31B23]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Equitable Originals</h4>
                  <p className="text-[10.5px] text-slate-500 leading-tight mt-0.5">Diverse stories. Equal representation.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full border border-red-200 bg-red-50/80 flex items-center justify-center text-[#E31B23] flex-shrink-0 mt-0.5">
                  <Globe className="w-3.5 h-3.5 text-[#E31B23]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Visual Storytelling</h4>
                  <p className="text-[10.5px] text-slate-500 leading-tight mt-0.5">High quality visuals. Immersive experience.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full border border-red-200 bg-red-50/80 flex items-center justify-center text-[#E31B23] flex-shrink-0 mt-0.5">
                  <Bookmark className="w-3.5 h-3.5 text-[#E31B23]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Original by Design</h4>
                  <p className="text-[10.5px] text-slate-500 leading-tight mt-0.5">Created with purpose. Curated for you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              RIGHT COLUMN: Large Hero Graphic
             ════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <div className="relative w-[110%] sm:w-[115%] lg:w-[125%] xl:w-[132%] max-w-[820px] xl:max-w-[920px] lg:-mr-12 xl:-mr-20 transform lg:scale-105 xl:scale-110 transition-transform duration-500 hover:scale-[1.07]">
              <img
                src="/images/evo_hero_showcase.png"
                alt="EVO Stream Beyond App Showcase"
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)] select-none pointer-events-none"
              />
            </div>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════
            BOTTOM FLOATING STATS BAR (Matching Screenshot)
           ════════════════════════════════════════════════════════ */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-5 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-display font-black text-slate-950 text-xl sm:text-2xl leading-none">10,000+</p>
                <p className="text-slate-500 text-xs mt-1 font-medium">Hours of Content</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-display font-black text-slate-950 text-xl sm:text-2xl leading-none">500,000+</p>
                <p className="text-slate-500 text-xs mt-1 font-medium">Happy Streamers</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-display font-black text-slate-950 text-xl sm:text-2xl leading-none">100+</p>
                <p className="text-slate-500 text-xs mt-1 font-medium">Countries</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-display font-black text-slate-950 text-lg sm:text-xl leading-none">Made for You</p>
                <p className="text-slate-500 text-xs mt-1 font-medium">Curated. Personal. Yours.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
