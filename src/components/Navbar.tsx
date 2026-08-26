'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EvoLogo } from './EvoLogo';

const NAV_LINKS = [
  { label: 'Features',  href: '#features'  },
  { label: 'Creators',  href: '#creators'  },
  { label: 'Content',   href: '#content'   },
  { label: 'Pricing',   href: '#pricing'   },
  { label: 'FAQ',       href: '#faq'       },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" aria-label="EVO Home" className="flex items-center">
            <EvoLogo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-brand-muted hover:text-white font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-brand-muted hover:text-white font-medium transition-colors duration-200">
              Sign In
            </a>
            <a href="#" className="btn-primary text-sm px-5 py-2.5">
              Start Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-border px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-brand-muted hover:text-white font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <hr className="border-brand-border" />
          <a href="#" className="text-sm text-brand-muted hover:text-white font-medium transition-colors duration-200">Sign In</a>
          <a href="#" className="btn-primary text-sm text-center">Start Free Trial</a>
        </div>
      )}
    </header>
  );
};
