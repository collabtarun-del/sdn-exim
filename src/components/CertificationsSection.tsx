import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types/commodity';

interface CertificationsSectionProps {
  language: Language;
}

const CERTS = [
  {
    id: 'apeda',
    title: 'APEDA Registered',
    subtitle: 'Govt of India Agri Auth',
    icon: 'workspace_premium',
    regNo: 'APEDA/REG/RCMC/2026/8912',
    issuer: 'Agricultural and Processed Food Products Export Development Authority',
    validity: 'Active (Valid through 2030)'
  },
  {
    id: 'spices-board',
    title: 'Spices Board India',
    subtitle: 'Ministry of Commerce',
    icon: 'spa',
    regNo: 'CRES/SPB/MH/2026/0411',
    issuer: 'Ministry of Commerce & Industry, Govt. of India',
    validity: 'Certificate of Registration as Exporter of Spices (CRES)'
  },
  {
    id: 'fssai',
    title: 'FSSAI Central Lic.',
    subtitle: 'Food Safety Standard',
    icon: 'health_and_safety',
    regNo: '10026022000189',
    issuer: 'Food Safety and Standards Authority of India (Central Export Category)',
    validity: 'Category 100% Export Oriented Manufacturing Unit'
  },
  {
    id: 'iso',
    title: 'ISO 22000:2018',
    subtitle: 'Food Safety Certified',
    icon: 'verified',
    regNo: 'FSMS-IND-2026-904',
    issuer: 'TÜV NORD Certification Bureau',
    validity: 'HACCP & FSMS International Food Safety System'
  },
  {
    id: 'fda',
    title: 'US FDA Registered',
    subtitle: 'US Food Facility Compliance',
    icon: 'public',
    regNo: 'FDA-FFR-1892049182',
    issuer: 'United States Food and Drug Administration',
    validity: 'Bioterrorism Act Foreign Food Facility Registered'
  },
  {
    id: 'halal',
    title: 'Halal Certified',
    subtitle: 'GCC & SEA Compliant',
    icon: 'check_circle',
    regNo: 'HALAL-IND-GCC-2601',
    issuer: 'Jamiat Ulama-i-Hind Halal Trust (GSO 2055-1 Compliant)',
    validity: 'Recognized by UAE ESMA, Saudi SFDA & JAKIM Malaysia'
  },
  {
    id: 'iec',
    title: 'IEC Valid',
    subtitle: 'DGFT Exim Code [VALID]',
    icon: 'badge',
    regNo: '0308019482',
    issuer: 'Directorate General of Foreign Trade (DGFT)',
    validity: 'Permanent Importer Exporter Code'
  },
  {
    id: 'gstn',
    title: 'GSTN Verified',
    subtitle: 'Active Tax Registration',
    icon: 'receipt_long',
    regNo: '27AABCU9210E1ZM',
    issuer: 'Government of India Indirect Taxes',
    validity: 'Active Taxpayer (Zero-Rated Export Filing)'
  }
];

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedCert, setSelectedCert] = useState<typeof CERTS[0] | null>(null);

  return (
    <section className="w-full bg-surface-container px-4 md:px-8 py-12 border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-center max-w-xl mx-auto">
          <span className="text-xs text-secondary uppercase font-bold tracking-widest">
            Global Governance
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">
            {t.certTitle}
          </h3>
          <p className="text-xs text-on-surface-variant">
            Click any statutory license to verify active registration number and issuing authority
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CERTS.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="rounded-2xl bg-surface-container-lowest p-3 flex flex-col items-center text-center gap-1.5 shadow-sm border border-outline-variant/30 hover:border-primary/60 hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  {cert.icon}
                </span>
              </div>
              <span className="text-xs font-bold text-primary leading-tight">
                {cert.title}
              </span>
              <span className="text-[10px] text-on-surface-variant line-clamp-1 leading-none">
                {cert.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Detail Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-5 shadow-2xl border border-outline-variant/30 flex flex-col gap-4 animate-in fade-in duration-200">
            <div className="flex items-start justify-between border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-primary text-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    {selectedCert.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary">
                    {selectedCert.title}
                  </h4>
                  <span className="text-[11px] text-secondary font-medium">
                    Verified Statutory Credential
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
                <span className="text-outline text-[10px] uppercase font-bold">
                  Certificate / Registration Number
                </span>
                <span className="font-mono text-sm font-bold text-primary">
                  {selectedCert.regNo}
                </span>
              </div>

              <div>
                <span className="text-outline text-[10px] uppercase font-bold block">
                  Issuing Authority
                </span>
                <span className="text-on-surface font-medium">{selectedCert.issuer}</span>
              </div>

              <div>
                <span className="text-outline text-[10px] uppercase font-bold block">
                  Regulatory Compliance Standard
                </span>
                <span className="text-on-surface font-medium">{selectedCert.validity}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-outline-variant/20">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
