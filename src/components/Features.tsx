import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  RefreshCw, 
  ArrowRight
} from 'lucide-react';
import { featuresData } from '../data/landingData';
import type { Feature } from '../data/landingData';
import { ScrollReveal } from './ScrollReveal';

interface FeaturesProps {
  onSelectFeature: (feature: Feature) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onSelectFeature }) => {
  const [filter, setFilter] = useState<'all' | 'performance' | 'intelligence' | 'security'>('all');

  const filteredFeatures = filter === 'all' 
    ? featuresData 
    : featuresData.filter(f => f.category === filter);

  // Icon mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400 group-hover:text-cyan-300 transition-colors" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-400 group-hover:text-cyan-200 transition-colors" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-rose-400 group-hover:text-rose-300 transition-colors" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#080c14] scroll-mt-24">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 hover:border-cyan-500/40 transition-colors">
              <Zap className="w-3.5 h-3.5" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Autonomous Systems Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                Uncompromising Reliability
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every feature in Synthex was built from scratch to eliminate single points of failure, compress latency to physics boundaries, and run autonomously.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/35 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20 hover:bg-slate-800'
                }`}
              >
                All Features ({featuresData.length})
              </button>
              <button
                onClick={() => setFilter('performance')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  filter === 'performance'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/35 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20 hover:bg-slate-800'
                }`}
              >
                High Throughput &amp; FinOps
              </button>
              <button
                onClick={() => setFilter('intelligence')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  filter === 'intelligence'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/35 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20 hover:bg-slate-800'
                }`}
              >
                Neural &amp; Telemetry
              </button>
              <button
                onClick={() => setFilter('security')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  filter === 'security'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/35 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20 hover:bg-slate-800'
                }`}
              >
                Zero-Trust &amp; Resilience
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, idx) => (
            <ScrollReveal key={feature.id} direction="up" delayMs={idx * 80}>
              <div
                onClick={() => onSelectFeature(feature)}
                className="h-full glass-card glass-card-hover p-8 rounded-2xl relative group cursor-pointer flex flex-col justify-between overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-300 active:scale-[0.99]"
              >
                {/* Top border glowing highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Radial backdrop pulse on card */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/20 group-hover:scale-125 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 group-hover:border-indigo-500/50 transition-all duration-300">
                      {renderIcon(feature.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20 transition-all">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>Explore Technical Specs</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-2" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
