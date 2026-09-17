'use client';

import React from 'react';
import { ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      title: '100% Manually Verified Codes',
      description:
        'Every single coupon code is manually tested by our team every 7 days. Expired or invalid codes are flagged and purged immediately.',
    },
    {
      icon: Zap,
      color: 'text-[#FF2B85]',
      bgColor: 'bg-[#FFF0F6]',
      title: 'Direct Exclusive Discounts',
      description:
        'We partner directly with leading cloud and shared hosting companies to negotiate promo codes with up to 85% discount for our visitors.',
    },
    {
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      title: 'Honest Community Reviews',
      description:
        'Real hosting customer reviews covering actual uptime, support responsiveness, renewal pricing, and migration quality without bias.',
    },
  ];

  return (
    <section id="why-us" className="py-[120px] bg-[#F5F5F6] border-b border-[#E5E7EB]">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#FF2B85] text-xs font-bold rounded-full mb-3 border border-[#E5E7EB] shadow-xs">
            <Sparkles size={13} />
            <span>Why HostPromo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343B46] tracking-tight mb-4">
            The Most Reliable Hosting Coupon Platform
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Unlike generic coupon websites filled with expired links, HostPromo focuses strictly on cloud infrastructure, VPS, and web hosting deals.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="custom-card p-8 bg-white border border-[#E5E7EB] rounded-[12px] flex flex-col items-start text-left"
              >
                <div className={`w-14 h-14 ${pillar.bgColor} ${pillar.color} rounded-[12px] flex items-center justify-center mb-6 shadow-xs`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#343B46] mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
