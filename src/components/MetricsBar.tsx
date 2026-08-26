import React from 'react';
import { Zap, ShieldCheck, Video, Users } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Video,
      value: '4K / 1080p',
      label: 'Adaptive HLS Multi-Bitrate',
      desc: 'Seamless bufferless video streaming',
      color: 'text-purple-400',
      borderGlow: 'border-purple-500/20',
    },
    {
      icon: Zap,
      value: '< 180ms',
      label: 'First-Frame Playback Latency',
      desc: 'Powered by global edge CDN distribution',
      color: 'text-cyan-400',
      borderGlow: 'border-cyan-500/20',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Equitable Creator Transparency',
      desc: 'Fair metrics & direct channel ownership',
      color: 'text-emerald-400',
      borderGlow: 'border-emerald-500/20',
    },
    {
      icon: Users,
      value: '0%',
      label: 'Launch Platform Cut',
      desc: '100% of revenue to early EVO creators',
      color: 'text-blue-400',
      borderGlow: 'border-blue-500/20',
    },
  ];

  return (
    <section className="py-8 relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-brand-surface/80 backdrop-blur-xl border ${m.borderGlow} hover:border-white/20 transition-all shadow-lg flex items-start gap-4 group`}
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                <Icon className={`w-5 h-5 ${m.color}`} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                  {m.value}
                </p>
                <p className="text-xs font-semibold text-slate-200">{m.label}</p>
                <p className="text-[11px] text-slate-400">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
