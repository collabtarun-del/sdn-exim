import React from 'react';
import { QuoteRequest, Commodity } from '../types/commodity';

interface ProformaModalProps {
  quote: QuoteRequest | null;
  refNumber: string;
  commodities: Commodity[];
  onClose: () => void;
}

export const ProformaModal: React.FC<ProformaModalProps> = ({
  quote,
  refNumber,
  commodities,
  onClose
}) => {
  if (!quote) return null;

  const matched = commodities.find(
    (c) => c.name.toLowerCase() === quote.selectedCommodity.toLowerCase()
  );

  const rawPrice = matched ? matched.priceUsdMin : 0;
  const parsedNum = typeof rawPrice === 'number' ? rawPrice : parseFloat(String(rawPrice).replace(/[^0-9.]/g, ''));
  const hasNumericPrice = !isNaN(parsedNum) && parsedNum > 0;
  const pricePerTon = hasNumericPrice ? parsedNum : 0;
  // Parse MT quantity number
  const mtMatch = quote.reqQuantity.match(/(\d+(\.\d+)?)/);
  const tons = mtMatch ? parseFloat(mtMatch[1]) : 28;
  const subtotal = Math.round(pricePerTon * tons);
  const estimatedFreight = quote.incotermPref === 'CIF' && hasNumericPrice ? Math.round(tons * 45) : 0;
  const estimatedInsurance = quote.incotermPref === 'CIF' && hasNumericPrice ? Math.round(subtotal * 0.0035) : 0;
  const grandTotal = subtotal + estimatedFreight + estimatedInsurance;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white text-black rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-gray-300 flex flex-col gap-6 animate-in fade-in duration-200 print:p-0 print:border-none print:shadow-none">
        {/* Printable Header */}
        <div className="flex items-start justify-between border-b-2 border-primary pb-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary text-secondary-container flex items-center justify-center font-serif font-bold text-base">
                S
              </div>
              <h2 className="font-serif text-xl font-bold tracking-tight text-primary">
                SDN INTERNATIONAL EXIM
              </h2>
            </div>
            <p className="text-[10px] text-gray-600 mt-1">
              Merchant Exporter • Commercial Division • Thandla, Jhabua, Madhya Pradesh, India
            </p>
            <p className="text-[10px] text-gray-600">
              Corporate Office: Thandla, Jhabua, Madhya Pradesh, India • Email: [AAPKI EMAIL] • WhatsApp/Phone: +91 9752780042
            </p>
          </div>

          <div className="text-right">
            <span className="px-2.5 py-1 rounded bg-primary text-white font-serif text-xs font-bold uppercase tracking-wider block">
              PROFORMA INVOICE
            </span>
            <span className="font-mono text-xs font-bold text-gray-800 block mt-1">
              REF: {refNumber}
            </span>
            <span className="text-[10px] text-gray-500 block">
              Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Consignee & Shipment Details */}
        <div className="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-3.5 rounded-xl border border-gray-200">
          <div>
            <span className="text-gray-400 font-bold uppercase text-[9px] block">
              BUYER / CONSIGNEE:
            </span>
            <strong className="text-sm font-bold text-gray-900 block">
              {quote.buyerName || 'Authorized Procurement Officer'}
            </strong>
            <span className="text-gray-700 block font-medium">
              {quote.companyName || 'International Food Trading FZE'}
            </span>
            <span className="text-gray-600 block mt-0.5">
              Email: {quote.buyerEmail}
            </span>
            <span className="text-gray-600 block">
              Tel: {quote.buyerWhatsApp}
            </span>
          </div>

          <div>
            <span className="text-gray-400 font-bold uppercase text-[9px] block">
              SHIPMENT &amp; LOGISTICS:
            </span>
            <span className="text-gray-800 block">
              <strong>Incoterm:</strong> {quote.incotermPref} (Incoterms 2020)
            </span>
            <span className="text-gray-800 block">
              <strong>Discharge Harbor:</strong> {quote.destCountry}
            </span>
            <span className="text-gray-800 block">
              <strong>Outbound Port:</strong> Mundra Port (INMUN1) / JNPT (INNSA1)
            </span>
            <span className="text-gray-800 block">
              <strong>Packaging:</strong> {quote.packPreference}
            </span>
          </div>
        </div>

        {/* Commercial Items Table */}
        <div className="rounded-xl overflow-hidden border border-gray-200 text-xs">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-800 font-bold">
              <tr>
                <th className="p-2.5">Item &amp; Quality Specification</th>
                <th className="p-2.5 text-center">Quantity</th>
                <th className="p-2.5 text-right">Unit Price ({quote.incotermPref})</th>
                <th className="p-2.5 text-right">Amount (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2.5">
                  <strong className="font-serif text-sm block text-gray-900">
                    {quote.selectedCommodity}
                  </strong>
                  <span className="text-gray-600 text-[11px] block">
                    {matched ? matched.grade : 'Certified Sortex Export Grade Lot'}
                  </span>
                  <span className="text-[10px] text-gray-500 block italic">
                    Specs: {quote.buyerNotes || 'Moisture <12%, Sortex 99.5%, EU/US FDA MRL Compliant'}
                  </span>
                </td>
                <td className="p-2.5 text-center font-bold text-gray-800">
                  {tons} MT
                </td>
                <td className="p-2.5 text-right font-medium">
                  {hasNumericPrice ? `$${pricePerTon.toLocaleString()}/MT` : 'Price on Request'}
                </td>
                <td className="p-2.5 text-right font-bold text-gray-900">
                  {hasNumericPrice ? `$${subtotal.toLocaleString()}` : 'Price on Request'}
                </td>
              </tr>

              {estimatedFreight > 0 && (
                <tr className="bg-gray-50/50">
                  <td colSpan={3} className="p-2 text-right text-gray-600 font-medium">
                    Ocean Freight Allocation to {quote.destCountry.split('(')[0]}:
                  </td>
                  <td className="p-2 text-right font-semibold text-gray-800">
                    ${estimatedFreight.toLocaleString()}
                  </td>
                </tr>
              )}

              {estimatedInsurance > 0 && (
                <tr className="bg-gray-50/50">
                  <td colSpan={3} className="p-2 text-right text-gray-600 font-medium">
                    110% Marine Cargo Risk Transit Cover (Institute Cargo Clauses A):
                  </td>
                  <td className="p-2 text-right font-semibold text-gray-800">
                    ${estimatedInsurance.toLocaleString()}
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="bg-gray-100 font-bold text-sm">
              <tr>
                <td colSpan={3} className="p-3 text-right text-gray-900">
                  Total Contract Value ({quote.incotermPref} Basis):
                </td>
                <td className="p-3 text-right text-primary text-base font-serif">
                  {hasNumericPrice ? `$${grandTotal.toLocaleString()} USD` : 'Price on Request'}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Banking Settlement & Validity Terms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-gray-50 p-3.5 rounded-xl border border-gray-200">
          <div>
            <span className="text-gray-400 font-bold uppercase text-[9px] block">
              SETTLEMENT INSTRUMENT:
            </span>
            <p className="text-[11px] text-gray-700 leading-normal">
              100% Irrevocable Letter of Credit (LC at Sight) payable against original shipping documents, or 30% TT advance and 70% against faxed Bill of Lading copy.
            </p>
          </div>
          <div>
            <span className="text-gray-400 font-bold uppercase text-[9px] block">
              PRICE VALIDITY &amp; STUFFING:
            </span>
            <p className="text-[11px] text-gray-700 leading-normal">
              Valid for 7 business days from date of issue. Container stuffing schedule within 5 business days of confirmed LC advice.
            </p>
          </div>
        </div>

        {/* Stamp & Signature Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-serif font-bold text-[10px] text-center p-1 leading-tight">
              SDN EXIM
            </div>
            <div className="text-[10px] text-gray-600">
              Digitally Sealed &amp; Authorized • Sovereign Agricultural Export Division
            </div>
          </div>

          <div className="text-right">
            <span className="font-serif font-bold text-gray-900 block text-sm">
              SDN International Exim
            </span>
            <span className="text-[10px] text-gray-500 block">
              Authorized Signatory
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-end gap-3 pt-2 print:hidden border-t border-gray-200">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print / Save PDF</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Close Proforma
          </button>
        </div>
      </div>
    </div>
  );
};
