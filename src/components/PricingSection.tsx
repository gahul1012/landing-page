'use client';

import React from 'react';

const PLANS = [
  {
    id: 'plan-basic',
    name: 'Basic',
    price: '4.99',
    period: '/mo',
    desc: 'Perfect for casual viewers',
    badge: null,
    features: [
      '1 screen at a time',
      'HD 1080p quality',
      '5 downloads / month',
      '1 profile',
      'All standard content',
    ],
    cta: 'Get Basic',
    highlighted: false,
  },
  {
    id: 'plan-pro',
    name: 'Pro',
    price: '9.99',
    period: '/mo',
    desc: 'Most popular for families',
    badge: 'Most Popular',
    features: [
      '2 screens simultaneously',
      '4K UHD quality',
      '15 downloads / month',
      '3 profiles',
      'All content + Originals',
      'Dolby Atmos audio',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 'plan-ultra',
    name: 'Ultra',
    price: '14.99',
    period: '/mo',
    desc: 'Ultimate for power users',
    badge: null,
    features: [
      '4 screens simultaneously',
      '4K UHD + HDR10+',
      '25 downloads / month',
      '5 profiles',
      'All content + Originals',
      'Dolby Atmos audio',
      'Early access to new titles',
    ],
    cta: 'Get Ultra',
    highlighted: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label justify-center mb-4 block">Pricing</span>
          <h2 className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
            Simple, honest pricing.
          </h2>
          <p className="text-brand-muted text-base max-w-md mx-auto">
            Start with a 30-day free trial on any plan. Cancel anytime — no questions asked.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              id={plan.id}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-brand-red/5 border-brand-red shadow-red'
                  : 'bg-brand-surface border-brand-border hover:border-white/20 shadow-card hover:shadow-card-hover'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2
                  px-4 py-1 bg-brand-red text-white text-xs font-bold rounded-full shadow-red-sm">
                  {plan.badge}
                </span>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <p className={`text-sm font-bold tracking-widest uppercase mb-3 ${plan.highlighted ? 'text-brand-red' : 'text-brand-muted'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-black text-white leading-none" style={{ fontSize: '2.5rem' }}>
                    ${plan.price}
                  </span>
                  <span className="text-brand-muted text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-brand-subtle text-sm">{plan.desc}</p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"/>
                    </svg>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#" className={plan.highlighted ? 'btn-primary justify-center' : 'btn-secondary justify-center'}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-subtle text-xs mt-8">
          All plans include 30-day free trial · No credit card required to start
        </p>
      </div>
    </section>
  );
};
