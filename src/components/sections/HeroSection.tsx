'use client';

import React from 'react';
import { Search, ArrowRight } from '@animateicons/react/lucide';
import { CATEGORIES } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedCategory: _selectedCategory,
  setSelectedCategory,
}: HeroSectionProps) {
  return (
    <section className="relative bg-white py-[120px] overflow-hidden border-b border-[#E5E7EB]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FFF0F6]/80 via-white/40 to-white pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#343B46] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Save Up To <span className="text-[#FF2B85]">85%</span> On Top Web Hosting & Cloud Servers
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Discover verified promo codes, honest user ratings, and exclusive discount links for Hostinger, DigitalOcean, Cloudways, Namecheap, and 50+ trusted providers.
        </p>

        {/* Main Search Bar (Input width 75%) */}
        <div className="w-full max-w-3xl mx-auto mb-8">
          <div className="relative flex items-center bg-white/95 backdrop-blur-md border border-[#E5E7EB] hover:border-[#343B46] focus-within:border-[#FF2B85] rounded-xl p-2 shadow-lg shadow-black/5 transition-all">
            <div className="pl-3 pr-2 text-[#9CA3AF]">
              <Search size={22} className="text-[#343B46]" />
            </div>
            <input
              id="main-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by host name, category, or coupon code..."
              className="w-[75%] py-2.5 px-2 bg-transparent text-sm sm:text-base font-medium text-[#343B46] placeholder:text-[#9CA3AF] focus:outline-none"
            />
            <div className="flex-1 flex justify-end">
              {searchQuery ? (
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => setSearchQuery('')}
                  className="text-[#9CA3AF] hover:text-[#343B46]"
                >
                  Clear
                </Button>
              ) : (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="hidden sm:inline-flex items-center gap-1"
                >
                  <a href="#deals">
                    <span>Find Deals</span>
                    <ArrowRight size={14} />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-4 text-xs text-[#9CA3AF]">
            <span className="font-semibold text-[#343B46]">Popular:</span>
            {['Web Hosting', 'VPS Server', 'Domain Registration', 'Dedicated Server'].map((tag) => (
              <Button
                key={tag}
                variant="secondary"
                size="xs"
                onClick={() => {
                  const cat = CATEGORIES.find((c) => c.name === tag);
                  if (cat) setSelectedCategory(cat.slug);
                  const dealsEl = document.getElementById('deals');
                  if (dealsEl) dealsEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-white/80 hover:bg-white text-[#343B46] border-[#E5E7EB]"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}