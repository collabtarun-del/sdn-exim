export type CategoryFilter = 'all' | 'spices' | 'grains' | 'allium' | 'seeds';

export type Currency = 'USD' | 'INR';

export type Language = 'en' | 'hi' | 'ar';

export interface Commodity {
  id: string;
  name: string;
  category: 'spices' | 'grains' | 'allium' | 'seeds';
  grade: string;
  origin: string;
  priceUsdMin: number | string;
  priceUsdMax: number | string;
  priceInrMin: number | string;
  priceInrMax: number | string;
  unit: string;
  badge: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary';
  originBadge: string;
  description: string;
  moq: string;
  moisture: string;
  transitTemp: string;
  packaging: string;
  purity?: string;
  curcumin?: string;
  shu?: string;
  aflatoxin?: string;
  volatileOil?: string;
  image: string;
  hsnCode: string;
  shelfLife: string;
  containerStuffing: {
    container20ft: string;
    container40ftHc: string;
    palletized: boolean;
  };
  coa: {
    labName: string;
    sampleLot: string;
    testDate: string;
    parameters: { name: string; value: string; standard: string }[];
    pesticideMrlStatus: 'COMPLIANT' | 'US_FDA_PASS' | 'EU_REG_PASS';
    heavyMetals: string;
    salmonellaEcoli: string;
  };
}

export interface MandiRate {
  id: string;
  name: string;
  mandi: string;
  rateUsd: string;
  rateInr: string;
  trend: 'up' | 'down' | 'steady';
  change: string;
  arrivalVolume: string;
  harvestState: string;
}

export interface QuoteRequest {
  id?: string;
  buyerName: string;
  companyName: string;
  destCountry: string;
  buyerEmail: string;
  buyerWhatsApp: string;
  selectedCommodity: string;
  reqQuantity: string;
  packPreference: string;
  incotermPref: 'CIF' | 'FOB' | 'CFR' | 'EXW';
  buyerNotes: string;
  createdAt?: string;
}

export interface ShipmentTracking {
  blNumber: string;
  containerNumber: string;
  vesselName: string;
  originPort: string;
  destinationPort: string;
  commodity: string;
  volumeMT: number;
  eta: string;
  status: 'In Transit' | 'Customs Cleared' | 'Vessel Berthed' | 'Stuffing Completed';
  progressPercent: number;
  milestones: {
    title: string;
    date: string;
    location: string;
    completed: boolean;
  }[];
}
