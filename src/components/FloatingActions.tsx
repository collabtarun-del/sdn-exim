import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface FloatingActionsProps {
  language: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col gap-2.5 items-end">
      {/* Click to Call Pill */}
      <a
        aria-label="Call SDN Exim Desk"
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary text-on-primary text-xs font-bold shadow-lg hover:bg-primary/90 active:scale-95 transition-all border border-primary-fixed/20 group"
        href="tel:+919752780042"
      >
        <span className="material-symbols-outlined text-[16px] text-secondary-container group-hover:rotate-12 transition-transform">
          phone_in_talk
        </span>
        <span>{t.deskCall}</span>
      </a>

      {/* Floating WhatsApp Primary Fab */}
      <a
        aria-label="Open WhatsApp Chat"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl active:scale-95 transition-all cursor-pointer ring-4 ring-white/50"
        href="https://wa.me/919752780042?text=Hello%20SDN%20International%20Exim,%20I%20am%20visiting%20your%20B2B%20portal%20and%20would%20like%20to%20request%20today's%20export%20CIF%20quote."
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </div>
  );
};
