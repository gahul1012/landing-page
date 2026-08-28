'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const PLANS = [
  {
    id: 'plan-basic',
    name: 'Basic',
    price: '4.99',
    period: '/mo',
    desc: 'Perfect for casual mobile streaming',
    badge: null,
    features: [
      '1 screen at a time',
      'HD 1080p adaptive quality',
      '5 offline downloads / month',
      '1 personal profile',
      'Standard video catalogue',
    ],
    cta: 'Get Basic',
    highlighted: false,
  },
  {
    id: 'plan-pro',
    name: 'Pro Streamer',
    price: '9.99',
    period: '/mo',
    desc: 'Best value for entertainment lovers',
    badge: 'Most Popular',
    features: [
      '2 screens simultaneously',
      '4K UHD streaming quality',
      '15 offline downloads / month',
      '3 individual user profiles',
      'All originals & regional hits',
      'Dolby Atmos audio',
    ],
    cta: 'Start 30-Day Free Trial',
    highlighted: true,
  },
  {
    id: 'plan-ultra',
    name: 'Ultra Family',
    price: '14.99',
    period: '/mo',
    desc: 'Ultimate experience for multi-device homes',
    badge: null,
    features: [
      '4 screens simultaneously',
      '4K UHD + HDR10+ quality',
      'Unlimited downloads',
      '5 separate profiles with PINs',
      'VIP Early access to new releases',
      'Dolby Atmos & Spatial Audio',
    ],
    cta: 'Get Ultra',
    highlighted: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label justify-center mb-3 block">Plans &amp; Pricing</span>
          <h2 className="font-display font-black text-slate-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}>
            Simple, transparent pricing.
          </h2>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Start with a 30-day free trial on any plan. Cancel anytime in one click — no hidden charges.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              id={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-white to-red-50/40 border-2 border-[#E31B23] shadow-[0_12px_40px_rgba(227,27,35,0.15)] md:-translate-y-2'
                  : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E31B23] text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </span>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${plan.highlighted ? 'text-[#E31B23]' : 'text-slate-500'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display font-black text-slate-900 leading-none text-4xl sm:text-5xl">
                    ${plan.price}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">{plan.desc}</p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 flex-1 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-red-100 text-[#E31B23]' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#hero"
                className={
                  plan.highlighted
                    ? 'btn-primary justify-center text-center rounded-full py-3.5'
                    : 'btn-secondary justify-center text-center rounded-full py-3.5'
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-xs mt-10 font-medium">
          All plans include 30-day free trial • No credit card required to start • Fast HLS 4K streaming
        </p>
      </div>
    </section>
  );
};
