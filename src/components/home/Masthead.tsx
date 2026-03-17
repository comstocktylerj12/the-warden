import Image from "next/image";

const navItems = ["Home", "World", "Policy", "Markets", "Ideas", "Briefings"];

const utilityItems = [
  { label: "Search", icon: "search" },
  { label: "Settings", icon: "settings" },
  { label: "Profile", icon: "account_circle" },
];

export default function Masthead() {
  return (
    <header className="border-b border-[#ddd8cf] bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-4 pb-5 pt-10 sm:px-5 lg:px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-[#6d6a63]">
          Monday, 16 March 2026
        </p>

        <div className="mt-5 flex justify-center">
          <Image
            src="/warden-logo.svg"
            alt="The Warden logo"
            width={760}
            height={180}
            className="h-auto w-full max-w-[680px]"
            priority
          />
        </div>
      </div>

      <nav className="border-t border-[#e5e1d8]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:px-5 md:flex-row md:justify-between lg:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-[#4f4b45]">
            {navItems.map((item) => (
              <li key={item}>
                <a className="transition-colors hover:text-[#121212]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-[#4f4b45]">
            <ul className="flex items-center gap-2">
              {utilityItems.map((item) => (
                <li key={item.label}>
                  <button
                    aria-label={item.label}
                    className="rounded-sm border border-transparent p-1.5 transition-colors hover:border-[#d3cec4] hover:text-[#121212]"
                    type="button"
                  >
                    <span aria-hidden className="material-symbols-outlined text-[20px] leading-none">
                      {item.icon}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <span aria-hidden className="mx-1 text-[#b7b2a9]">|</span>

            <button
              className="inline-flex items-center gap-2 border border-[#121212] bg-[#121212] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#f7f6f2] transition-colors hover:bg-[#2a2a2a]"
              type="button"
            >
              <span aria-hidden className="material-symbols-outlined text-[16px] leading-none">
                graphic_eq
              </span>
              Daily Overview
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
