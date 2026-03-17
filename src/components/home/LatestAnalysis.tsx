<<<<<<< HEAD
export default function LatestAnalysis() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="border-y border-[#ddd9d0] py-3">
        <h3 className="text-xs uppercase tracking-[0.16em] text-[#121212]">
=======
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
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="border-y border-[#ddd8cf] py-3">
        <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#3c3934]">
>>>>>>> 53b275c3a8d471e1c509a946001c2ebec34ab72e
          Latest Analysis
        </h3>
      </div>

<<<<<<< HEAD
      <div className="divide-y divide-[#ddd9d0]">
        <article className="py-6">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
            [Middle East] 16 Mar • 6 min read • Listen 4 min
          </p>
          <h4 className="mt-2 max-w-4xl font-serif text-3xl leading-tight">
            The most important change today may be diplomatic language, not
            formal action.
          </h4>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6d6a63]">
            Tone and phrasing are beginning to reveal more than the official
            summaries themselves.
          </p>
        </article>

        <article className="py-6">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
            [US] 16 Mar • 9 min read • Listen 7 min
          </p>
          <h4 className="mt-2 max-w-4xl font-serif text-3xl leading-tight">
            Budget pressure and operational priorities are moving in opposite
            directions.
          </h4>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6d6a63]">
            The tension is no longer just financial — it is institutional.
          </p>
        </article>

        <article className="py-6">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
            [Europe] 16 Mar • 5 min read • Listen 3 min
          </p>
          <h4 className="mt-2 max-w-4xl font-serif text-3xl leading-tight">
            This week’s coalition test is increasingly about signaling
            discipline.
          </h4>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6d6a63]">
            The internal message may matter as much as the result.
          </p>
        </article>
      </div>
    </section>
  );
}
=======
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
>>>>>>> 53b275c3a8d471e1c509a946001c2ebec34ab72e
