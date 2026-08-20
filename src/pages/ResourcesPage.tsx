import React, { useState } from 'react';
import { PageId } from '../types';
import { BLOG_POSTS, CASE_STUDIES } from '../data/mockData';
import { BookOpen, Award, FileText, ArrowRight, Download, Video } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'case-studies' | 'whitepapers'>('all');

  const whitepapers = [
    {
      title: '2026 Enterprise MTPE & AI Localization Benchmark Report',
      desc: 'Comprehensive survey of 500+ enterprise localization leaders on NMT accuracy, RLHF annotation, and cost structures.',
      pages: '28 Pages PDF',
    },
    {
      title: 'Architecting Continuous Localization Pipelines with Git & CI/CD',
      desc: 'Technical guide for software teams automating UI string translation across international developer workflows.',
      pages: '18 Pages PDF',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            KNOWLEDGE & RESEARCH HUB
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Insights, Case Studies & Technical Whitepapers
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Thought leadership, real client ROI studies, and practical guides for international growth executives.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Resources' },
            { id: 'blog', label: 'Blog & Articles' },
            { id: 'case-studies', label: 'Case Studies' },
            { id: 'whitepapers', label: 'Whitepapers' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === t.id
                  ? 'bg-[#E4032E] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          {/* Blog Articles Section */}
          {(activeTab === 'all' || activeTab === 'blog') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk'] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#E4032E]" />
                  Latest Thought Leadership
                </h2>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-xs font-bold text-[#E4032E] hover:underline"
                >
                  View All Blog Posts →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => onNavigate('blog')}
                    className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 hover:border-red-200 transition-all space-y-3 cursor-pointer group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E4032E] bg-red-50 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-400 font-medium">
                      {post.readTime} • {post.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies Section */}
          {(activeTab === 'all' || activeTab === 'case-studies') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk'] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#E4032E]" />
                  Client Success Stories
                </h2>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="text-xs font-bold text-[#E4032E] hover:underline"
                >
                  View All Case Studies →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CASE_STUDIES.map((cs) => (
                  <div
                    key={cs.id}
                    onClick={() => onNavigate('case-studies')}
                    className="p-6 bg-[#0A0A0A] text-white rounded-2xl border border-slate-800 space-y-4 cursor-pointer group hover:border-red-500/40 transition-all"
                  >
                    <div className="text-xs font-extrabold text-[#E4032E]">
                      {cs.client}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {cs.summary}
                    </p>
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400">
                      <span>{cs.results[0].metric} {cs.results[0].label}</span>
                      <ArrowRight className="w-4 h-4 text-[#E4032E]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Whitepapers Section */}
          {(activeTab === 'all' || activeTab === 'whitepapers') && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk'] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#E4032E]" />
                Technical Whitepapers & Research
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whitepapers.map((wp, i) => (
                  <div key={i} className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-[#E4032E] bg-red-500/10 px-2 py-0.5 rounded">
                        {wp.pages}
                      </span>
                      <h3 className="text-base font-bold text-white font-['Space_Grotesk']">{wp.title}</h3>
                      <p className="text-xs text-slate-400">{wp.desc}</p>
                    </div>
                    <button
                      onClick={() => alert(`Downloading "${wp.title}" PDF...`)}
                      className="p-3 bg-[#E4032E] hover:bg-[#c30226] text-white rounded-xl shrink-0 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
