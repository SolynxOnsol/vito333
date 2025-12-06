import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.getElementById('contact-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-amber-500/30 bg-gradient-to-b from-black/80 via-zinc-950/80 to-zinc-950/40 backdrop-blur-xl shadow-[0_0_35px_rgba(251,191,36,0.25)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-300 to-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.75)] border border-amber-200/70 flex items-center justify-center">
            <span className="text-black font-black text-lg tracking-tight">V</span>
            <div className="absolute -inset-1 rounded-3xl bg-amber-400/40 blur-xl opacity-60" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
              God Trickster
            </div>
            <div className="text-lg font-semibold text-amber-100">
              VITO333
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-amber-100">
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-950/70 border border-amber-500/40 hover:border-amber-300/80 hover:bg-zinc-900/80 shadow-[0_0_18px_rgba(251,191,36,0.45)] transition-all"
              onClick={() => setIsProjectsOpen((prev) => !prev)}
            >
              <span className="tracking-[0.18em] uppercase text-[0.7rem] text-amber-200/90">
                Projects
              </span>
              <span className={`transform transition-transform duration-200 text-amber-300 ${
                isProjectsOpen ? 'rotate-180' : ''
              }`}>
                ▾
              </span>
            </button>

            {isProjectsOpen && (
              <div className="absolute right-0 mt-3 w-52 rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900 border border-amber-500/40 shadow-[0_18px_40px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-yellow-300/10 to-amber-600/20 blur-xl opacity-60" aria-hidden="true" />
                <div className="relative divide-y divide-amber-500/20">
                  <a
                    href="https://kingcrystal.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-xs tracking-[0.18em] uppercase text-amber-200/90 hover:bg-amber-500/10 hover:text-amber-100 transition-colors"
                  >
                    KingCrystal
                  </a>
                  <a
                    href="#ascensionapp"
                    className="block px-4 py-3 text-xs tracking-[0.18em] uppercase text-amber-200/90 hover:bg-amber-500/10 hover:text-amber-100 transition-colors"
                  >
                    AscensionApp
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleContactClick}
            className="px-4 py-1.5 rounded-full bg-amber-500/90 text-zinc-950 text-xs tracking-[0.2em] uppercase font-semibold shadow-[0_0_30px_rgba(251,191,36,0.7)] hover:bg-amber-400 transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
