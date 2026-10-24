import { Commodity, MandiRate, ShipmentTracking } from '../types/commodity';

export const INITIAL_COMMODITIES: Commodity[] = [
  {
    id: 'onion-nashik-garva',
    name: 'Nashik Red Onion (Garva Grade)',
    category: 'allium',
    grade: 'Garva Premium Export 45mm - 65mm+',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'In Stock • Reefer Ready',
    badgeType: 'primary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Calibrated 45mm - 65mm+ dry skin export sorted. Low pungency, high solid matter for long maritime transit.',
    moq: '1 FCL (28 MT)',
    moisture: '< 12.0%',
    transitTemp: '+1°C to +3°C',
    packaging: 'Mesh Bags: 5kg, 10kg, 25kg, 50kg • Jute Bags upon order',
    hsnCode: '0703.10.10',
    shelfLife: '45-60 Days in Reefer Container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa7DTxtALoRCmNI7IczkjquChTJj18Ywgy2M1HXrKeEhA0yR3YZfZbkwNB-Zy3wtzkgB2USWoM1g-JXuBgrsWXFs17wKZWYymlBUcCVhoWRVzKDglOqu4dXzBEbjtoceap6Cy8mnEjjRXJuRlNmxbzDM-i09SRcjBB2a5ewBkRfALMikuF8iNqM6ptAXvTVUDBdoai6lNEQXYs-qqXoPj5KzrxKvyd2P2oWD3KmbyFqUmXjqDhF6uG1g',
    containerStuffing: {
      container20ft: '14 MT (Not recommended for perishable)',
      container40ftHc: '28-29 MT in 40ft High Cube Reefer (2900 Mesh Sacks of 10kg)',
      palletized: true,
    },
    coa: {
      labName: 'SGS India / Testing Station',
      sampleLot: 'SDN-LOT-NSK-2026-88',
      testDate: 'October 2026',
      pesticideMrlStatus: 'EU_REG_PASS',
      heavyMetals: 'Lead (Pb) < 0.1 mg/kg, Cadmium < 0.05 mg/kg (Compliant)',
      salmonellaEcoli: 'Absent in 25g (Clean)',
      parameters: [
        { name: 'Size Diameter Range', value: '55mm to 65mm (>85%)', standard: 'Agmark Extra Special' },
        { name: 'Total Soluble Solids (Brix)', value: '12.4° Brix', standard: 'Min 11.0° Brix' },
        { name: 'Dry Matter Content', value: '14.2%', standard: 'Min 12.5%' },
        { name: 'Rotten / Sprouted Bulbs', value: '0.0%', standard: 'Max 0.5% at Port Gate' },
        { name: 'Skin Covering', value: 'Double / Triple Tight Papery Skin', standard: 'Commercial Export Norm' }
      ]
    }
  },
  {
    id: 'basmati-1121-steam',
    name: '1121 Basmati Rice (XXL Steam)',
    category: 'grains',
    grade: 'Extra Long Grain XXL Steam',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'Ready Stock • Mundra',
    badgeType: 'primary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Avg grain length: 8.35mm+. Double polished, sortex clean 100%, 0.5% max broken, rich natural aroma.',
    moq: '1 FCL (25 MT)',
    moisture: '12.5% Max',
    transitTemp: 'Ambient Dry (+18°C to +28°C)',
    packaging: 'BOPP Bags, Non-Woven Bags, Master Poly 5kg, 10kg, 20kg, 40kg',
    purity: '95.0% Min',
    hsnCode: '1006.30.20',
    shelfLife: '24 Months',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdXIXKUanIrpNiXrxPfk0qzjYt773MygBOWdU5UWDtT11qnPjn847wintJw89-kuBUy_wUo0TNL_SBP9R2APys0RxP1z3OjYARM9zGne5cvXU12BP9Okm_J122GdHz534pL6MS9toLpVA0zesJqNJkRvYZ9-0B0KhNfoRGp5zG6jwxFCmbQ4XDERvaF43qLpwkYYAxxrCY7XCW-N03Ns5XlEhGZw17aLLzxj_EWTwkBJ3giapUgMgeVA',
    containerStuffing: {
      container20ft: '25-26 MT (1000 bags of 25kg or 2500 bags of 10kg)',
      container40ftHc: '27 MT (Payload weight limits apply)',
      palletized: true,
    },
    coa: {
      labName: 'Intertek Agri Food Services Ltd.',
      sampleLot: 'SDN-LOT-RICE-PUN-901',
      testDate: 'October 2026',
      pesticideMrlStatus: 'COMPLIANT',
      heavyMetals: 'Arsenic < 0.15 mg/kg, Lead < 0.1 mg/kg',
      salmonellaEcoli: 'Negative / Absent',
      parameters: [
        { name: 'Average Grain Length (Pre-cook)', value: '8.38 mm', standard: 'Min 8.30 mm' },
        { name: 'Elongation Ratio (Cooked)', value: '2.5x Length Expansion', standard: 'Min 2.2x' },
        { name: 'Broken Grains (2/3 basis)', value: '0.45%', standard: 'Max 1.0%' },
        { name: 'Purity / Admixture with Other Rice', value: '96.2%', standard: 'Min 95.0%' },
        { name: 'Moisture', value: '11.8%', standard: 'Max 12.5%' }
      ]
    }
  },
  {
    id: 'chilli-guntur-teja-s17',
    name: 'Guntur Teja S17 Chilli (Whole / Powder)',
    category: 'spices',
    grade: 'S17 Teja Supreme High SHU',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'High Demand • 75K SHU',
    badgeType: 'tertiary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Fierce pungency, intense natural ASTA red color value 60-70. Stemless and with-stem sorted.',
    moq: '5 MT',
    moisture: '< 10.0%',
    transitTemp: '+4°C Cold Chain Recommended',
    packaging: 'Jute Bales, PP Woven Bags (10kg, 25kg) with LDPE liner',
    shu: '70k - 80k SHU',
    aflatoxin: '< 10 ppb (EU Norm)',
    hsnCode: '0904.21.10',
    shelfLife: '12 Months (Cold Storage)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2vZA0qrhpGnqOWmZwx2s0WcW8t1iGoTH5oXavfC1BWQsm-uCySOMzOjnooO9sFbErGu5GUMntsmxZy-OHqXzUyJZYEYAE9-EYXWwA4AvZQao0atCNQWhr37UzWR0aNrkuIwjDiWvSkBGut4nYhnOVeenyHuPbK4Ua655hA3vJXoSk9bs4_RibZca9p6T9IT3YvJZRfsdNfbqTRXkAtEDaPWU_-noIRuXgZqOgeTrwtBNmLm56J5G0dw',
    containerStuffing: {
      container20ft: '7-8 MT (Whole in Bales) or 14 MT (Powder)',
      container40ftHc: '14-16 MT (Whole Chillies) / 25 MT (Powder)',
      palletized: false,
    },
    coa: {
      labName: 'Certified Food Testing Laboratory',
      sampleLot: 'SB-GNT-2026-CH-44',
      testDate: 'October 2026',
      pesticideMrlStatus: 'EU_REG_PASS',
      heavyMetals: 'Lead < 2.0 ppm, Cadmium < 0.5 ppm',
      salmonellaEcoli: 'Absent in 25g',
      parameters: [
        { name: 'Scoville Heat Units (SHU)', value: '76,200 SHU', standard: '70,000 - 80,000 SHU' },
        { name: 'Color Value (ASTA)', value: '68 ASTA', standard: '60 - 75 ASTA' },
        { name: 'Total Aflatoxin (B1+B2+G1+G2)', value: '3.8 ppb', standard: 'Max 10.0 ppb' },
        { name: 'Aflatoxin B1', value: '1.9 ppb', standard: 'Max 5.0 ppb' },
        { name: 'Extraneous Matter', value: '0.2%', standard: 'Max 1.0%' }
      ]
    }
  },
  {
    id: 'turmeric-salem-finger',
    name: 'Salem Pure Turmeric Finger & Powder',
    category: 'spices',
    grade: 'Salem Single Boiled Double Polished',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'Curcumin 5.2% Certified',
    badgeType: 'primary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Single boiled double polished fingers. Guaranteed lead-free, non-irradiated, compliant with US FDA & EU pesticide MRLs.',
    moq: '10 MT',
    moisture: '< 10.0%',
    transitTemp: 'Ambient Ventilated (+20°C)',
    packaging: 'Double Jute Gunny Bags 25kg / 50kg or Kraft Paper Bags',
    curcumin: '4.5% - 5.5%',
    purity: '99.0% Min',
    hsnCode: '0910.30.20',
    shelfLife: '24 Months',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOIEvCSsQtropA0JTwvTbATD1Gm-Y39QwAwowYoRSbYES_NZDyU8bmhn6ykRArGMNMd4VuYH3fun4sfiK3tVflnQgnM32cUyFZ8PZe91deOvCIUN2o555jiwusaS0tWOaJ6weI8Zedoc6H1QGam_QU5bLTWdickOMPYZH_a23vQrJKLW9bJKcWLVaKBBAxLmzCPOzgmh5ImX87XAnuWk-fxztUzpL4DtGf4eTaXMDW4ULaewPVIsliMg',
    containerStuffing: {
      container20ft: '18 MT in 25kg / 50kg Jute bags',
      container40ftHc: '26 MT',
      palletized: true,
    },
    coa: {
      labName: 'Eurofins Scientific India Pvt Ltd',
      sampleLot: 'EF-SLM-TURM-2026-09',
      testDate: 'October 2026',
      pesticideMrlStatus: 'US_FDA_PASS',
      heavyMetals: 'Lead (Pb) < 0.5 ppm, Lead Chromate: NIL',
      salmonellaEcoli: 'Absent in 25g',
      parameters: [
        { name: 'Curcumin Content (HPLC)', value: '5.24%', standard: 'Min 4.50%' },
        { name: 'Volatile Essential Oil', value: '4.1% v/w', standard: 'Min 3.5%' },
        { name: 'Total Ash', value: '6.4%', standard: 'Max 8.0%' },
        { name: 'Acid Insoluble Ash', value: '0.6%', standard: 'Max 1.0%' },
        { name: 'Lead Chromate Test', value: 'Negative / Zero Adulteration', standard: 'Zero Tolerance' }
      ]
    }
  },
  {
    id: 'cumin-unjha-seeds',
    name: 'Unjha Cumin Seeds (Jeera)',
    category: 'seeds',
    grade: 'Singapore 99.5% Sortex Clean',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'Singapore 99.5% Machine Clean',
    badgeType: 'primary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Singapore 99.5% purity, sortex cleaned with zero weed seeds. Rich essential volatile oil content (>2.8%).',
    moq: '5 MT',
    moisture: '< 8.5%',
    transitTemp: 'Dry Clean Ambient',
    packaging: 'Multiwall Paper Bags, PP Woven 25kg / 50kg',
    volatileOil: '> 2.8% Min',
    purity: '99.5% Sortex',
    hsnCode: '0909.31.29',
    shelfLife: '18 Months',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZV3DPgCZP4ESvH1yjDNOAia3wprg88UhxNdfyN5_f8SvQvYzt6yCwnkwio38maSR-3Yf6GFEOdBYFGgTuCGp8kiv7Z4cVovyKGiFGkwv8LNe-4F6cNnHtsF0rgSMTx2q75Un4Z0M9n1vfEoNrllstwvK7pprrW9QZCglxcRT6YxVNx6-AOHyQMqVbQm3g_on7_PHDD21-CHQ5VIXw86ZAKgc7QTBCQOOKWfPv1ENV_-oyr29bnNKq7Q',
    containerStuffing: {
      container20ft: '14-15 MT (600 PP sacks of 25kg)',
      container40ftHc: '24 MT',
      palletized: true,
    },
    coa: {
      labName: 'Bureau Veritas Agri Labs India',
      sampleLot: 'BV-UNJ-CUM-2026-17',
      testDate: 'October 2026',
      pesticideMrlStatus: 'EU_REG_PASS',
      heavyMetals: 'Compliant with Codex Alimentarius',
      salmonellaEcoli: 'Absent in 25g',
      parameters: [
        { name: 'Purity Sortex Basis', value: '99.62%', standard: 'Min 99.50%' },
        { name: 'Volatile Essential Oil', value: '3.15% v/w', standard: 'Min 2.80%' },
        { name: 'Foreign Seeds (Weeds)', value: '0.08%', standard: 'Max 0.20%' },
        { name: 'Moisture', value: '7.8%', standard: 'Max 8.5%' }
      ]
    }
  },
  {
    id: 'garlic-white-mandsaur',
    name: 'Fresh White Garlic (Bulbs)',
    category: 'allium',
    grade: 'Class A Extra 35mm - 45mm+ Calibrated',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'Limited Seasonal Allotment',
    badgeType: 'secondary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Calibrated 30mm - 45mm+ diameters. Solid tightly closed cloves, clean roots, 100% loose skin removed.',
    moq: '1 Reefer Cont. (25 MT)',
    moisture: '< 65.0% Fresh',
    transitTemp: 'Reefer -1°C to 0°C',
    packaging: 'Red Mesh Bags 10kg, 20kg, 25kg or Corrugated Master Cartons',
    hsnCode: '0703.20.00',
    shelfLife: '90 Days in Controlled Cold Reefer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnbgQPNulhRAs3ltl1MBz550X7ROfWaFQhyKiLZPMCPEy5J8P3ivbjhNMUQdffXbUh80WtVdLbcsn2n2woUDGrYwsN5DjkiTHEiFM8A8Y1h5rd8sdvbVa_EsNpVFkJzqeIl5vYagGrZCH9HF6mL7wCBltnXVRGKw69IoRjhudbUoEIAh1HBExAnXdKCIkKPdkWinfQd2Pzvzzf6wgiRU3zvIpCzXDM7EuL0P2a4eoeOMh-AxVQsCO9Tg',
    containerStuffing: {
      container20ft: 'Not recommended for long voyages',
      container40ftHc: '25-26 MT in 40ft Reefer (Palletized 2400 cartons)',
      palletized: true,
    },
    coa: {
      labName: 'Central Food Laboratory & Phytosanitary Bureau',
      sampleLot: 'CFL-GAR-MP-2026-03',
      testDate: 'October 2026',
      pesticideMrlStatus: 'COMPLIANT',
      heavyMetals: 'Not Detected',
      salmonellaEcoli: 'Clean / Free of Phytopathogens',
      parameters: [
        { name: 'Bulb Diameter', value: '40mm - 52mm (>90%)', standard: 'Class A Extra' },
        { name: 'Number of Cloves per Bulb', value: '10 - 14 Cloves', standard: 'Solid Compact Cloves' },
        { name: 'Allicin Precursor Bio-active', value: '4.8 mg/g', standard: 'Standard >4.0 mg/g' },
        { name: 'Yellow / Smut Cloves', value: '0.0%', standard: 'Max 0.5%' }
      ]
    }
  },
  {
    id: 'cardamom-malabar-green',
    name: 'Malabar Green Cardamom (8mm Bold)',
    category: 'spices',
    grade: 'AGEB (Aleppey Green Extra Bold 8mm+)',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Kilogram',
    badge: '8mm Bold Extra Green',
    badgeType: 'primary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Known as the Queen of Spices. Rich in oil, full seed count, intense natural botanical fragrance and emerald color.',
    moq: '500 kg (Air/Sea)',
    moisture: '< 10.0%',
    transitTemp: 'Air-Conditioned / Cool Dry',
    packaging: 'Vacuum Poly Pack (5kg, 10kg) inside Air-Tight Master Cartons',
    hsnCode: '0908.31.10',
    shelfLife: '18 Months in Vacuum',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhVCDw6K3pyMpljPVujBJN0X1OYFJK3Yey0lqky3KSWU6vQ0kkrPjU3ORGCiqwNfrLVshpWpPo2yMPKxpk5Ea6wkQ1vLxgojXHvB2rpniHYnrHcNEv3SkiE-bMkplB0o4bjGmjdRYoutRyXW67uP-AXnexFIQbPGQb-UNAtk_OR61SvknRF1Cn021Q4aY_l4xr9n-rkZoiSqtFRsqvKz_8AI1QJ5SAIYnZDZFlyrf6usLDDAGFX2K9aQ',
    containerStuffing: {
      container20ft: 'Consolidated LCL Air Cargo or Sea Container (500kg - 8 MT)',
      container40ftHc: 'Air Freight Preferred (LD3 Containers)',
      palletized: true,
    },
    coa: {
      labName: 'Regional Agri Food Testing Center',
      sampleLot: 'SB-MAL-CD-2026-61',
      testDate: 'October 2026',
      pesticideMrlStatus: 'EU_REG_PASS',
      heavyMetals: 'NIL / Compliant Codex',
      salmonellaEcoli: 'Absent in 25g',
      parameters: [
        { name: 'Pod Diameter', value: '8.0mm to 8.6mm (>88%)', standard: 'AGEB Special Standard' },
        { name: 'Volatile Essential Oil Content', value: '8.4% v/w', standard: 'Min 7.0%' },
        { name: 'Immature / Empty Pods', value: '0.4%', standard: 'Max 1.0%' },
        { name: 'Thrips Scars / Blemishes', value: '< 1.5%', standard: 'Max 3.0%' }
      ]
    }
  },
  {
    id: 'coriander-seeds-eagle',
    name: 'Coriander Seeds (Eagle Quality)',
    category: 'spices',
    grade: 'Eagle / Scooter Clean Sortex Grade',
    origin: '[Enter Origin]',
    priceUsdMin: 'Price on Request',
    priceUsdMax: 'Price on Request',
    priceInrMin: 'Price on Request',
    priceInrMax: 'Price on Request',
    unit: 'Metric Ton',
    badge: 'Eagle / Scooter Quality',
    badgeType: 'primary',
    originBadge: 'Origin: [Enter Origin]',
    description: 'Uniform globular seeds, natural aroma, unadulterated split-free sortex selection. Excellent essential linalool level.',
    moq: '10 MT',
    moisture: '< 8.0%',
    transitTemp: 'Dry Ambient Clean',
    packaging: 'PP Bags or Jute Sacks (20kg / 25kg / 50kg)',
    purity: '99.0% Min',
    hsnCode: '0909.21.10',
    shelfLife: '18 Months',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC76ZCxJ701rP8BZZv7fvVPF0WGH4tcEJhTldQsHNBArUtiXC_BAl4oRomPZnI-iXs_14jm-XwcFOct8B7HRcJTS-8FgTLSq-mIACpgZuDUHdFXCGF9FbmAcuCE7kxlS9nr1ibiAOxBitN6NbYxkMraIWqLRkHeV3pGy9X05Og6-WlZir8tC6Iegzvatpx8Om7nNcmGF5txxqmhNhnUzKkfiWsnxp6yqQm6qv62bxv0h9tskp4l6lZyIg',
    containerStuffing: {
      container20ft: '10-11 MT (Volumetric crop)',
      container40ftHc: '20-22 MT in 40ft High Cube',
      palletized: false,
    },
    coa: {
      labName: 'Agri-Scan Analytical Laboratory',
      sampleLot: 'AS-KOT-COR-2026-11',
      testDate: 'October 2026',
      pesticideMrlStatus: 'COMPLIANT',
      heavyMetals: 'Codex Standard Met',
      salmonellaEcoli: 'Absent in 25g',
      parameters: [
        { name: 'Seed Purity', value: '99.3%', standard: 'Min 99.0%' },
        { name: 'Split Seeds (Dal)', value: '1.8%', standard: 'Max 3.0%' },
        { name: 'Volatile Essential Oil (Linalool)', value: '0.95% v/w', standard: 'Min 0.70%' },
        { name: 'Damaged / Discolored Grains', value: '0.8%', standard: 'Max 2.0%' }
      ]
    }
  }
];

export const MANDI_TICKER_RATES: MandiRate[] = [
  {
    id: 'm-1',
    name: 'Nashik Red Onion (55mm+)',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'Active Crop'
  },
  {
    id: 'm-2',
    name: '1121 Basmati Rice (XXL Steam)',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'New Crop'
  },
  {
    id: 'm-3',
    name: 'Guntur Teja Chilli Powder (S17)',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'Export Lot'
  },
  {
    id: 'm-4',
    name: 'Salem Turmeric Finger (5.2% Curcumin)',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'Peak Arrivals'
  },
  {
    id: 'm-5',
    name: 'Cumin Seeds (Singapore 99%)',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'Sortex Lot'
  },
  {
    id: 'm-6',
    name: 'Fresh Garlic (Mandsaur Grade A)',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'Reefer Dispatch'
  },
  {
    id: 'm-7',
    name: 'Malabar Cardamom 8mm Bold',
    mandi: '[Enter Mandi Name]',
    rateUsd: '[Enter USD Rate]',
    rateInr: '[Enter INR Rate]',
    trend: 'steady',
    change: '[Trend]',
    arrivalVolume: '[Arrival Volume]',
    harvestState: 'Auction Grade'
  }
];

export const SAMPLE_SHIPMENTS: ShipmentTracking[] = [
  {
    blNumber: 'BL-SDN-2026-MND-8821',
    containerNumber: 'MSKU-829104-6',
    vesselName: 'Maersk Mc-Kinney Moller (Voy 2614E)',
    originPort: 'Mundra Port (INMUN1)',
    destinationPort: 'Jebel Ali Port, Dubai (AEJEA)',
    commodity: 'Nashik Red Onion (Garva Grade 55mm+)',
    volumeMT: 28.5,
    eta: 'Oct 28, 2026 • 14:00 GST',
    status: 'In Transit',
    progressPercent: 70,
    milestones: [
      { title: 'Farm Aggregation & Sizing Sortex', date: 'Oct 19, 2026', location: 'Nashik Agro Center', completed: true },
      { title: 'Customs Stuffing & Phytosanitary Seal', date: 'Oct 21, 2026', location: 'Mundra CFS Yard', completed: true },
      { title: 'Vessel Laden & Maritime Sailing', date: 'Oct 23, 2026', location: 'Arabian Sea Corridor', completed: true },
      { title: 'Berthing & Harbor Discharge', date: 'Oct 28, 2026', location: 'Jebel Ali Terminal 2', completed: false }
    ]
  },
  {
    blNumber: 'BL-SDN-2026-JNP-4019',
    containerNumber: 'CMAU-491028-2',
    vesselName: 'CMA CGM Antoine de Saint Exupery',
    originPort: 'Nhava Sheva / JNPT (INNSA1)',
    destinationPort: 'Port of Rotterdam, Netherlands (NLRTM)',
    commodity: 'Salem Pure Turmeric Finger & Powder',
    volumeMT: 26.0,
    eta: 'Nov 12, 2026 • 09:30 CET',
    status: 'In Transit',
    progressPercent: 40,
    milestones: [
      { title: 'Eurofins Laboratory COA Clear', date: 'Oct 16, 2026', location: 'Salem Quality Lab', completed: true },
      { title: 'Container Fumigation (Methyl Bromide)', date: 'Oct 18, 2026', location: 'JNPT Buffer Zone', completed: true },
      { title: 'Loaded on Vessel CMA CGM', date: 'Oct 22, 2026', location: 'JNPT Berth 4', completed: true },
      { title: 'Discharge & EU Customs Release', date: 'Nov 12, 2026', location: 'Rotterdam ECT Delta', completed: false }
    ]
  }
];

export const INCOTERMS_INFO = [
  {
    code: 'FOB',
    title: 'Free On Board (Mundra / JNPT Nhava Sheva)',
    description: 'SDN Exim handles factory packing, inland transport to port, customs export filing, export terminal port handling, and loading onto buyer vessel.',
    bestFor: 'Importers with their own global ocean freight carrier contracts.'
  },
  {
    code: 'CIF',
    title: 'Cost, Insurance & Freight (Discharge Port)',
    description: 'SDN Exim handles everything up to your destination harbor, including 110% Marine Cargo Insurance and ocean freight liner booking.',
    bestFor: 'Turnkey buyers desiring fixed destination harbor landing costs.'
  },
  {
    code: 'CFR',
    title: 'Cost and Freight (Destination Harbor)',
    description: 'Covers freight to buyer harbor; marine transit insurance is covered under the buyer open marine cover.',
    bestFor: 'Traders with comprehensive corporate marine insurance.'
  },
  {
    code: 'EXW',
    title: 'Ex-Works (Aggregation Warehouse Gate)',
    description: 'Goods made ready at our Nashik, Guntur, or Unjha export warehouse. Buyer arranges all transport & clearance.',
    bestFor: 'Domestic consolidators and liaison procurement agents.'
  }
];
