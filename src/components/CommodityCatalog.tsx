import React, { useState, useMemo } from 'react';
import { Commodity, CategoryFilter, Currency, Language } from '../types/commodity';
import { TRANSLATIONS } from '../data/translations';

interface CommodityCatalogProps {
  commodities: Commodity[];
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  onSelectForQuote: (commodityName: string) => void;
  onOpenSpecs: (commodity: Commodity) => void;
  onOpenStuffingCalc: (commodity: Commodity) => void;
}

export const CommodityCatalog: React.FC<CommodityCatalogProps> = ({
  commodities,
  currency,
  setCurrency,
  language,
  onSelectForQuote,
  onOpenSpecs,
  onOpenStuffingCalc
}) => {
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCommodities = useMemo(() => {
    return commodities.filter((c) => {
      const matchesCategory =
        activeCategory === 'all' || c.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.origin.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.grade.toLowerCase().includes(q) ||
        c.hsnCode.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [commodities, activeCategory, searchQuery]);

  const formatPrice = (commodity: Commodity) => {
    const isUsd = currency === 'USD';
    const min = isUsd ? commodity.priceUsdMin : commodity.priceInrMin;
    const max = isUsd ? commodity.priceUsdMax : commodity.priceInrMax;

    const minNum = typeof min === 'number' ? min : parseFloat(String(min).replace(/[^0-9.]/g, ''));
    const maxNum = typeof max === 'number' ? max : parseFloat(String(max).replace(/[^0-9.]/g, ''));

    if (!isNaN(minNum) && minNum > 0) {
      const prefix = isUsd ? '$' : '₹';
      const locale = isUsd ? 'en-US' : 'en-IN';
      const display =
        !isNaN(maxNum) && maxNum > 0 && maxNum !== minNum
          ? `${prefix}${minNum.toLocaleString(locale)} - ${prefix}${maxNum.toLocaleString(locale)}`
          : `${prefix}${minNum.toLocaleString(locale)}`;
      return { price: display, unit: commodity.unit };
    }

    return { price: 'Price on Request', unit: commodity.unit };
  };

  const getWhatsAppLink = (commodity: Commodity) => {
    const text = encodeURIComponent(
      `Hello SDN International Exim,\n\nI am inquiring about export pricing, container stuffing, and current port availability for:\n• Commodity: ${commodity.name}\n• Grade: ${commodity.grade}\n• MOQ: ${commodity.moq}\n\nPlease share today's CIF/FOB proforma invoice.`
    );
    return `https://wa.me/919752780042?text=${text}`;
  };

  return (
    <section
      id="catalog-section"
      className="w-full px-4 md:px-8 max-w-7xl mx-auto pt-12 pb-12 flex flex-col gap-6"
    >
      {/* Header with Title and Currency Toggle */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-[22px]">
              inventory
            </span>
            <span className="text-xs text-secondary uppercase font-bold tracking-wider">
              {t.exportCatalog}
            </span>
          </div>

          {/* Currency Toggle Switch */}
          <div className="inline-flex items-center bg-surface-container p-0.5 rounded-lg shadow-inner border border-outline-variant/30">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currency === 'USD'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              type="button"
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currency === 'INR'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              type="button"
            >
              INR (₹)
            </button>
          </div>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
          {t.priceBoard}
        </h2>
        <p className="text-xs md:text-sm text-on-surface-variant">
          {t.priceBoardDesc}
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col gap-3">
        {/* Search Input */}
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-3 text-[20px] text-outline">
            search
          </span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm border border-outline-variant/30 transition-all"
            type="text"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-outline hover:text-primary"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
            }`}
          >
            {t.allCategories} ({commodities.length})
          </button>
          <button
            onClick={() => setActiveCategory('spices')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
              activeCategory === 'spices'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
            }`}
          >
            {t.spices} (4)
          </button>
          <button
            onClick={() => setActiveCategory('grains')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
              activeCategory === 'grains'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
            }`}
          >
            {t.riceGrains} (1)
          </button>
          <button
            onClick={() => setActiveCategory('allium')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
              activeCategory === 'allium'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
            }`}
          >
            {t.onionGarlic} (2)
          </button>
          <button
            onClick={() => setActiveCategory('seeds')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
              activeCategory === 'seeds'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
            }`}
          >
            {t.seedsHerbs} (1)
          </button>
        </div>
      </div>

      {/* Product Cards Stream */}
      {filteredCommodities.length === 0 ? (
        <div className="rounded-2xl bg-surface-container-lowest p-8 text-center flex flex-col items-center justify-center gap-2 border border-outline-variant/30">
          <span className="material-symbols-outlined text-[40px] text-outline">
            inventory_2
          </span>
          <h3 className="font-serif text-lg font-bold text-primary">No commodities found</h3>
          <p className="text-xs text-on-surface-variant max-w-sm">
            No items matched "{searchQuery}". Try searching for turmeric, onion, basmati, cumin, or chilli.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCommodities.map((commodity) => {
            const { price, unit } = formatPrice(commodity);

            return (
              <div
                key={commodity.id}
                className="rounded-2xl bg-surface-container-lowest p-4 md:p-5 shadow-md flex flex-col justify-between gap-3 border border-outline-variant/30 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-inner group bg-surface-container">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={commodity.image}
                      alt={commodity.name}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Stock / Priority Badge */}
                    <span
                      className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        commodity.badgeType === 'tertiary'
                          ? 'bg-tertiary-container text-tertiary-fixed'
                          : commodity.badgeType === 'secondary'
                          ? 'bg-secondary text-on-secondary'
                          : 'bg-primary text-on-primary'
                      }`}
                    >
                      {commodity.badge}
                    </span>

                    {/* Origin Badge */}
                    <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-surface-container-lowest/90 backdrop-blur-md text-primary text-[10px] font-semibold shadow-xs">
                      {commodity.originBadge}
                    </span>

                    {/* HSN Code Tag */}
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/50 backdrop-blur-xs text-white text-[9px] font-mono">
                      HSN: {commodity.hsnCode}
                    </span>
                  </div>

                  {/* Title and Pricing Header */}
                  <div className="flex items-start justify-between gap-2 mt-3">
                    <div className="flex flex-col">
                      <h3 className="font-serif text-lg font-bold text-primary leading-tight">
                        {commodity.name}
                      </h3>
                      <span className="text-[11px] text-on-surface-variant font-medium">
                        {commodity.grade}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-bold text-lg text-secondary block font-serif">
                        {price}
                      </span>
                      <span className="text-[10px] text-on-surface-variant block">
                        / {unit}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {commodity.description}
                  </p>

                  {/* Technical Specs 3-column Matrix */}
                  <div className="grid grid-cols-3 gap-1.5 py-2 px-2.5 rounded-xl bg-surface-container-low text-xs mt-3 border border-outline-variant/20">
                    <div>
                      <span className="text-outline block text-[9px] uppercase font-bold">
                        MOQ
                      </span>
                      <strong className="text-primary text-[11px] truncate block">
                        {commodity.moq}
                      </strong>
                    </div>

                    <div>
                      <span className="text-outline block text-[9px] uppercase font-bold">
                        {commodity.curcumin
                          ? 'Curcumin'
                          : commodity.shu
                          ? 'SHU Pungency'
                          : commodity.purity
                          ? 'Purity'
                          : 'Moisture'}
                      </span>
                      <strong className="text-primary text-[11px] truncate block">
                        {commodity.curcumin ||
                          commodity.shu ||
                          commodity.purity ||
                          commodity.moisture}
                      </strong>
                    </div>

                    <div>
                      <span className="text-outline block text-[9px] uppercase font-bold">
                        {commodity.transitTemp.includes('Reefer')
                          ? 'Reefer Temp'
                          : 'Transit Norm'}
                      </span>
                      <strong className="text-primary text-[11px] truncate block">
                        {commodity.transitTemp.replace(' Ambient', '')}
                      </strong>
                    </div>
                  </div>

                  {/* Packaging Pill Details */}
                  <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant mt-2.5">
                    <span className="material-symbols-outlined text-[15px] text-secondary shrink-0">
                      inventory_2
                    </span>
                    <span className="truncate">{commodity.packaging}</span>
                  </div>
                </div>

                {/* CTAs Pair + Spec Sheet Action */}
                <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20">
                  <div className="flex items-center justify-between text-xs">
                    <button
                      onClick={() => onOpenSpecs(commodity)}
                      className="text-secondary font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        verified_user
                      </span>
                      <span>{t.viewCoa}</span>
                    </button>

                    <button
                      onClick={() => onOpenStuffingCalc(commodity)}
                      className="text-primary text-[11px] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        calculate
                      </span>
                      <span>Stuffing Calc</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getWhatsAppLink(commodity)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container-high hover:bg-surface-variant text-primary text-xs font-bold transition-all active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#25D366]">
                        chat
                      </span>
                      <span>{t.whatsApp}</span>
                    </a>

                    <button
                      onClick={() => onSelectForQuote(commodity.name)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px] text-secondary-container">
                        request_quote
                      </span>
                      <span>{t.requestQuote}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Indicative Prices Disclaimer Banner */}
      <div className="rounded-xl bg-surface-container-low p-3.5 flex items-start gap-2.5 border border-outline-variant/20 mt-2">
        <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
          info
        </span>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          <strong>Commercial Notice:</strong> Prices are provided upon inquiry and confirmed via formal Proforma Invoice. Rates vary based on target incoterms (FOB/CIF), discharge port, custom packaging specifications, current ocean freight, and consignment volume.
        </p>
      </div>
    </section>
  );
};
