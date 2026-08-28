import React from 'react';
import { PageId } from '../types';
import { TECH_TILES } from '../data/mockData';
import { IconHelper } from '../components/common/IconHelper';
import { ShieldCheck, Cpu, Lock, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  const securityFeatures = [
    'SOC-2 Type II Certified Data Centers',
    'ISO 27001 Information Security Management',
    'End-to-End AES-256 Bit Encryption in Transit & Rest',
    'Strict No-Data-Retention Option for Sensitive AI Prompts',
    'GDPR & HIPAA Compliant Data Handling',
    'Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A0A0A] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#E4032E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            TECHNOLOGY ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Powered by Advanced AI & Language Tech
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Our proprietary language stack seamlessly blends deep neural machine translation models with real-time quality intelligence scoring and cloud security.
          </p>
        </div>
      </section>

      {/* 4 Pillars In-Depth */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TECH_TILES.map((tech) => (
            <div
              key={tech.id}
              className="p-8 bg-slate-50/80 rounded-3xl border border-slate-200 space-y-4 relative overflow-hidden group hover:border-red-200 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] text-[#E4032E] flex items-center justify-center border border-slate-800">
                  <IconHelper name={tech.icon} size={24} />
                </div>
                <span className="text-xs font-bold text-[#E4032E] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
                  {tech.subtitle}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk']">
                {tech.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {tech.desc}
              </p>

              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Technical Specifications
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E]" />
                    <span>Real-time domain dictionary injection & TM memory lookup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E]" />
                    <span>Sub-100ms API inference latency across global regions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E]" />
                    <span>Automated MQM quality error prediction algorithms</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Infrastructure Section */}
        <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              SECURITY & COMPLIANCE
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Bank-Grade Security for Enterprise Data
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We understand that corporate documents, source code, and patient records require absolute confidentiality. Rizqoraa platform operates under strict SOC-2 Type II standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {securityFeatures.map((sec, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#E4032E] shrink-0" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-4">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Integrate directly via API or Connectors
            </h3>
            <p className="text-xs text-slate-400">
              Native API endpoints, Git hooks, WordPress, Contentful, and TMS connectors for seamless continuous translation pipelines.
            </p>

            <button
              onClick={() => onNavigate('quote')}
              className="mt-2 inline-flex items-center gap-2 bg-[#E4032E] hover:bg-[#c30226] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md cursor-pointer"
            >
              <span>Schedule Tech Architecture Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
