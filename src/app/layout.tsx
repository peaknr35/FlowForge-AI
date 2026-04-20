import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FlowForge AI — Replace $1,639/mo in Tools',
  description:
    'Five AI modules for solo founders. Workflows, business plans, cold emails, contract analysis, niche copy — one subscription.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-bg-base text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}