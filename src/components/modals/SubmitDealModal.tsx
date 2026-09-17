'use client';

import React, { useState } from 'react';
import { Send, CircleCheck, X, Tag } from '@animateicons/react/lucide';
import { CATEGORIES } from '@/data/mockData';

interface SubmitDealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitDealModal({ isOpen, onClose }: SubmitDealModalProps) {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_email: '',
    website_url: '',
    category: 'web-hosting',
    promo_code: '',
    deal_url: '',
    short_description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        company_name: '',
        contact_email: '',
        website_url: '',
        category: 'web-hosting',
        promo_code: '',
        deal_url: '',
        short_description: '',
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-[12px] p-6 md:p-8 shadow-2xl border border-[#E5E7EB] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#343B46] hover:bg-[#F5F5F6] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CircleCheck size={56} className="text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-[#343B46]">Deal Submitted!</h3>
            <p className="text-sm text-[#9CA3AF] max-w-sm mx-auto">
              Thank you for your submission. Our editorial team manually verifies all submissions before publishing.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#FF2B85]">
              <div className="p-2 bg-[#FFF0F6] rounded-[12px]">
                <Tag size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#343B46]">Submit a Hosting Deal</h3>
                <p className="text-xs text-[#9CA3AF]">Share a coupon or discount for manual review</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#343B46]">Company / Host Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hostinger"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#343B46]">Your Contact Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.contact_email}
                  onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#343B46]">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
                >
                  {CATEGORIES.filter((c) => c.slug !== 'all').map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#343B46]">Promo Code (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. SAVE80"
                  value={formData.promo_code}
                  onChange={(e) => setFormData({ ...formData, promo_code: e.target.value })}
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85] font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#343B46]">Deal Link / Landing URL *</label>
              <input
                type="url"
                required
                placeholder="https://company.com/deal"
                value={formData.deal_url}
                onChange={(e) => setFormData({ ...formData, deal_url: e.target.value })}
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#343B46]">Deal Description & Discount *</label>
              <textarea
                rows={2}
                required
                placeholder="e.g. 75% off first year + free domain name on annual plans..."
                value={formData.short_description}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-[12px] text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 btn-secondary text-sm shadow-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 btn-primary text-sm shadow-md"
              >
                <Send size={16} /> Submit for Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}