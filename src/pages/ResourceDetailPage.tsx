import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const title = (slug || 'Guide')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#E4032E]">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-[#E4032E]">Resources</Link>
          <span>/</span>
          <span className="text-[#E4032E] font-bold">{title}</span>
        </div>
      </div>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-[#E4032E]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk']">{title}</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive whitepapers, guides, and technical documentation for enterprise localization leaders.
          </p>
        </div>
      </section>
    </div>
  );
};
