const liveFeedItems = [
  {
    source: "Reuters",
    timestamp: "2m ago",
    category: "Markets",
    headline:
      "Treasury yields edge higher as officials signal a narrower window for policy adjustments.",
    categoryTone: "border-[#d7d4ef] bg-[#f1f0fb] text-[#4d4a74]",
  },
  {
    source: "Associated Press",
    timestamp: "8m ago",
    category: "White House",
    headline:
      "Advisers brief congressional leaders ahead of tonight's closed-door appropriations session.",
    categoryTone: "border-[#d9e1d3] bg-[#f2f6ef] text-[#4e5f3f]",
  },
  {
    source: "Financial Times",
    timestamp: "14m ago",
    category: "Europe",
    headline:
      "Eurozone ministers outline provisional energy framework as winter procurement talks accelerate.",
    categoryTone: "border-[#ddd3d0] bg-[#f8efec] text-[#6f4f45]",
  },
  {
    source: "BBC News",
    timestamp: "21m ago",
    category: "Global",
    headline:
      "Diplomatic channels remain active after regional partners call for phased de-escalation terms.",
    categoryTone: "border-[#d3dde5] bg-[#edf4f8] text-[#455c6e]",
  },
  {
    source: "Bloomberg",
    timestamp: "31m ago",
    category: "Economy",
    headline:
      "Analysts revise growth outlook as central banks weigh messaging against weaker manufacturing data.",
    categoryTone: "border-[#e1d8cf] bg-[#f7f1eb] text-[#6b5643]",
  },
];

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-6 lg:py-14">
      <div className="grid gap-7 border-b border-[#ddd8cf] pb-10 lg:grid-cols-[1.36fr_0.86fr] lg:gap-10 lg:pb-14">
        <div className="space-y-6">
          <div className="aspect-[16/9] border border-[#d8d3ca] bg-[#ece8df]" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-[#6d6a63]">
            <span className="border border-[#cfd6df] bg-[#edf2f7] px-2.5 py-1 text-[#37475b]">Lead Story</span>
            <span>U.S. Policy</span>
            <span>8 min read</span>
          </div>

          <h2 className="max-w-4xl font-serif text-[2rem] leading-[1.12] text-[#121212] sm:text-[2.45rem] lg:text-[2.75rem]">
            As pressure builds across agencies, the administration narrows to a
            single diplomatic lane.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-[#4f4b45]">
            Officials describe a deliberate strategy that favors message discipline
            over rapid movement, with implications for allies, markets, and next
            week&apos;s briefing cycle.
          </p>
        </div>

        <aside className="border-l-0 border-[#ddd8cf] pt-1 lg:border-l lg:pl-8">
          <div className="mb-4 flex items-center justify-between border-b border-[#ddd8cf] pb-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#4a4640]">
              Live Wire
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7e2d5] bg-[#eff6ed] px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#51664a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6c8c63]" />
              Updating
            </span>
          </div>

          <div className="max-h-[500px] space-y-2 overflow-y-auto pr-1">
            {liveFeedItems.map((item) => (
              <article
                key={`${item.source}-${item.timestamp}`}
                className="rounded-sm border border-[#e2ddd4] bg-[#f9f8f4] px-4 py-3.5 transition-colors hover:border-[#c9c3b9]"
              >
                <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[#6d6a63]">
                  <span>{item.source}</span>
                  <span>·</span>
                  <span>{item.timestamp}</span>
                  <span
                    className={`rounded-full border px-1.5 py-0.5 text-[9px] tracking-[0.12em] ${item.categoryTone}`}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="font-serif text-[1.03rem] leading-[1.35] text-[#121212]">
                  {item.headline}
                </h3>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
