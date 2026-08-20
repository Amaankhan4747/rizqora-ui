import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../data/mockData';
import { IconHelper } from '../components/common/IconHelper';
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const industry =
    INDUSTRIES_DATA.find(
      (ind) =>
        ind.id === slug ||
        ind.name.toLowerCase().replace(/\s+/g, '-') === slug?.toLowerCase()
    ) || INDUSTRIES_DATA[0];

  const relatedIndustries = INDUSTRIES_DATA.filter((i) => i.id !== industry.id).slice(0, 4);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#E4032E] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/industries" className="hover:text-[#E4032E] transition-colors">
            Industries
          </Link>
          <span>/</span>
          <span className="text-[#E4032E] font-bold">{industry.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E4032E]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-[#E4032E] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDUSTRY BLUEPRINT</span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-16 h-16 rounded-2xl bg-[#E4032E] text-white flex items-center justify-center shadow-lg shadow-red-500/30 shrink-0">
                <IconHelper name={industry.iconName} size={32} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                  {industry.name}
                </h1>
                <p className="text-sm sm:text-base text-red-200/90 font-semibold mt-1">
                  Tailored localization and compliance architecture
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              {industry.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/quote"
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Request {industry.name} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/industries"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3.5 rounded-xl text-sm font-bold border border-slate-700 flex items-center gap-2 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Industries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Key Industry Challenges */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold text-red-500 uppercase tracking-wider">
                <ShieldAlert className="w-5 h-5" />
                <span>Key Industry Challenges</span>
              </div>
              <ul className="space-y-3">
                {industry.keyChallenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/80">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-sm font-medium text-slate-800">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rizqora Solutions */}
            <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100 space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5" />
                <span>Rizqora Specialized Solutions</span>
              </div>
              <ul className="space-y-3">
                {industry.solutionHighlights.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-red-200/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span className="text-sm font-medium text-slate-800">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Stat Callout Box & Related */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 text-center space-y-4 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                PROVEN INDUSTRY IMPACT
              </span>
              <div className="text-6xl font-black text-[#E4032E] font-['Space_Grotesk'] tracking-tight">
                {industry.stat}
              </div>
              <div className="text-sm font-bold text-white max-w-xs mx-auto">
                {industry.statLabel}
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800 w-full">
                Verified benchmark across Rizqora client implementations.
              </div>
            </div>

            {/* Other Industries */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h4 className="text-sm font-bold text-[#141414] uppercase tracking-wider font-['Space_Grotesk']">
                Explore Other Industries
              </h4>
              <div className="space-y-2">
                {relatedIndustries.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/industries/${rel.id}`}
                    className="p-3 bg-white hover:bg-red-50/50 rounded-xl border border-slate-200/80 hover:border-red-200 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#E4032E] group-hover:text-white flex items-center justify-center transition-colors text-slate-700">
                        <IconHelper name={rel.iconName} size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#E4032E] transition-colors">
                        {rel.name}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E4032E] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
