import React from 'react';
import { PageId } from '../types';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            LEGAL TERMS
          </span>
          <h1 className="text-3xl font-extrabold text-[#141414] font-['Space_Grotesk']">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">Last updated: August 1, 2026</p>
        </div>

        <div className="prose max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
          <p>
            Welcome to Rizqoraa Solutions. By accessing our website, AI localization platform, or ordering enterprise language services, you agree to be bound by these Terms of Service.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">1. Service Level Agreements (SLAs)</h3>
          <p>
            All enterprise translation, MTPE, and LQA orders are governed by individual Statements of Work (SOWs) specifying word count, ISO 17100 quality standards, and turnaround schedules.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">2. Intellectual Property Rights</h3>
          <p>
            Client retains 100% full intellectual property ownership over all translated assets, translation memories (TMs), and customized domain dictionaries created during the engagement.
          </p>

          <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">3. Limitation of Liability</h3>
          <p>
            Rizqoraa Solutions provides quality guarantees through independent LQA and MQM scoring frameworks as specified in standard enterprise agreements.
          </p>
        </div>
      </div>
    </div>
  );
};
