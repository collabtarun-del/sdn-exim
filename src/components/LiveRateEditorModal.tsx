import React, { useState } from 'react';
import { Commodity } from '../types/commodity';

interface LiveRateEditorModalProps {
  commodities: Commodity[];
  onUpdateCommodities: (updated: Commodity[]) => void;
  onClose: () => void;
}

export const LiveRateEditorModal: React.FC<LiveRateEditorModalProps> = ({
  commodities,
  onUpdateCommodities,
  onClose
}) => {
  const [items, setItems] = useState<Commodity[]>(commodities);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const handleFieldChange = (
    id: string,
    field: 'origin' | 'priceUsdMin' | 'priceUsdMax' | 'priceInrMin' | 'priceInrMax' | 'badge',
    val: string
  ) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: val };
        if (field === 'origin') {
          updated.originBadge = `Origin: ${val}`;
        }
        return updated;
      })
    );
  };

  const handleSaveAndSync = () => {
    onUpdateCommodities(items);
    try {
      localStorage.setItem('sdn_commodities', JSON.stringify(items));
    } catch {
      // ignore storage error
    }
    setSyncStatus('Changes saved successfully! Product cards and quotes updated.');
    setTimeout(() => {
      setSyncStatus(null);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-5 md:p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-4 animate-in fade-in duration-200">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <span className="material-symbols-outlined text-[24px]">table_chart</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary font-mono">
                  Live Rate &amp; Origin Manager
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-800 font-bold">
                  Zero-Code Edit Mode
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Edit Commodity Origins, USD / INR Prices &amp; Badges
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-on-surface-variant leading-relaxed">
          You can edit any <strong>Origin</strong>, <strong>USD Price</strong>, <strong>INR Price</strong>, or <strong>Badge</strong> below. Type your custom values or leave placeholders. When you click <strong>Sync to Trading Floor</strong>, your updates will reflect across all product cards, price lists, and quote forms immediately.
        </p>

        {/* Spreadsheet Table View */}
        <div className="rounded-xl overflow-x-auto border border-outline-variant/30 text-xs">
          <table className="w-full text-left">
            <thead className="bg-surface-container-high text-primary font-bold">
              <tr>
                <th className="p-2.5">Commodity</th>
                <th className="p-2.5">Origin (Editable)</th>
                <th className="p-2.5">USD Min</th>
                <th className="p-2.5">USD Max</th>
                <th className="p-2.5">INR Min</th>
                <th className="p-2.5">INR Max</th>
                <th className="p-2.5">Stock Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 bg-surface-container-lowest font-mono">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-surface-container-low/50">
                  <td className="p-2.5 font-sans font-bold text-primary text-xs whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="p-2.5">
                    <input
                      type="text"
                      value={item.origin}
                      onChange={(e) =>
                        handleFieldChange(item.id, 'origin', e.target.value)
                      }
                      placeholder="e.g. Nashik, Maharashtra"
                      className="w-36 px-2 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-xs font-sans text-primary font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </td>
                  <td className="p-2.5">
                    <input
                      type="text"
                      value={String(item.priceUsdMin)}
                      onChange={(e) =>
                        handleFieldChange(item.id, 'priceUsdMin', e.target.value)
                      }
                      placeholder="USD Min"
                      className="w-24 px-2 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-xs text-secondary font-bold focus:ring-1 focus:ring-secondary focus:outline-none"
                    />
                  </td>
                  <td className="p-2.5">
                    <input
                      type="text"
                      value={String(item.priceUsdMax)}
                      onChange={(e) =>
                        handleFieldChange(item.id, 'priceUsdMax', e.target.value)
                      }
                      placeholder="USD Max"
                      className="w-24 px-2 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-xs text-secondary font-bold focus:ring-1 focus:ring-secondary focus:outline-none"
                    />
                  </td>
                  <td className="p-2.5">
                    <input
                      type="text"
                      value={String(item.priceInrMin)}
                      onChange={(e) =>
                        handleFieldChange(item.id, 'priceInrMin', e.target.value)
                      }
                      placeholder="INR Min"
                      className="w-24 px-2 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-xs text-primary font-bold focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </td>
                  <td className="p-2.5">
                    <input
                      type="text"
                      value={String(item.priceInrMax)}
                      onChange={(e) =>
                        handleFieldChange(item.id, 'priceInrMax', e.target.value)
                      }
                      placeholder="INR Max"
                      className="w-24 px-2 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-xs text-primary font-bold focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </td>
                  <td className="p-2.5">
                    <input
                      type="text"
                      value={item.badge}
                      onChange={(e) =>
                        handleFieldChange(item.id, 'badge', e.target.value)
                      }
                      className="w-40 px-2 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-xs font-sans text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {syncStatus && (
          <div className="p-3 rounded-xl bg-green-800 text-white text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <span className="material-symbols-outlined text-[18px]">cloud_done</span>
            <span>{syncStatus}</span>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
          <div className="text-[11px] text-outline">
            Changes are saved to your browser session and immediately update all catalog cards.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-surface-container text-xs font-semibold hover:bg-surface-container-high transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAndSync}
              className="px-5 py-2 rounded-xl bg-secondary hover:bg-secondary/90 text-on-secondary text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">save</span>
              <span>Save &amp; Update Catalog</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
