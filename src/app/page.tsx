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

      <footer className="border-t border-[#ddd8cf] bg-[#f5f3ed]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <p className="font-serif text-xl text-[#121212]">The Warden</p>
          <div className="space-y-1 text-[11px] uppercase tracking-[0.14em] text-[#6d6a63] lg:text-right">
            <p>Independent reporting and analysis</p>
            <p>© 2026 The Warden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
