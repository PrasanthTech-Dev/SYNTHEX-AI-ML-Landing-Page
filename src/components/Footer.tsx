import React, { useState } from 'react';
import { 
  Shield, 
  Send, 
  Check, 
  ArrowUp, 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const scrollToTop = () => {
    const container = document.getElementById('content-slide-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070d] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner with glowing border & button shine */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 mb-16 border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-300">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase">
              Stay Ahead in Autonomous Cloud
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              Subscribe to the Autonomous Engineering Brief
            </h3>
            <p className="text-sm text-slate-400">
              Bi-weekly engineering deep-dives, distributed systems benchmarks, and architecture breakdowns. Zero spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              required
              className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 min-w-[260px] transition-all"
            />
            <button
              type="submit"
              className="btn-shine-effect px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 group"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300 animate-bounce" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4 Categorized Columns + Brand Info */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Info & Contact */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-110">
                <div className="w-full h-full bg-[#0d1321] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white group-hover:text-indigo-200 transition-colors">SYNTHEX AI &amp; ML</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The next-generation autonomous cloud mesh that eliminates manual operations, reduces infrastructure cost, and secures microservices at global scale.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>540 Market Street, San Francisco, CA &amp; London, UK</span>
              </div>
              <div className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>enterprise@synthex.ai</span>
              </div>
              <div className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>+1 (800) 840-7968</span>
              </div>
            </div>
          </div>

          {/* Links: Product with smooth slide-hover */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Mesh Balancer</a></li>
              <li><a href="#features" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Neural Synthesizer</a></li>
              <li><a href="#features" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Zero-Trust Shield</a></li>
              <li><a href="#features" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Predictive FinOps</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Pricing &amp; Plans</a></li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#how-it-works" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Documentation</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">CLI Reference</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Helm Charts</a></li>
              <li><a href="#about" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Architecture Whitepaper</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Customer Stories</a></li>
            </ul>
          </div>

          {/* Links: Company & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Careers (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Security &amp; SOC2</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Back to top */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span>&copy; {new Date().getFullYear()} Synthex AI &amp; ML, Inc. All rights reserved.</span>
          </div>

          {/* Social Icons with brand hover colors & pop */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Back to top button with smooth hover float */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-3 p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-600/10"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
