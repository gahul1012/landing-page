'use client';

import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, Play, Plus, Info } from 'lucide-react';

interface MovieItem {
  id: string;
  title: string;
  image: string;
  category: string;
  rating: string;
  duration: string;
  quality: string;
}

interface TrendingRowProps {
  onPlay: (movieTitle: string) => void;
  onMoreInfo: (movieTitle: string) => void;
}

export const TrendingRow: React.FC<TrendingRowProps> = ({ onPlay, onMoreInfo }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const movies: MovieItem[] = [
    {
      id: 'squid-game',
      title: 'Squid Game',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
      category: 'Thriller • Drama',
      rating: '18+',
      duration: 'Season 2',
      quality: '4K Ultra HD',
    },
    {
      id: 'last-of-us',
      title: 'The Last of Us',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80',
      category: 'Sci-Fi • Survival',
      rating: '16+',
      duration: '9 Episodes',
      quality: 'HDR',
    },
    {
      id: 'oppenheimer',
      title: 'Oppenheimer',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80',
      category: 'Biography • Drama',
      rating: '16+',
      duration: '3h 00m',
      quality: '4K HLS',
    },
    {
      id: 'money-heist',
      title: 'Money Heist',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80',
      category: 'Action • Heist',
      rating: '18+',
      duration: '5 Seasons',
      quality: '1080p 60FPS',
    },
    {
      id: 'stranger-things',
      title: 'Stranger Things',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80',
      category: 'Sci-Fi • Mystery',
      rating: '16+',
      duration: 'Season 5',
      quality: '4K Ultra HD',
    },
    {
      id: 'dune-two',
      title: 'Dune: Part Two',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80',
      category: 'Sci-Fi • Adventure',
      rating: '13+',
      duration: '2h 46m',
      quality: 'IMAX Enhanced',
    },
    {
      id: 'galactic-war',
      title: 'Galactic War',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80',
      category: 'Action • Cyberpunk',
      rating: '16+',
      duration: '2h 15m',
      quality: '4K 60FPS',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75;
      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            {/* Red indicator bar */}
            <span className="w-1.5 h-6 bg-brand-red rounded-full shadow-[0_0_10px_#E50914]" />
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
              Trending Now
            </h2>
          </div>

          <button
            onClick={() => scroll('right')}
            className="flex items-center gap-1 text-xs font-bold text-brand-red hover:text-[#ff333d] transition-colors cursor-pointer group"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-brand-red text-white border border-white/10 items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 shadow-2xl cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Row */}
          <div
            ref={rowRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onPlay(movie.title)}
                className="flex-none w-40 sm:w-48 lg:w-52 group/card relative rounded-2xl overflow-hidden cursor-pointer snap-start poster-card bg-[#0d0d12] border border-white/10"
              >
                {/* Poster Image */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-75 group-hover/card:opacity-90 transition-opacity" />

                  {/* Red Glow on Hover */}
                  <div className="absolute inset-0 bg-brand-red/15 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />

                  {/* Quality Pill Top-Right */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white">
                    {movie.quality}
                  </div>

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover/card:opacity-100 transition-all duration-200 bg-black/40">
                    <div className="p-3 rounded-full bg-brand-red text-white shadow-[0_0_15px_#E50914] scale-90 group-hover/card:scale-100 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Movie Info at Bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 space-y-1">
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-white tracking-wide leading-tight group-hover/card:text-brand-red transition-colors drop-shadow-md">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-300 font-medium">
                      <span className="px-1 py-0.2 rounded bg-white/20 text-[9px] font-bold text-white">
                        {movie.rating}
                      </span>
                      <span>•</span>
                      <span className="text-slate-400 truncate">{movie.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-brand-red text-white border border-white/10 items-center justify-center transition-all opacity-80 group-hover/carousel:opacity-100 shadow-2xl cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
