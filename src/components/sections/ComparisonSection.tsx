'use client';

import React from 'react';
import { Columns3, ArrowRight } from 'lucide-react';
import { COMPARISONS } from '@/data/mockData';

export default function ComparisonSection() {
  return (
    <section id="compare" className="py-[120px] bg-white border-b border-[#E5E7EB]">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0F6] text-[#FF2B85] text-xs font-bold rounded-full mb-3 shadow-xs">
            <Columns3 size={13} />
            <span>Head-to-Head Comparisons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343B46] tracking-tight mb-4">
            Compare Top Hosting Services
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Side-by-side performance benchmarks, pricing differences, uptime track records, and discount savings to help you choose the best provider.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMPARISONS.map((comp) => (
            <div
              key={comp.id}
              className="custom-card p-6 md:p-8 bg-white border border-[#E5E7EB] rounded-[12px] flex flex-col justify-between"
            >
              <div>
                {/* VS Header */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[12px] bg-[#343B46] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      {comp.company_a.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-[#343B46]">{comp.company_a.name}</h4>
                      <span className="text-xs text-[#FFB800] font-bold">★ {comp.company_a.avg_rating}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 bg-[#FFF0F6] text-[#FF2B85] rounded-full text-xs font-extrabold border border-[#FF2B85]/20">
                    VS
                  </span>

                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <h4 className="font-extrabold text-base text-[#343B46]">{comp.company_b.name}</h4>
                      <span className="text-xs text-[#FFB800] font-bold">★ {comp.company_b.avg_rating}</span>
                    </div>
                    <div className="w-10 h-10 rounded-[12px] bg-[#343B46] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      {comp.company_b.name.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Highlight Headline */}
                <div className="py-4">
                  <span className="text-xs font-bold text-[#FF2B85] uppercase tracking-wider">Verdict Summary</span>
                  <h3 className="text-lg font-bold text-[#343B46] mt-1">{comp.highlight}</h3>
                  <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed">{comp.summary}</p>
                </div>

                {/* Feature Comparison Rows */}
                <div className="space-y-2.5 py-4 border-t border-[#E5E7EB] text-xs">
                  <div className="flex items-center justify-between text-[#343B46]">
                    <span className="font-medium text-[#9CA3AF]">Uptime Rating</span>
                    <span className="font-bold">{comp.company_a.ratings_breakdown.uptime} vs {comp.company_b.ratings_breakdown.uptime}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#343B46]">
                    <span className="font-medium text-[#9CA3AF]">Support Score</span>
                    <span className="font-bold">{comp.company_a.ratings_breakdown.support} vs {comp.company_b.ratings_breakdown.support}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#343B46]">
                    <span className="font-medium text-[#9CA3AF]">Active Promo Deals</span>
                    <span className="font-bold text-[#FF2B85]">{comp.company_a.deal_count} vs {comp.company_b.deal_count}</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <a
                  href="#deals"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 btn-secondary rounded-[12px] text-xs font-bold shadow-md hover:shadow-md"
                >
                  <span>Explore Both Deals & Coupons</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
