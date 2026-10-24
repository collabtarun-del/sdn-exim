import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface ExportRoadmapProps {
  language: Language;
  onRequestSample: () => void;
}

const STEPS = [
  {
    num: '01',
    title: 'Inquiry & Technical Spec Sheet',
    desc: 'Buyer submits commodity parameters (moisture, size calibration, foreign matter tolerance) and target discharge port.'
  },
  {
    num: '02',
    title: 'Sample Dispatch via Air Courier',
    desc: 'DHL/FedEx physical sample dispatched with certified lab COA (Certificate of Analysis) within 48 hours for buyer approval.'
  },
  {
    num: '03',
    title: 'Proforma Invoice & Contract Sign-off',
    desc: 'Final commercial contract executed with exact incoterms, packaging artwork, delivery windows, and arbitration clauses.'
  },
  {
    num: '04',
    title: 'Order Confirmation & LC / Escrow',
    desc: 'Secure payment settlement opened: Irrevocable Letter of Credit (LC at Sight) from Tier-1 international bank or agreed Advance TT.'
  },
  {
    num: '05',
    title: 'Farm Quality Check & Sortex Grading',
    desc: 'Multi-tier grading at aggregation hubs with computerized color sorting, gravity separation, and metal detection.'
  },
  {
    num: '06',
    title: 'Custom Packing & Methyl Bromide Fumigation',
    desc: 'Sealed export packaging followed by certified phytosanitary gas fumigation compliant with importing nation biosecurity laws.'
  },
  {
    num: '07',
    title: 'Customs Clearance & Vessel Loading',
    desc: 'Port container stuffing under high-definition photo/video audit at Mundra or JNPT with government shipping bill generation.'
  },
  {
    num: '08',
    title: 'Bill of Lading & Destination Discharge',
    desc: 'Original negotiable shipping documents, Insurance, Health Certificate & COO surrendered through bank for swift harbor clearance.'
  }
];

export const ExportRoadmap: React.FC<ExportRoadmapProps> = ({
  language,
  onRequestSample
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="w-full px-4 md:px-8 max-w-5xl mx-auto py-14 flex flex-col gap-8">
      <div className="flex flex-col gap-1.5 text-center max-w-xl mx-auto">
        <span className="text-xs text-secondary uppercase font-bold tracking-widest">
          Rigorous Execution
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
          {t.roadmapTitle}
        </h2>
        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
          {t.roadmapSub}
        </p>
      </div>

      {/* Stepper List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 relative">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm border border-outline-variant/30 flex items-start gap-3.5 hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-secondary-container flex items-center justify-center shrink-0 font-bold text-sm shadow-xs font-serif">
              {step.num}
            </div>
            <div className="flex flex-col">
              <h4 className="font-serif text-sm font-bold text-primary">
                {step.title}
              </h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Air sample CTA strip */}
      <div className="rounded-2xl bg-primary-container text-on-primary-fixed p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-primary-fixed/20 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-[22px]">flight_takeoff</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary-fixed">
              Need physical samples before signing contracts?
            </h4>
            <p className="text-xs text-surface-container-low">
              We dispatch 500g sealed export samples via DHL Express with complete lab COA within 48 hours worldwide.
            </p>
          </div>
        </div>

        <button
          onClick={onRequestSample}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-primary text-xs font-bold hover:bg-surface-container active:scale-95 transition-all shadow-xs cursor-pointer"
        >
          Request Courier Samples
        </button>
      </div>
    </section>
  );
};
