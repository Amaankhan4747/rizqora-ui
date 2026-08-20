import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { BookOpen, Calendar, Clock, User, ArrowLeft, ArrowRight, X } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            INSIGHTS & ARTICLES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Knowledge for a Global World
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Thought leadership, MTPE strategies, LLM annotation breakthroughs, and global growth insights written by our language AI experts.
          </p>
        </div>
      </section>

      {/* Main Grid or Single Post View */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedPost ? (
          /* Single Article Reader View */
          <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E4032E] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                {selectedPost.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414] font-['Space_Grotesk']">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-y border-slate-100 py-3">
                <span className="flex items-center gap-1.5 font-bold text-slate-800">
                  <User className="w-3.5 h-3.5 text-[#E4032E]" />
                  {selectedPost.author} ({selectedPost.authorRole})
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
              </div>
            </div>

            <div className="prose max-w-none text-slate-700 text-sm leading-relaxed space-y-4 whitespace-pre-line">
              {selectedPost.content}
            </div>

            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-xs font-bold text-slate-600 hover:text-black"
              >
                ← Return to Blog Index
              </button>
              <button
                onClick={() => onNavigate('quote')}
                className="bg-[#E4032E] text-white px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Discuss Strategy with Us
              </button>
            </div>
          </div>
        ) : (
          /* Blog Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk'] leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="font-semibold text-slate-800">
                    By {post.author}
                  </div>
                  <div className="font-bold text-[#E4032E] flex items-center gap-1 group-hover:underline">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
