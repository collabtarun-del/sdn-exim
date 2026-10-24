import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, Commodity, QuoteRequest } from '../types/commodity';

interface QuoteSectionProps {
  language: Language;
  commodities: Commodity[];
  preselectedCommodity: string;
  preselectedQuantity?: string;
  onGeneratedProforma: (quote: QuoteRequest, refNumber: string) => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  language,
  commodities,
  preselectedCommodity,
  preselectedQuantity,
  onGeneratedProforma
}) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<QuoteRequest>({
    buyerName: '',
    companyName: '',
    destCountry: 'UAE - Jebel Ali Port',
    buyerEmail: '',
    buyerWhatsApp: '',
    selectedCommodity: preselectedCommodity || commodities[0]?.name || '',
    reqQuantity: preselectedQuantity || '28 MT (1 FCL)',
    packPreference: 'Standard Export Jute/Mesh (25kg/50kg)',
    incotermPref: 'CIF',
    buyerNotes: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedCommodity) {
      setFormData((prev) => ({
        ...prev,
        selectedCommodity: preselectedCommodity,
        reqQuantity: preselectedQuantity || prev.reqQuantity
      }));
    }
  }, [preselectedCommodity, preselectedQuantity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SDN-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    setSubmittedRef(ref);
    onGeneratedProforma(formData, ref);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello SDN International Exim Desk,\n\nI am requesting an official ${formData.incotermPref} Proforma Quote:\n` +
        `• Name: ${formData.buyerName || 'Trade Buyer'} (${formData.companyName || 'Import Company'})\n` +
        `• Commodity: ${formData.selectedCommodity}\n` +
        `• Target Volume: ${formData.reqQuantity}\n` +
        `• Packaging: ${formData.packPreference}\n` +
        `• Discharge Port: ${formData.destCountry}\n` +
        `• Corporate Email: ${formData.buyerEmail}\n` +
        `• Special Specs: ${formData.buyerNotes || 'Standard Sortex export quality'}\n\nPlease share current vessel sailing schedules and banking L/C conditions.`
    );
    window.open(`https://wa.me/919752780042?text=${text}`, '_blank');
  };

  return (
    <section
      id="quick-quote-section"
      className="w-full bg-surface-container px-4 md:px-8 py-14 border-t border-outline-variant/20"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-1.5 text-center max-w-xl mx-auto">
          <span className="text-xs text-secondary uppercase font-bold tracking-widest">
            Trade Inquiry Desk
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
            {t.inquiryDeskTitle}
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant">
            {t.inquiryDeskSub}
          </p>
        </div>

        {/* The Form Card */}
        <div className="rounded-2xl bg-surface-container-lowest p-5 md:p-8 shadow-xl border border-outline-variant/30 flex flex-col gap-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Buyer & Company Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Full Name &amp; Title *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Tariq Al-Mansoor / John Doe"
                  value={formData.buyerName}
                  onChange={(e) =>
                    setFormData({ ...formData, buyerName: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Company / Trade Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Gulf Harvest Foodstuff LLC / Continental Botanicals"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Destination Country & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Destination Country &amp; Port *
                </label>
                <select
                  required
                  value={formData.destCountry}
                  onChange={(e) =>
                    setFormData({ ...formData, destCountry: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="UAE - Jebel Ali Port">United Arab Emirates (Jebel Ali / Sharjah)</option>
                  <option value="Saudi Arabia - Jeddah / Dammam">Saudi Arabia (Jeddah Islamic / Dammam)</option>
                  <option value="Netherlands - Port of Rotterdam">Netherlands (Port of Rotterdam)</option>
                  <option value="UK - Port of Felixstowe">United Kingdom (Felixstowe / London Gateway)</option>
                  <option value="USA - Port of NY / Savannah">United States (New York / Savannah)</option>
                  <option value="Singapore - Port of Singapore">Singapore (PSA Singapore)</option>
                  <option value="Malaysia - Port Klang">Malaysia (Port Klang / Penang)</option>
                  <option value="Oman - Sohar Port">Oman (Sohar / Sultan Qaboos)</option>
                  <option value="Qatar - Hamad Port">Qatar (Hamad Port)</option>
                  <option value="Other Destination">Other Overseas Port (Specify in notes)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Corporate Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="procurement@company.com"
                  value={formData.buyerEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, buyerEmail: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* WhatsApp & Commodity Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  WhatsApp / Mobile (With Country Code) *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={formData.buyerWhatsApp}
                  onChange={(e) =>
                    setFormData({ ...formData, buyerWhatsApp: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Interested Commodity *
                </label>
                <select
                  required
                  value={formData.selectedCommodity}
                  onChange={(e) =>
                    setFormData({ ...formData, selectedCommodity: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {commodities.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="Mixed Multi-Commodity FCL">
                    Mixed Multi-Commodity Consolidated FCL
                  </option>
                </select>
              </div>
            </div>

            {/* Volume, Packaging & Incoterms */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Target Quantity (MT) *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 56 MT (2 FCL)"
                  value={formData.reqQuantity}
                  onChange={(e) =>
                    setFormData({ ...formData, reqQuantity: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Packaging Style
                </label>
                <select
                  value={formData.packPreference}
                  onChange={(e) =>
                    setFormData({ ...formData, packPreference: e.target.value })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Standard Export Jute/Mesh (25kg/50kg)">
                    Standard Export Sacks (25kg / 50kg)
                  </option>
                  <option value="Custom Private Label BOPP (5kg-10kg)">
                    Custom Private Label (5kg - 10kg)
                  </option>
                  <option value="Consumer Retail Packs (500g-1kg)">
                    Consumer Retail Packs (500g - 1kg)
                  </option>
                  <option value="Jumbo Bulk Bag (1000kg FIBC)">
                    Jumbo Bulk Bag (1000kg FIBC)
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary">
                  Preferred Incoterm
                </label>
                <select
                  value={formData.incotermPref}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      incotermPref: e.target.value as 'CIF' | 'FOB' | 'CFR' | 'EXW'
                    })
                  }
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                  <option value="FOB">FOB (Mundra / JNPT Nhava Sheva)</option>
                  <option value="CFR">CFR (Cost &amp; Freight)</option>
                  <option value="EXW">EXW (Factory Warehouse)</option>
                </select>
              </div>
            </div>

            {/* Additional Specifications */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-primary">
                Technical Specifications &amp; Quality Tolerance
              </label>
              <textarea
                rows={2}
                placeholder="Specify maximum moisture %, max broken grains, specific brand printing, or third-party audit requirements..."
                value={formData.buyerNotes}
                onChange={(e) =>
                  setFormData({ ...formData, buyerNotes: e.target.value })
                }
                className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs md:text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Buttons Dual Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-on-primary text-sm font-bold shadow-md hover:bg-primary/90 active:scale-98 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-container">
                  send
                </span>
                <span>Submit Formal Inquiry &amp; Proforma</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-md active:scale-98 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Instant Quote via WhatsApp</span>
              </button>
            </div>

            {/* Feedback / Reference Banner */}
            {submittedRef && (
              <div className="rounded-xl bg-primary text-on-primary p-4 text-center text-xs md:text-sm border border-secondary-container/40 flex flex-col items-center gap-1 shadow-md animate-in fade-in">
                <div className="flex items-center gap-1.5 text-secondary-container font-bold">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>Inquiry Registered Under Reference #{submittedRef}</span>
                </div>
                <p className="text-surface-container-low">
                  An export officer has been notified. Click below to inspect or print your official Proforma Invoice Sheet.
                </p>
                <button
                  type="button"
                  onClick={() => onGeneratedProforma(formData, submittedRef)}
                  className="mt-1 px-4 py-1.5 rounded-lg bg-secondary text-on-secondary text-xs font-bold hover:bg-secondary/90 transition-colors cursor-pointer"
                >
                  View / Download Proforma Invoice
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
