import { ScrollCanvas } from '@/components/landing/ScrollCanvas';
import { SavingsSection } from '@/components/landing/SavingsSection';
import { PricingCards } from '@/components/landing/PricingCards';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#050505' }}>
      {/* Scroll-linked hero animation */}
      <ScrollCanvas />

      {/* Below-fold sections */}
      <div style={{ background: '#0a0a0f' }}>
        <SavingsSection />
        <PricingCards />
        <Footer />
      </div>
    </main>
  );
}