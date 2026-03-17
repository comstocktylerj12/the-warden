import HeroSection from "@/components/home/HeroSection";
import LatestAnalysis from "@/components/home/LatestAnalysis";
import Masthead from "@/components/home/Masthead";
import TopStoriesRail from "@/components/home/TopStoriesRail";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#121212]">
      <Masthead />
      <HeroSection />
      <TopStoriesRail />
      <LatestAnalysis />
    </main>
  );
}
