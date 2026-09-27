'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, CircleCheck, Send } from '@animateicons/react/lucide';
import { Button } from '@/components/ui/button';

interface NewsletterFormData {
  email: string;
}

export default function NewsletterSection() {
  const [subscribed, setSubscribed] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (data.email) {
      setSubscribed(true);
      reset();
    }
  };

  return (
    <section className="py-[120px] bg-white border-b border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden p-8 sm:p-12 md:p-16 bg-[#343B46] text-white rounded-xl shadow-2xl">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2B85]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get Weekly Hosting Coupon Alerts
            </h2>

            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Join 12,000+ developers, agencies, and webmasters who receive our weekly curated digest of verified hosting discounts. Zero spam. One-click unsubscribe anytime.
            </p>

            {subscribed ? (
              <div className="p-4 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center gap-3 text-emerald-400">
                <CircleCheck size={24} />
                <span className="text-sm font-bold text-white">
                  Thanks for subscribing! Check your inbox for confirmation.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9CA3AF]">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="Enter your email address..."
                    className="w-full pl-10 pr-4 py-3 bg-white text-[#343B46] rounded-xl text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FF2B85]"
                  />
                  {errors.email && (
                    <span className="absolute -bottom-5 left-0 text-[11px] text-rose-300 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  disabled={isSubmitting}
                  className="rounded-xl"
                >
                  <span>Subscribe</span>
                  <Send size={15} />
                </Button>
              </form>
            )}

            <p className="text-[11px] text-[#9CA3AF]">
              We respect your privacy. Double opt-in confirmation required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}