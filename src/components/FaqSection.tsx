import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface FaqSectionProps {
  language: Language;
}

const FAQS = [
  {
    q: 'What are your Minimum Order Quantities (MOQ)?',
    a: 'For maritime container shipments, our standard MOQ is 1 Full Container Load (FCL): approx 28 Metric Tons for Onions (40ft Reefer), 25 MT for Rice (20ft Dry), and 14-18 MT for Spices. For high-value commodities like Green Cardamom or Saffron, we accept smaller consolidated air cargo orders starting from 500 kg.'
  },
  {
    q: 'What payment terms do you support?',
    a: 'We operate under standard international trade finance instruments: 100% Irrevocable Letter of Credit (LC at Sight) issued by a prime Tier-1 international bank, or Telegraphic Transfer (TT) with a 30% advance deposit upon contract signing and 70% against faxed Bill of Lading copy.'
  },
  {
    q: 'How do you guarantee moisture and aflatoxin control?',
    a: 'All spices undergo calibrated hot-air drying or sun-curing with electronic hygrometer checks before bagging. Chillies are stored in temperature-controlled cold chains (+4°C) to prevent aflatoxin development and maintain color ASTA value throughout maritime transit.'
  },
  {
    q: 'Can you provide SGS or Bureau Veritas inspection?',
    a: 'Yes. We frequently arrange independent third-party inspections by SGS, Bureau Veritas, or Intertek at the port of stuffing. The surveyor inspects weight, sampling, pesticide analysis, and seals containers before customs release.'
  },
  {
    q: 'How fast can a 40ft container be stuffed and dispatched?',
    a: 'For ready-harvest inventory like Nashik Onions and Basmati Rice, stuffing and customs gating at JNPT or Mundra takes 3 to 5 business days from contract execution. Custom-branded packaging lots take 8 to 12 days for initial cylinder prep and printing.'
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-8 max-w-4xl mx-auto py-14 flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-center max-w-md mx-auto">
        <span className="text-xs text-secondary uppercase font-bold tracking-widest">
          Trade Knowledge Base
        </span>
        <h3 className="font-serif text-2xl font-bold text-primary">
          {t.faqTitle}
        </h3>
        <p className="text-xs text-on-surface-variant">
          Essential insights into container stuffing, banking instruments, and port customs
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-surface-container-lowest overflow-hidden shadow-sm border border-outline-variant/30 transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 hover:bg-surface-container-low transition-colors cursor-pointer"
              >
                <span className="font-serif text-sm md:text-base font-bold text-primary">
                  {faq.q}
                </span>
                <span
                  className={`material-symbols-outlined text-outline transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-secondary' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-4 md:px-5 pb-5 text-xs md:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/15 pt-3 animate-in fade-in duration-150">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
