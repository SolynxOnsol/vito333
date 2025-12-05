import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/10 via-transparent to-transparent"></div>

      <div className="text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-3 text-amber-400 mb-4">
          <Sparkles className="w-8 h-8 animate-pulse" />
          <span className="text-sm tracking-[0.3em] uppercase font-light">The Master Teacher Has Arrived.</span>
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] animate-shimmer">
            VITO333
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-200/80 font-light max-w-2xl mx-auto leading-relaxed">
          333 — The Triple Master Number. Not a guru on a stage. <p>Not a leader you follow. The invisible frequency behind the curtain.</p>
        </p>

        <p className="text-base md:text-lg text-amber-200/70 font-light max-w-3xl mx-auto leading-relaxed">
          God Trickster: reality itself is the prank. <p>Shadow King: the permanent puppet master who never steps into the light — this is me. </p>Court Jester: the one who trolls the matrix while everyone else still believes the rules apply.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            className="group relative px-8 py-4 border-2 border-amber-500/50 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
            onClick={() => {
              const footer = document.getElementById('contact-footer');
              footer?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
