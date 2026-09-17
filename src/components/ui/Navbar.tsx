'use client';

import React, { useState, useEffect } from 'react';
import { Tag, Search, CirclePlus, Menu, X } from '@animateicons/react/lucide';

interface NavbarProps {
  onOpenSubmitModal: () => void;
  onSearchClick: () => void;
}

export default function Navbar({ onOpenSubmitModal, onSearchClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'glossy-nav shadow-sm'
          : 'bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#FF3D92] via-[#FF2B85] to-[#E01E71] text-white flex items-center justify-center font-extrabold shadow-md border border-white/30 group-hover:scale-105 transition-transform">
            <Tag size={20} className="transform -rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#343B46]">
              Host<span className="text-[#FF2B85]">Promo</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#9CA3AF] uppercase -mt-1">
              Deals & Reviews
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#343B46]">
          <a href="#deals" className="hover:text-[#FF2B85] transition-colors">
            All Deals
          </a>
          <a href="#companies" className="hover:text-[#FF2B85] transition-colors">
            Companies Directory
          </a>
          <a href="#compare" className="hover:text-[#FF2B85] transition-colors">
            Comparisons
          </a>
          <a href="#why-us" className="hover:text-[#FF2B85] transition-colors">
            How It Works
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3.5">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#9CA3AF] bg-white/70 hover:bg-white rounded-xl border border-[#E5E7EB] shadow-xs backdrop-blur-sm transition-all"
          >
            <Search size={14} className="text-[#343B46]" />
            <span>Search promo codes...</span>
            <kbd className="px-1.5 py-0.5 bg-[#F5F5F6] rounded text-[10px] font-mono border border-[#E5E7EB] text-[#343B46]">
              /
            </kbd>
          </button>

          <button
            onClick={onOpenSubmitModal}
            className="flex items-center gap-1.5 py-2.5 px-4 btn-primary text-xs font-bold shadow-md hover:shadow-md"
          >
            <CirclePlus size={15} />
            <span>Submit Deal</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSubmitModal}
            className="p-2 text-[#FF2B85] bg-[#FFF0F6] rounded-xl"
            title="Submit Deal"
          >
            <CirclePlus size={20} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#343B46] hover:bg-[#F5F5F6] rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <a
            href="#deals"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#343B46] hover:text-[#FF2B85]"
          >
            All Deals
          </a>
          <a
            href="#companies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#343B46] hover:text-[#FF2B85]"
          >
            Companies Directory
          </a>
          <a
            href="#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#343B46] hover:text-[#FF2B85]"
          >
            Comparisons
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#343B46] hover:text-[#FF2B85]"
          >
            How It Works
          </a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmitModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 btn-primary text-sm font-bold shadow-md"
            >
              <CirclePlus size={16} />
              <span>Submit a Hosting Deal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}