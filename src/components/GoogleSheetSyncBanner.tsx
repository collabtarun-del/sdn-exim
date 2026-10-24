import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface GoogleSheetSyncBannerProps {
  language: Language;
  onOpenPdfPriceList: () => void;
  onOpenSyncEditor: () => void;
  lastSyncTime: string;
}

export const GoogleSheetSyncBanner: React.FC<GoogleSheetSyncBannerProps> = ({
  language,
  onOpenPdfPriceList,
  onOpenSyncEditor
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto -mt-6 relative z-20 w-full">
      <div className="rounded-2xl bg-surface-container-lowest p-4 md:p-5 shadow-xl border border-outline-variant/30 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-[24px]">inventory_2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary flex items-center gap-2">
                {t.sheetsSync}
                <span className="px-1.5 py-0.5 rounded bg-primary-container text-[9px] text-primary-fixed font-semibold">
                  Merchant Exporter
                </span>
              </span>
              <span className="text-xs text-on-surface-variant">
                Thandla, Jhabua, Madhya Pradesh, India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold">
              B2B Container Lots
            </span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
          {t.zeroCode}
        </p>

        <div className="flex flex-wrap items-center justify-between pt-1 gap-2 border-t border-outline-variant/20">
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSyncEditor}
              className="text-xs text-primary font-bold flex items-center gap-1 bg-surface-container px-2.5 py-1.5 rounded-lg hover:bg-surface-container-high cursor-pointer transition-colors"
              title="Edit commodity rates and origins"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">tune</span>
              <span>Rate &amp; Origin Manager</span>
            </button>

            <a
              href="#quick-quote-section"
              className="text-xs text-secondary font-bold flex items-center gap-1 hover:underline"
            >
              <span className="material-symbols-outlined text-[16px]">request_quote</span>
              <span>{t.requestQuote}</span>
            </a>
          </div>

          <button
            onClick={onOpenPdfPriceList}
            className="px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">
              picture_as_pdf
            </span>
            {t.exportPdf}
          </button>
        </div>
      </div>
    </section>
  );
};
