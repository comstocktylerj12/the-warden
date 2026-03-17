<<<<<<< HEAD
export default function TopStoriesRail() {
  return (
    <aside>
      <div className="border-y border-[#ddd9d0] py-3">
        <h3 className="text-xs uppercase tracking-[0.16em] text-[#121212]">
          Top 3 Stories
        </h3>
      </div>

      <div className="space-y-6 pt-5">
        <article className="border-b border-[#ddd9d0] pb-5">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
            [EU] 16 Mar • 5 min read
          </p>
          <h4 className="mt-2 font-serif text-2xl leading-snug">
            Leadership shifts place pressure on regional negotiations.
          </h4>
          <p className="mt-2 text-sm leading-6 text-[#6d6a63]">
            New coalition dynamics are already changing how officials are reading
            the week ahead.
          </p>
        </article>

        <article className="border-b border-[#ddd9d0] pb-5">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
            [Global] 16 Mar • 7 min read
          </p>
          <h4 className="mt-2 font-serif text-2xl leading-snug">
            Overnight developments sharpen the next briefing picture.
          </h4>
          <p className="mt-2 text-sm leading-6 text-[#6d6a63]">
            Several secondary stories are moving back into the foreground.
          </p>
        </article>

        <article>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
            [Asia] 16 Mar • 4 min read
          </p>
          <h4 className="mt-2 font-serif text-2xl leading-snug">
            Trade and security questions continue to converge.
          </h4>
          <p className="mt-2 text-sm leading-6 text-[#6d6a63]">
            Policymakers are increasingly treating these issues as part of one
            strategic frame.
          </p>
        </article>
      </div>
    </aside>
  );
}
=======
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
>>>>>>> 53b275c3a8d471e1c509a946001c2ebec34ab72e
