import React from 'react';
import { Commodity } from '../types/commodity';

interface TechnicalSpecModalProps {
  commodity: Commodity | null;
  onClose: () => void;
  onRequestQuote: (name: string) => void;
}

export const TechnicalSpecModal: React.FC<TechnicalSpecModalProps> = ({
  commodity,
  onClose,
  onRequestQuote
}) => {
  if (!commodity) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 animate-in fade-in duration-200">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-outline-variant/30">
              <img
                src={commodity.image}
                alt={commodity.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                  Official Lab COA
                </span>
                <span className="text-xs font-mono text-outline">
                  HSN {commodity.hsnCode}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mt-0.5">
                {commodity.name}
              </h3>
              <p className="text-xs text-on-surface-variant">{commodity.grade}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Certificate Metadata Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-surface-container-low text-xs border border-outline-variant/20">
          <div>
            <span className="text-outline text-[10px] uppercase font-bold block">
              Certified Laboratory
            </span>
            <strong className="text-primary">{commodity.coa.labName}</strong>
          </div>
          <div>
            <span className="text-outline text-[10px] uppercase font-bold block">
              Sample Batch Lot
            </span>
            <strong className="text-secondary font-mono">{commodity.coa.sampleLot}</strong>
          </div>
          <div>
            <span className="text-outline text-[10px] uppercase font-bold block">
              Audit Date
            </span>
            <strong className="text-primary">{commodity.coa.testDate}</strong>
          </div>
        </div>

        {/* Laboratory Parameters Table */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-[16px]">
              science
            </span>
            Physicochemical Quality Parameters
          </h4>

          <div className="rounded-xl overflow-hidden border border-outline-variant/20 text-xs">
            <table className="w-full text-left">
              <thead className="bg-surface-container font-semibold text-primary">
                <tr>
                  <th className="p-2.5">Parameter Tested</th>
                  <th className="p-2.5">Analysis Result</th>
                  <th className="p-2.5">Contract Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {commodity.coa.parameters.map((p, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-low/50">
                    <td className="p-2.5 font-medium text-on-surface">{p.name}</td>
                    <td className="p-2.5 font-bold text-secondary">{p.value}</td>
                    <td className="p-2.5 text-on-surface-variant text-[11px]">
                      {p.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regulatory & Safety Clearance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <span className="text-outline text-[10px] uppercase font-bold">
              Pesticide MRL Compliance
            </span>
            <div className="flex items-center gap-1 text-green-700 font-bold">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>
                {commodity.coa.pesticideMrlStatus === 'EU_REG_PASS'
                  ? 'EU Pesticide MRL 2026 Cleared'
                  : commodity.coa.pesticideMrlStatus === 'US_FDA_PASS'
                  ? 'US FDA CFR Title 21 Compliant'
                  : 'International Codex Standard Passed'}
              </span>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-0.5">
              Tested for 450+ multi-residue pesticide compounds via GC-MS/MS &amp; LC-MS/MS.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <span className="text-outline text-[10px] uppercase font-bold">
              Heavy Metals &amp; Microbiology
            </span>
            <div className="font-semibold text-primary">{commodity.coa.heavyMetals}</div>
            <div className="text-[11px] text-on-surface-variant">
              Salmonella &amp; E. Coli: {commodity.coa.salmonellaEcoli}
            </div>
          </div>
        </div>

        {/* Container Stuffing & Packaging Spec */}
        <div className="p-3.5 rounded-xl bg-primary-container/10 border border-primary/20 flex flex-col gap-2 text-xs">
          <div className="font-bold text-primary flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-[16px]">
              inventory_2
            </span>
            Container Logistics &amp; Packing Specifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-outline block">20ft Dry / FCL Payload:</span>
              <strong className="text-primary">{commodity.containerStuffing.container20ft}</strong>
            </div>
            <div>
              <span className="text-outline block">40ft High Cube / Reefer Payload:</span>
              <strong className="text-primary">{commodity.containerStuffing.container40ftHc}</strong>
            </div>
          </div>
          <div className="text-[11px] text-on-surface-variant border-t border-primary/10 pt-1.5">
            <strong>Custom Branding:</strong> Private label artwork supported on BOPP, Jute, and Poly Master bags upon deposit of cylinder plate engraving fees.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-outline-variant/20">
          <button
            onClick={() => {
              window.print();
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Official Spec Sheet</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(commodity.name);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-xs font-bold transition-all shadow-sm"
            >
              Request Quote for this Batch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
