import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import StrategySection from "../components/sections/StrategySection";
import BentoGrid from "../components/sections/BentoGrid";
import PricingSection from "../components/sections/PricingSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <StrategySection />
      <BentoGrid />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
