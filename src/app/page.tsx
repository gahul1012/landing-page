import { Navbar }          from '@/components/Navbar';
import { HeroSection }     from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ContentSection }  from '@/components/ContentSection';
import { CreatorsSection } from '@/components/CreatorsSection';
import { FaqSection }      from '@/components/FaqSection';
import { Footer }          from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <CreatorsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
