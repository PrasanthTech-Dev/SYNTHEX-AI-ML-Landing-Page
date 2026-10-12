import React from 'react';
import { 
  GitBranch, 
  Layers, 
  Globe, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { stepsData } from '../data/landingData';
import { ScrollReveal } from './ScrollReveal';

export const HowItWorks: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400 group-hover:text-indigo-300 transition-colors" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400 group-hover:text-cyan-200 transition-colors" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400 group-hover:text-amber-200 transition-colors" />;
      default:
        return <GitBranch className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#070b12] scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 hover:border-purple-500/40 transition-colors">
              <Layers className="w-3.5 h-3.5" />
              Simple Onboarding
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              From Zero to Autonomous Mesh in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
                Four Seamless Steps
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eliminate weeks of custom Kubernetes configurations. Synthex automatically hooks into your workflow and takes care of cluster orchestration.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Step Cards Grid with staggered ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((step, idx) => (
            <ScrollReveal key={step.step} direction="up" delayMs={idx * 120}>
              <div className="h-full glass-card glass-card-hover p-6 rounded-2xl relative flex flex-col justify-between group border border-white/5 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-200">
                      STEP {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:border-indigo-500/40 transition-all duration-300">
                      {renderIcon(step.iconName)}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-1 group-hover:text-cyan-300 transition-colors">
                    {step.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Stage {step.step} Automated
                  </span>
                  {idx < 3 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-200" />
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
