'use client';

import React, { useState, useEffect } from 'react';
import { Tag, Search, CirclePlus, Menu, X } from '@animateicons/react/lucide';
import { Button } from '@/components/ui/button';

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
          <Button
            variant="secondary"
            size="sm"
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#9CA3AF] bg-white/70 hover:bg-white border-[#E5E7EB] shadow-xs backdrop-blur-sm"
          >
            <Search size={14} className="text-[#343B46]" />
            <span>Search promo codes...</span>
            <kbd className="px-1.5 py-0.5 bg-[#F5F5F6] rounded text-[10px] font-mono border border-[#E5E7EB] text-[#343B46]">
              /
            </kbd>
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={onOpenSubmitModal}
            className="shadow-md hover:shadow-md"
          >
            <CirclePlus size={15} />
            <span>Submit Deal</span>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="brandGhost"
            size="icon-sm"
            onClick={onOpenSubmitModal}
            title="Submit Deal"
            className="bg-[#FFF0F6]"
          >
            <CirclePlus size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#343B46]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
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
            <Button
              variant="default"
              size="default"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmitModal();
              }}
              className="w-full flex items-center justify-center gap-2"
            >
              <CirclePlus size={16} />
              <span>Submit a Hosting Deal</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}