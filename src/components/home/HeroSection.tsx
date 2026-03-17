export default function HeroSection() {
  return (
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
        The Warden is a modern editorial news experience designed for policy
        professionals, subject matter experts, government readers, and anyone
        who values clarity, curation, and authority.
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
  );
}