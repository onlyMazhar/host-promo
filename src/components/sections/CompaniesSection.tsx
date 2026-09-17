'use client';

import React from 'react';
import { Star, ShieldCheck, ArrowRight, Building2, PlusCircle } from 'lucide-react';
import { COMPANIES } from '@/data/mockData';

interface CompaniesSectionProps {
  onOpenSubmitModal: () => void;
}

export default function CompaniesSection({ onOpenSubmitModal }: CompaniesSectionProps) {
  return (
    <section id="companies" className="py-[120px] bg-[#F5F5F6] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 text-[#FF2B85] text-xs font-bold rounded-full mb-3 border border-[#E5E7EB] shadow-xs backdrop-blur-xs">
              <Building2 size={13} />
              <span>Hosting Company Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343B46] tracking-tight">
              Top Rated Hosting Providers
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-1 max-w-xl">
              Honest ratings from verified customers across Uptime, Support, Value, Ease of Use, and Migration.
            </p>
          </div>

          <button
            onClick={onOpenSubmitModal}
            className="self-start md:self-auto inline-flex items-center gap-1.5 py-3 px-5 btn-primary rounded-[12px] text-xs font-bold shadow-md hover:shadow-md"
          >
            <PlusCircle size={15} />
            <span>Register Your Company</span>
          </button>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COMPANIES.map((company) => (
            <div
              key={company.id}
              className="custom-card p-6 rounded-[12px] flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-white to-[#F5F5F6] border border-[#E5E7EB] flex items-center justify-center font-extrabold text-base text-[#343B46] shadow-xs">
                      {company.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#343B46]">{company.name}</h3>
                      <div className="text-xs text-[#9CA3AF]">{company.headquarters || 'Global Provider'}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm font-extrabold text-[#343B46]">
                      <Star size={15} className="text-[#FFB800] fill-[#FFB800]" />
                      <span>{company.avg_rating.toFixed(1)}</span>
                    </div>
                    <span className="text-[11px] text-[#9CA3AF]">
                      {company.review_count.toLocaleString()} reviews
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#9CA3AF] line-clamp-2 mb-5 leading-relaxed">
                  {company.description}
                </p>

                {/* Sub-ratings Breakdown Progress */}
                <div className="space-y-2 py-3 border-y border-[#E5E7EB]/80 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#9CA3AF] font-medium">Uptime & Reliability</span>
                    <span className="font-bold text-[#343B46]">{company.ratings_breakdown.uptime} / 5</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E5E7EB]/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${(company.ratings_breakdown.uptime / 5) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[#9CA3AF] font-medium">Support Quality</span>
                    <span className="font-bold text-[#343B46]">{company.ratings_breakdown.support} / 5</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E5E7EB]/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF3D92] to-[#FF2B85] rounded-full"
                      style={{ width: `${(company.ratings_breakdown.support / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-[#FF2B85] bg-gradient-to-r from-[#FFF0F6] to-[#FFE4EF] border border-[#FF2B85]/20 px-2.5 py-1 rounded-full shadow-xs">
                  {company.deal_count} Active Deals
                </span>
                <a
                  href="#deals"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#343B46] hover:text-[#FF2B85] transition-colors"
                >
                  <span>View Deals & Reviews</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Trust Banner */}
        <div className="p-8 custom-card rounded-[12px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-[12px] border border-emerald-200/60 flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#343B46]">
                Are you a hosting company representative?
              </h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                Claim your profile, publish verified promotional deals, and respond to customer reviews for free.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenSubmitModal}
            className="btn-secondary py-2.5 px-5 text-xs font-bold whitespace-nowrap shadow-md hover:shadow-md"
          >
            Claim Company Profile
          </button>
        </div>
      </div>
    </section>
  );
}
