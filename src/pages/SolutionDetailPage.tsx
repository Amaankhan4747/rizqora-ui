import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/mockData';
import { IconHelper } from '../components/common/IconHelper';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Globe2,
  Clock,
} from 'lucide-react';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Normalize slug alias like linguistic-quality-assurance -> lqa, etc.
  const normalizedSlug =
    slug === 'linguistic-quality-assurance'
      ? 'lqa'
      : slug === 'desktop-publishing'
      ? 'dtp'
      : slug;

  const service =
    SERVICES_DATA.find(
      (s) =>
        s.id === normalizedSlug ||
        s.id.toLowerCase() === slug?.toLowerCase() ||
        s.name.toLowerCase().replace(/\s+/g, '-') === slug?.toLowerCase()
    ) || SERVICES_DATA[0];

  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#E4032E] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/solutions" className="hover:text-[#E4032E] transition-colors">
            Solutions
          </Link>
          <span>/</span>
          <span className="text-[#E4032E] font-bold">{service.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E4032E]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-[#E4032E] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENTERPRISE LANGUAGE SOLUTION</span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-16 h-16 rounded-2xl bg-[#E4032E] text-white flex items-center justify-center shadow-lg shadow-red-500/30 shrink-0">
                <IconHelper name={service.iconName} size={32} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                  {service.name}
                </h1>
                <p className="text-sm sm:text-base text-red-200/90 font-semibold mt-1">
                  {service.oneLineDesc}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/quote"
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Request {service.name} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3.5 rounded-xl text-sm font-bold border border-slate-700 flex items-center gap-2 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Specifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 8 Cols: Features, Benefits, Use Cases */}
          <div className="lg:col-span-8 space-y-10">
            {/* Key Deliverable Features */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E4032E] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
                    Key Deliverable Features
                  </h3>
                  <p className="text-xs text-slate-500">
                    Engineered workflows and quality controls
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#E4032E] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Business Benefits */}
            <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E4032E] text-white flex items-center justify-center shadow-md">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
                    Measurable Business Benefits
                  </h3>
                  <p className="text-xs text-slate-500">
                    Real-world outcomes proven across global clients
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-red-200/60 shadow-sm space-y-2"
                  >
                    <Sparkles className="w-5 h-5 text-[#E4032E]" />
                    <p className="text-sm font-bold text-slate-800 leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Use Cases */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-[#E4032E]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
                    Recommended Use Cases & Assets
                  </h3>
                  <p className="text-xs text-slate-500">
                    Content types and project specifications suited for {service.name}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {service.useCases.map((useCase, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold border border-slate-200/60"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4 Cols: SLA, Quick Quote & Related Solutions */}
          <div className="lg:col-span-4 space-y-6">
            {/* SLA Card */}
            <div className="p-6 rounded-3xl bg-[#090C15] text-white border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E4032E] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Enterprise SLA & Specs</span>
              </div>

              <div className="space-y-3 divide-y divide-slate-800 text-xs">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Turnaround Speed</span>
                  <span className="font-bold text-white">Same-Day / 24h SLA</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Quality Framework</span>
                  <span className="font-bold text-emerald-400">ISO 17100 / MQM Certified</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Language Coverage</span>
                  <span className="font-bold text-white">1,000+ Pairs</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">API Integration</span>
                  <span className="font-bold text-white">REST, Webhooks, XLIFF</span>
                </div>
              </div>

              <Link
                to="/quote"
                className="w-full block text-center bg-[#E4032E] hover:bg-[#c30226] text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Get Custom Pricing
              </Link>
            </div>

            {/* Related Solutions */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h4 className="text-sm font-bold text-[#141414] uppercase tracking-wider font-['Space_Grotesk']">
                Explore Other Solutions
              </h4>
              <div className="space-y-2">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/solutions/${rel.id === 'lqa' ? 'linguistic-quality-assurance' : rel.id}`}
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
