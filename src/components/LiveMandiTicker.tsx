import React, { useState } from 'react';
import { MandiRate } from '../types/commodity';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface LiveMandiTickerProps {
  rates: MandiRate[];
  language: Language;
  onSelectMandiItem?: (item: MandiRate) => void;
}

export const LiveMandiTicker: React.FC<LiveMandiTickerProps> = ({ rates, language }) => {
  const t = TRANSLATIONS[language];
  const [showMandiModal, setShowMandiModal] = useState(false);
  const [selectedRate, setSelectedRate] = useState<MandiRate | null>(null);

  const handleRateClick = (rate: MandiRate) => {
    setSelectedRate(rate);
    setShowMandiModal(true);
  };

  return (
    <>
      <section className="w-full bg-primary-container text-on-primary-fixed overflow-hidden py-2 px-3 shadow-sm select-none border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-1.5 mb-1.5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMandiModal(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary text-[10px] uppercase font-bold tracking-wider hover:bg-secondary/90 transition-colors cursor-pointer shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-surface animate-ping" />
              {t.liveMandi}
            </button>
            <span className="text-[11px] text-primary-fixed-dim truncate">
              {t.liveMandiSub}
            </span>
          </div>

          <button
            onClick={() => setShowMandiModal(true)}
            className="hidden md:inline-flex items-center gap-1 text-[11px] text-secondary-fixed hover:text-surface-container-lowest font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">analytics</span>
            <span>View Mandi Arrival Insights</span>
          </button>
        </div>

        {/* Scrolling Marquee Row */}
        <div className="relative w-full overflow-hidden whitespace-nowrap py-1 bg-black/15 rounded-md">
          <div className="inline-block animate-marquee text-xs text-surface-container-lowest font-medium tracking-wide">
            {rates.concat(rates).map((rate, index) => (
              <span
                key={`${rate.id}-${index}`}
                onClick={() => handleRateClick(rate)}
                className="inline-flex items-center mx-3 cursor-pointer hover:underline text-secondary-fixed"
              >
                <span>{rate.name}:</span>
                <strong className="text-surface-container-lowest ml-1">{rate.rateUsd}</strong>
                <span className="text-[10px] ml-1.5 px-1 py-0.2 rounded bg-surface/10 text-primary-fixed-dim">
                  {rate.change}
                </span>
                <span className="mx-2 text-outline-variant/60">•</span>
              </span>
            ))}
          </div>
        </div>

        <div className="text-[10px] text-primary-fixed-dim/80 italic text-center mt-1">
          *Indicative spot prices based on daily APMC auction benchmarking. Final contract rate determined by packing specification, volume &amp; discharge port.
        </div>
      </section>

      {/* Mandi Intelligence Modal */}
      {showMandiModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-5 shadow-2xl border border-outline-variant/30 flex flex-col gap-4 animate-in fade-in duration-200">
            <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-primary text-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">show_chart</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    Live Mandi Benchmark &amp; Yard Arrivals
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Aggregated real-time wholesale terminal APMC market rates across India
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMandiModal(false)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rates.map((rate) => (
                <div
                  key={rate.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    selectedRate?.id === rate.id
                      ? 'bg-primary-container/10 border-primary'
                      : 'bg-surface-container-low border-outline-variant/30 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="font-bold text-xs text-primary">{rate.name}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        rate.trend === 'up'
                          ? 'bg-green-100 text-green-800'
                          : rate.trend === 'down'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {rate.change}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-secondary">{rate.rateUsd}</div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5">
                    Domestic: <strong className="text-primary">{rate.rateInr}</strong>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-outline mt-2 pt-1 border-t border-outline-variant/20">
                    <span>Mandi: {rate.mandi}</span>
                    <span className="font-medium text-primary-container">Vol: {rate.arrivalVolume}</span>
                  </div>
                  <div className="text-[10px] text-secondary font-medium mt-1">
                    Status: {rate.harvestState}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-surface-container text-xs text-on-surface-variant flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                verified
              </span>
              <p>
                <strong>Ex-Warehouse Procurement Guarantee:</strong> SDN Exim locks benchmark contract prices within 48 hours of Proforma Invoice issuance, shielding foreign importers from domestic spot fluctuations during container staging.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowMandiModal(false)}
                className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold hover:bg-primary/90 transition-colors"
              >
                Back to Trading Floor
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
