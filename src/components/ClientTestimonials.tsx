import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface ClientTestimonialsProps {
  language: Language;
}

const TESTIMONIALS = [
  {
    quote:
      'We imported seven 40ft reefer containers of Nashik red onions through Jebel Ali. Sprouting was 0% upon discharge and sizing conformed strictly to the 55mm contract threshold. SDN Exim is now our sole procurement partner for Western India.',
    name: 'Tariq Al-Mansoor',
    role: 'Procurement Director',
    company: 'Gulf Harvest Foodstuff LLC (Dubai, UAE)',
    country: 'United Arab Emirates',
    commodity: 'Nashik Red Onions (Garva Grade)'
  },
  {
    quote:
      'European spice regulations on pesticide MRLs and aflatoxins are notoriously strict. SDN Exim provided comprehensive Eurofins and SGS lab certificates before ship loading. The Salem turmeric fingers arrived in Rotterdam without a single customs delay.',
    name: 'Jan Van Der Meer',
    role: 'Senior Category Trader',
    company: 'Continental Botanicals B.V. (Rotterdam, Netherlands)',
    country: 'Netherlands',
    commodity: 'Salem Pure Turmeric Finger & Powder'
  },
  {
    quote:
      'Exceptional grain length consistency with their 1121 Steam Basmati. Customized 10kg BOPP bags with our private house label arrived crisp and clean in Jeddah port. Highly dependable team.',
    name: 'Sheikh Omar Al-Zahrani',
    role: 'General Manager',
    company: 'Red Sea Grains Corp (Saudi Arabia)',
    country: 'Saudi Arabia',
    commodity: '1121 Basmati Rice (XXL Steam)'
  }
];

export const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="w-full bg-surface-container-low px-4 md:px-8 py-14 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-1 text-center max-w-xl mx-auto">
          <span className="text-xs text-secondary uppercase font-bold tracking-widest">
            Client Testimonials
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary">
            {t.testimonialsTitle}
          </h3>
          <p className="text-xs text-on-surface-variant">
            Verified institutional feedback from procurement directors and category buyers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-surface-container-lowest p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px] fill-current"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-surface-container text-primary">
                    Verified Import Lot
                  </span>
                </div>

                <p className="text-xs md:text-sm text-on-surface italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-primary">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-on-surface-variant leading-tight">
                    {item.role}, {item.company}
                  </span>
                  <span className="text-[10px] text-secondary font-semibold mt-0.5">
                    Lot: {item.commodity}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[26px] text-outline-variant/70 shrink-0">
                  format_quote
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
