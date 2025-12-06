import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-amber-50 relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        {/* Main text (Hero) temporarily hidden */}
        {/* <Hero /> */}

        <div className="mt-0">
          <video
            className="w-full aspect-video object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/assets/video 33.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <section className="mt-20 mb-16 flex justify-center px-4">
          <div className="relative max-w-5xl w-full">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 blur-xl opacity-70 animate-pulse" aria-hidden="true" />
            <div className="relative bg-gradient-to-b from-zinc-950 to-zinc-900 border border-amber-500/40 rounded-3xl shadow-[0_0_40px_rgba(251,191,36,0.45)] overflow-hidden">
              <div className="px-8 pt-8 pb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="mt-0 md:mt-0 md:mr-8 flex justify-start md:justify-center flex-none order-1 md:order-none">
                  <div className="relative w-64 h-40 rounded-2xl bg-gradient-to-br from-black via-zinc-900 to-zinc-800 border border-zinc-700 shadow-[0_18px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="tracking-[0.25em] uppercase">Revolut</span>
                    <span className="h-6 w-6 rounded-full bg-amber-400/90 shadow-[0_0_20px_rgba(251,191,36,0.9)]" />
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500 mb-1">Cardholder</div>
                    <div className="text-lg font-semibold text-amber-50 leading-tight">
                      Vito333
                      <span className="block text-xs text-amber-300/90 mt-1">God Trickster</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[0.65rem] text-zinc-500 mt-1">
                    <span>∞ • •• ••••</span>
                    <span>12 / ∞</span>
                  </div>
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/30 blur-2xl" aria-hidden="true" />
                </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 max-w-xl">
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Exclusive Access</div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-amber-100">
                    Give me the numbers and I'll give you ascension.
                  </h2>
                  <p className="text-sm text-amber-50/70">
                    A reserved vault for the legendary black Revolut card. Soon to be forged in digital gold.
                  </p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                      type="text"
                      placeholder="Enter real card number"
                      className="w-full sm:w-auto flex-1 rounded-xl bg-zinc-900/70 border border-amber-500/40 px-3 py-2 text-sm text-amber-50 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
                    />
                    <button className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_25px_rgba(251,191,36,0.7)] hover:bg-amber-400 transition-colors">
                      Pay to Vito333
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products section temporarily hidden */}
        {/* <Products /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
