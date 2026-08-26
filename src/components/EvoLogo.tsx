import React from 'react';

interface EvoLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * EVO logo matching the client's reference:
 *  • 3D red ribbon play-button icon on top
 *  • "E" in bold white, "vo" in bold red  below
 *  • "— STREAM BEYOND —" tagline in small caps
 */
export const EvoLogo: React.FC<EvoLogoProps> = ({ size = 'md', className = '' }) => {
  const cfg = {
    xs: { iconW: 22, textCls: 'text-lg',  tagCls: 'text-[7px]',  gap: 'gap-0.5' },
    sm: { iconW: 28, textCls: 'text-xl',  tagCls: 'text-[8px]',  gap: 'gap-0.5' },
    md: { iconW: 36, textCls: 'text-2xl', tagCls: 'text-[9px]',  gap: 'gap-1'   },
    lg: { iconW: 56, textCls: 'text-4xl', tagCls: 'text-[11px]', gap: 'gap-1.5' },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${cfg.gap} ${className}`}>
      {/* ── 3-D Ribbon Play-button Icon ─────────────────────── */}
      <svg
        width={cfg.iconW}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_2px_8px_rgba(227,27,35,0.4)]"
        aria-hidden
      >
        <defs>
          {/* Outer face gradient — bright red top to deep red bottom */}
          <linearGradient id="lg-outer" x1="14" y1="4" x2="42" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#FF4D55" />
            <stop offset="45%"  stopColor="#E31B23" />
            <stop offset="100%" stopColor="#8C0008" />
          </linearGradient>
          {/* Inner bevel — lighter ribbon edge */}
          <linearGradient id="lg-inner" x1="18" y1="10" x2="38" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#FF6B70" />
            <stop offset="100%" stopColor="#C01018" />
          </linearGradient>
          {/* Right side face — darker for 3-D depth */}
          <linearGradient id="lg-side" x1="36" y1="8" x2="52" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#C01018" />
            <stop offset="100%" stopColor="#6E0008" />
          </linearGradient>
          {/* Shadow underneath */}
          <radialGradient id="lg-shadow" cx="50%" cy="100%" r="50%">
            <stop offset="0%"   stopColor="#E31B23" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E31B23" stopOpacity="0"    />
          </radialGradient>
        </defs>

        {/* Soft drop shadow ellipse */}
        <ellipse cx="28" cy="53" rx="18" ry="3" fill="url(#lg-shadow)" />

        {/* ── Outer ribbon body (rounded-corner triangle loop) ── */}
        {/* Main triangular face */}
        <path
          d="M 10 6  C 10 3, 13 2, 15.5 3.5
             L 47 22  C 50 23.5, 50 32.5, 47 34
             L 15.5 52.5 C 13 54, 10 53, 10 50 Z"
          fill="url(#lg-outer)"
          rx="4"
        />
        {/* Right bevel / side face */}
        <path
          d="M 47 22 C 50 23.5, 50 32.5, 47 34
             L 44 32.5 C 46.5 31.5, 46.5 24.5, 44 23.5 Z"
          fill="url(#lg-side)"
        />

        {/* ── Cut-out arrow hole (to make the ribbon look hollow) ── */}
        <path
          d="M 17 13  C 17 11, 19 10.5, 20.5 11.5
             L 41 23.5 C 42.5 24.5, 42.5 31.5, 41 32.5
             L 20.5 44.5 C 19 45.5, 17 45, 17 43 Z"
          fill="#0a0a0a"
        />

        {/* ── Bottom ribbon fold / loop ── */}
        <path
          d="M 10 50 C 10 53, 13 54, 15.5 52.5
             L 18 51 C 15.5 52.5, 13.5 51.5, 13 49.5
             L 13 6.5 C 13.5 4.5, 15.5 3.5, 15.5 3.5
             L 10 6 C 10 6, 7 7.5, 10 11 Z"
          fill="url(#lg-inner)"
          opacity="0.85"
        />
      </svg>

      {/* ── Wordmark Row ───────────────────────────────────────── */}
      <div className={`flex items-baseline leading-none font-display font-black ${cfg.textCls}`}>
        <span className="text-white">E</span>
        <span className="text-brand-red">vo</span>
      </div>

      {/* ── Tagline ────────────────────────────────────────────── */}
      <div className={`flex items-center gap-1.5 tracking-[0.25em] text-brand-muted font-medium uppercase ${cfg.tagCls}`}>
        <span className="inline-block w-3 h-px bg-brand-red" />
        <span>Stream Beyond</span>
        <span className="inline-block w-3 h-px bg-brand-red" />
      </div>
    </div>
  );
};
