'use client';

import React, { useState } from 'react';
import { Mail, CircleCheck, Send } from '@animateicons/react/lucide';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
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
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9CA3AF]">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-10 pr-4 py-3.5 bg-white text-[#343B46] rounded-xl text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FF2B85]"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 btn-primary rounded-xl text-sm font-bold whitespace-nowrap shadow-md hover:shadow-md"
                >
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
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