'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CircleCheck, X, Tag } from '@animateicons/react/lucide';
import { CATEGORIES } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface SubmitDealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubmitDealFormData {
  company_name: string;
  contact_email: string;
  category: string;
  promo_code?: string;
  deal_url: string;
  short_description: string;
}

export default function SubmitDealModal({ isOpen, onClose }: SubmitDealModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubmitDealFormData>({
    defaultValues: {
      company_name: '',
      contact_email: '',
      category: 'web-hosting',
      promo_code: '',
      deal_url: '',
      short_description: '',
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: SubmitDealFormData) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      reset();
    }, 2500);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-xl p-6 md:p-8 shadow-2xl border border-[#E5E7EB] max-h-[90vh] overflow-y-auto">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full text-[#9CA3AF] hover:text-[#343B46]"
          aria-label="Close modal"
        >
          <X size={18} />
        </Button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CircleCheck size={56} className="text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-[#343B46]">Deal Submitted!</h3>
            <p className="text-sm text-[#9CA3AF] max-w-sm mx-auto">
              Thank you for your submission. Our editorial team manually verifies all submissions before publishing.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#FF2B85]">
              <div className="p-2 bg-[#FFF0F6] rounded-xl">
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
                  {...register('company_name', { required: 'Company name is required' })}
                  placeholder="e.g. Hostinger"
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
                />
                {errors.company_name && (
                  <span className="text-[11px] text-rose-500 font-medium block">
                    {errors.company_name.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#343B46]">Your Contact Email *</label>
                <input
                  type="email"
                  {...register('contact_email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="name@example.com"
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
                />
                {errors.contact_email && (
                  <span className="text-[11px] text-rose-500 font-medium block">
                    {errors.contact_email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#343B46]">Category *</label>
                <select
                  {...register('category', { required: true })}
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
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
                  {...register('promo_code')}
                  placeholder="e.g. SAVE80"
                  className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85] font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#343B46]">Deal Link / Landing URL *</label>
              <input
                type="url"
                {...register('deal_url', {
                  required: 'Deal URL is required',
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: 'Please enter a valid URL (http:// or https://)',
                  },
                })}
                placeholder="https://company.com/deal"
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
              />
              {errors.deal_url && (
                <span className="text-[11px] text-rose-500 font-medium block">
                  {errors.deal_url.message}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#343B46]">Deal Description & Discount *</label>
              <textarea
                rows={2}
                {...register('short_description', {
                  required: 'Deal description is required',
                  minLength: { value: 10, message: 'Description must be at least 10 characters' },
                })}
                placeholder="e.g. 75% off first year + free domain name on annual plans..."
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
              />
              {errors.short_description && (
                <span className="text-[11px] text-rose-500 font-medium block">
                  {errors.short_description.message}
                </span>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="secondary"
                size="default"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="default"
                size="default"
                disabled={isSubmitting}
                className="flex-1"
              >
                <Send size={15} />
                <span>Submit for Review</span>
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}