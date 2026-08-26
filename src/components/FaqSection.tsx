'use client';

import React, { useState } from 'react';

const FAQS = [
  {
    id: 'faq-1',
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. You can cancel anytime from your account settings. You\'ll retain access until the end of your billing period, and we won\'t charge you again.',
  },
  {
    id: 'faq-2',
    q: 'How many devices can I use EVO on?',
    a: 'EVO works on all major devices — Smart TVs, phones (iOS & Android), tablets, laptops, and gaming consoles. The number of simultaneous streams depends on your plan (1, 2, or 4 screens).',
  },
  {
    id: 'faq-3',
    q: 'Is there a free trial?',
    a: 'Yes! Every new account gets a 30-day free trial on any paid plan. No credit card is required to start your trial.',
  },
  {
    id: 'faq-4',
    q: 'What countries is EVO available in?',
    a: 'EVO is available in 150+ countries. Content availability may vary by region due to licensing agreements.',
  },
  {
    id: 'faq-5',
    q: 'Can I download content to watch offline?',
    a: 'Yes. Basic allows 5 downloads/month, Pro 15/month, and Ultra 25/month. Downloads are stored securely and expire in 30 days.',
  },
  {
    id: 'faq-6',
    q: 'How do I become an EVO Creator?',
    a: 'Apply through our Creator Portal. Once approved (usually within 48 hours), you can upload content, set your pricing, and start earning from day one.',
  },
];

const FaqItem: React.FC<{ id: string; q: string; a: string; defaultOpen?: boolean }> = ({ id, q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="border-b border-brand-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left
          text-white font-semibold text-base hover:text-brand-red transition-colors duration-200"
      >
        <span>{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-brand-border
          flex items-center justify-center transition-all duration-300
          ${open ? 'bg-brand-red border-brand-red rotate-45' : 'bg-transparent'}`}>
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-brand-muted text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* Left */}
          <div>
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="font-display font-black text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}>
              Got questions?<br />
              <span className="text-brand-red">We have answers.</span>
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Still have questions? Reach our support team 24/7.
            </p>
            <a href="mailto:support@evo.stream" className="btn-secondary text-sm inline-flex">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Support
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="rounded-2xl bg-brand-surface border border-brand-border px-7 py-2">
            {FAQS.map((f, i) => (
              <FaqItem key={f.id} {...f} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
