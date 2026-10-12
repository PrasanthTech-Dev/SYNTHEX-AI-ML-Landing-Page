import React, { useState } from 'react';
import { Check, Zap, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { pricingPlansData, faqsData } from '../data/landingData';
import type { PricingPlan } from '../data/landingData';
import { ScrollReveal } from './ScrollReveal';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#070a12] scroll-mt-24">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 hover:border-indigo-500/40 transition-colors">
              <Zap className="w-3.5 h-3.5" />
              Transparent Pricing
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Predictable Plans for Teams of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
                Any Velocity
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Start with a 14-day free trial on any tier. No surprise usage spikes, transparent node billing, and instant autonomous ROI.
            </p>

            {/* Billing Switch Toggle */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 shadow-inner">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  !isAnnual
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 ${
                  isAnnual
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid with staggered ScrollReveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {pricingPlansData.map((plan, idx) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isPopular = plan.isPopular;

            return (
              <ScrollReveal key={plan.id} direction="up" delayMs={idx * 140} className="h-full">
                <div
                  className={`h-full rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-2 ${
                    isPopular
                      ? 'bg-gradient-to-b from-[#121930] to-[#0d1428] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/25 scale-100 lg:-translate-y-2 hover:shadow-indigo-500/40'
                      : 'glass-card border border-white/10 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  {/* Popular Highlight Tag */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/40 flex items-center gap-1.5 animate-pulse-glow">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Plan Name & Tagline */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">{plan.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/10">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-400">/ node / mo</span>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-3.5 mb-8">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Included Capabilities:
                      </span>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-105 ${
                              isPopular
                                ? 'bg-indigo-500/20 text-indigo-400'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan, isAnnual)}
                    className={`btn-shine-effect w-full py-4 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                      isPopular
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/35 hover:shadow-indigo-500/50 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 hover:border-indigo-500/30 text-white border border-white/10'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Interactive FAQ Section with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="max-w-3xl mx-auto pt-12 border-t border-white/10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                Frequently Asked Questions
              </div>
              <h3 className="text-2xl font-bold text-white">Common Questions Before Getting Started</h3>
            </div>

            <div className="space-y-4">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen 
                        ? 'bg-slate-900/90 border-indigo-500/40 shadow-lg shadow-indigo-500/10' 
                        : 'bg-slate-900/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-base font-semibold text-white hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? 'rotate-180 text-indigo-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
