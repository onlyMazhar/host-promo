'use client';

import React from 'react';
import { Star } from '@animateicons/react/lucide';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showScore?: boolean;
  reviewCount?: number;
  className?: string;
}

export default function StarRating({
  rating,
  maxStars = 5,
  size = 15,
  showScore = true,
  reviewCount,
  className = '',
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5 text-[#FFB800]">
        {Array.from({ length: maxStars }).map((_, i) => {
          const fillPercent = Math.max(0, Math.min(100, (rating - i) * 100));
          return (
            <div key={i} className="relative inline-block">
              <Star size={size} className="text-[#E5E7EB] fill-[#E5E7EB]" />
              {fillPercent > 0 && (
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercent}%` }}
                >
                  <Star size={size} className="text-[#FFB800] fill-[#FFB800]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showScore && (
        <span className="text-xs font-bold text-[#343B46]">{rating.toFixed(1)}</span>
      )}
      {reviewCount !== undefined && (
        <span className="text-xs text-[#9CA3AF]">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}