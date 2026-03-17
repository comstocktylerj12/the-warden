<<<<<<< HEAD
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
=======
const navItems = [
  "Home",
  "World",
  "Policy",
  "Markets",
  "Ideas",
  "Briefings",
];

export default function Masthead() {
  return (
    <header className="border-b border-[#ddd8cf] bg-[#f7f6f2]">
      <div className="mx-auto max-w-6xl px-5 pb-5 pt-10 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-[#6d6a63]">
          Monday, 16 March 2026
        </p>

        <div className="mt-5 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.34em] text-[#2f2c28]">
            The
          </p>
          <h1 className="mt-1 font-serif text-5xl font-semibold uppercase tracking-[0.16em] text-[#121212] sm:text-6xl">
            Warden
          </h1>
        </div>
      </div>

      <nav className="border-t border-[#e5e1d8]">
        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-[11px] uppercase tracking-[0.16em] text-[#4f4b45] sm:px-6 lg:px-8">
          {navItems.map((item) => (
            <li key={item}>
              <a className="transition-colors hover:text-[#121212]" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
>>>>>>> 53b275c3a8d471e1c509a946001c2ebec34ab72e
