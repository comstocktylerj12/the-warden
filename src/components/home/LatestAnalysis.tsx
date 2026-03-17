const analysisItems = [
  {
    kicker: "Middle East · 6 min read",
    headline:
      "Why diplomatic phrasing, not formal announcements, may define this week.",
    summary:
      "Language from both delegations suggests a tactical pause, not a strategic reset.",
  },
  {
    kicker: "Washington · 9 min read",
    headline:
      "The budget debate is now an institutional stress test for agency leadership.",
    summary:
      "What began as a fiscal standoff is becoming a question of operating authority.",
  },
  {
    kicker: "Markets · 5 min read",
    headline:
      "Investors are repricing timeline risk as policy and implementation drift apart.",
    summary:
      "The gap between official guidance and operational readiness is starting to matter.",
  },
  {
    kicker: "Essays · 11 min read",
    headline:
      "In high-noise cycles, editorial restraint is often the most useful signal.",
    summary:
      "What serious readers need now is proportion, context, and disciplined framing.",
  },
];

export default function LatestAnalysis() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 lg:px-6 lg:pb-20">
      <div className="border-y border-[#ddd8cf] py-3">
        <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#3c3934]">
          Latest Analysis
        </h3>
      </div>

      <div className="divide-y divide-[#e2ded5]">
        {analysisItems.map((item) => (
          <article className="grid gap-3 py-6 lg:grid-cols-[220px_1fr] lg:gap-8" key={item.headline}>
            <p className="pt-1 text-[11px] uppercase tracking-[0.14em] text-[#6d6a63]">
              {item.kicker}
            </p>
            <div>
              <h4 className="max-w-4xl font-serif text-[1.9rem] leading-tight text-[#121212] sm:text-[2.05rem]">
                {item.headline}
              </h4>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5a564f]">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
