import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Target,
  Cpu,
  Globe2,
  ShieldCheck,
  Send,
  Headphones,
  Check,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface StepData {
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  deliverables: string[];
  tooling: string;
  turnaround: string;
  isOngoing?: boolean;
}

const WORKFLOW_STEPS: StepData[] = [
  {
    step: '01',
    title: 'Requirement',
    shortDesc: 'Scope analysis, source file parsing, and glossary extraction.',
    fullDesc: 'We analyze your digital assets, extract terminology glossaries, define formatting standards, and establish SLA benchmarks tailored to your target markets.',
    icon: FileText,
    deliverables: ['Asset Parsing', 'Glossary Extraction', 'SLA Agreement'],
    tooling: 'Rizqora Asset Parser AI',
    turnaround: '< 2 Hours',
  },
  {
    step: '02',
    title: 'Planning',
    shortDesc: 'Language pair mapping and linguist team allocation.',
    fullDesc: 'Custom routing matches your content with domain-certified native linguists and selects the optimal neural machine translation engine profile.',
    icon: Target,
    deliverables: ['Linguist Assignment', 'NMT Engine Tuning', 'Project Timeline'],
    tooling: 'Smart Match Engine',
    turnaround: '< 4 Hours',
  },
  {
    step: '03',
    title: 'Translation',
    shortDesc: 'Neural Machine Translation paired with Translation Memory.',
    fullDesc: 'High-speed automated translation leverages historic Translation Memory (TM) matches for instant consistency and significant cost efficiency.',
    icon: Cpu,
    deliverables: ['NMT Pre-Translation', 'TM Memory Matching', 'Term Alignment'],
    tooling: 'Gemini Neural MT Core',
    turnaround: 'Real-Time / Fast',
  },
  {
    step: '04',
    title: 'Localization',
    shortDesc: 'Cultural adaptation, formatting, and UI fitting.',
    fullDesc: 'Beyond direct translation, we adapt currencies, date formats, legal terminology, tone of voice, and UI layouts to feel entirely native.',
    icon: Globe2,
    deliverables: ['Cultural Adaptation', 'UI String Fitting', 'Media Localization'],
    tooling: 'LocStudio Suite',
    turnaround: 'Same Day',
  },
  {
    step: '05',
    title: 'Quality Review',
    shortDesc: 'ISO 17100 certified post-editing and LQA verification.',
    fullDesc: 'Subject-matter expert native linguists audit every segment, performing linguistic QA, MQM error scoring, and visual layout inspection.',
    icon: ShieldCheck,
    deliverables: ['LQA Error Audit', 'ISO 17100 Sign-off', 'Grammar & Tone Pass'],
    tooling: 'LQA Automated Checker',
    turnaround: '< 24 Hours',
  },
  {
    step: '06',
    title: 'Delivery',
    shortDesc: 'Multi-format export and automated API dispatch.',
    fullDesc: 'Final validated assets are exported in your required file formats (XLIFF, JSON, PO, DOCX) or pushed directly back into your CMS/GitHub via API.',
    icon: Send,
    deliverables: ['API Webhook Dispatch', 'XLIFF / JSON Export', 'Client Sign-off'],
    tooling: 'Rizqora API Gateway',
    turnaround: 'Instant',
  },
  {
    step: '07',
    title: 'Long-Term Support',
    shortDesc: 'Continuous TM maintenance, engine learning, and 24/7 PM.',
    fullDesc: 'Our partnership continues post-delivery. We update your Translation Memory with new edits, refine custom AI models, and provide round-the-clock support.',
    icon: Headphones,
    deliverables: ['TM Database Update', 'AI Model Re-tuning', '24/7 Dedicated PM'],
    tooling: 'Continuous TM Engine',
    turnaround: 'Ongoing 24/7',
    isOngoing: true,
  },
];

export const WorkflowTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#090C15] text-white overflow-hidden border-y border-slate-800">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E4032E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-[#E4032E] uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-POWERED WORKFLOW ENGINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight font-['Space_Grotesk'] text-white"
          >
            A Smarter Way to <span className="text-[#E4032E]">Go Global.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            Our 7-step enterprise localization pipeline connects neural machine translation with native human linguists, ISO 17100 quality gates, and automated API delivery.
          </motion.p>
        </div>

        {/* Desktop & Tablet Connected Interactive Timeline */}
        <div className="mb-16 hidden lg:block">
          {/* Stepper Bar Header (01 to 07) */}
          <div className="relative flex items-center justify-between max-w-5xl mx-auto mb-12">
            {/* Animated Laser Progress Line behind steps */}
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-slate-800 -translate-y-1/2 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E4032E] via-red-500 to-red-400 shadow-[0_0_12px_#E4032E]"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep / (WORKFLOW_STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            {WORKFLOW_STEPS.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold font-['Space_Grotesk'] text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-[#E4032E] text-white shadow-[0_0_25px_rgba(228,3,46,0.6)] scale-110 border-2 border-white'
                        : isPast
                        ? 'bg-red-950/80 text-red-400 border border-red-500/40'
                        : 'bg-slate-900 text-slate-500 border border-slate-800 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    {isPast ? (
                      <Check className="w-5 h-5 text-red-400" />
                    ) : (
                      <span>{item.step}</span>
                    )}
                  </div>

                  <span
                    className={`mt-2.5 text-xs font-extrabold tracking-tight transition-colors font-['Space_Grotesk'] ${
                      isActive ? 'text-white font-black' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Featured Preview Card */}
          {(() => {
            const step = WORKFLOW_STEPS[activeStep];
            const StepIcon = step.icon;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#E4032E]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-[#E4032E]/20 text-[#E4032E] text-xs font-black tracking-widest uppercase font-['Space_Grotesk'] border border-[#E4032E]/30">
                        STEP {step.step}
                      </div>
                      <span className="text-xs text-slate-400 font-medium">
                        Pipeline Phase {activeStep + 1} of 7
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk'] flex items-center gap-3">
                      <StepIcon className="w-7 h-7 text-[#E4032E]" />
                      <span>{step.title}</span>
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {step.fullDesc}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {step.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-4 p-5 rounded-2xl bg-black/40 border border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-white/10">
                      Step Architecture & Performance
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Execution Engine:</span>
                        <span className="font-bold text-white font-['Space_Grotesk'] flex items-center gap-1">
                          <Cpu className="w-3.5 h-3.5 text-[#E4032E]" />
                          {step.tooling}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Target SLA Turnaround:</span>
                        <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                          {step.turnaround}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Quality Standard:</span>
                        <span className="font-bold text-white">ISO 17100 / MQM Pass</span>
                      </div>
                    </div>

                    {step.isOngoing && (
                      <div className="p-3 rounded-xl bg-[#E4032E]/20 border border-[#E4032E]/40 text-xs text-red-300 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E4032E] animate-ping" />
                        <span>Continuous Partnership Model</span>
                      </div>
                    )}

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() =>
                          setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length)
                        }
                        className="text-xs font-bold text-[#E4032E] hover:text-red-400 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

        {/* Connected Vertical Timeline Cards (All 7 Steps for Mobile + Full View) */}
        <div className="relative space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Central Connecting Laser Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-[#E4032E] via-red-500/50 to-red-900/20 z-0" />

          {WORKFLOW_STEPS.map((item, index) => {
            const IconComponent = item.icon;
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveStep(index)}
                className={`group relative pl-16 sm:pl-20 cursor-pointer`}
              >
                {/* Step Node Icon on the vertical laser line */}
                <div
                  className={`absolute left-0 top-1 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold font-['Space_Grotesk'] text-sm sm:text-base z-10 transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#E4032E] text-white shadow-[0_0_25px_rgba(228,3,46,0.7)] scale-110 border-2 border-white'
                      : 'bg-slate-900 text-red-400 border border-red-900/50 group-hover:border-[#E4032E] group-hover:scale-105'
                  }`}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Main Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-red-950/40 via-slate-900/90 to-slate-900 border-[#E4032E] shadow-[0_15px_40px_rgba(228,3,46,0.2)]'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-[#E4032E] font-['Space_Grotesk'] tracking-widest">
                        STEP {item.step}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white font-['Space_Grotesk']">
                        {item.title}
                      </h3>
                    </div>

                    {item.isOngoing && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30 w-max">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] animate-pulse" />
                        Continuous Service
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[11px]"
                        >
                          {del}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[#E4032E] font-bold group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
