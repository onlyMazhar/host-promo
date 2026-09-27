'use client';

import React, { useState } from 'react';
import { ArrowRight, Star, ShieldCheck, Check } from '@animateicons/react/lucide';
import { COMPARISONS, COMPANIES } from '@/data/mockData';
import { Button } from '@/components/ui/button';

export default function ComparisonSection() {
  const [selectedComparison, setSelectedComparison] = useState<number>(0);
  const activeComp = COMPARISONS[selectedComparison] || COMPARISONS[0];

  return (
    <section id="compare" className="py-[120px] bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343B46] tracking-tight mb-4">
            Side-by-Side Hosting Comparison
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Compare performance benchmarks, uptime records, customer support scores, and active discount promos in an easy-to-read comparison table.
          </p>
        </div>

        {/* Comparison Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {COMPARISONS.map((comp, idx) => (
            <Button
              key={comp.id}
              variant={selectedComparison === idx ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedComparison(idx)}
              className="rounded-[12px] text-xs font-bold"
            >
              <span>{comp.company_a.name} vs {comp.company_b.name}</span>
            </Button>
          ))}
        </div>

        {/* Comparison Table Container */}
        <div className="custom-card overflow-hidden rounded-xl border border-[#E5E7EB] shadow-lg mb-12">
          {/* Top Verdict Banner */}
          <div className="p-5 md:p-6 bg-gradient-to-r from-[#FFF0F6] via-white to-[#F5F5F6] border-b border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF2B85]">
                Matchup Summary
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#343B46] mt-0.5">
                {activeComp.highlight}
              </h3>
              <p className="text-xs text-[#9CA3AF] mt-1 max-w-3xl leading-relaxed">
                {activeComp.summary}
              </p>
            </div>
            <div className="self-start md:self-auto shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#FF2B85]/20 text-[#FF2B85] rounded-full text-xs font-extrabold shadow-xs">
                <Check size={14} />
                <span>{activeComp.winner_category}</span>
              </span>
            </div>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#F5F5F6]/80 border-b border-[#E5E7EB] text-xs font-bold text-[#343B46]">
                  <th className="py-4 px-6 w-1/3">Benchmark Metric</th>
                  <th className="py-4 px-6 w-1/3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#343B46] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {activeComp.company_a.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-sm font-extrabold text-[#343B46] block">{activeComp.company_a.name}</span>
                        <span className="text-[11px] font-normal text-[#9CA3AF]">{activeComp.company_a.headquarters}</span>
                      </div>
                    </div>
                  </th>
                  <th className="py-4 px-6 w-1/3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#343B46] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {activeComp.company_b.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-sm font-extrabold text-[#343B46] block">{activeComp.company_b.name}</span>
                        <span className="text-[11px] font-normal text-[#9CA3AF]">{activeComp.company_b.headquarters}</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs text-[#343B46]">
                {/* Overall Rating */}
                <tr className="hover:bg-[#F5F5F6]/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#9CA3AF]">Overall Customer Rating</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 font-extrabold text-[#343B46] text-sm">
                      <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                      <span>{activeComp.company_a.avg_rating.toFixed(1)} / 5.0</span>
                      <span className="text-[11px] font-normal text-[#9CA3AF] ml-1">({activeComp.company_a.review_count} reviews)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 font-extrabold text-[#343B46] text-sm">
                      <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                      <span>{activeComp.company_b.avg_rating.toFixed(1)} / 5.0</span>
                      <span className="text-[11px] font-normal text-[#9CA3AF] ml-1">({activeComp.company_b.review_count} reviews)</span>
                    </div>
                  </td>
                </tr>

                {/* Uptime */}
                <tr className="hover:bg-[#F5F5F6]/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#9CA3AF]">Uptime & Reliability</td>
                  <td className="py-4 px-6 font-extrabold text-emerald-600 text-sm">
                    {activeComp.company_a.ratings_breakdown.uptime_percentage || '99.9%'}
                  </td>
                  <td className="py-4 px-6 font-extrabold text-emerald-600 text-sm">
                    {activeComp.company_b.ratings_breakdown.uptime_percentage || '99.8%'}
                  </td>
                </tr>

                {/* Support Quality */}
                <tr className="hover:bg-[#F5F5F6]/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#9CA3AF]">Support Quality Score</td>
                  <td className="py-4 px-6 font-bold text-[#343B46]">
                    {activeComp.company_a.ratings_breakdown.support.toFixed(1)} / 5.0
                  </td>
                  <td className="py-4 px-6 font-bold text-[#343B46]">
                    {activeComp.company_b.ratings_breakdown.support.toFixed(1)} / 5.0
                  </td>
                </tr>

                {/* Value Score */}
                <tr className="hover:bg-[#F5F5F6]/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#9CA3AF]">Value For Money</td>
                  <td className="py-4 px-6 font-bold text-[#343B46]">
                    {(activeComp.company_a.ratings_breakdown.value ?? 4.5).toFixed(1)} / 5.0
                  </td>
                  <td className="py-4 px-6 font-bold text-[#343B46]">
                    {(activeComp.company_b.ratings_breakdown.value ?? 4.5).toFixed(1)} / 5.0
                  </td>
                </tr>

                {/* Active Deals */}
                <tr className="hover:bg-[#F5F5F6]/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#9CA3AF]">Active Promo Deals</td>
                  <td className="py-4 px-6">
                    <span className="font-extrabold text-[#FF2B85] bg-[#FFF0F6] px-2.5 py-1 rounded-full border border-[#FF2B85]/20">
                      {activeComp.company_a.deal_count || 0} Available
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-extrabold text-[#FF2B85] bg-[#FFF0F6] px-2.5 py-1 rounded-full border border-[#FF2B85]/20">
                      {activeComp.company_b.deal_count || 0} Available
                    </span>
                  </td>
                </tr>

                {/* Action Row */}
                <tr className="bg-[#F5F5F6]/50">
                  <td className="py-5 px-6 font-bold text-[#343B46]">Find Coupons & Discounts</td>
                  <td className="py-5 px-6">
                    <Button asChild variant="default" size="sm" className="w-full sm:w-auto">
                      <a href="#deals" className="inline-flex items-center gap-1.5">
                        <span>Get {activeComp.company_a.name} Deals</span>
                        <ArrowRight size={13} />
                      </a>
                    </Button>
                  </td>
                  <td className="py-5 px-6">
                    <Button asChild variant="secondary" size="sm" className="w-full sm:w-auto">
                      <a href="#deals" className="inline-flex items-center gap-1.5">
                        <span>Get {activeComp.company_b.name} Deals</span>
                        <ArrowRight size={13} />
                      </a>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Complete Overview Directory Table */}
        <div className="custom-card overflow-hidden rounded-xl border border-[#E5E7EB] shadow-lg">
          <div className="p-5 md:p-6 bg-white border-b border-[#E5E7EB]">
            <h3 className="text-lg font-bold text-[#343B46]">All Providers Comparison Matrix</h3>
            <p className="text-xs text-[#9CA3AF] mt-0.5">Quick reference table across all top featured hosting companies.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F5F5F6]/80 border-b border-[#E5E7EB] text-xs font-bold text-[#343B46]">
                  <th className="py-3.5 px-6">Company</th>
                  <th className="py-3.5 px-6">Rating</th>
                  <th className="py-3.5 px-6">Uptime</th>
                  <th className="py-3.5 px-6">Support Score</th>
                  <th className="py-3.5 px-6">Active Deals</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs text-[#343B46]">
                {COMPANIES.map((company) => (
                  <tr key={company.id} className="hover:bg-[#F5F5F6]/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#343B46] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {company.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <span className="font-bold text-sm text-[#343B46] block">{company.name}</span>
                          <span className="text-[11px] text-[#9CA3AF]">{company.headquarters || 'Global'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 font-bold">
                        <Star size={13} className="text-[#FFB800] fill-[#FFB800]" />
                        <span>{company.avg_rating.toFixed(1)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-600">
                      {company.ratings_breakdown.uptime_percentage || '99.9%'}
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {company.ratings_breakdown.support.toFixed(1)} / 5.0
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-extrabold text-[#FF2B85] bg-[#FFF0F6] px-2 py-0.5 rounded-full text-[11px] border border-[#FF2B85]/20">
                        {company.deal_count || 0} Deals
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Button asChild variant="secondary" size="xs">
                        <a href="#deals" className="inline-flex items-center gap-1">
                          <span>View Deals</span>
                          <ArrowRight size={11} />
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}