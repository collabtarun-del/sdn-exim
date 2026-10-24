import React from 'react';
import { Language } from '../types/commodity';

interface FooterProps {
  language: Language;
  onOpenCatalog: () => void;
  onOpenTracker: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCatalog,
  onOpenTracker,
  onOpenQuote
}) => {
  return (
    <footer className="w-full bg-surface-container-high/90 mt-12 pt-10 pb-28 md:pb-12 px-4 md:px-8 border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Merchant Exporter Summary */}
        <div className="flex flex-col gap-1.5 bg-surface-container-lowest/90 p-4 rounded-xl shadow-xs border border-outline-variant/20">
          <span className="text-xs text-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">business</span>
            SDN International Exim
          </span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Merchant exporter based in Thandla, Jhabua, Madhya Pradesh, India. Facilitating global container shipments of Indian spices, grains, and agricultural produce.
          </p>
        </div>

        {/* Primary Outbound Hubs */}
        <div className="flex flex-col gap-1.5 bg-surface-container-lowest/80 p-4 rounded-xl shadow-xs border border-outline-variant/20">
          <span className="text-xs text-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">anchor</span>
            Primary Outbound Hubs
          </span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Mundra Port (INMUN1) • Nhava Sheva / JNPT (INNSA1) • Chennai (INMAA1) • Cochin Port (INCOK1) • Air Cargo: DEL, BOM, BLR. International delivery via CIF, FOB, CFR, and DAP incoterms.
          </p>
        </div>

        {/* Quick Nav Columns */}
        <div className="grid grid-cols-2 gap-6 text-xs">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-primary uppercase font-bold tracking-wider">
              Trade Desk
            </span>
            <button
              onClick={onOpenCatalog}
              className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Commodity Catalog
            </button>
            <button
              onClick={onOpenQuote}
              className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Letter of Credit &amp; Escrow
            </button>
            <button
              onClick={onOpenCatalog}
              className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Phytosanitary Specs &amp; COA
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs text-primary uppercase font-bold tracking-wider">
              Enterprise
            </span>
            <a
              href="#quick-quote-section"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Institutional Proforma
            </a>
            <button
              onClick={onOpenTracker}
              className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Container Bill of Lading
            </button>
            <a
              href="#catalog-section"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Export Audit Docs
            </a>
          </div>
        </div>

        {/* Direct Contact Icons & Copyright */}
        <div className="pt-2 flex flex-col gap-3 text-center border-t border-outline-variant/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-on-surface-variant font-medium">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
              <span>Thandla, Jhabua, Madhya Pradesh, India</span>
            </span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="flex items-center gap-1 font-mono">
              <span className="material-symbols-outlined text-[16px] text-secondary">mail</span>
              <span>[AAPKI EMAIL]</span>
            </span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="flex items-center gap-1 font-mono">
              <span className="material-symbols-outlined text-[16px] text-[#25D366]">chat</span>
              <span>+91 9752780042</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 text-on-surface-variant">
            <a
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface hover:text-primary transition-colors shadow-xs"
              href="https://wa.me/919752780042?text=Hello%20SDN%20Exim,%20I%20want%20an%20export%20quote"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+91 9752780042)"
            >
              <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
            </a>
            <a
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface hover:text-primary transition-colors shadow-xs"
              href="tel:+919752780042"
              title="Call Trading Desk (+91 9752780042)"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <a
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface hover:text-primary transition-colors shadow-xs"
              href="mailto:narottampatidar19@gmail.com"
              title="Email: [AAPKI EMAIL]"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
          <p className="text-xs text-outline">
            © SDN International Exim Portal • Thandla, Jhabua, Madhya Pradesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
