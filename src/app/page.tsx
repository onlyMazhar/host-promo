'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import DealsSection from '@/components/sections/DealsSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/ui/Footer';
import CopyCodeModal from '@/components/modals/CopyCodeModal';
import ReportDealModal from '@/components/modals/ReportDealModal';
import SubmitDealModal from '@/components/modals/SubmitDealModal';
import { Deal } from '@/types';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCopyDeal, setActiveCopyDeal] = useState<Deal | null>(null);
  const [activeReportDeal, setActiveReportDeal] = useState<Deal | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const handleCopyCode = (deal: Deal) => {
    setActiveCopyDeal(deal);
  };

  const handleReportDeal = (deal: Deal) => {
    setActiveReportDeal(deal);
  };

  const handleSearchFocus = () => {
    const input = document.getElementById('main-search-input');
    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onSearchClick={handleSearchFocus}
      />

      {/* Hero Section (120px padding) */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Deals Section (120px padding) */}
      <DealsSection
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onCopyCode={handleCopyCode}
        onReportDeal={handleReportDeal}
      />

      {/* Companies Directory Section (120px padding, #F5F5F6 background) */}
      <CompaniesSection
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Side-by-Side Comparison Section (120px padding) */}
      <ComparisonSection />

      {/* Why Choose Us Section (120px padding, #F5F5F6 background) */}
      <WhyChooseUsSection />

      {/* Newsletter Section (120px padding) */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CopyCodeModal
        deal={activeCopyDeal}
        onClose={() => setActiveCopyDeal(null)}
      />

      <ReportDealModal
        deal={activeReportDeal}
        onClose={() => setActiveReportDeal(null)}
      />

      <SubmitDealModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </main>
  );
}
