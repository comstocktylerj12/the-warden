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