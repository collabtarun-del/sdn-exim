import React, { useState } from 'react';
import { Commodity, Currency } from '../types/commodity';

interface FastQuoteModalProps {
  commodities: Commodity[];
  currency: Currency;
  onClose: () => void;
  onTransferToForm: (commodityName: string, qty: string) => void;
}

export const FastQuoteModal: React.FC<FastQuoteModalProps> = ({
  commodities,
  currency,
  onClose,
  onTransferToForm
}) => {
  const [selectedId, setSelectedId] = useState(commodities[0]?.id || '');
  const [quantityMT, setQuantityMT] = useState(28);
  const [targetPort, setTargetPort] = useState('Jebel Ali Port (UAE)');
  const [incoterm, setIncoterm] = useState<'CIF' | 'FOB'>('CIF');

  const selectedCommodity = commodities.find((c) => c.id === selectedId) || commodities[0];

  const rawMin = currency === 'USD' ? selectedCommodity.priceUsdMin : selectedCommodity.priceInrMin;
  const parsedNum = typeof rawMin === 'number' ? rawMin : parseFloat(String(rawMin).replace(/[^0-9.]/g, ''));
  const hasNumericPrice = !isNaN(parsedNum) && parsedNum > 0;
  const unitRate = hasNumericPrice ? parsedNum : 0;
  const cargoSubtotal = unitRate * quantityMT;
  const oceanFreight = incoterm === 'CIF' && hasNumericPrice ? (currency === 'USD' ? 45 * quantityMT : 3800 * quantityMT) : 0;
  const estimatedTotal = cargoSubtotal + oceanFreight;

  const handleSendWhatsApp = () => {
    const valDisplay = hasNumericPrice
      ? `${currency === 'USD' ? '$' : '₹'}${estimatedTotal.toLocaleString()}`
      : 'Price on Request';
    const text = encodeURIComponent(
      `Hello SDN International Exim,\n\nI am requesting a quote:\n` +
      `• Commodity: ${selectedCommodity.name}\n` +
      `• Target Volume: ${quantityMT} MT\n` +
      `• Destination: ${targetPort}\n` +
      `• Price Indication: ${valDisplay}\n\nPlease share current price quote and container stuffing schedule.`
    );
    window.open(`https://wa.me/919752780042?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-4 animate-in fade-in duration-200">
        <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">calculate</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">
                FOB / CIF Quote Calculator
              </h3>
              <p className="text-xs text-on-surface-variant">
                Configure container volume and request export pricing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3 text-xs">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-primary">Select Commodity</label>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-medium focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {commodities.map((c) => {
                const rateDisplay = currency === 'USD'
                  ? (typeof c.priceUsdMin === 'number' ? `$${c.priceUsdMin}/MT` : `${c.priceUsdMin}`)
                  : (typeof c.priceInrMin === 'number' ? `₹${c.priceInrMin}/MT` : `${c.priceInrMin}`);
                return (
                  <option key={c.id} value={c.id}>
                    {c.name} ({rateDisplay})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-primary">Target Quantity (MT)</label>
              <input
                type="number"
                min={1}
                max={500}
                value={quantityMT}
                onChange={(e) => setQuantityMT(Math.max(1, Number(e.target.value)))}
                className="px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold text-primary">Incoterm</label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setIncoterm('CIF')}
                  className={`py-2 rounded-xl font-bold text-center border ${
                    incoterm === 'CIF'
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container-low text-on-surface border-outline-variant/30'
                  }`}
                >
                  CIF
                </button>
                <button
                  type="button"
                  onClick={() => setIncoterm('FOB')}
                  className={`py-2 rounded-xl font-bold text-center border ${
                    incoterm === 'FOB'
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container-low text-on-surface border-outline-variant/30'
                  }`}
                >
                  FOB
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-primary">Discharge Port</label>
            <select
              value={targetPort}
              onChange={(e) => setTargetPort(e.target.value)}
              className="px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="Jebel Ali Port (UAE)">Jebel Ali Port, Dubai (UAE) - 4 Days</option>
              <option value="Jeddah Islamic Port (KSA)">Jeddah Islamic Port (KSA) - 6 Days</option>
              <option value="Port of Rotterdam (NL)">Port of Rotterdam (Netherlands) - 22 Days</option>
              <option value="Felixstowe Port (UK)">Port of Felixstowe (UK) - 24 Days</option>
              <option value="Port of Singapore (SG)">Port of Singapore (PSA) - 8 Days</option>
              <option value="Port Newark (USA)">Port Newark, New York (USA) - 32 Days</option>
            </select>
          </div>
        </div>

        {/* Calculation Result */}
        <div className="p-4 rounded-xl bg-primary text-on-primary flex flex-col gap-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary-fixed uppercase tracking-wider font-semibold">
              Indicative {incoterm} Total
            </span>
            <span className="text-xl font-bold font-serif text-secondary-container">
              {hasNumericPrice ? (
                <>
                  {currency === 'USD' ? '$' : '₹'}
                  {estimatedTotal.toLocaleString()}{' '}
                  <span className="text-xs font-sans text-surface-container-lowest font-normal">
                    {currency}
                  </span>
                </>
              ) : (
                <span className="text-sm font-sans text-secondary-container font-semibold">
                  Price on Request
                </span>
              )}
            </span>
          </div>

          <div className="flex justify-between text-xs text-surface-container-low pt-1 border-t border-surface-container-lowest/15">
            <span>
              Commodity:{' '}
              {hasNumericPrice
                ? `${currency === 'USD' ? '$' : '₹'}${unitRate.toLocaleString()}/MT`
                : 'Price on Request'}
            </span>
            <span>
              Ocean Freight:{' '}
              {incoterm === 'CIF'
                ? hasNumericPrice
                  ? `${currency === 'USD' ? '$' : '₹'}${oceanFreight.toLocaleString()}`
                  : 'Included in CIF Quote'
                : 'Excluded (FOB)'}
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-outline-variant/20">
          <button
            onClick={handleSendWhatsApp}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Send via WhatsApp</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onTransferToForm(selectedCommodity.name, `${quantityMT} MT`);
            }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary-container">
              assignment_turned_in
            </span>
            <span>Formal Proforma</span>
          </button>
        </div>
      </div>
    </div>
  );
};
