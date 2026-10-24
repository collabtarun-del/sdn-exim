import React from 'react';
import { Commodity, Currency } from '../types/commodity';

interface PdfPriceListModalProps {
  commodities: Commodity[];
  currency: Currency;
  onClose: () => void;
}

export const PdfPriceListModal: React.FC<PdfPriceListModalProps> = ({
  commodities,
  currency,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white text-black rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-300 flex flex-col gap-6 animate-in fade-in duration-200">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-primary pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary text-secondary-container flex items-center justify-center font-serif font-bold text-base">
                S
              </div>
              <h2 className="font-serif text-xl font-bold tracking-tight text-primary">
                SDN INTERNATIONAL EXIM
              </h2>
            </div>
            <p className="text-[10px] text-gray-600 mt-1">
              Merchant Exporter • Thandla, Jhabua, Madhya Pradesh, India
            </p>
            <p className="text-[10px] text-gray-500">
              Corporate Office: Thandla, Jhabua, Madhya Pradesh, India • Email: [AAPKI EMAIL] • WhatsApp/Phone: +91 9752780042
            </p>
          </div>

          <div className="text-right">
            <span className="px-2.5 py-1 rounded bg-secondary text-white font-serif text-xs font-bold uppercase tracking-wider block">
              OFFICIAL EXPORT CATALOG
            </span>
            <span className="font-mono text-xs font-bold text-gray-800 block mt-1">
              SEASON 2026
            </span>
            <span className="text-[10px] text-gray-500 block">
              SDN International Exim
            </span>
          </div>
        </div>

        {/* Notice */}
        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 flex items-start gap-2">
          <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
            info
          </span>
          <p>
            <strong>Standard Incoterm Terms:</strong> Rates indicated are baseline FOB Mundra / JNPT Port or CIF Western European / Middle Eastern discharge hubs. Final contract price subject to customized packaging, private labelling cylinder cost, and order volume.
          </p>
        </div>

        {/* Full Table */}
        <div className="rounded-xl overflow-hidden border border-gray-200 text-xs">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200">
              <tr>
                <th className="p-2.5">Commodity &amp; Grade</th>
                <th className="p-2.5">Origin Terroir</th>
                <th className="p-2.5">Key Laboratory Benchmark</th>
                <th className="p-2.5">MOQ</th>
                <th className="p-2.5 text-right">Indicative Rate ({currency})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {commodities.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-2.5">
                    <strong className="font-serif text-sm block text-gray-900">
                      {item.name}
                    </strong>
                    <span className="text-gray-600 text-[11px] block">
                      {item.grade}
                    </span>
                    <span className="text-gray-400 font-mono text-[9px] block">
                      HSN: {item.hsnCode}
                    </span>
                  </td>
                  <td className="p-2.5 font-medium text-gray-800">
                    {item.origin}
                  </td>
                  <td className="p-2.5 text-gray-700 text-[11px]">
                    {item.curcumin && <div>Curcumin: {item.curcumin}</div>}
                    {item.shu && <div>SHU: {item.shu}</div>}
                    {item.purity && <div>Purity: {item.purity}</div>}
                    <div>Moisture: {item.moisture}</div>
                    <div className="text-[10px] text-green-700 font-semibold">
                      {item.coa.pesticideMrlStatus.replace(/_/g, ' ')}
                    </div>
                  </td>
                  <td className="p-2.5 font-medium text-gray-800 text-[11px]">
                    {item.moq}
                  </td>
                  <td className="p-2.5 text-right font-serif font-bold text-secondary text-sm">
                    {currency === 'USD'
                      ? (typeof item.priceUsdMin === 'number' && typeof item.priceUsdMax === 'number'
                          ? `$${item.priceUsdMin} - $${item.priceUsdMax}`
                          : 'Price on Request')
                      : (typeof item.priceInrMin === 'number' && typeof item.priceInrMax === 'number'
                          ? `₹${item.priceInrMin.toLocaleString('en-IN')} - ₹${item.priceInrMax.toLocaleString('en-IN')}`
                          : 'Price on Request')}
                    <span className="text-[10px] text-gray-500 font-sans block font-normal">
                      / {item.unit}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Commercial Conditions */}
        <div className="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div>
            <strong className="block text-gray-900 mb-1">Payment &amp; Banking:</strong>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              100% Irrevocable Letter of Credit (LC at Sight) from prime bank, or 30% TT advance and 70% against original Bill of Lading.
            </p>
          </div>
          <div>
            <strong className="block text-gray-900 mb-1">Pre-Shipment Inspection:</strong>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Voluntary inspection by SGS, Bureau Veritas, or Intertek at port of stuffing upon buyer request. Fumigation certificates furnished.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-3">
          <div className="text-[10px] text-gray-500 font-mono">
            Document generated: {new Date().toLocaleString()} • SDN-PORTAL-v2.4
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Price List</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
