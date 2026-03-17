export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfa] text-[#121212]">
      <header className="border-b border-[#ddd9d0]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center bg-[#121212] text-white">
              <span className="text-2xl font-extrabold">W</span>
            </div>
          </div>

          <p className="font-serif text-sm uppercase tracking-[0.3em] text-[#121212]">
            The
          </p>
          <h1 className="text-4xl font-extrabold uppercase tracking-[0.2em]">
            Warden
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#6d6a63]">
            16 March 2026
          </p>
        </div>

        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#6d6a63]">
          <a href="#">The Warden</a>
          <a href="#">Regions</a>
          <a href="#">Issues</a>
          <a href="#">Leadership</a>
          <a href="#">Search</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <article>
            <div className="aspect-[16/9] border border-[#ddd9d0] bg-[#f3f2ee]" />

            <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[#6d6a63]">
              <span className="rounded-full border border-[#cbc6bb] px-3 py-1 text-[#121212]">
                US
              </span>
              <span>16 Mar</span>
              <span>8 min read</span>
              <span>Listen 6 min</span>
            </div>

            <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-tight">
              A premium front page for readers who need signal, not noise.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6d6a63]">
              The Warden is a modern editorial news experience designed for
              policy professionals, subject matter experts, government readers,
              and anyone who values clarity, curation, and authority.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-[#121212] px-5 py-3 text-sm text-white">
                Read Top Story
              </button>
              <button className="rounded-full border border-[#cbc6bb] px-5 py-3 text-sm text-[#121212]">
                Listen
              </button>
            </div>
          </article>

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
                  New coalition dynamics are already changing how officials are
                  reading the week ahead.
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
                  Policymakers are increasingly treating these issues as part of
                  one strategic frame.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="border-y border-[#ddd9d0] py-3">
          <h3 className="text-xs uppercase tracking-[0.16em] text-[#121212]">
            Latest Analysis
          </h3>
        </div>

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
    </main>
  );
}