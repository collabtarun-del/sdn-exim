import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface HeroSectionProps {
  language: Language;
  onOpenQuote: () => void;
  onScrollToCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onOpenQuote,
  onScrollToCatalog
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="relative w-full bg-primary text-on-primary px-4 md:px-8 pt-8 pb-12 overflow-hidden shadow-md">
      {/* Ambient Spice Particle Backdrop (SVG Canvas Layer) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient cx="50%" cy="50%" id="goldGlow" r="50%">
            <stop offset="0%" stopColor="#fe932c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#002214" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="20%" cy="15%" fill="url(#goldGlow)" r="120" />
        <circle cx="85%" cy="40%" fill="url(#goldGlow)" r="160" />
        <circle cx="45%" cy="85%" fill="url(#goldGlow)" r="140" />

        {/* Drifting botanical spice silhouettes */}
        <g fill="#c1edd3" opacity="0.35">
          <circle cx="35" cy="80" r="3" />
          <circle cx="120" cy="190" r="2.5" />
          <circle cx="280" cy="95" r="4" />
          <circle cx="310" cy="240" r="2.5" />
          <circle cx="90" cy="310" r="3.5" />
          <circle cx="240" cy="340" r="2" />
          <circle cx="580" cy="120" r="4" />
          <circle cx="720" cy="210" r="3" />
          <circle cx="890" cy="80" r="5" />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col gap-4 max-w-4xl mx-auto">
        {/* Merchant Exporter Location Badge */}
        <div className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-primary-fixed shadow-sm border border-primary-fixed/20">
          <span className="material-symbols-outlined text-[15px] text-secondary-container">
            location_on
          </span>
          <span className="text-xs tracking-wide uppercase font-semibold">
            Merchant Exporter • Thandla, Jhabua, MP, India
          </span>
        </div>

        {/* Hero Heading & Description */}
        <div className="flex flex-col gap-1.5">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-surface-container-lowest tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-surface-container-low leading-relaxed max-w-3xl mt-1">
            {t.heroDesc}
          </p>
        </div>

        {/* Hero Image Card Preview */}
        <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden shadow-2xl mt-2 border border-surface-container-lowest/15 group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGd9DOm8hSik6eAyQqAV-Ln0wVIdargOIZclR3OR2Ukw5mEPvAc8F0Fi-TqnLpcCwzAwQ8HPiWNvaY8ZtJG7EjIq6vUJKVgbmhhK0WSqyLcB1qGZ7XFBEkTdvfc1PPk6TlcGOfeJoehv5usz4dtjndmqD1sBu6EXOBu8R_FVeCj8n_S7qmbuGOiooP3diAK0xyOVE3MxwRLyGY-D-U3GXzVB5a2lwET5lxOAvZDm4exIkYGJzrVF2G-A"
            alt="Premium Indian export commodities: turmeric fingers, Guntur red chillies, Basmati rice pearls, and Nashik red onions"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row justify-between sm:items-end gap-2">
            <div className="flex flex-col">
              <span className="text-secondary-container uppercase tracking-wider text-xs font-bold">
                {t.harvestSeason}
              </span>
              <span className="text-lg font-bold text-surface-container-lowest font-serif">
                {t.directOps}
              </span>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-1 rounded-md bg-surface-container-lowest/20 backdrop-blur-md text-surface-container-lowest text-xs font-medium border border-surface-container-lowest/30">
              {t.phytosanitary}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onOpenQuote}
            className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-secondary text-on-secondary text-sm font-bold shadow-md hover:bg-secondary/90 active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            {t.requestQuote}
          </button>
          <button
            onClick={onScrollToCatalog}
            className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest text-sm font-bold hover:bg-surface-container-lowest/25 active:scale-95 transition-all border border-surface-container-lowest/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">category</span>
            {t.exploreCatalog}
            <span className="w-2 h-2 rounded-full bg-secondary-container" />
          </button>
        </div>

        {/* Quick Trust Strip */}
        <div className="mt-2 rounded-xl bg-primary-container/80 p-3.5 flex flex-col gap-1 border border-primary-fixed/20 shadow-xs">
          <span className="text-xs text-primary-fixed-dim uppercase tracking-wider flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-[15px] text-secondary-container">
              sailing
            </span>
            {t.regularHubs}
          </span>
          <p className="text-xs text-surface-container-low font-medium leading-normal">
            Jebel Ali (UAE) • Rotterdam (NL) • Port of Singapore • Sohar (Oman) • Dammam (KSA) • Felixstowe (UK) • Port Newark (USA) • Tanjung Priok (ID)
          </p>
        </div>
      </div>
    </section>
  );
};
