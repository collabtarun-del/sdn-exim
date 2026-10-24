import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';
import { INCOTERMS_INFO } from '../data/commodities';

interface TradeCorridorsProps {
  language: Language;
}

export const TradeCorridors: React.FC<TradeCorridorsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedIncoterm, setSelectedIncoterm] = useState<typeof INCOTERMS_INFO[0] | null>(null);

  return (
    <section className="w-full px-4 md:px-8 max-w-7xl mx-auto py-12 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-secondary uppercase font-bold tracking-widest">
          Trade Corridors
        </span>
        <h3 className="font-serif text-2xl font-bold text-primary">
          {t.corridorsTitle}
        </h3>
        <p className="text-xs md:text-sm text-on-surface-variant">
          We operate seamless weekly liner sailings across the globe's critical maritime food lanes from Mundra and JNPT.
        </p>
      </div>

      {/* Trade Corridors Visual Card */}
      <div className="rounded-2xl bg-primary text-on-primary p-5 md:p-6 shadow-xl flex flex-col gap-5 relative overflow-hidden border border-primary-fixed/20">
        {/* Subtle SVG route background decoration */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,80 Q 250,10 520,60 T 900,120"
            fill="none"
            stroke="#fe932c"
            strokeDasharray="4,4"
            strokeWidth="2"
          />
          <path
            d="M20,160 Q 280,90 550,140 T 1000,200"
            fill="none"
            stroke="#c1edd3"
            strokeDasharray="6,6"
            strokeWidth="2"
          />
        </svg>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest/10 backdrop-blur-xs border border-surface-container-lowest/10">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                near_me
              </span>
              <span className="font-serif text-sm font-bold text-surface-container-lowest">
                Middle East &amp; GCC
              </span>
            </div>
            <span className="text-xs text-primary-fixed font-medium">
              Jebel Ali • Dammam • Sohar • Doha (4-7 Days)
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest/10 backdrop-blur-xs border border-surface-container-lowest/10">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                near_me
              </span>
              <span className="font-serif text-sm font-bold text-surface-container-lowest">
                Europe &amp; UK
              </span>
            </div>
            <span className="text-xs text-primary-fixed font-medium">
              Rotterdam • Antwerp • Felixstowe • Hamburg (22-26 Days)
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest/10 backdrop-blur-xs border border-surface-container-lowest/10">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                near_me
              </span>
              <span className="font-serif text-sm font-bold text-surface-container-lowest">
                Southeast Asia
              </span>
            </div>
            <span className="text-xs text-primary-fixed font-medium">
              Singapore • Port Klang • Tanjung Priok (7-12 Days)
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest/10 backdrop-blur-xs border border-surface-container-lowest/10">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                near_me
              </span>
              <span className="font-serif text-sm font-bold text-surface-container-lowest">
                North America
              </span>
            </div>
            <span className="text-xs text-primary-fixed font-medium">
              New York • Savannah • Los Angeles • Houston (30-36 Days)
            </span>
          </div>
        </div>

        {/* Supported Incoterms with click info */}
        <div className="relative z-10 pt-2 flex flex-col gap-2 border-t border-surface-container-lowest/15">
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary-fixed uppercase tracking-wider font-bold">
              Incoterms 2020 Supported (Click for Scope):
            </span>
            <span className="text-[11px] text-primary-fixed-dim">
              ICC Official Rules for International Trade
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {INCOTERMS_INFO.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setSelectedIncoterm(item)}
                className="px-3 py-1.5 rounded-lg bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-surface-container-lowest text-xs font-bold border border-surface-container-lowest/20 transition-all cursor-pointer flex items-center gap-1 active:scale-95"
              >
                <span>{item.code}</span>
                <span className="text-[10px] text-secondary-container">ⓘ</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Incoterm Info Drawer/Modal */}
      {selectedIncoterm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-5 shadow-2xl border border-outline-variant/30 flex flex-col gap-3 animate-in fade-in duration-200">
            <div className="flex items-start justify-between border-b border-outline-variant/20 pb-2.5">
              <div>
                <span className="text-[10px] uppercase font-bold text-secondary tracking-wider">
                  Incoterm Definition
                </span>
                <h4 className="font-serif text-lg font-bold text-primary">
                  {selectedIncoterm.code} - {selectedIncoterm.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedIncoterm(null)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-xs text-on-surface leading-relaxed">
              {selectedIncoterm.description}
            </p>

            <div className="p-3 rounded-xl bg-surface-container-low text-xs text-primary font-medium border border-outline-variant/20">
              <strong>Best Suited For:</strong> {selectedIncoterm.bestFor}
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={() => setSelectedIncoterm(null)}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
