import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { INDUSTRIES_DATA, IndustryItem } from '../data/industriesData';
import { IconHelper } from '../components/common/IconHelper';
import { IndustryVisualCard } from '../components/industries/IndustryVisualCard';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Award,
  Globe2,
  Layers,
  FileCheck,
  TrendingUp,
  Clock,
  Briefcase,
  Workflow,
  HelpCircle,
} from 'lucide-react';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find matching industry by slug, id, or parameterized name
  const industry: IndustryItem =
    INDUSTRIES_DATA.find(
      (ind) =>
        ind.slug === slug ||
        ind.id === slug ||
        ind.name.toLowerCase().replace(/\s+/g, '-') === slug?.toLowerCase()
    ) || INDUSTRIES_DATA[0];

  // Related industries for exploration
  const relatedIndustries = INDUSTRIES_DATA.filter((i) => i.id !== industry.id).slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
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

      {/* Hero Section: Dark Premium with Red Ambient Glow */}
      <section className="bg-[#0A0A0A] text-white py-16 sm:py-20 relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E4032E]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-800/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Left: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-[#E4032E] uppercase tracking-wider font-['Space_Grotesk']">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{industry.visualTheme?.badgeText || 'SPECIALIZED INDUSTRY BLUEPRINT'}</span>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <div className="w-16 h-16 rounded-2xl bg-[#E4032E] text-white flex items-center justify-center shadow-xl shadow-red-600/30 shrink-0">
                  <IconHelper name={industry.iconName} size={32} />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                    {industry.name}
                  </h1>
                  <p className="text-sm sm:text-base text-red-300 font-semibold mt-1 font-['Space_Grotesk']">
                    {industry.tagline || 'Enterprise Language & AI Infrastructure'}
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {industry.desc}
              </p>

              {/* Quick Stat Strip */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4 max-w-2xl">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    PROVEN IMPACT METRIC
                  </div>
                  <div className="text-2xl font-black text-[#E4032E] font-['Space_Grotesk']">
                    {industry.stat}
                  </div>
                  <div className="text-xs text-slate-300">{industry.statLabel}</div>
                </div>

                <div className="h-10 w-px bg-slate-800 hidden sm:block" />

                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    COMPLIANCE STANDARD
                  </div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">
                    {industry.visualTheme?.badgeText || 'ISO 17100 / ISO 27001'}
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold">100% Native Verification</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/quote"
                  className="bg-[#E4032E] hover:bg-[#c30226] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{industry.ctaText || `Request ${industry.name} Proposal`}</span>
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

            {/* Hero Right: Industry Visual Interactive Card */}
            <div className="lg:col-span-5">
              <IndustryVisualCard industry={industry} />
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 01: Overview / Why this industry matters */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E] font-['Space_Grotesk']">
                DOMAIN ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
                Why Specialized Localization Matters for {industry.name}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {industry.detailedDesc || industry.desc}
              </p>
            </div>

            {/* 02: Key Challenges vs Specialized Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Challenges Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-5">
                <div className="flex items-center gap-2.5 text-red-600">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#E4032E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#141414] font-['Space_Grotesk']">
                      Key Industry Challenges
                    </h3>
                    <div className="text-[11px] text-slate-500 font-semibold">Critical failure points</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {industry.keyChallenges.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-start gap-3 shadow-xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#E4032E] mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-red-50/40 border border-red-200/70 space-y-5">
                <div className="flex items-center gap-2.5 text-emerald-600">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#141414] font-['Space_Grotesk']">
                      Rizqoraa Specialized Solutions
                    </h3>
                    <div className="text-[11px] text-emerald-700 font-semibold">Verified enterprise methodology</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {industry.solutionHighlights.map((solution, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-red-200/60 flex items-start gap-3 shadow-xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* 03: Industry-Specific End-to-End Workflow */}
            {industry.workflows && industry.workflows.length > 0 && (
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-500/20 text-[#E4032E] flex items-center justify-center border border-red-500/30">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-['Space_Grotesk']">
                        {industry.name} Production Workflow
                      </h3>
                      <p className="text-xs text-slate-400">
                        Rigorous 4-stage localization & verification pipeline
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700 hidden sm:inline-block">
                    AUDITABLE ARCHITECTURE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.workflows.map((wf) => (
                    <div
                      key={wf.step}
                      className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs pb-1">
                          <span className="font-mono text-[#E4032E] font-black text-xs">
                            STAGE {wf.step}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            Verified Deliverable
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                          {wf.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">
                          {wf.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-900 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{wf.deliverable}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 04: Specialized Compliance & Localization Requirements */}
            {industry.localizationRequirements && (
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#141414] uppercase tracking-wider font-['Space_Grotesk']">
                  <ShieldCheck className="w-4 h-4 text-[#E4032E]" />
                  <span>Regulatory & Technical Compliance Standards</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {industry.localizationRequirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-slate-200/70 text-xs text-slate-700 flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 05: Relevant Services for this Industry */}
            {industry.relevantServices && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E] font-['Space_Grotesk']">
                      INTEGRATED CAPABILITIES
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#141414] font-['Space_Grotesk'] mt-0.5">
                      Relevant Services for {industry.name}
                    </h3>
                  </div>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-[#E4032E] hover:underline flex items-center gap-1"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {industry.relevantServices.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.slug}`}
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors mb-3">
                          <IconHelper name={srv.iconName} size={20} />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                          {srv.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#E4032E] gap-1">
                        <span>Learn Service</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 06: Global & Cultural Considerations */}
            {industry.globalConsiderations && (
              <div className="p-7 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E4032E] uppercase tracking-wider font-['Space_Grotesk']">
                  <Globe2 className="w-4 h-4 text-[#E4032E]" />
                  <span>Global & Cross-Cultural Considerations</span>
                </div>
                <div className="space-y-2">
                  {industry.globalConsiderations.map((gc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{gc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar / Quick Stats & Related Industries (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Stat Callout Card */}
            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 text-center space-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-['Space_Grotesk']">
                PROVEN ENTERPRISE IMPACT
              </span>

              <div className="text-6xl font-black text-[#E4032E] font-['Space_Grotesk'] tracking-tight">
                {industry.stat}
              </div>

              <div className="text-sm font-bold text-white max-w-xs mx-auto">
                {industry.statLabel}
              </div>

              <div className="text-xs text-slate-400 pt-3 border-t border-slate-800">
                Verified benchmark across Rizqoraa client enterprise implementations.
              </div>

              <div className="pt-2">
                <Link
                  to="/quote"
                  className="w-full py-3 px-4 rounded-xl bg-[#E4032E] hover:bg-[#c30226] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-red-600/30"
                >
                  <span>Request Custom SLA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Guaranteed Enterprise Deliverables */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold text-[#141414] uppercase tracking-wider font-['Space_Grotesk']">
                ENTERPRISE SLA GUARANTEES
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Native Certified Linguists</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/70">
                  <ShieldCheck className="w-4 h-4 text-[#E4032E] shrink-0" />
                  <span>SOC-2 & ISO 27001 Data Security</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/70">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>24/7 Follow-the-Sun Global Support</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/70">
                  <Award className="w-4 h-4 text-[#E4032E] shrink-0" />
                  <span>Dedicated Domain Project Manager</span>
                </div>
              </div>
            </div>

            {/* Other Industries Exploration Strip */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#141414] uppercase tracking-wider font-['Space_Grotesk']">
                  Explore Other Sectors
                </h4>
                <Link
                  to="/industries"
                  className="text-[11px] font-bold text-[#E4032E] hover:underline"
                >
                  All 12 →
                </Link>
              </div>

              <div className="space-y-2">
                {relatedIndustries.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/industries/${rel.slug || rel.id}`}
                    className="p-3 bg-slate-50/70 hover:bg-red-50/50 rounded-xl border border-slate-200/80 hover:border-red-200 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-[#E4032E] group-hover:text-white flex items-center justify-center transition-colors text-slate-700 shadow-xs">
                        <IconHelper name={rel.iconName} size={16} />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#E4032E] transition-colors">
                          {rel.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {rel.category}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E4032E] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-600 to-red-800 text-white space-y-3 shadow-xl">
              <h4 className="text-base font-extrabold font-['Space_Grotesk']">
                Need a Custom Localization RFP?
              </h4>
              <p className="text-xs text-red-100 leading-relaxed">
                Connect directly with our {industry.name} translation specialists and solutions architects within 2 business hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#141414] hover:bg-slate-100 text-xs font-bold shadow-md transition-all mt-1"
              >
                <span>Speak with an Architect</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E4032E]" />
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
