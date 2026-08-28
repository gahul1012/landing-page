'use client';

import React, { useState } from 'react';
import { Plus, Minus, Mail } from 'lucide-react';

const FAQS = [
  {
    id: 'faq-1',
    q: 'Is EVO completely free to watch?',
    a: 'Yes! EVO is an open, indie-first OTT entertainment platform. You can stream original series, regional cinema, and indie creations instantly across all your devices without any mandatory subscriptions.',
  },
  {
    id: 'faq-2',
    q: 'What devices can I use to stream EVO?',
    a: 'EVO works seamlessly on all modern devices — iOS and Android smartphones, tablets, Smart TVs, and desktop web browsers with adaptive 4K UHD streaming.',
  },
  {
    id: 'faq-3',
    q: 'How does EVO support independent creators?',
    a: 'EVO provides creators with dedicated channel profiles, automated cloud HLS transcoding, transparent real-time analytics, and an equitable revenue share model.',
  },
  {
    id: 'faq-4',
    q: 'What regions and languages are supported?',
    a: 'EVO is available globally across 100+ countries. Content features multi-lingual subtitles and audio tracks in over 40 languages.',
  },
  {
    id: 'faq-5',
    q: 'How can filmmakers and creators upload to EVO?',
    a: 'Creators can sign up for the Creator Portal, set up their channel, upload 4K video files, and immediately distribute their content to a global audience.',
  },
];

const FaqItem: React.FC<{ id: string; q: string; a: string; defaultOpen?: boolean }> = ({ id, q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="border-b border-slate-200/80 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-slate-900 font-bold text-base hover:text-[#E31B23] transition-colors duration-200 cursor-pointer"
      >
        <span>{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-[#E31B23] text-white' : 'bg-slate-100 text-slate-600'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left */}
          <div>
            <span className="section-label mb-3 block">Frequently Asked Questions</span>
            <h2 className="font-display font-black text-slate-900 leading-tight mb-4"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}>
              Got questions?<br />
              <span className="text-[#E31B23]">We have answers.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Can't find what you're looking for? Our customer support team is available 24/7.
            </p>
            <a
              href="mailto:support@evo.stream"
              className="btn-secondary text-xs sm:text-sm inline-flex items-center gap-2 rounded-full"
            >
              <Mail className="w-4 h-4 text-[#E31B23]" />
              <span>Contact Support Team</span>
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="rounded-3xl bg-white border border-slate-200/90 px-8 py-2 shadow-sm">
            {FAQS.map((f, i) => (
              <FaqItem key={f.id} {...f} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
