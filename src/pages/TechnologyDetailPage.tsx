import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechnologyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const formattedTitle = (slug || 'Platform')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#E4032E] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/technology" className="hover:text-[#E4032E] transition-colors">
            Technology
          </Link>
          <span>/</span>
          <span className="text-[#E4032E] font-bold">{formattedTitle}</span>
        </div>
      </div>

      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-[#E4032E] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI TECH STACK DEEP DIVE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
              {formattedTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Proprietary neural architecture, API gateways, and automated continuous localization infrastructure designed for hyper-growth enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/quote"
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all"
              >
                <span>Deploy with Rizqora</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/technology"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3.5 rounded-xl text-sm font-bold border border-slate-700 flex items-center gap-2 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Technology</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <Cpu className="w-8 h-8 text-[#E4032E]" />
            <h3 className="text-lg font-bold text-slate-900">Neural Infrastructure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Domain-tuned transformer models running on low-latency edge inference clusters with real-time glossary enforcement.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <h3 className="text-lg font-bold text-slate-900">Enterprise Security</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              SOC 2 Type II certified, GDPR compliant, zero-retention data pipelines ensuring proprietary corporate assets remain private.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <Sparkles className="w-8 h-8 text-[#E4032E]" />
            <h3 className="text-lg font-bold text-slate-900">Continuous Sync</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Native GitHub, GitLab, Contentful, and Figma integrations that automatically detect source updates and deliver localized builds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
