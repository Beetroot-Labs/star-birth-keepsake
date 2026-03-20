import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LifestyleSection from "@/components/LifestyleSection";
import StarMapConfigurator from "@/components/StarMapConfigurator";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LifestyleSection />
      <StarMapConfigurator />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
