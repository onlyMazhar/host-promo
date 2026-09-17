'use client';

import React from 'react';
import { Tag, ShieldCheck, Heart } from '@animateicons/react/lucide';
import { CATEGORIES, COMPANIES } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] pt-16 pb-12 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E5E7EB]">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FF2B85] text-white flex items-center justify-center font-extrabold shadow-md">
                <Tag size={18} className="transform -rotate-12" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#343B46]">
                Host<span className="text-[#FF2B85]">Promo</span>
              </span>
            </a>
            <p className="text-xs text-[#9CA3AF] max-w-sm leading-relaxed">
              HostPromo is an independent hosting promo code aggregator and review platform. We help webmasters and developers save money with manually tested coupons and transparent customer feedback.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] text-[#343B46] text-xs font-semibold rounded-full border border-[#E5E7EB]">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>100% Manually Verified Database</span>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="text-xs font-bold text-[#343B46] uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <a href="#deals" className="hover:text-[#FF2B85] transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Hosting Companies */}
          <div>
            <h4 className="text-xs font-bold text-[#343B46] uppercase tracking-wider mb-4">
              Top Hosting
            </h4>
            <ul className="space-y-2.5 text-xs">
              {COMPANIES.map((company) => (
                <li key={company.id}>
                  <a href="#companies" className="hover:text-[#FF2B85] transition-colors">
                    {company.name} Promo Codes
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#343B46] uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#deals" className="hover:text-[#FF2B85] transition-colors">
                  All Active Deals
                </a>
              </li>
              <li>
                <a href="#companies" className="hover:text-[#FF2B85] transition-colors">
                  Company Directory
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-[#FF2B85] transition-colors">
                  Comparisons
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FF2B85] transition-colors">
                  How We Verify
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure & Bottom Bar */}
        <div className="pt-8 space-y-4 text-xs text-[#9CA3AF]">
          <p className="text-[11px] leading-relaxed text-center sm:text-left">
            <strong>Affiliate Disclosure:</strong> HostPromo is supported by our visitors. When you click through our verified discount links and purchase hosting or domain services, we may earn an affiliate commission at no extra cost to you. This enables us to maintain and verify all promo codes daily.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB]/60">
            <p className="text-[11px]">
              &copy; {new Date().getFullYear()} HostPromo. All rights reserved.
            </p>
            <div className="text-[11px] flex items-center gap-1">
              Built with <Heart size={12} className="text-[#FF2B85] fill-[#FF2B85]" /> for developers and webmasters.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}