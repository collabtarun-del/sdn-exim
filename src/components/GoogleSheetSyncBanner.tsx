import React, { useState } from 'react';
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
  onOpenSyncEditor,
  lastSyncTime
}) => {
  const t = TRANSLATIONS[language];
  const [showSchema, setShowSchema] = useState(false);

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto -mt-6 relative z-20 w-full">
      <div className="rounded-2xl bg-surface-container-lowest p-4 md:p-5 shadow-xl border border-outline-variant/30 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-[24px]">sync</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary flex items-center gap-2">
                {t.sheetsSync}
                <span className="px-1.5 py-0.5 rounded bg-surface-variant text-[9px] text-primary font-semibold">
                  {t.activeV}
                </span>
              </span>
              <span className="text-xs text-on-surface-variant">
                {t.connectedSheet.split(':')[0]}:{' '}
                <code className="bg-surface-container-high px-1.5 py-0.5 rounded text-primary font-mono text-[11px]">
                  sdn-live-prices-2026
                </code>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"
              title="Real-time Webhook Active"
            />
            <span className="hidden sm:inline text-[11px] font-semibold text-secondary">
              Live Webhook
            </span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
          {t.zeroCode}
        </p>

        <div className="flex flex-wrap items-center justify-between pt-1 gap-2 border-t border-outline-variant/20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSchema(!showSchema)}
              className="text-xs text-secondary font-bold flex items-center gap-1 hover:underline cursor-pointer active:opacity-70"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">
                {showSchema ? 'visibility_off' : 'visibility'}
              </span>
              <span>{showSchema ? 'Hide Data Schema' : t.viewDataSchema}</span>
            </button>

            <button
              onClick={onOpenSyncEditor}
              className="text-xs text-primary font-bold flex items-center gap-1 bg-surface-container px-2 py-1 rounded-md hover:bg-surface-container-high cursor-pointer transition-colors"
              title="Simulate updating rates in Google Sheets"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">edit_note</span>
              <span>Live Rate Editor</span>
            </button>
          </div>

          <button
            onClick={onOpenPdfPriceList}
            className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">
              picture_as_pdf
            </span>
            {t.exportPdf}
          </button>
        </div>

        {/* Collapsible Schema Preview Box */}
        {showSchema && (
          <div className="rounded-xl bg-surface-container-low p-3 font-mono text-xs text-on-surface-variant leading-relaxed border border-outline-variant/30 flex flex-col gap-1.5 animate-in fade-in duration-150">
            <div className="text-primary font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">table_chart</span>
              [Sync Mapping Fields: Commodity | Grade | Size_mm | FOB_USD | CIF_Port | MOQ_MT | Reefer_Temp_C | Batch_Cert]
            </div>
            <div className="text-[11px] text-outline">
              Last successful webhook ping: {lastSyncTime} • Next cron check: 30s • Status: <span className="text-green-700 font-bold">200 OK</span> • Auto-caching via Cloud Edge CDN
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
