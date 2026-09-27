'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TriangleAlert, CircleCheck, X } from '@animateicons/react/lucide';
import { Deal } from '@/types';
import { Button } from '@/components/ui/button';

interface ReportDealModalProps {
  deal: Deal | null;
  onClose: () => void;
}

interface ReportDealFormData {
  reason: string;
  comment?: string;
}

export default function ReportDealModal({ deal, onClose }: ReportDealModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ReportDealFormData>({
    defaultValues: {
      reason: 'expired',
      comment: '',
    },
  });

  if (!deal) return null;

  const onSubmit = async (_data: ReportDealFormData) => {
    // Simulate report submission
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      reset();
    }, 2000);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-xl p-6 shadow-2xl border border-[#E5E7EB]">
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
          <div className="text-center py-6 space-y-3">
            <CircleCheck size={48} className="text-green-500 mx-auto" />
            <h3 className="text-xl font-bold text-[#343B46]">Report Submitted</h3>
            <p className="text-sm text-[#9CA3AF]">
              Thank you for helping keep HostPromo deals accurate and up-to-date! Our team will inspect this deal immediately.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-2 text-[#FF2B85]">
              <TriangleAlert size={22} />
              <h3 className="text-lg font-bold text-[#343B46]">Report This Deal</h3>
            </div>
            <p className="text-xs text-[#9CA3AF]">
              Flagging: <span className="font-medium text-[#343B46]">{deal.title}</span>
            </p>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#343B46]">Reason for report</label>
              <select
                {...register('reason', { required: true })}
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] focus:outline-none focus:border-[#FF2B85]"
              >
                <option value="expired">Coupon or deal has expired</option>
                <option value="wrong_code">Code is invalid or does not apply</option>
                <option value="misleading">Pricing or terms are misleading</option>
                <option value="other">Other issue</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#343B46]">
                Additional Details (Optional)
              </label>
              <textarea
                rows={3}
                {...register('comment')}
                placeholder="Briefly describe the issue..."
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#FF2B85]"
              />
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
                Send Report
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}