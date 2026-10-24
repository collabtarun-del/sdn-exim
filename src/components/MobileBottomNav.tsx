import React from 'react';
import { Currency, Language } from '../types/commodity';
import { TRANSLATIONS } from '../data/translations';

interface MobileBottomNavProps {
  language: Language;
  currency: Currency;
  onToggleCurrency: () => void;
  onOpenCatalog: () => void;
  onOpenFastQuote: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  language,
  currency,
  onToggleCurrency,
  onOpenCatalog,
  onOpenFastQuote
}) => {
  const t = TRANSLATIONS[language];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-40 pb-safe bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <div className="h-16 px-2 flex items-center justify-around">
        {/* Catalog */}
        <button
          onClick={onOpenCatalog}
          className="flex flex-col items-center justify-center w-14 h-14 text-on-surface-variant hover:text-primary gap-0.5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">inventory_2</span>
          <span className="text-[10px] font-semibold">{t.catalog}</span>
        </button>

        {/* Currency Toggle */}
        <button
          onClick={onToggleCurrency}
          aria-label="Toggle Currency"
          className="flex flex-col items-center justify-center w-14 h-14 text-on-surface-variant hover:text-on-surface gap-0.5 cursor-pointer"
        >
          <span className="text-xs font-extrabold text-secondary-container bg-surface-container px-2 py-0.5 rounded-md leading-none border border-outline-variant/20">
            {currency === 'USD' ? '$ USD' : '₹ INR'}
          </span>
          <span className="text-[10px] font-medium">{t.currency}</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919752780042?text=Hello%20SDN%20Exim,%20I%20want%20an%20export%20quote%20for%20Indian%20commodities."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-14 h-14 text-[#25D366] hover:opacity-90 gap-0.5"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span className="text-[10px] text-on-surface-variant font-medium">
            {t.whatsApp}
          </span>
        </a>

        {/* Desk Call */}
        <a
          href="tel:+919752780042"
          className="flex flex-col items-center justify-center w-14 h-14 text-primary hover:text-primary-container gap-0.5"
        >
          <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
          <span className="text-[10px] text-on-surface-variant font-medium">
            {t.deskCall}
          </span>
        </a>

        {/* Fast Quote */}
        <button
          onClick={onOpenFastQuote}
          className="flex flex-col items-center justify-center w-14 h-14 text-secondary hover:text-secondary-fixed-variant gap-0.5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">bolt</span>
          <span className="text-[10px] font-bold text-secondary">
            {t.fastQuote}
          </span>
        </button>
      </div>
    </nav>
  );
};
