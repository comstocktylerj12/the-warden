<<<<<<< HEAD
import Masthead from "@/components/home/Masthead";
import HeroSection from "@/components/home/HeroSection";
import TopStoriesRail from "@/components/home/TopStoriesRail";
import LatestAnalysis from "@/components/home/LatestAnalysis";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfa] text-[#121212]">
      <Masthead />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <HeroSection />
          <TopStoriesRail />
        </div>
      </section>

=======
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
>>>>>>> 53b275c3a8d471e1c509a946001c2ebec34ab72e
      <LatestAnalysis />
    </main>
  );
}
