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
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { CMSSection, cmsArray, cmsText } from '../../lib/cmsContent';

interface StepData {
  step: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  deliverables: string[];
}

interface WorkflowTimelineProps {
  cms?: CMSSection;
}

const WORKFLOW_STEPS: StepData[] = [
  {
    step: '01',
    title: 'Requirement',
    shortDesc: 'Scope analysis, source file parsing, and glossary extraction.',
    icon: FileText,
    deliverables: ['Asset Parsing', 'Glossary'],
  },
  {
    step: '02',
    title: 'Planning',
    shortDesc: 'Language pair mapping and linguist team allocation.',
    icon: Target,
    deliverables: ['Team Routing', 'Timeline'],
  },
  {
    step: '03',
    title: 'Translation',
    shortDesc: 'Neural Machine Translation paired with Translation Memory.',
    icon: Cpu,
    deliverables: ['NMT', 'TM Match'],
  },
  {
    step: '04',
    title: 'Localization',
    shortDesc: 'Cultural adaptation, formatting, and UI fitting.',
    icon: Globe2,
    deliverables: ['Cultural Fit', 'UI Strings'],
  },
  {
    step: '05',
    title: 'Quality Review',
    shortDesc: 'ISO 17100 certified post-editing and LQA verification.',
    icon: ShieldCheck,
    deliverables: ['LQA', 'ISO Review'],
  },
  {
    step: '06',
    title: 'Delivery',
    shortDesc: 'Multi-format export and automated API dispatch.',
    icon: Send,
    deliverables: ['Export', 'API Dispatch'],
  },
  {
    step: '07',
    title: 'Long-Term Support',
    shortDesc: 'Continuous TM maintenance, engine learning, and 24/7 PM.',
    icon: Headphones,
    deliverables: ['TM Updates', '24/7 PM'],
  },
];

const workflowIconMap: Record<string, React.ElementType> = {
  FileText,
  Target,
  Cpu,
  Globe2,
  ShieldCheck,
  Send,
  Headphones,
};

export const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({ cms }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const workflowSteps = cmsArray(cms?.steps, WORKFLOW_STEPS).map((step: any, index) => ({
    ...step,
    step: step.step || String(index + 1).padStart(2, '0'),
    shortDesc: step.shortDesc || step.description || step.desc,
    deliverables: step.deliverables || step.tags || [],
    icon: typeof step.icon === 'string' ? workflowIconMap[step.icon] || WORKFLOW_STEPS[index]?.icon || FileText : step.icon,
  }));
  const progress = `${(activeStep / Math.max(workflowSteps.length - 1, 1)) * 100}%`;

  return (
    <section className="relative py-16 sm:py-20 bg-[#090C15] text-white overflow-hidden border-y border-slate-800">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: '42px 42px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-11 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-transparent border border-red-500/20 text-[11px] font-bold text-[#E4032E] uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{cmsText(cms, 'eyebrow', 'AI-Powered Workflow Engine')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-black tracking-tight font-['Space_Grotesk'] text-white"
          >
            {cmsText(cms, 'headingPrefix', 'A Smarter Way to')}{' '}
            <span className="text-[#E4032E]">{cmsText(cms, 'headingAccent', 'Go Global.')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            {cmsText(cms, 'subheading', 'A focused 7-step localization pipeline from requirement intake to ongoing global support.')}
          </motion.p>
        </div>

        <div className="mb-8 sm:mb-10">
          <div className="relative hidden md:block max-w-5xl mx-auto">
            <div className="absolute left-8 right-8 top-5 h-px bg-slate-800">
              <motion.div
                className="h-px bg-[#E4032E] shadow-[0_0_14px_rgba(228,3,46,0.65)]"
                animate={{ width: progress }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>

            <div className="relative grid grid-cols-7 gap-2">
              {workflowSteps.map((item, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="group flex flex-col items-center gap-2 focus:outline-none"
                  >
                    <span
                      className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border text-xs font-black font-['Space_Grotesk'] transition-all duration-300 ${
                        isActive
                          ? 'border-[#E4032E] bg-[#E4032E] text-white shadow-[0_0_22px_rgba(228,3,46,0.7)]'
                          : 'border-slate-700 bg-[#090C15] text-slate-400 group-hover:border-[#E4032E] group-hover:text-white'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`max-w-[92px] text-center text-[11px] font-bold leading-tight transition-colors ${
                        isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {workflowSteps.map((item, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-black transition-all ${
                    isActive
                      ? 'border-[#E4032E] bg-[#E4032E] text-white shadow-[0_0_16px_rgba(228,3,46,0.55)]'
                      : 'border-slate-800 bg-white/[0.03] text-slate-400'
                  }`}
                >
                  {item.step}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-slate-800" />
          <motion.div
            className="absolute left-5 sm:left-6 top-2 w-px bg-gradient-to-b from-[#E4032E] to-red-500/30 shadow-[0_0_12px_rgba(228,3,46,0.45)]"
            animate={{ height: progress }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />

          <div className="space-y-3 sm:space-y-4">
            {workflowSteps.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;

              return (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  onViewportEnter={() => setActiveStep(index)}
                  viewport={{ amount: 0.65, margin: '-20% 0px -35% 0px' }}
                  transition={{ duration: 0.28, delay: index * 0.035 }}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative pl-14 sm:pl-16"
                >
                  <div
                    className={`absolute left-0 top-1.5 z-10 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[#E4032E] bg-[#E4032E] text-white shadow-[0_0_24px_rgba(228,3,46,0.65)]'
                        : 'border-slate-800 bg-[#090C15] text-slate-500'
                    }`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`group w-full rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4032E]/70 ${
                      isActive
                        ? 'border-[#E4032E] bg-gradient-to-r from-[#E4032E]/14 via-white/[0.065] to-white/[0.035] shadow-[0_14px_34px_rgba(228,3,46,0.18)]'
                        : 'border-white/10 bg-white/[0.035] hover:-translate-y-0.5 hover:border-[#E4032E]/70 hover:bg-white/[0.055] hover:shadow-[0_12px_28px_rgba(228,3,46,0.12)]'
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex items-center gap-2.5">
                          <span className="text-[11px] font-black tracking-[0.18em] text-[#E4032E] font-['Space_Grotesk']">
                            {item.step}
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-white font-['Space_Grotesk']">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                          {item.shortDesc}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center justify-between gap-3 sm:min-w-[250px]">
                        <div className="flex flex-wrap gap-1.5">
                          {item.deliverables.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-semibold text-slate-300 transition-colors group-hover:border-[#E4032E]/30 group-hover:text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span
                          className={`inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold transition-all duration-300 ${
                            isActive
                              ? 'text-[#E4032E]'
                              : 'text-slate-500 group-hover:text-[#E4032E] group-hover:translate-x-0.5'
                          }`}
                        >
                          View Details
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
