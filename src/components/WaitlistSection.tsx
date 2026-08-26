'use client';

import React, { useState } from 'react';
import { Sparkles, Mail, CheckCircle2, ArrowRight, User, ShieldCheck, Crown } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [role, setRole] = useState<'creator' | 'viewer'>('viewer');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="waitlist" className="py-20 relative overflow-hidden bg-[#07070a] border-t border-white/10">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0e0e14]/90 border border-brand-red/30 shadow-[0_0_50px_rgba(229,9,20,0.15)] backdrop-blur-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase">
            <Crown className="w-4 h-4" />
            <span>EVO PREMIER ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Stream the Future with{' '}
            <span className="text-brand-red">EVO</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get instant early access to unlimited 4K streaming, offline downloads, and creator channel studios.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Access Key Reserved!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{name}</strong>! We've sent your VIP invite for <strong className="text-brand-red uppercase">{role}</strong> pass to <strong className="text-white">{email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
              {/* Role Toggle */}
              <div className="flex rounded-xl bg-black/60 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setRole('viewer')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    role === 'viewer'
                      ? 'bg-brand-red text-white shadow-neon-red'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  Viewer (Movies & TV Shows)
                </button>
                <button
                  type="button"
                  onClick={() => setRole('creator')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    role === 'creator'
                      ? 'bg-brand-red text-white shadow-neon-red'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Creator (Channel Studio)
                </button>
              </div>

              {/* Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-400">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-400">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080c] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-red transition-colors pl-9"
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-extrabold text-white bg-brand-red hover:bg-[#ff1e27] shadow-neon-red transition-all text-xs flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 active:scale-95"
              >
                {loading ? (
                  <span>Reserving Pass...</span>
                ) : (
                  <>
                    <span>Get Instant Early Access</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam. No credit card required at sign up.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
