'use client';

import React from 'react';

/* ── Hero backdrop — a cinematic collage of movie-poster-like tiles ─ */

const FEATURED_TILES = [
  { title: 'The Lost Kingdom',  year: '2024', genre: 'Action',  rating: '8.4', color: '#1a2535' },
  { title: 'Silent Depths',     year: '2024', genre: 'Thriller',rating: '8.1', color: '#1a1a2e' },
  { title: 'Echoes of Tomorrow',year: '2024', genre: 'Sci-Fi',  rating: '9.0', color: '#251a1a' },
  { title: 'Crimson Hours',     year: '2024', genre: 'Drama',   rating: '7.8', color: '#2a1f0e' },
  { title: 'Void Protocol',     year: '2024', genre: 'Sci-Fi',  rating: '8.7', color: '#0e1f2a' },
  { title: 'Wild Horizon',      year: '2024', genre: 'Adventure',rating:'8.3', color: '#1a2518' },
  { title: 'Last Signal',       year: '2024', genre: 'Thriller',rating: '8.9', color: '#1f1a2e' },
  { title: 'Fallen Stars',      year: '2024', genre: 'Drama',   rating: '7.6', color: '#251f1a' },
];

const PosterTile: React.FC<{
  title: string; year: string; genre: string; rating: string; color: string; delay?: number;
}> = ({ title, year, genre, rating, color, delay = 0 }) => (
  <div
    className="rounded-xl overflow-hidden border border-white/10 flex-shrink-0"
    style={{
      background: `linear-gradient(135deg, ${color} 0%, #0a0a0a 100%)`,
      animationDelay: `${delay}ms`,
    }}
  >
    {/* Mock poster artwork */}
    <div className="relative" style={{ paddingBottom: '150%' }}>
      {/* Geometric shapes to simulate a poster */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${color.replace('#', '#')}99 0%, transparent 70%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }}
        />
        {/* Genre tag */}
        <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider
          bg-brand-red/90 text-white px-2 py-0.5 rounded">
          {genre}
        </span>
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-0.5">
          <svg className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.97-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.084 10.1c-.783-.57-.38-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.518-4.674z" />
          </svg>
          <span className="text-[9px] font-bold text-yellow-400">{rating}</span>
        </div>
        {/* Play circle in center */}
        <div className="w-10 h-10 rounded-full bg-black/50 border border-white/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-white fill-current ml-0.5" viewBox="0 0 20 20" aria-hidden>
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
        </div>
        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5">
          <p className="text-white text-[10px] font-bold leading-tight line-clamp-2">{title}</p>
          <p className="text-white/50 text-[9px] mt-0.5">{year}</p>
        </div>
      </div>
    </div>
  </div>
);

const STATS = [
  { value: '40M+',   label: 'Active Viewers'  },
  { value: '4K UHD', label: 'Max Resolution'  },
  { value: '150+',   label: 'Countries'        },
  { value: '10K+',   label: 'Titles'          },
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* ── Right backdrop — poster grid ──────────────────── */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2 overflow-hidden"
        aria-hidden
      >
        {/* Gradient overlay fading right grid into the left black */}
        <div className="absolute inset-y-0 left-0 w-2/3 z-10"
          style={{ background: 'linear-gradient(to right, #0a0a0a 20%, rgba(10,10,10,0.85) 60%, transparent 100%)' }}
        />
        <div className="absolute inset-y-0 right-0 left-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, transparent 20%, transparent 80%, rgba(10,10,10,0.8) 100%)' }}
        />

        {/* Poster grid */}
        <div className="flex gap-3 p-3 h-full opacity-70" style={{ transform: 'rotate(-6deg) scale(1.1)', transformOrigin: 'center center' }}>
          {/* Column 1 */}
          <div className="flex flex-col gap-3 w-32 translate-y-6">
            {FEATURED_TILES.slice(0, 4).map((t, i) => (
              <PosterTile key={t.title} {...t} delay={i * 100} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-3 w-32 -translate-y-4">
            {FEATURED_TILES.slice(4).map((t, i) => (
              <PosterTile key={t.title} {...t} delay={i * 100 + 200} />
            ))}
          </div>
          {/* Column 3 — repeat first half */}
          <div className="flex flex-col gap-3 w-32 translate-y-10">
            {FEATURED_TILES.slice(0, 4).map((t, i) => (
              <PosterTile key={`c3-${t.title}`} {...t} delay={i * 100 + 400} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Main hero content ─────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full
            bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            Now Streaming — Season 3 of Void Protocol
          </div>

          {/* Headline */}
          <h1 className="font-display font-black leading-[1.05] tracking-tight mb-5">
            <span className="block text-white" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Entertainment
            </span>
            <span className="block text-white" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Without
            </span>
            <span className="block text-brand-red" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Boundaries.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Movies, originals, creator content, and live events — all in 4K UHD. One subscription.
            Stream on any device, anywhere in the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a id="hero-start-trial" href="#pricing" className="btn-primary text-base px-8 py-4">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              Start Watching Free
            </a>
            <a id="hero-explore" href="#content" className="btn-secondary text-base px-8 py-4">
              Explore Content
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display font-black text-white text-2xl leading-none">{s.value}</p>
                <p className="text-brand-subtle text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-black to-transparent z-10" aria-hidden />
    </section>
  );
};
