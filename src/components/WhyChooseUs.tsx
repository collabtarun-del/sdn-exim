import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="w-full bg-surface-container-low px-4 md:px-8 py-14 border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-1.5 text-center max-w-2xl mx-auto">
          <span className="text-xs text-secondary uppercase font-bold tracking-widest">
            Enterprise Advantage
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
            {t.whyChooseTitle}
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
            {t.whyChooseSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Feature 1 */}
          <div className="rounded-2xl bg-surface-container-lowest p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px] text-secondary-container">
                agriculture
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-primary">
              Direct Farm & Mandi Sourcing
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We source agricultural commodities directly from established farm clusters and primary mandis across India to ensure optimum quality and competitive pricing for global buyers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-surface-container-lowest p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px] text-secondary-container">
                verified_user
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-primary">
              Export Quality &amp; Inspection Assured
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Shipments undergo stringent quality sorting, phytosanitary fumigation, and optional third-party pre-shipment inspection (such as SGS or Bureau Veritas) before container stuffing.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-surface-container-lowest p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px] text-secondary-container">
                package_2
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-primary">
              Custom B2B Private Labelling
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Complete OEM branding solutions: consumer retail packs (500g to 5kg) or bulk export sacks (25kg to 50kg) in high-barrier BOPP, Jute, or nitrogen-flushed foil pouches.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl bg-surface-container-lowest p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px] text-secondary-container">
                directions_boat
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-primary">
              Live Tracking &amp; Port Dispatch
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Fast dispatch pipelines via Mundra, JNPT Nhava Sheva, and Chennai ports with live container telemetry, automated bill of lading generation, and priority customs clearance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
