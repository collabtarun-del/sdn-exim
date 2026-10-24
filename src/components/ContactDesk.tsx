import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface ContactDeskProps {
  language: Language;
}

export const ContactDesk: React.FC<ContactDeskProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="w-full px-4 md:px-8 max-w-7xl mx-auto py-12 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-secondary uppercase font-bold tracking-widest">
          Direct Desk
        </span>
        <h3 className="font-serif text-2xl font-bold text-primary">
          {t.contactDeskTitle}
        </h3>
        <p className="text-xs md:text-sm text-on-surface-variant">
          Connect immediately with senior commodity trading desks and port freight logistics coordinators.
        </p>
      </div>

      <div className="rounded-2xl bg-surface-container-lowest p-5 md:p-6 shadow-md border border-outline-variant/30 flex flex-col gap-6">
        {/* Person Profile Card */}
        <div className="flex items-center gap-3.5 border-b border-outline-variant/20 pb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-container text-secondary-container flex items-center justify-center font-serif text-2xl font-bold shadow-xs">
            SD
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base md:text-lg font-bold text-primary">
              Export Operations Desk
            </span>
            <span className="text-xs text-secondary font-semibold">
              SDN International Exim
            </span>
            <span className="text-[11px] text-on-surface-variant mt-0.5">
              Merchant Exporter • Thandla, Jhabua, Madhya Pradesh, India
            </span>
          </div>
        </div>

        {/* Quick Action Contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary transition-all active:scale-98 border border-outline-variant/20"
            href="https://wa.me/919752780042?text=Hello%20SDN%20International%20Exim,%20I%20am%20inquiring%20about%20agricultural%20commodity%20export."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">
                Official WhatsApp
              </span>
              <span className="text-sm font-bold truncate text-primary font-mono">
                +91 9752780042
              </span>
            </div>
          </a>

          <a
            className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary transition-all active:scale-98 border border-outline-variant/20"
            href="tel:+919752780042"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[18px]">call</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">
                Direct Calling Line
              </span>
              <span className="text-sm font-bold truncate text-primary font-mono">
                +91 9752780042
              </span>
            </div>
          </a>

          <a
            className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary transition-all active:scale-98 border border-outline-variant/20"
            href="mailto:narottampatidar19@gmail.com"
            title="Email: [AAPKI EMAIL]"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">
                Export Desk Email
              </span>
              <span className="text-sm font-bold truncate text-primary font-mono">
                [AAPKI EMAIL]
              </span>
            </div>
          </a>
        </div>

        {/* Address & Operating Hours */}
        <div className="flex flex-col gap-2.5 pt-1 text-xs text-on-surface-variant">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
              location_on
            </span>
            <span className="leading-relaxed">
              <strong>Corporate Trade Office:</strong> Thandla, Jhabua, Madhya Pradesh, India.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
              schedule
            </span>
            <span className="leading-relaxed">
              <strong>Operational Hours:</strong> 09:00 - 20:00 IST (Mon - Sat) • 24/7 Port Logistics Desk for Active Shipments at Mundra &amp; JNPT.
            </span>
          </div>
        </div>

        {/* Google Maps Static Pipeline Container */}
        <div
          className="relative w-full h-36 rounded-xl overflow-hidden bg-cover bg-center border border-outline-variant/30 shadow-inner"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBW0Is5fUVqkQJKx5uxmbzL9O6kWkzQy3Zo9nhcx9y4LpPivdbkdYf_NIM-o71y6cAfrJgQIp5L0Os0ZGSwim8l9wy2nHbT0gXedrRTYc1CIoNFYeLlk5FYK6HW5vXoFeeU4J5y1rYexK5OAXu22RCjc6Og5vWq1a4iVAylgCaLbCE1BnrwMVquSWdGQKcjsrlhE9ffp_p9b241ZIx6dxMWQdsbgDuXp22s_hcriDlOEX3PLx-vPej-hw')`
          }}
        >
          <div className="absolute inset-0 bg-primary/25 backdrop-blur-[0.5px] flex items-center justify-center">
            <div className="px-4 py-2 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md text-primary text-xs font-bold flex items-center gap-2 border border-outline-variant/30">
              <span className="material-symbols-outlined text-[20px] text-secondary">
                map
              </span>
              <span>Thandla, Jhabua, Madhya Pradesh Corporate Office</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
