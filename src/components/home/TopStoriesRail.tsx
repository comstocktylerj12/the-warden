const stories = [
  {
    section: "Europe",
    readTime: "6 min read",
    title: "Coalition arithmetic tightens as ministers prepare a narrow compromise.",
  },
  {
    section: "Asia",
    readTime: "5 min read",
    title: "Security language shifts in tandem with trade posture across the region.",
  },
  {
    section: "Global",
    readTime: "7 min read",
    title: "Central banks are signaling caution even as political messaging turns urgent.",
  },
];

export default function TopStoriesRail() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-6 lg:px-8 lg:pb-12">
      <div className="mb-5 border-b border-[#ddd8cf] pb-3">
        <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#3c3934]">
          Curated Top Stories
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {stories.map((story, index) => (
          <article
            className="space-y-3 border-b border-[#e3dfd5] pb-6 md:border-b-0 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0"
            key={story.title}
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#6d6a63]">
              0{index + 1} · {story.section} · {story.readTime}
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
