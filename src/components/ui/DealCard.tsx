'use client';

import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, Clock, Flag, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Deal } from '@/types';
import StarRating from './StarRating';

interface DealCardProps {
  deal: Deal;
  onCopyCode: (deal: Deal) => void;
  onReportDeal: (deal: Deal) => void;
}

export default function DealCard({ deal, onCopyCode, onReportDeal }: DealCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (deal.promo_code) {
      navigator.clipboard.writeText(deal.promo_code);
      setCopied(true);
      
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#FF2B85', '#343B46', '#000000', '#FFB800'],
        });
      } catch {
        // ignore
      }

      onCopyCode(deal);
      setTimeout(() => setCopied(false), 2500);
    } else {
      window.open(deal.affiliate_url, '_blank');
    }
  };

  const handleGetDeal = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(deal.affiliate_url, '_blank');
  };

  return (
    <div className="custom-card p-5 md:p-6 flex flex-col justify-between relative group">
      {/* Top Header: Company Info + Verified Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[12px] bg-gradient-to-br from-white to-[#F5F5F6] border border-[#E5E7EB] flex items-center justify-center font-extrabold text-sm text-[#343B46] shadow-xs overflow-hidden flex-shrink-0">
              {deal.company.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#343B46] hover:text-[#FF2B85] transition-colors cursor-pointer">
                {deal.company.name}
              </h4>
              <StarRating
                rating={deal.company.avg_rating}
                reviewCount={deal.company.review_count}
                size={13}
              />
            </div>
          </div>

          {/* Verified Badge */}
          {deal.is_verified && (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50/90 text-emerald-700 border border-emerald-200/80 rounded-full text-[11px] font-bold shadow-xs backdrop-blur-xs">
              <ShieldCheck size={13} />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Badges strip: Category & Discount Highlight */}
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 bg-gradient-to-r from-[#FFF0F6] to-[#FFE4EF] text-[#FF2B85] font-extrabold text-xs rounded-full border border-[#FF2B85]/25 shadow-xs">
            {deal.discount_label}
          </span>
          <span className="px-2 py-0.5 bg-white/80 text-[#343B46] text-xs font-medium rounded-full border border-[#E5E7EB] shadow-xs">
            {deal.category_name}
          </span>
          {deal.deal_type === 'promo_code' && (
            <span className="px-2 py-0.5 bg-amber-50/90 text-amber-700 text-xs font-medium rounded-full border border-amber-200 shadow-xs">
              Promo Code
            </span>
          )}
          {deal.deal_type === 'free_trial' && (
            <span className="px-2 py-0.5 bg-blue-50/90 text-blue-700 text-xs font-medium rounded-full border border-blue-200 shadow-xs">
              Free Trial
            </span>
          )}
        </div>

        {/* Deal Title & Short Description */}
        <h3 className="text-base md:text-lg font-bold text-[#343B46] mb-1.5 leading-snug line-clamp-2 group-hover:text-[#000000] transition-colors">
          {deal.title}
        </h3>
        <p className="text-xs md:text-sm text-[#9CA3AF] mb-5 leading-relaxed line-clamp-2">
          {deal.short_description}
        </p>
      </div>

      {/* Action Footer: Buttons + Expiry info + Report flag */}
      <div className="space-y-3 pt-3 border-t border-[#E5E7EB]/80">
        {/* Buttons Row */}
        <div className="grid grid-cols-2 gap-2.5">
          {deal.promo_code ? (
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[12px] text-xs font-bold transition-all shadow-md active:shadow-xs border ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white/90 hover:bg-white text-[#FF2B85] border-[#FF2B85] shadow-xs'
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleGetDeal}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[12px] text-xs font-bold btn-secondary shadow-md hover:shadow-md"
            >
              <Sparkles size={14} className="text-[#FF2B85]" />
              <span>Direct Deal</span>
            </button>
          )}

          <button
            onClick={handleGetDeal}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 btn-primary rounded-[12px] text-xs font-bold shadow-md hover:shadow-md"
          >
            <span>Get Deal</span>
            <ExternalLink size={13} />
          </button>
        </div>

        {/* Stats & Meta Bottom Strip */}
        <div className="flex items-center justify-between text-[11px] text-[#9CA3AF] pt-1">
          <div className="flex items-center gap-1 text-[#9CA3AF]">
            <Clock size={12} />
            <span>Verified {deal.last_verified_at}</span>
          </div>

          <button
            onClick={() => onReportDeal(deal)}
            className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#FF2B85] transition-colors"
            title="Report if expired or inaccurate"
          >
            <Flag size={11} />
            <span>Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
