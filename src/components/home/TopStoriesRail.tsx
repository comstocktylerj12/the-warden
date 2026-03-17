const stories = [
  {
    section: "Europe",
    readTime: "6 min read",
    title: "Coalition arithmetic tightens as ministers prepare a narrow compromise.",
    visualLabel: "Parliament Brief",
    thumbnailTone: "bg-[#e8e4db]",
    sectionTone: "border-[#ddd3d0] bg-[#f8efec] text-[#6f4f45]",
  },
  {
    section: "Asia",
    readTime: "5 min read",
    title: "Security language shifts in tandem with trade posture across the region.",
    visualLabel: "Regional Desk",
    thumbnailTone: "bg-[#e3ded4]",
    sectionTone: "border-[#d3dde5] bg-[#edf4f8] text-[#455c6e]",
  },
  {
    section: "Global",
    readTime: "7 min read",
    title: "Central banks are signaling caution even as political messaging turns urgent.",
    visualLabel: "Market Watch",
    thumbnailTone: "bg-[#ddd9d0]",
    sectionTone: "border-[#d9e1d3] bg-[#f2f6ef] text-[#4e5f3f]",
  },
];

export default function TopStoriesRail() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-5 lg:px-6 lg:pb-12">
      <div className="mb-5 border-b border-[#ddd8cf] pb-3">
        <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#3c3934]">
          Curated Top Stories
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {stories.map((story, index) => (
          <article
            className="space-y-4 border-b border-[#e3dfd5] pb-6 md:border-b-0 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0"
            key={story.title}
          >
            <div className={`relative h-44 w-full border border-[#d7d2c8] ${story.thumbnailTone}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121214] to-transparent" />
              <p className="absolute bottom-2 left-2 border border-[#cfcac0] bg-[#f7f6f2e6] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#3f3b36]">
                {story.visualLabel}
              </p>
            </div>

            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[#6d6a63]">
              <span className="text-[#57534d]">0{index + 1}</span>
              <span className={`rounded-full border px-2 py-0.5 text-[9px] tracking-[0.12em] ${story.sectionTone}`}>
                {story.section}
              </span>
              <span>{story.readTime}</span>
            </p>
            <h4 className="font-serif text-[1.55rem] leading-[1.22] text-[#121212]">
              {story.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
}
