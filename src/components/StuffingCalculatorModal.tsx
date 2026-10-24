import React, { useState } from 'react';
import { Commodity } from '../types/commodity';

interface StuffingCalculatorModalProps {
  commodity: Commodity | null;
  onClose: () => void;
  onRequestQuote: (commodityName: string, quantityMT: string) => void;
}

export const StuffingCalculatorModal: React.FC<StuffingCalculatorModalProps> = ({
  commodity,
  onClose,
  onRequestQuote
}) => {
  const [containerType, setContainerType] = useState<'40hc' | '20ft'>('40hc');
  const [bagWeightKg, setBagWeightKg] = useState<number>(25);
  const [containersCount, setContainersCount] = useState<number>(1);

  if (!commodity) return null;

  // Commodity packing estimates
  const maxPayloadMT =
    containerType === '40hc'
      ? commodity.category === 'allium'
        ? 28.5
        : commodity.category === 'grains'
        ? 27.0
        : 26.0
      : commodity.category === 'grains'
      ? 25.0
      : commodity.category === 'allium'
      ? 14.0
      : 15.0;

  const totalMT = (maxPayloadMT * containersCount).toFixed(1);
  const totalBags = Math.floor(((Number(totalMT) * 1000) / bagWeightKg));
  const palletsPerContainer = containerType === '40hc' ? 24 : 10;
  const totalPallets = palletsPerContainer * containersCount;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 animate-in fade-in duration-200">
        <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-primary text-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">directions_boat</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Container Stuffing Calculator
              </h3>
              <p className="text-xs text-on-surface-variant">{commodity.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Input Parameters */}
        <div className="flex flex-col gap-3.5 text-xs">
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-primary">Container Specification</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setContainerType('40hc')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  containerType === '40hc'
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-low border-outline-variant/30 text-on-surface'
                }`}
              >
                40ft High Cube / Reefer
              </button>
              <button
                type="button"
                onClick={() => setContainerType('20ft')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  containerType === '20ft'
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-low border-outline-variant/30 text-on-surface'
                }`}
              >
                20ft Standard Dry
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-primary">Packaging Unit Weight</label>
              <select
                value={bagWeightKg}
                onChange={(e) => setBagWeightKg(Number(e.target.value))}
                className="py-2 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value={5}>5 kg BOPP / Mesh Bag</option>
                <option value={10}>10 kg Ventilated Sacks</option>
                <option value={20}>20 kg Bags</option>
                <option value={25}>25 kg Jute / PP Bag</option>
                <option value={50}>50 kg Gunny Sack</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-primary">Number of Containers (FCL)</label>
              <input
                type="number"
                min={1}
                max={50}
                value={containersCount}
                onChange={(e) => setContainersCount(Math.max(1, Number(e.target.value)))}
                className="py-2 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Calculated Results Box */}
        <div className="rounded-xl bg-primary text-on-primary p-4 flex flex-col gap-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-surface-container-lowest/20 pb-2">
            <span className="text-xs text-primary-fixed uppercase tracking-wider font-semibold">
              Estimated Total Cargo Payload
            </span>
            <span className="text-xl font-bold font-serif text-secondary-container">
              {totalMT} MT
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-surface-container-low text-[10px] uppercase block">
                Total Sacks / Bags
              </span>
              <strong className="text-surface-container-lowest text-base">
                {totalBags.toLocaleString()} Units
              </strong>
            </div>

            <div>
              <span className="text-surface-container-low text-[10px] uppercase block">
                Standard Pallets
              </span>
              <strong className="text-surface-container-lowest text-base">
                {totalPallets} Pallets
              </strong>
            </div>
          </div>

          <div className="text-[11px] text-surface-container-low/90 leading-tight">
            *Includes ISPM-15 certified fumigated heat-treated wooden pallets, shrink-wrapping, and desiccant silica gel packets in container ceiling hooks.
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-2 pt-1 border-t border-outline-variant/20">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-surface-container text-xs font-semibold hover:bg-surface-container-high transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(commodity.name, `${totalMT} MT (${containersCount} FCL)`);
            }}
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
          >
            Transfer to Quote Form
          </button>
        </div>
      </div>
    </div>
  );
};
