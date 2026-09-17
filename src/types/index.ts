export type DealType = 'promo_code' | 'free_trial' | 'discount' | 'freebie';

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface Company {
  id: number;
  name: string;
  slug: string;
  logo: string;
  website_url: string;
  description: string;
  founded_year?: number;
  headquarters?: string;
  employee_count?: string;
  avg_rating: number;
  review_count: number;
  deal_count: number;
  categories: string[];
  ratings_breakdown: {
    uptime: number;
    support: number;
    value: number;
    ease: number;
    migration: number;
  };
}

export interface Deal {
  id: number;
  company_id: number;
  company: {
    name: string;
    slug: string;
    logo: string;
    avg_rating: number;
    review_count: number;
  };
  category_id: number;
  category_slug: string;
  category_name: string;
  title: string;
  slug: string;
  short_description: string;
  description?: string;
  promo_code?: string | null;
  affiliate_url: string;
  deal_type: DealType;
  discount_value?: number;
  discount_unit?: string;
  discount_label: string;
  expires_at?: string;
  is_active: boolean;
  is_featured: boolean;
  is_verified: boolean;
  last_verified_at: string;
  click_count: number;
  copy_count: number;
  report_count: number;
  created_at: string;
}

export interface CompanyComparison {
  id: number;
  slug: string;
  company_a: Company;
  company_b: Company;
  highlight: string;
  summary: string;
  winner_category: string;
}
