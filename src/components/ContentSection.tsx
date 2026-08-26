'use client';

import React, { useState } from 'react';

const CATEGORIES = ['Trending', 'New Releases', 'Originals', 'Top Rated'] as const;
type Category = typeof CATEGORIES[number];

const TILES: Record<Category, { id: string; title: string; genre: string; duration: string; rating: string; color: string }[]> = {
  'Trending': [
    { id: 'ct1', title: 'Void Protocol',      genre: 'Sci-Fi',   duration: '1h 52m', rating: '8.7', color: '#0e1f2a' },
    { id: 'ct2', title: 'The Lost Kingdom',   genre: 'Action',   duration: '2h 08m', rating: '8.4', color: '#1a2535' },
    { id: 'ct3', title: 'Silent Depths',      genre: 'Thriller', duration: '1h 44m', rating: '8.1', color: '#1a1a2e' },
    { id: 'ct4', title: 'Crimson Hours',      genre: 'Drama',    duration: '1h 58m', rating: '7.8', color: '#251a1a' },
    { id: 'ct5', title: 'Wild Horizon',       genre: 'Adventure',duration: '2h 14m', rating: '8.3', color: '#1a2518' },
    { id: 'ct6', title: 'Echoes of Tomorrow', genre: 'Sci-Fi',   duration: '1h 40m', rating: '9.0', color: '#251a1a' },
  ],
  'New Releases': [
    { id: 'nr1', title: 'Last Signal',        genre: 'Thriller', duration: '1h 55m', rating: '8.9', color: '#1f1a2e' },
    { id: 'nr2', title: 'Fallen Stars',       genre: 'Drama',    duration: '2h 02m', rating: '7.6', color: '#251f1a' },
    { id: 'nr3', title: 'Edge Runner',        genre: 'Action',   duration: '1h 48m', rating: '8.2', color: '#0e2a1f' },
    { id: 'nr4', title: 'Moonrise District',  genre: 'Mystery',  duration: '1h 36m', rating: '8.0', color: '#1a1a2e' },
    { id: 'nr5', title: 'The Iron Veil',      genre: 'Action',   duration: '2h 20m', rating: '8.5', color: '#1a2535' },
    { id: 'nr6', title: 'Parallel Lines',     genre: 'Drama',    duration: '1h 50m', rating: '7.9', color: '#2a1f0e' },
  ],
  'Originals': [
    { id: 'or1', title: 'Dark Meridian',      genre: 'EVO Orig', duration: '8 Episodes', rating: '9.2', color: '#200a0a' },
    { id: 'or2', title: 'Signal Lost',        genre: 'EVO Orig', duration: '6 Episodes', rating: '8.8', color: '#0a0a20' },
    { id: 'or3', title: 'The Consortium',     genre: 'EVO Orig', duration: '10 Episodes',rating: '9.0', color: '#0a200a' },
    { id: 'or4', title: 'Neon Frontier',      genre: 'EVO Orig', duration: '4 Episodes', rating: '8.6', color: '#1a1020' },
    { id: 'or5', title: 'Requiem',            genre: 'EVO Orig', duration: '2h 15m',     rating: '9.1', color: '#20100a' },
    { id: 'or6', title: 'Starfall Protocol',  genre: 'EVO Orig', duration: '7 Episodes', rating: '8.4', color: '#0a1a20' },
  ],
  'Top Rated': [
    { id: 'tr1', title: 'Echoes of Tomorrow', genre: 'Sci-Fi',   duration: '1h 40m', rating: '9.0', color: '#251a1a' },
    { id: 'tr2', title: 'Dark Meridian',       genre: 'Series',   duration: '8 Eps',  rating: '9.2', color: '#200a0a' },
    { id: 'tr3', title: 'Requiem',             genre: 'Drama',    duration: '2h 15m', rating: '9.1', color: '#20100a' },
    { id: 'tr4', title: 'Last Signal',         genre: 'Thriller', duration: '1h 55m', rating: '8.9', color: '#1f1a2e' },
    { id: 'tr5', title: 'The Consortium',      genre: 'Series',   duration: '10 Eps', rating: '9.0', color: '#0a200a' },
    { id: 'tr6', title: 'Void Protocol',       genre: 'Sci-Fi',   duration: '1h 52m', rating: '8.7', color: '#0e1f2a' },
  ],
};

const ContentCard: React.FC<{ id: string; title: string; genre: string; duration: string; rating: string; color: string }> = (
  { id, title, genre, duration, rating, color }
) => (
  <div id={id} className="poster-card flex-shrink-0 w-40 sm:w-44 md:w-48">
    {/* Poster area */}
    <div className="relative" style={{ paddingBottom: '148%', background: `linear-gradient(145deg, ${color} 0%, #111 100%)` }}>
      {/* Rating */}
      <div className="absolute top-2 right-2 flex items-center gap-0.5 bg-black/60 rounded px-1.5 py-0.5">
        <svg className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.97-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.084 10.1c-.783-.57-.38-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.518-4.674z" />
        </svg>
        <span className="text-[9px] font-bold text-yellow-400">{rating}</span>
      </div>
      {/* Genre badge */}
      <span className="absolute top-2 left-2 text-[8px] font-bold uppercase tracking-wide
        bg-brand-red/80 text-white px-1.5 py-0.5 rounded">
        {genre}
      </span>
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0
        group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-10 h-10 rounded-full bg-brand-red/90 flex items-center justify-center shadow-red">
          <svg className="w-4 h-4 text-white fill-current ml-0.5" viewBox="0 0 20 20" aria-hidden>
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)' }} />
    </div>
    {/* Info */}
    <div className="p-2.5">
      <p className="text-white text-xs font-semibold leading-tight line-clamp-1">{title}</p>
      <p className="text-brand-subtle text-[10px] mt-0.5">{duration}</p>
    </div>
  </div>
);

export const ContentSection: React.FC = () => {
  const [active, setActive] = useState<Category>('Trending');

  return (
    <section id="content" className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="section-label mb-4 block">Content Library</span>
            <h2 className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
              10,000+ titles.<br />
              <span className="text-brand-red">Zero compromises.</span>
            </h2>
          </div>
          <a href="#pricing" className="btn-secondary self-start md:self-end text-sm">
            Browse All
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"/>
            </svg>
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`tab-${cat.toLowerCase().replace(/ /g, '-')}`}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-red text-white shadow-red-sm'
                  : 'bg-brand-card text-brand-muted border border-brand-border hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal scroll row */}
        <div
          role="tabpanel"
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {TILES[active].map((tile) => (
            <ContentCard key={tile.id} {...tile} />
          ))}
        </div>

        {/* Divider + note */}
        <p className="text-brand-subtle text-xs mt-6 text-center">
          New titles added every week · Subtitles in 40+ languages
        </p>
      </div>
    </section>
  );
};
