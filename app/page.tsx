import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PodologieSection from "@/components/PodologieSection";
import LeistungenSection from "@/components/LeistungenSection";
import BeschwerdenSection from "@/components/BeschwerdenSection";
import StandortSection from "@/components/StandortSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <BeschwerdenSection />
      <PodologieSection />
      <LeistungenSection />
      <StandortSection />
      <KontaktSection />
      <Footer />
    </main>
  );
}
