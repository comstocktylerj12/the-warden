export default function Masthead() {
  return (
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
  );
}