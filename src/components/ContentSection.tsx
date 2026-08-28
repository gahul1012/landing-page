'use client';

import React, { useState } from 'react';
import { Star, Play, ChevronRight } from 'lucide-react';

const CATEGORIES = ['Trending', 'New Releases', 'Originals', 'Top Rated'] as const;
type Category = typeof CATEGORIES[number];

const TILES: Record<Category, { id: string; title: string; genre: string; duration: string; rating: string; img: string }[]> = {
  'Trending': [
    { id: 'ct1', title: 'RANA - The Untold',   genre: 'Original', duration: '1h 52m', rating: '8.9', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80' },
    { id: 'ct2', title: 'SHADOWS',             genre: 'Thriller', duration: '2h 08m', rating: '9.2', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80' },
    { id: 'ct3', title: 'BEYOND THE HORIZON',  genre: 'Sci-Fi',   duration: '1h 44m', rating: '8.7', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80' },
    { id: 'ct4', title: 'CITY OF FACES',       genre: 'Drama',    duration: '1h 58m', rating: '8.8', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80' },
    { id: 'ct5', title: 'THE LAST LIGHT',      genre: 'Mystery',  duration: '2h 14m', rating: '8.6', img: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&auto=format&fit=crop&q=80' },
    { id: 'ct6', title: 'MAA',                 genre: 'Drama',    duration: '1h 40m', rating: '9.0', img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&auto=format&fit=crop&q=80' },
  ],
  'New Releases': [
    { id: 'nr1', title: 'DHAAR',               genre: 'Action',   duration: '1h 55m', rating: '8.9', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80' },
    { id: 'nr2', title: 'Midnight City',       genre: 'Drama',    duration: '2h 02m', rating: '7.6', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&auto=format&fit=crop&q=80' },
    { id: 'nr3', title: 'Crimson Horizon',     genre: 'Sci-Fi',   duration: '1h 48m', rating: '8.2', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&auto=format&fit=crop&q=80' },
    { id: 'nr4', title: 'The Sovereign',       genre: 'Series',   duration: '1h 36m', rating: '8.0', img: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=400&auto=format&fit=crop&q=80' },
    { id: 'nr5', title: 'Echoes of Tomorrow',  genre: 'Action',   duration: '2h 20m', rating: '8.5', img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&auto=format&fit=crop&q=80' },
    { id: 'nr6', title: 'Dark Meridian',       genre: 'Thriller', duration: '1h 50m', rating: '9.3', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=80' },
  ],
  'Originals': [
    { id: 'or1', title: 'RANA - The Untold',   genre: 'EVO Orig', duration: '8 Episodes', rating: '9.2', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80' },
    { id: 'or2', title: 'SHADOWS',             genre: 'EVO Orig', duration: '6 Episodes', rating: '8.8', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80' },
    { id: 'or3', title: 'CITY OF FACES',       genre: 'EVO Orig', duration: '10 Episodes',rating: '9.0', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80' },
    { id: 'or4', title: 'THE LAST LIGHT',      genre: 'EVO Orig', duration: '4 Episodes', rating: '8.6', img: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&auto=format&fit=crop&q=80' },
    { id: 'or5', title: 'MAA: Chapter 1',      genre: 'EVO Orig', duration: '2h 15m',     rating: '9.1', img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&auto=format&fit=crop&q=80' },
    { id: 'or6', title: 'DHAAR: Evolution',    genre: 'EVO Orig', duration: '7 Episodes', rating: '8.4', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80' },
  ],
  'Top Rated': [
    { id: 'tr1', title: 'SHADOWS',             genre: 'Thriller', duration: '1h 40m', rating: '9.4', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80' },
    { id: 'tr2', title: 'RANA - The Untold',   genre: 'Series',   duration: '8 Eps',  rating: '9.3', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80' },
    { id: 'tr3', title: 'CITY OF FACES',       genre: 'Drama',    duration: '2h 15m', rating: '9.1', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80' },
    { id: 'tr4', title: 'BEYOND THE HORIZON',  genre: 'Sci-Fi',   duration: '1h 55m', rating: '8.9', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80' },
    { id: 'tr5', title: 'THE LAST LIGHT',      genre: 'Mystery',  duration: '10 Eps', rating: '9.0', img: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&auto=format&fit=crop&q=80' },
    { id: 'tr6', title: 'MAA',                 genre: 'Drama',    duration: '1h 52m', rating: '8.7', img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&auto=format&fit=crop&q=80' },
  ],
};

const ContentCard: React.FC<{ id: string; title: string; genre: string; duration: string; rating: string; img: string }> = (
  { id, title, genre, duration, rating, img }
) => (
  <div id={id} className="poster-card flex-shrink-0 w-44 sm:w-48 md:w-52 group">
    {/* Poster area */}
    <div className="relative aspect-[2/3] overflow-hidden bg-slate-900">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Rating */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-black/70 backdrop-blur-md rounded-md px-2 py-0.5 shadow-sm">
        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
        <span className="text-[10px] font-bold text-white">{rating}</span>
      </div>
      {/* Genre badge */}
      <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider bg-[#E31B23] text-white px-2 py-0.5 rounded-md shadow-sm">
        {genre}
      </span>
      {/* Play button overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-[#E31B23] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(227,27,35,0.6)] transform scale-90 group-hover:scale-100 transition-transform">
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
      {/* Overlay info */}
      <div className="absolute bottom-0 inset-x-0 p-3">
        <p className="text-white text-xs font-bold leading-tight drop-shadow truncate">{title}</p>
        <p className="text-slate-300 text-[10px] mt-0.5">{duration}</p>
      </div>
    </div>
  </div>
);

export const ContentSection: React.FC = () => {
  const [active, setActive] = useState<Category>('Trending');

  return (
    <section id="content" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="section-label mb-3 block">Content Library</span>
            <h2 className="font-display font-black text-slate-900 leading-tight"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
              10,000+ titles.<br />
              <span className="text-[#E31B23]">Zero compromises.</span>
            </h2>
          </div>
          <a href="#hero" className="btn-secondary self-start md:self-end text-sm">
            <span>Browse All Titles</span>
            <ChevronRight className="w-4 h-4" />
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
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'bg-[#E31B23] text-white shadow-[0_4px_15px_rgba(227,27,35,0.3)]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal scroll row */}
        <div
          role="tabpanel"
          className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {TILES[active].map((tile) => (
            <ContentCard key={tile.id} {...tile} />
          ))}
        </div>

        {/* Divider + note */}
        <p className="text-slate-500 text-xs mt-8 text-center font-medium">
          New titles added every week • Subtitles &amp; dubbing in 40+ languages
        </p>
      </div>
    </section>
  );
};
