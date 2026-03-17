export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-7 border-b border-[#ddd8cf] pb-10 lg:grid-cols-[1.2fr_0.95fr] lg:gap-10 lg:pb-14">
        <div className="space-y-6">
          <div className="aspect-[16/9] border border-[#d8d3ca] bg-[#ece8df]" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-[#6d6a63]">
            <span className="border border-[#cfcac0] px-2.5 py-1 text-[#24211d]">Lead Story</span>
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
          <div className="mb-4 border-b border-[#ddd8cf] pb-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#4a4640]">
              Editor&apos;s Note
            </p>
          </div>

          <p className="font-serif text-[1.45rem] leading-tight text-[#121212]">
            Today&apos;s front page is less about what happened overnight and more
            about what officials chose to emphasize.
          </p>

          <p className="mt-4 text-sm leading-6 text-[#6d6a63]">
            That distinction is subtle, but it is where the week&apos;s clearest
            policy signal is emerging.
          </p>

          <button className="mt-7 border border-[#cac5bb] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#24211d] transition-colors hover:bg-[#121212] hover:text-[#f7f6f2]">
            Read Full Briefing
          </button>
        </aside>
      </div>
    </section>
  );
}
