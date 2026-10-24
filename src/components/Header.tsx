import React from 'react';
import { Currency, Language } from '../types/commodity';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  onOpenQuote: () => void;
  onOpenTracker: () => void;
  onOpenSyncEditor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  currency,
  setCurrency,
  onOpenQuote,
  onOpenTracker,
  onOpenSyncEditor
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 min-w-0 group">
          <div className="w-9 h-9 rounded bg-primary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
            <span className="font-serif text-secondary-container text-[18px] font-bold leading-none">
              S
            </span>
          </div>
          <div className="flex flex-col truncate">
            <span className="font-serif text-lg text-primary tracking-tight font-bold truncate leading-tight">
              SDN International Exim
            </span>
            <span className="text-[10px] text-secondary font-semibold tracking-widest uppercase truncate leading-none">
              {t.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Center / Right Control Cluster */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-surface-container-high px-1.5 py-1 rounded-lg text-on-surface text-xs font-semibold shadow-inner">
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 rounded transition-all ${
                language === 'en'
                  ? 'bg-primary text-on-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              EN
            </button>
            <span className="text-outline-variant text-[10px] mx-0.5">|</span>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-1.5 py-0.5 rounded transition-all ${
                language === 'hi'
                  ? 'bg-primary text-on-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              हिन्दी
            </button>
            <span className="text-outline-variant text-[10px] mx-0.5">|</span>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-1.5 py-0.5 rounded transition-all ${
                language === 'ar'
                  ? 'bg-primary text-on-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              العربية
            </button>
          </div>

          {/* Currency Toggle (USD / INR) */}
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container font-bold text-xs text-primary hover:bg-surface-container-high border border-outline-variant/30 transition-all active:scale-95"
            title="Toggle Currency"
          >
            <span className="text-secondary-container font-extrabold">{currency === 'USD' ? '$' : '₹'}</span>
            <span>{currency}</span>
          </button>

          {/* Track Shipment Button */}
          <button
            onClick={onOpenTracker}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-primary text-xs font-semibold hover:bg-surface-container-high transition-colors"
            title="Track Container Bill of Lading"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">sailing</span>
            <span>Track BL</span>
          </button>

          {/* Request Quote Button */}
          <button
            onClick={onOpenQuote}
            className="flex items-center justify-center min-h-[38px] px-3.5 bg-secondary text-on-secondary hover:bg-secondary/90 rounded-lg text-xs font-bold shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[16px] mr-1">request_quote</span>
            {t.quote}
          </button>

          {/* Admin / Sheets Sync Trigger */}
          <button
            onClick={onOpenSyncEditor}
            className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95"
            title="Sync Live Rates / Admin Desk"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </button>
        </div>
      </div>
    </header>
  );
};
