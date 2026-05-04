import { Navbar } from './components/Navbar';
import { CursorGlow } from './components/CursorGlow';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { TrustedCompaniesSection } from './components/TrustedCompaniesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg overflow-hidden">
      {/* Background Elements */}
      <CursorGlow />
      <ParticleBackground />

      {/* Subtle Luxury Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-red/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary-red/8 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <TrustedCompaniesSection />
      <ProcessTimeline />
      <BenefitsSection />
      <TestimonialSection />
      <FAQSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
}

export default App;
