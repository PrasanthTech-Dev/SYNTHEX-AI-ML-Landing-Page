import React from 'react';
import { X, Check, Zap, ArrowRight } from 'lucide-react';
import type { Feature } from '../data/landingData';

interface FeatureModalProps {
  feature: Feature | null;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const FeatureModal: React.FC<FeatureModalProps> = ({
  feature,
  onClose,
  onOpenTrial,
}) => {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-white/10 bg-[#0c1120] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5" />
          {feature.badge} Specification
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {feature.description}
        </p>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 mb-6 space-y-3">
          <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
            Technical Guarantee
          </span>
          <div className="flex items-start gap-2.5 text-xs text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>eBPF zero-copy kernel telemetry instrumentation</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Sub-millisecond P99 failover across multi-region availability zones</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Fully SOC2 Type II, ISO 27001, and HIPAA compliance hardened</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenTrial();
            }}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer"
          >
            Deploy This Feature <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
