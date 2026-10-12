import React from 'react';
import { 
  Sparkles, 
  Check, 
  XCircle, 
  Cpu, 
  Flame, 
  ArrowUpRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { statsData } from '../data/landingData';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onOpenDemo: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenDemo }) => {
  const getStatIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />;
      case 1:
        return <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 2:
        return <Clock className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070a10] scroll-mt-24">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 hover:border-indigo-500/40 transition-colors">
              <Sparkles className="w-3.5 h-3.5" />
              Product Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Engineered to Solve the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                DevOps Complexity Crisis
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Modern microservices have become too distributed for human teams to manually operate. Synthex introduces an autonomous neural control plane that continuously models, secures, and optimizes your entire cloud estate in real-time.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Key Stats Cards with staggered ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statsData.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delayMs={idx * 120}>
              <div className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-indigo-500/40 transition-all duration-300">
                {/* Top border glowing highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-300" />
                
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                    {getStatIcon(idx)}
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 mb-2 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">{stat.sublabel}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Deep Dive: Problem vs Solution Grid with staggered direction reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Way */}
          <ScrollReveal direction="left" delayMs={100} className="h-full">
            <div className="h-full p-8 rounded-2xl bg-slate-900/40 border border-rose-500/20 relative flex flex-col justify-between hover:border-rose-500/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20">
                    Legacy Paradigm
                  </span>
                  <Flame className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Manual DevOps &amp; Reactive Firefighting</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Engineering teams spend up to 40% of their sprints tuning manifests, responding to midnight PagerDuty alerts, and overpaying cloud providers by 60%+ for unutilized idle compute.
                </p>

                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-rose-500/5 transition-colors">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Complex multi-thousand line Helm and Terraform sprawl</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-rose-500/5 transition-colors">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Outages diagnosed only after customers submit support tickets</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-rose-500/5 transition-colors">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Over-provisioning clusters to protect against unpredictable spikes</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-rose-500/5 transition-colors">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>Disjointed observability silos requiring 5+ dashboard logins</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-rose-300/80">
                Avg. Downtime Cost: $8,400 / minute
              </div>
            </div>
          </ScrollReveal>

          {/* Synthex Autonomous Way */}
          <ScrollReveal direction="right" delayMs={200} className="h-full">
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900/80 border border-indigo-500/30 relative flex flex-col justify-between shadow-xl shadow-indigo-500/10 hover:border-indigo-500/60 hover:shadow-indigo-500/25 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold px-2.5 py-1 rounded bg-cyan-500/15 border border-cyan-500/30">
                    Synthex Platform
                  </span>
                  <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Autonomous Intelligence &amp; Zero Toil</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Synthex acts as an always-on principal site reliability engineer. It automatically profiles traffic patterns, tunes pod scaling in microseconds, and isolates failed rollouts before latency degrades.
                </p>

                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-indigo-500/10 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Single unified declarative control mesh across AWS, GCP &amp; Azure</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-indigo-500/10 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Autonomic self-healing and zero-downtime rollback in under 300ms</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-indigo-500/10 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>FinOps neural engine reduces compute bills by an average of 62%</span>
                  </li>
                  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-indigo-500/10 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Universal nanosecond OpenTelemetry distributed tracing</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-indigo-500/20 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300">Target Uptime: 99.999% SLA Guaranteed</span>
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center text-xs font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                >
                  <span>Learn Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
