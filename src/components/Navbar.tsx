'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { EvoLogo } from './EvoLogo';

const NAV_LINKS = [
  { label: 'Home',    href: '#hero', active: true },
  { label: 'Movies',  href: '#content' },
  { label: 'Series',  href: '#content' },
  { label: 'My List', href: '#features' },
  { label: 'Explore', href: '#creators' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="EVO Home" className="flex items-center">
            <EvoLogo size="sm" />
          </Link>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`relative text-sm font-semibold transition-colors duration-200 ${
                  l.active ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{l.label}</span>
                {l.active && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-700 hover:text-slate-950 transition-colors p-1 cursor-pointer" aria-label="Search">
              <Search className="w-4 h-4 stroke-[2.2]" />
            </button>
            <a href="#hero" className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">
              Sign In
            </a>
            <a
              href="#hero"
              className="px-6 py-2.5 rounded-full bg-[#E31B23] hover:bg-[#c91218] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Get EVO
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-slate-900"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-slate-800 hover:text-brand-red font-semibold py-1"
            >
              {l.label}
            </a>
          ))}
          <hr className="border-slate-100 my-1" />
          <a href="#hero" className="text-sm font-semibold text-slate-800 py-1">Sign In</a>
          <a href="#hero" className="btn-primary text-xs text-center py-3 rounded-full">Get EVO</a>
        </div>
      )}
    </header>
  );
};
