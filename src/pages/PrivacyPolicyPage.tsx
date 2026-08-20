import React from 'react';
import { PageId } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-3xl font-extrabold text-[#141414] font-['Space_Grotesk']">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">Last updated: August 1, 2026</p>
        </div>

        <div className="prose max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
          <p>
            Rizqora Solutions Inc. ("Rizqora", "we", "us", or "our") is committed to protecting the privacy and security of your personal data and confidential enterprise documents. This Privacy Policy outlines how we collect, use, process, and safeguard information when you use our website, services, and AI localization platform.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">1. Information We Collect</h3>
          <p>
            We collect information that you provide directly to us when requesting a quote, applying for job positions, or interacting with our translation engines, including contact details, company names, and submitted content files.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">2. Confidentiality & No-Data-Retention Option</h3>
          <p>
            Enterprise customers have the option to enable zero-data-retention for neural machine translation inferences. Your proprietary source texts will never be used to train public language models without explicit contractual consent.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">3. GDPR & International Compliance</h3>
          <p>
            Rizqora Solutions complies with European Union General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and SOC-2 Type II standards.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">4. Security Measures</h3>
          <p>
            We utilize bank-grade AES-256 encryption for data at rest and TLS 1.3 in transit across all global infrastructure regions.
          </p>
        </div>
      </div>
    </div>
  );
};
