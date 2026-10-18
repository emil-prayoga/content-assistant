import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technology from '@/components/Technology';
import Features from '@/components/Features';
import Generator from '@/components/Generator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Features />
      <Generator />
      <Footer />
    </main>
  );
}