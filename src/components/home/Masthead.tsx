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
