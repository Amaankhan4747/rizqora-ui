import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { IconHelper } from '../components/common/IconHelper';
import { ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  selectedDetailId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedDetailId,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(
    selectedDetailId
      ? SERVICES_DATA.find((s) => s.id === selectedDetailId) || null
      : null
  );

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            FULL SERVICES CATALOG
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Comprehensive Enterprise Language & AI Solutions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            All 10 specialized language solutions engineered to help global businesses communicate effortlessly across international markets.
          </p>
        </div>
      </section>

      {/* Services Grid (All 10 Services) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalService(service)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors">
                    <IconHelper name={service.iconName} size={22} />
                  </div>
                  {service.isPrimary8 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E4032E] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      Core Solution
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                  {service.name}
                </h3>

                <p className="text-xs text-slate-600 font-semibold">
                  {service.oneLineDesc}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {service.fullDesc}
                </p>

                {/* Features Bullets preview */}
                <div className="space-y-1.5 pt-2">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#141414] group-hover:text-[#E4032E]">
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4 text-[#E4032E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Service Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E4032E] text-white flex items-center justify-center shadow-md">
                <IconHelper name={activeModalService.iconName} size={24} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                  SERVICE DEEP-DIVE
                </span>
                <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk']">
                  {activeModalService.name}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            {/* Features & Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                  Key Deliverable Features
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeModalService.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-red-50/60 rounded-2xl border border-red-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                  Measurable Business Benefits
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {activeModalService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#E4032E] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary Use Cases */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Recommended Use Cases
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.useCases.map((uc, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onNavigate('quote');
                }}
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request Quote for {activeModalService.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
