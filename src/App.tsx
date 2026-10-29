/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PaymentTermsSection } from './components/PaymentTermsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<'startup' | 'business' | 'enterprise'>('business');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (planId: 'startup' | 'business' | 'enterprise') => {
    setSelectedPackage(planId);
    scrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-slate-800 flex flex-col selection:bg-[#0CBF83] selection:text-white">
      {/* Section 1: Navigation */}
      <Navbar onSelectPackage={handleSelectPackage} />

      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero
          onExplorePackages={() => scrollTo('packages')}
          onWorkTogether={() => scrollTo('contact')}
        />

        {/* Section 3: Services */}
        <ServicesSection onSelectServiceCTA={() => scrollTo('packages')} />

        {/* Section 4: Pricing Packages */}
        <PricingSection onSelectPlan={handleSelectPackage} />

        {/* Section 5: How It Works */}
        <HowItWorksSection onGetStarted={() => scrollTo('contact')} />

        {/* Section 6: Payment Terms */}
        <PaymentTermsSection />

        {/* Section 7: Contact Form */}
        <ContactSection
          selectedPackage={selectedPackage}
          onPackageChange={(pkg) => setSelectedPackage(pkg)}
        />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}
