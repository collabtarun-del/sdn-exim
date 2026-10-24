import React, { useState } from 'react';
import { SAMPLE_SHIPMENTS } from '../data/commodities';
import { ShipmentTracking } from '../types/commodity';

interface ShipmentTrackerModalProps {
  onClose: () => void;
}

export const ShipmentTrackerModal: React.FC<ShipmentTrackerModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('MSKU-829104-6');
  const [selectedShipment, setSelectedShipment] = useState<ShipmentTracking | null>(
    SAMPLE_SHIPMENTS[0]
  );
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = SAMPLE_SHIPMENTS.find(
      (s) =>
        s.containerNumber.toLowerCase().includes(query.toLowerCase()) ||
        s.blNumber.toLowerCase().includes(query.toLowerCase())
    );
    if (found) {
      setSelectedShipment(found);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 md:p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 animate-in fade-in duration-200">
        <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-primary text-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">sailing</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Container Bill of Lading Tracker
              </h3>
              <p className="text-xs text-on-surface-variant">
                Consignment movement &amp; export dispatch logs
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

        {/* Search input */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-outline">
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Container No (e.g. MSKU-829104-6) or BL No..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Track
          </button>
        </form>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
          <span>Try Active Consignments:</span>
          {SAMPLE_SHIPMENTS.map((s) => (
            <button
              key={s.containerNumber}
              type="button"
              onClick={() => {
                setQuery(s.containerNumber);
                setSelectedShipment(s);
                setNotFound(false);
              }}
              className="px-2 py-0.5 rounded-md bg-surface-container hover:bg-surface-container-high font-mono text-[10px] text-secondary font-bold"
            >
              {s.containerNumber}
            </button>
          ))}
        </div>

        {notFound && (
          <div className="p-3 rounded-xl bg-red-50 text-red-800 text-xs font-semibold">
            Shipment not found. Please try container MSKU-829104-6 (Nashik Onions to Dubai) or CMAU-491028-2 (Turmeric to Rotterdam).
          </div>
        )}

        {selectedShipment && (
          <div className="flex flex-col gap-4">
            {/* Status Card */}
            <div className="p-4 rounded-xl bg-primary text-on-primary flex flex-col gap-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-secondary-container">
                    {selectedShipment.status}
                  </span>
                  <h4 className="font-serif text-base font-bold text-surface-container-lowest">
                    {selectedShipment.commodity}
                  </h4>
                  <span className="text-xs text-surface-container-low font-mono">
                    Container: {selectedShipment.containerNumber} • {selectedShipment.volumeMT} MT
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-primary-fixed block uppercase">ETA Port Discharge</span>
                  <strong className="text-xs text-secondary-container font-mono">
                    {selectedShipment.eta}
                  </strong>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex flex-col gap-1">
                <div className="w-full h-2 rounded-full bg-surface-container-lowest/20 overflow-hidden">
                  <div
                    className="h-full bg-secondary-container rounded-full transition-all duration-500"
                    style={{ width: `${selectedShipment.progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-surface-container-low font-mono">
                  <span>Origin: {selectedShipment.originPort}</span>
                  <span>Destination: {selectedShipment.destinationPort}</span>
                </div>
              </div>
            </div>

            {/* Vessel Info */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-surface-container-low p-3 rounded-xl border border-outline-variant/20">
              <div>
                <span className="text-outline text-[10px] uppercase font-bold block">
                  Carrier &amp; Vessel
                </span>
                <strong className="text-primary">{selectedShipment.vesselName}</strong>
              </div>
              <div>
                <span className="text-outline text-[10px] uppercase font-bold block">
                  Bill of Lading #
                </span>
                <strong className="text-secondary font-mono">{selectedShipment.blNumber}</strong>
              </div>
            </div>

            {/* Milestones Stepper */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Container Movement Log
              </span>
              <div className="flex flex-col gap-2">
                {selectedShipment.milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/20"
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
                        m.completed ? 'text-green-700' : 'text-outline'
                      }`}
                    >
                      {m.completed ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <strong className={m.completed ? 'text-primary' : 'text-outline'}>
                          {m.title}
                        </strong>
                        <span className="text-[10px] text-outline font-mono">{m.date}</span>
                      </div>
                      <span className="text-[11px] text-on-surface-variant block">
                        Location: {m.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-outline-variant/20">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold"
          >
            Close Tracker
          </button>
        </div>
      </div>
    </div>
  );
};
