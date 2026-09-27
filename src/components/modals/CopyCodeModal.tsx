'use client';

import React from 'react';
import { Check, Copy, ExternalLink, X, Sparkles } from '@animateicons/react/lucide';
import { Deal } from '@/types';
import { Button } from '@/components/ui/button';

interface CopyCodeModalProps {
  deal: Deal | null;
  onClose: () => void;
}

export default function CopyCodeModal({ deal, onClose }: CopyCodeModalProps) {
  const [copied, setCopied] = React.useState(true);

  if (!deal) return null;

  const handleCopyAgain = () => {
    if (deal.promo_code) {
      navigator.clipboard.writeText(deal.promo_code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGoToDeal = () => {
    window.open(deal.affiliate_url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-xl p-6 md:p-8 shadow-2xl border border-[#E5E7EB]">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full text-[#9CA3AF] hover:text-[#343B46]"
          aria-label="Close modal"
        >
          <X size={18} />
        </Button>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFF0F6] text-[#FF2B85] rounded-full shadow-sm">
            <Sparkles size={28} />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-[#F5F5F6] text-[#343B46] text-xs font-semibold rounded-full mb-2">
              {deal.company.name} Deal
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#343B46]">
              {deal.title}
            </h3>
            <p className="text-sm text-[#9CA3AF] mt-1">
              Promo code copied to your clipboard! Paste it at checkout to claim your discount.
            </p>
          </div>

          {deal.promo_code && (
            <div className="p-4 bg-[#F5F5F6] rounded-xl border border-dashed border-[#FF2B85]/40 flex items-center justify-between gap-3">
              <span className="font-mono text-xl font-extrabold tracking-wider text-[#FF2B85]">
                {deal.promo_code}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleCopyAgain}
                className="bg-[#343B46] text-white hover:bg-black hover:text-white border-none shadow-sm"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </Button>
            </div>
          )}

          <div className="space-y-3 pt-2">
            <Button
              variant="default"
              size="lg"
              onClick={handleGoToDeal}
              className="w-full flex items-center justify-center gap-2 text-sm"
            >
              <span>Continue to {deal.company.name}</span>
              <ExternalLink size={16} />
            </Button>
            <p className="text-xs text-[#9CA3AF]">
              Redirecting via verified affiliate partner link. Opens in a new tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}