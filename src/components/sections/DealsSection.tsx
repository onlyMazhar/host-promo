'use client';

import React, { useState, useMemo } from 'react';
import { Tag, Sparkles, Flame, Clock, MousePointerClick, SlidersHorizontal, BadgeCheck } from 'lucide-react';
import { CATEGORIES, DEALS } from '@/data/mockData';
import { Deal } from '@/types';
import DealCard from '@/components/ui/DealCard';

interface DealsSectionProps {
  searchQuery: string;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onCopyCode: (deal: Deal) => void;
  onReportDeal: (deal: Deal) => void;
}

type SortType = 'popular' | 'latest' | 'clicked' | 'expiring';

export default function DealsSection({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  onCopyCode,
  onReportDeal,
}: DealsSectionProps) {
  const [activeSort, setActiveSort] = useState<SortType>('popular');

  const filteredDeals = useMemo(() => {
    return DEALS.filter((deal) => {
      // Category filter
      if (selectedCategory !== 'all' && deal.category_slug !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = deal.title.toLowerCase().includes(query);
        const matchesCompany = deal.company.name.toLowerCase().includes(query);
        const matchesCode = deal.promo_code?.toLowerCase().includes(query);
        const matchesCategory = deal.category_name.toLowerCase().includes(query);
        return matchesTitle || matchesCompany || matchesCode || matchesCategory;
      }
      return true;
    }).sort((a, b) => {
      if (activeSort === 'latest') {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      if (activeSort === 'clicked') {
        return b.click_count - a.click_count;
      }
      if (activeSort === 'expiring') {
        return (new Date(a.expires_at || '2099-01-01').getTime()) - (new Date(b.expires_at || '2099-01-01').getTime());
      }
      // default: popular (copy_count + click_count)
      return (b.copy_count + b.click_count) - (a.copy_count + a.click_count);
    });
  }, [searchQuery, selectedCategory, activeSort]);

  return (
    <section id="deals" className="py-[120px] bg-white border-b border-[#E5E7EB]">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0F6] text-[#FF2B85] text-xs font-bold rounded-full mb-3">
              <Tag size={13} />
              <span>Exclusive Verified Discounts</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343B46] tracking-tight flex items-center gap-3">
             <BadgeCheck size={36} color='#FF2B85'/> Verified Discounts 
             {/* Hosting Promo Codes */}
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-1">
              Showing {filteredDeals.length} deals ready to use today. Click to copy or claim directly.
            </p>
          </div>

          {/* Sort Tabs */}
          <div className="flex items-center p-1.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] overflow-x-auto">
            <button
              onClick={() => setActiveSort('popular')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-xs font-bold transition-all whitespace-nowrap ${
                activeSort === 'popular'
                  ? 'bg-white text-[#FF2B85] shadow-sm'
                  : 'text-[#343B46] hover:text-black'
              }`}
            >
              <Flame size={14} />
              <span>Most Popular</span>
            </button>

            <button
              onClick={() => setActiveSort('latest')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-xs font-bold transition-all whitespace-nowrap ${
                activeSort === 'latest'
                  ? 'bg-white text-[#FF2B85] shadow-sm'
                  : 'text-[#343B46] hover:text-black'
              }`}
            >
              <Sparkles size={14} />
              <span>Latest</span>
            </button>

            <button
              onClick={() => setActiveSort('clicked')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-xs font-bold transition-all whitespace-nowrap ${
                activeSort === 'clicked'
                  ? 'bg-white text-[#FF2B85] shadow-sm'
                  : 'text-[#343B46] hover:text-black'
              }`}
            >
              <MousePointerClick size={14} />
              <span>Most Clicked</span>
            </button>

            <button
              onClick={() => setActiveSort('expiring')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-xs font-bold transition-all whitespace-nowrap ${
                activeSort === 'expiring'
                  ? 'bg-white text-[#FF2B85] shadow-sm'
                  : 'text-[#343B46] hover:text-black'
              }`}
            >
              <Clock size={14} />
              <span>Expiring Soon</span>
            </button>
          </div>
        </div>

        {/* Category Filter Horizontal Strip */}
        <div className="flex items-center gap-2.5 pb-6 overflow-x-auto no-scrollbar mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[12px] text-xs font-bold transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#FF2B85] text-white border-[#FF2B85] shadow-md shadow-[#FF2B85]/20'
                    : 'bg-[#F5F5F6] text-[#343B46] border-[#E5E7EB] hover:bg-white hover:border-[#343B46]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-[#E5E7EB] text-[#343B46]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deals Cards Grid */}
        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                onCopyCode={onCopyCode}
                onReportDeal={onReportDeal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F5F5F6] rounded-[12px] border border-[#E5E7EB]">
            <SlidersHorizontal size={40} className="mx-auto text-[#9CA3AF] mb-3" />
            <h3 className="text-lg font-bold text-[#343B46]">No promo codes found</h3>
            <p className="text-xs text-[#9CA3AF] mt-1 max-w-sm mx-auto">
              We could not find any deals matching your query. Try searching for a different keyword or view All Deals.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 px-4 py-2 btn-secondary text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
