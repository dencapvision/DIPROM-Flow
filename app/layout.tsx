import type {Metadata} from 'next';
import { Prompt, Sarabun } from 'next/font/google';
import './globals.css';

const promptFont = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-prompt',
});

const sarabunFont = Sarabun({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sarabun',
});

export const metadata: Metadata = {
  title: 'DIPROM x Kru Den: AI Product Insight',
  description: 'ยกระดับทุนวัฒนธรรมสู่สากลด้วยพลัง AI',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="th" className={`${promptFont.variable} ${sarabunFont.variable}`}>
      <body suppressHydrationWarning className="bg-[#fcfbfc] text-[#1A2B48] font-sans">
        {children}
      </body>
    </html>
  );
}
