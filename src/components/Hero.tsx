import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { trustedCompanies } from '../data/landingData';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background ambient lighting flares with gentle pulse */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/18 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-purple-600/12 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-cyan-600/12 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid overlay background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Intelligent Cloud Mesh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 animate-gradient-shift">
              Engineered for the AI Era
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Synthex eliminates manual DevOps toil. Unify multi-region deployment, autonomic self-healing, and sub-millisecond edge routing into a single intelligent control plane.
          </p>

          {/* Primary CTA with shine effect & micro-interaction */}
          <ScrollReveal direction="up" delayMs={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={onOpenDemo}
                className="btn-shine-effect w-full sm:w-auto px-9 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/35 hover:shadow-indigo-500/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-300 transition-transform group-hover:rotate-12" />
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>
            </div>
          </ScrollReveal>

          {/* Trust Guarantees with hover interactions */}
          <ScrollReveal direction="up" delayMs={150}>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-900/70 transition-all duration-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">No credit card needed</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-900/70 transition-all duration-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Deploy in &lt; 90 seconds</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-900/70 transition-all duration-200">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-300">SOC2 Type II Certified</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Social Proof / Trusted By logos with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="mt-20 pt-10 border-t border-white/10">
            <p className="text-center text-xs uppercase tracking-widest font-semibold text-slate-400 mb-8">
              Trusted by modern cloud engineering teams worldwide
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
              {trustedCompanies.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-800/80 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 text-slate-400 hover:text-white cursor-pointer group"
                >
                  <span className="text-lg text-indigo-400 transition-transform duration-300 group-hover:scale-125 group-hover:text-cyan-300">
                    {c.symbol}
                  </span>
                  <span className="font-semibold text-sm tracking-tight">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
