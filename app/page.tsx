import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import StrategySection from "../components/sections/StrategySection";
import BentoGrid from "../components/sections/BentoGrid";
import PricingSection from "../components/sections/PricingSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";
import ServicesSection from "../components/sections/ServicesSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <BentoGrid />
      <StrategySection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
