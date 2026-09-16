import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  WORKFLOW_STEPS_DATA,
  getWorkflowStepBySlug
} from '../data/workflowData';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  ChevronRight,
  FileCheck2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { PageId } from '../types';

interface WorkflowDetailPageProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const WorkflowDetailPage: React.FC<WorkflowDetailPageProps> = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const currentStep = slug ? getWorkflowStepBySlug(slug) : WORKFLOW_STEPS_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!currentStep) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#090C15] text-white flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h2 className="text-2xl font-black font-['Space_Grotesk'] text-white mb-3">Workflow Step Not Found</h2>
          <p className="text-slate-400 text-sm mb-6">The requested workflow phase could not be located.</p>
          <Link
            to="/#workflow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E4032E] text-white text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Workflow</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 pt-24 pb-20 selection:bg-[#E4032E] selection:text-white">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumbs & Quick Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-slate-800/80 mb-8 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/#workflow" className="hover:text-white transition-colors">Workflow</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#E4032E] font-semibold">{currentStep.title}</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* 7-Step Mini Progress Bar */}
        <div className="mb-12 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E4032E]" />
              7-Step Localization Pipeline
            </span>
            <span className="text-[#E4032E] font-['Space_Grotesk'] font-black">
              Step {currentStep.step} of 07
            </span>
          </div>
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
            {WORKFLOW_STEPS_DATA.map((step) => {
              const isActive = step.slug === currentStep.slug;
              const isPast = parseInt(step.step) < parseInt(currentStep.step);

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => navigate(`/workflow/${step.slug}`)}
                  className={`group flex flex-col items-center py-2 px-1 sm:px-2 rounded-xl transition-all text-left ${
                    isActive
                      ? 'bg-[#E4032E]/15 border border-[#E4032E] shadow-[0_0_16px_rgba(228,3,46,0.25)]'
                      : isPast
                      ? 'bg-white/[0.03] border border-slate-700/50 hover:border-slate-600'
                      : 'bg-white/[0.015] border border-white/5 opacity-60 hover:opacity-100 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1 mb-1">
                    <span
                      className={`text-[10px] font-black font-['Space_Grotesk'] ${
                        isActive
                          ? 'text-[#E4032E]'
                          : isPast
                          ? 'text-slate-300'
                          : 'text-slate-500'
                      }`}
                    >
                      {step.step}
                    </span>
                  </div>
                  <span
                    className={`hidden md:block text-[11px] font-bold truncate max-w-full text-center ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-[#E4032E] text-xs font-black uppercase tracking-wider font-['Space_Grotesk']">
              <span>PHASE {currentStep.step}</span>
              <span className="w-1 h-1 rounded-full bg-[#E4032E]" />
              <span>{currentStep.title.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk'] leading-[1.15]">
              {currentStep.title} <span className="text-[#E4032E]">& Architecture</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              {currentStep.heroTagline}
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentStep.overview}
            </div>

            {/* Deliverables Badges */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#E4032E]" />
                Key Deliverables & Phase Outputs
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep.deliverables.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick SLA & Quote Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0B0F1A] border border-slate-800 shadow-2xl space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E4032E]">
                PHASE SPECIFICATIONS
              </span>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Quality & Turnaround SLA
              </h3>
            </div>

            <div className="space-y-3 text-xs border-y border-slate-800/80 py-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> Average Phase SLA:
                </span>
                <span className="font-bold text-white font-['Space_Grotesk']">2–12 Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" /> Compliance Standard:
                </span>
                <span className="font-bold text-white font-['Space_Grotesk']">ISO 17100 / ISO 9001</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-slate-500" /> Automation Level:
                </span>
                <span className="font-bold text-emerald-400 font-['Space_Grotesk']">AI-Augmented</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                to="/quote"
                className="w-full py-3 px-4 rounded-xl bg-[#E4032E] hover:bg-[#c20227] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(228,3,46,0.35)] cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-white/10"
              >
                <span>Speak with an Architect</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown: Key Activities & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Key Activities */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-[#E4032E] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Detailed Phase Activities
                </h3>
                <p className="text-xs text-slate-400">Step-by-step engineering execution</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentStep.keyActivities.map((act, index) => (
                <div
                  key={act.title}
                  className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1.5 transition-colors hover:border-slate-700"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black text-[#E4032E] font-['Space_Grotesk']">
                      0{index + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">{act.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-5">
                    {act.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Business Benefits */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Measurable Business Outcomes
                </h3>
                <p className="text-xs text-slate-400">ROI and operational advantages</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentStep.benefits.map((ben) => (
                <div
                  key={ben.title}
                  className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1.5 transition-colors hover:border-emerald-500/30"
                >
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{ben.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {ben.desc}
                  </p>
                </div>
              ))}

              {/* Quality Checkpoints Box */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-white/[0.02] to-transparent border border-red-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4032E] mb-2.5 flex items-center gap-2 font-['Space_Grotesk']">
                  <ShieldCheck className="w-4 h-4" />
                  Mandatory Phase Checkpoints
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentStep.qualityCheckpoints.map((chk) => (
                    <li key={chk} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E]" />
                      <span>{chk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Band */}
        <div className="mb-16 p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
                CONNECTED CAPABILITIES
              </span>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mt-1">
                Services Powering This Workflow Phase
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-[#E4032E] hover:underline flex items-center gap-1.5"
            >
              <span>View All 8 Core Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentStep.relatedServices.map((srv) => (
              <Link
                key={srv.slug}
                to={`/services/${srv.slug}`}
                className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/40 hover:bg-white/[0.04] transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-200 group-hover:text-white">
                  {srv.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E4032E] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Navigation: Prev & Next Step */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          {currentStep.prevStep ? (
            <Link
              to={`/workflow/${currentStep.prevStep.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-bold text-slate-200 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[10px] text-slate-500 block uppercase">Previous Phase</span>
                <span className="font-['Space_Grotesk'] font-bold text-white">
                  {currentStep.prevStep.step}. {currentStep.prevStep.title}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {currentStep.nextStep ? (
            <Link
              to={`/workflow/${currentStep.nextStep.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#E4032E] hover:bg-[#c20227] text-xs font-bold text-white transition-all shadow-[0_0_20px_rgba(228,3,46,0.25)] group"
            >
              <div className="text-right">
                <span className="text-[10px] text-red-200 block uppercase">Next Phase</span>
                <span className="font-['Space_Grotesk'] font-bold">
                  {currentStep.nextStep.step}. {currentStep.nextStep.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              to="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#E4032E] hover:bg-[#c20227] text-xs font-bold text-white transition-all"
            >
              <span>Get Started with Step 01</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
