import { Navbar }          from '@/components/Navbar';
import { HeroSection }     from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ContentSection }  from '@/components/ContentSection';
import { CreatorsSection } from '@/components/CreatorsSection';
import { PricingSection }  from '@/components/PricingSection';
import { FaqSection }      from '@/components/FaqSection';
import { Footer }          from '@/components/Footer';

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <CreatorsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
