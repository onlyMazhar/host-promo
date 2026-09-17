'use client';

import React, { useState } from 'react';
import { TriangleAlert, CircleCheck, X } from '@animateicons/react/lucide';
import { Deal } from '@/types';

interface ReportDealModalProps {
  deal: Deal | null;
  onClose: () => void;
}

export default function ReportDealModal({ deal, onClose }: ReportDealModalProps) {
  const [reason, setReason] = useState('expired');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!deal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-xl p-6 shadow-2xl border border-[#E5E7EB]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#343B46] hover:bg-[#F5F5F6] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <CircleCheck size={48} className="text-green-500 mx-auto" />
            <h3 className="text-xl font-bold text-[#343B46]">Report Submitted</h3>
            <p className="text-sm text-[#9CA3AF]">
              Thank you for helping keep HostPromo deals accurate and up-to-date! Our team will inspect this deal immediately.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                value={reason}
                onChange={(e) => setReason(e.target.value)}
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
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Briefly describe the issue..."
                className="w-full p-2.5 bg-[#F5F5F6] border border-[#E5E7EB] rounded-xl text-sm text-[#343B46] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#FF2B85]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 btn-secondary text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 btn-primary text-sm shadow-md"
              >
                Send Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}