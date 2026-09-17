import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HostPromo — Verified Web Hosting Promo Codes & Company Reviews',
  description:
    'Save up to 85% on web hosting, cloud VPS, dedicated servers, and domain registrations. 100% manually tested promo codes and honest community reviews.',
  keywords: [
    'hosting promo codes',
    'web hosting coupons',
    'hostinger discount code',
    'vps server deals',
    'domain registration coupons',
    'hosting reviews',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-[#343B46] antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
