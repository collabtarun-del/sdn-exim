import React, { useState } from 'react';
import { Commodity, Currency, Language, QuoteRequest } from './types/commodity';
import { INITIAL_COMMODITIES } from './data/commodities';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { GoogleSheetSyncBanner } from './components/GoogleSheetSyncBanner';
import { CommodityCatalog } from './components/CommodityCatalog';
import { TechnicalSpecModal } from './components/TechnicalSpecModal';
import { StuffingCalculatorModal } from './components/StuffingCalculatorModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ExportRoadmap } from './components/ExportRoadmap';
import { TradeCorridors } from './components/TradeCorridors';
import { ClientTestimonials } from './components/ClientTestimonials';
import { FaqSection } from './components/FaqSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactDesk } from './components/ContactDesk';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingActions } from './components/FloatingActions';
import { FastQuoteModal } from './components/FastQuoteModal';
import { ShipmentTrackerModal } from './components/ShipmentTrackerModal';
import { LiveRateEditorModal } from './components/LiveRateEditorModal';
import { PdfPriceListModal } from './components/PdfPriceListModal';
import { ProformaModal } from './components/ProformaModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [commodities, setCommodities] = useState<Commodity[]>(() => {
    try {
      const saved = localStorage.getItem('sdn_commodities');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_COMMODITIES;
  });
  const [lastSyncTime, setLastSyncTime] = useState<string>('2 mins ago');

  // Preselected parameters for quote form
  const [preselectedCommodity, setPreselectedCommodity] = useState<string>(
    INITIAL_COMMODITIES[0]?.name || 'Nashik Red Onion (Garva Grade)'
  );
  const [preselectedQuantity, setPreselectedQuantity] = useState<string>('28 MT (1 FCL)');

  // Modal Dialogs state
  const [selectedSpecCommodity, setSelectedSpecCommodity] = useState<Commodity | null>(null);
  const [selectedStuffingCommodity, setSelectedStuffingCommodity] = useState<Commodity | null>(null);
  const [isFastQuoteOpen, setIsFastQuoteOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isSyncEditorOpen, setIsSyncEditorOpen] = useState(false);
  const [isPdfListOpen, setIsPdfListOpen] = useState(false);
  const [activeProforma, setActiveProforma] = useState<{
    quote: QuoteRequest;
    refNumber: string;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (commodityName: string) => {
    setPreselectedCommodity(commodityName);
    scrollToSection('quick-quote-section');
  };

  const handleTransferToQuoteForm = (commodityName: string, qty: string) => {
    setPreselectedCommodity(commodityName);
    setPreselectedQuantity(qty);
    scrollToSection('quick-quote-section');
  };

  const handleUpdateCommodities = (updated: Commodity[]) => {
    setCommodities(updated);
    setLastSyncTime('Just now');
    try {
      localStorage.setItem('sdn_commodities', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleGeneratedProforma = (quote: QuoteRequest, refNumber: string) => {
    setActiveProforma({ quote, refNumber });
  };

  return (
    <div className={`min-h-screen bg-surface text-on-surface flex flex-col font-sans ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Fixed Sticky Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        currency={currency}
        setCurrency={setCurrency}
        onOpenQuote={() => scrollToSection('quick-quote-section')}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenSyncEditor={() => setIsSyncEditorOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 pt-16 flex flex-col">
        {/* Hero Section */}
        <HeroSection
          language={language}
          onOpenQuote={() => scrollToSection('quick-quote-section')}
          onScrollToCatalog={() => scrollToSection('catalog-section')}
        />

        {/* Product Catalog & Pricing Desk */}
        <GoogleSheetSyncBanner
          language={language}
          onOpenPdfPriceList={() => setIsPdfListOpen(true)}
          onOpenSyncEditor={() => setIsSyncEditorOpen(true)}
          lastSyncTime={lastSyncTime}
        />

        {/* Commodity Price Board & Catalog Stream */}
        <CommodityCatalog
          commodities={commodities}
          currency={currency}
          setCurrency={setCurrency}
          language={language}
          onSelectForQuote={handleSelectProductForQuote}
          onOpenSpecs={(comm) => setSelectedSpecCommodity(comm)}
          onOpenStuffingCalc={(comm) => setSelectedStuffingCommodity(comm)}
        />

        {/* Why Choose SDN International Exim */}
        <WhyChooseUs language={language} />

        {/* 8-Stage Export Workflow Roadmap */}
        <ExportRoadmap
          language={language}
          onRequestSample={() => {
            setPreselectedCommodity(commodities[0]?.name || 'Salem Pure Turmeric Finger & Powder');
            setPreselectedQuantity('500g Air Courier Sample Batch');
            scrollToSection('quick-quote-section');
          }}
        />

        {/* Global Reach & Shipping Ports */}
        <TradeCorridors language={language} />

        {/* Verified Overseas Importer Reviews */}
        <ClientTestimonials language={language} />

        {/* Export FAQ Accordion */}
        <FaqSection language={language} />

        {/* Interactive Formal Proforma & Quote Generation Desk */}
        <QuoteSection
          language={language}
          commodities={commodities}
          preselectedCommodity={preselectedCommodity}
          preselectedQuantity={preselectedQuantity}
          onGeneratedProforma={handleGeneratedProforma}
        />

        {/* Contact Details & Direct Desk */}
        <ContactDesk language={language} />

        {/* Corporate Footer */}
        <Footer
          language={language}
          onOpenCatalog={() => scrollToSection('catalog-section')}
          onOpenTracker={() => setIsTrackerOpen(true)}
          onOpenQuote={() => scrollToSection('quick-quote-section')}
        />
      </main>

      {/* Floating Sticky Actions (Desk Call & WhatsApp Primary) */}
      <FloatingActions language={language} />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        language={language}
        currency={currency}
        onToggleCurrency={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
        onOpenCatalog={() => scrollToSection('catalog-section')}
        onOpenFastQuote={() => setIsFastQuoteOpen(true)}
      />

      {/* MODALS */}
      {/* 1. Technical COA Spec Sheet Modal */}
      {selectedSpecCommodity && (
        <TechnicalSpecModal
          commodity={selectedSpecCommodity}
          onClose={() => setSelectedSpecCommodity(null)}
          onRequestQuote={handleSelectProductForQuote}
        />
      )}

      {/* 2. Container Stuffing Calculator Modal */}
      {selectedStuffingCommodity && (
        <StuffingCalculatorModal
          commodity={selectedStuffingCommodity}
          onClose={() => setSelectedStuffingCommodity(null)}
          onRequestQuote={handleTransferToQuoteForm}
        />
      )}

      {/* 3. Fast Quote Estimator Modal */}
      {isFastQuoteOpen && (
        <FastQuoteModal
          commodities={commodities}
          currency={currency}
          onClose={() => setIsFastQuoteOpen(false)}
          onTransferToForm={handleTransferToQuoteForm}
        />
      )}

      {/* 4. Container Bill of Lading Tracker */}
      {isTrackerOpen && (
        <ShipmentTrackerModal onClose={() => setIsTrackerOpen(false)} />
      )}

      {/* 5. Live Google Sheets Rate Manager / Admin Simulator */}
      {isSyncEditorOpen && (
        <LiveRateEditorModal
          commodities={commodities}
          onUpdateCommodities={handleUpdateCommodities}
          onClose={() => setIsSyncEditorOpen(false)}
        />
      )}

      {/* 6. Export Price List Printable Schedule */}
      {isPdfListOpen && (
        <PdfPriceListModal
          commodities={commodities}
          currency={currency}
          onClose={() => setIsPdfListOpen(false)}
        />
      )}

      {/* 7. Official Proforma Invoice Sheet Modal */}
      {activeProforma && (
        <ProformaModal
          quote={activeProforma.quote}
          refNumber={activeProforma.refNumber}
          commodities={commodities}
          onClose={() => setActiveProforma(null)}
        />
      )}
    </div>
  );
}
