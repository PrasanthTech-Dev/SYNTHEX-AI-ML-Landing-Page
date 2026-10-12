import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { FeatureModal } from './components/FeatureModal';
import type { Feature, PricingPlan } from './data/landingData';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isAnnualPlan, setIsAnnualPlan] = useState(true);
  const [activeFeatureModal, setActiveFeatureModal] = useState<Feature | null>(null);

  const handleOpenDemo = () => {
    setSelectedPlan(null);
    setIsDemoModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    setSelectedPlan(plan);
    setIsAnnualPlan(isAnnual);
    setIsDemoModalOpen(true);
  };

  const handleSelectFeature = (feature: Feature) => {
    setActiveFeatureModal(feature);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#080b11] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans relative">
      {/* 1. Fixed Header / Navbar */}
      <div className="shrink-0 z-40">
        <Navbar onOpenDemo={handleOpenDemo} />
      </div>

      {/* 2. Slide / Content Section — the ONLY scrollable container */}
      <div
        id="content-slide-container"
        className="flex-1 overflow-y-auto overflow-x-hidden content-scrollbar scroll-smooth relative"
      >
        <main>
          {/* Hero Section */}
          <Hero onOpenDemo={handleOpenDemo} />

          {/* About / Introduction Section */}
          <About onOpenDemo={handleOpenDemo} />

          {/* Features Section */}
          <Features onSelectFeature={handleSelectFeature} />

          {/* How It Works Section */}
          <HowItWorks />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Pricing Section */}
          <Pricing onSelectPlan={handleSelectPlan} />
        </main>

        {/* Footer inside scrollable content stream */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        selectedPlan={selectedPlan}
        isAnnual={isAnnualPlan}
      />

      <FeatureModal
        feature={activeFeatureModal}
        onClose={() => setActiveFeatureModal(null)}
        onOpenTrial={() => {
          setActiveFeatureModal(null);
          setIsDemoModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;
