'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'viewers' | 'creators' | 'general';
}

export const FaqAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'viewers' | 'creators'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: 'What is EVO (Equitable Visual Originals) and how does HLS streaming work?',
      answer:
        'EVO is a next-generation video-sharing platform where creators own their value and viewers enjoy bufferless 4K/1080p video streaming. When a video is uploaded, our pipeline automatically transcodes it into adaptive multi-bitrate HLS streams. The player dynamically adjusts to your connection in real-time, preventing buffering.',
    },
    {
      category: 'creators',
      question: 'How does the Equitable Creator Monetization work?',
      answer:
        'Unlike legacy platforms that take 30%–50% cuts and impose opaque algorithmic penalties, EVO is designed around creator equity. During our launch phase, creators receive 100% of their earnings with zero platform deductions and direct community engagement.',
    },
    {
      category: 'creators',
      question: 'How do I create an EVO Channel and upload my first video?',
      answer:
        'Click "Creator Studio" or "Get Early Access", sign up, and complete your channel setup (Channel Handle, Avatar, Banner, and Social Links). Once verified, you can immediately drag and drop 4K/HD video files, add thumbnails & tags, and publish or save drafts.',
    },
    {
      category: 'creators',
      question: 'What video file formats and resolutions are supported?',
      answer:
        'EVO supports all major video containers (MP4, MOV, MKV, WebM) up to 4K 60FPS. Our automated transcoding pipeline processes video and audio tracks to create multi-resolution adaptive streaming packages (.m3u8).',
    },
    {
      category: 'viewers',
      question: 'Is the EVO mobile application available for iOS and Android?',
      answer:
        'Yes! The mobile app is built with React Native for high-performance native performance on Apple iOS and Android devices, featuring full-screen theater mode, speed controls (0.5x – 2.0x), offline-ready watch history, and instant likes/comments.',
    },
    {
      category: 'general',
      question: 'How does EVO ensure community safety and fair moderation?',
      answer:
        'We enforce transparent Community Guidelines through an integrated Admin Governance Panel. Abusive content or violations are flagged, reviewed by human moderators, and removed promptly to protect all community members.',
    },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((item) => item.category === activeCategory || item.category === 'general');

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 relative bg-brand-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Everything You Need to Know About EVO
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Answers to common questions from viewers, creators, and community members.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex justify-center gap-2">
          {(
            [
              { key: 'all', label: 'All Questions' },
              { key: 'viewers', label: 'For Viewers' },
              { key: 'creators', label: 'For Creators' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === tab.key
                  ? 'bg-purple-600 text-white shadow-neon-purple'
                  : 'bg-brand-surface border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="mt-10 space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all bg-brand-surface/70"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
