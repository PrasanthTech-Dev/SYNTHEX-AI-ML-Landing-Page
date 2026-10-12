import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/landingData';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#080d16] scroll-mt-24">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-600/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-600/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 hover:border-emerald-500/40 transition-colors">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              Social Proof
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Loved by Principal Architects &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                DevOps Directors
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              See how forward-thinking engineering organizations eliminated midnight firefighting and accelerated deployment velocity with Synthex.
            </p>

            {/* Aggregate Rating Banner */}
            <div className="inline-flex items-center justify-center gap-2 mt-6 px-4 py-2 rounded-full bg-slate-900/60 border border-white/5 hover:border-amber-400/30 transition-colors">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white ml-1">4.9 / 5.0</span>
              <span className="text-xs text-slate-400">from 420+ Enterprise Peer Reviews</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards Grid with staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delayMs={idx * 140}>
              <div className="h-full glass-card glass-card-hover p-8 rounded-2xl relative flex flex-col justify-between group border border-white/5 hover:border-emerald-500/30 overflow-hidden transition-all duration-300">
                {/* Top ambient highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-amber-400 group-hover:scale-105 transition-transform origin-left">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {item.metrics}
                    </span>
                  </div>

                  {/* Quote Content */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8 group-hover:text-slate-200 transition-colors">
                    "{item.content}"
                  </p>
                </div>

                {/* Author Profile with gradient avatar ring */}
                <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[2px]">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">{item.name}</h4>
                    <div className="text-xs text-slate-400">{item.role}</div>
                    <div className="text-xs font-semibold text-indigo-400">{item.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
