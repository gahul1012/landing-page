'use client';

import React from 'react';
import { X, Shield, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'guidelines' | 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    guidelines: {
      title: 'EVO Community Guidelines',
      icon: Shield,
      updated: 'August 2026',
      body: [
        {
          heading: '1. Respect and Creator Equity',
          text: 'EVO (Equitable Visual Originals) is dedicated to fostering a creative, inclusive, and transparent ecosystem. Harassment, hate speech, abusive comments, and targeted defamation are strictly prohibited.',
        },
        {
          heading: '2. Originality & Copyright Protection',
          text: 'Creators must upload original works or content for which they have explicit licensing rights. Plagiarism or unauthorized re-uploads will be removed immediately.',
        },
        {
          heading: '3. Content Authenticity & Safety',
          text: 'Misleading thumbnails, spam tags, scam promotions, and dangerous activities are prohibited. All content is monitored via automated filters and human administrative review.',
        },
      ],
    },
    terms: {
      title: 'EVO Terms & Conditions',
      icon: FileText,
      updated: 'August 2026',
      body: [
        {
          heading: '1. Acceptance of Agreement',
          text: 'By accessing or using the EVO platform, mobile apps (iOS & Android), or Creator Studio, you agree to these Terms and Conditions and our platform governance policies.',
        },
        {
          heading: '2. 100% Creator IP Ownership',
          text: 'Creators retain complete 100% ownership of their uploaded intellectual property. By uploading videos, you grant EVO the necessary license to transcode (HLS) and distribute streams globally.',
        },
        {
          heading: '3. Platform Governance',
          text: 'EVO reserves the right to moderate, hide, or terminate accounts and channels that violate community rules or compromise user security.',
        },
      ],
    },
    privacy: {
      title: 'EVO Privacy Policy',
      icon: Lock,
      updated: 'August 2026',
      body: [
        {
          heading: '1. Data Collection & Zero Third-Party Selling',
          text: 'We collect minimal information necessary to deliver video streaming services: email addresses for authentication, channel details, and encrypted session tokens. We never sell your personal data.',
        },
        {
          heading: '2. Watch History & Privacy',
          text: 'Viewing metrics and watch history are securely synchronized to give you personalized feeds. You can clear or manage your watch history anytime from your profile.',
        },
        {
          heading: '3. Encryption & Security',
          text: 'All user sessions use industry-standard TLS encryption, Argon2/Bcrypt password hashing, and secure JWT refresh token architectures.',
        },
      ],
    },
  }[type];

  const Icon = content.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[#0e0e14] p-6 sm:p-8 border border-white/20 shadow-[0_0_50px_rgba(229,9,20,0.25)] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-red/20 border border-brand-red/40 text-brand-red">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white">{content.title}</h2>
              <p className="text-xs text-slate-400">Last updated: {content.updated}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto py-6 space-y-6 text-sm text-slate-300 pr-2">
          {content.body.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base font-bold text-white">{item.heading}</h3>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold hover:bg-[#ff1e27] transition-colors cursor-pointer shadow-neon-red"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
