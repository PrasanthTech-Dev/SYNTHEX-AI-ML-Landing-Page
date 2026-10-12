import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const container = document.getElementById('content-slide-container');
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 20);

      const sections = ['about', 'features', 'how-it-works', 'testimonials', 'pricing'];
      const scrollPosition = container.scrollTop + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (container.scrollTop < 200) {
        setActiveSection('');
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const container = document.getElementById('content-slide-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080b11]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-1'
          : 'bg-[#080b11]/70 backdrop-blur-md border-b border-white/5 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <div className="w-full h-full bg-[#0d1321] rounded-[10px] flex items-center justify-center transition-colors group-hover:bg-[#11192e]">
              <Shield className="w-5 h-5 text-indigo-400 transition-colors group-hover:text-cyan-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 transition-colors group-hover:text-slate-100">
              SYNTHEX <span className="text-indigo-400 font-bold group-hover:text-cyan-300 transition-colors">AI &amp; ML</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-1 group-hover:text-indigo-300 transition-colors">
              Cloud Intelligence
            </span>
          </div>
        </a>

        {/* Desktop Nav Items with scroll-spy active indicator */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link-indicator px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-indigo-500/15 border border-indigo-500/30 shadow-sm shadow-indigo-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenDemo}
            className="btn-shine-effect relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-[#0c1222] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2 text-white">
              Get Started Free
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with active section highlight */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0f1d]/98 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white bg-indigo-500/20 border border-indigo-500/30'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
