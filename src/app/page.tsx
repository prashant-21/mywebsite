import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import CashFlowSection from '@/components/CashFlowSection';
import FounderSection from '@/components/FounderSection';
import DiagnosticForm from '@/components/DiagnosticForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-sky-500/30 font-sans">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatsAppDemo />
      <CashFlowSection />
      <FounderSection />
      <DiagnosticForm />
      <FAQSection />
      <Footer />
    </main>
  );
}
