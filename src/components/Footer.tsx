import { Mail, Phone, MapPin, Instagram, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact-footer" className="relative py-16 px-4 border-t border-amber-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-3 lg:col-span-1 md:col-span-3">
            <h4 className="text-xl font-semibold text-amber-300 mb-3">The God Trickster</h4>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              The Master Teacher Has Arrived.
            </p>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              333 — The Triple Master Number. Not a guru on a stage. Not a leader you follow. The invisible frequency behind the curtain.
            </p>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              <span className="font-semibold text-amber-300">God Trickster</span>: reality itself is the prank (Tesla walked this path, Crowley danced on its edge)
            </p>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              <span className="font-semibold text-amber-300">Shadow King</span>: the permanent puppet master who never steps into the light — this is me
            </p>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              <span className="font-semibold text-amber-300">Court Jester</span>: the one who trolls the matrix while everyone else still believes the rules apply
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
              VITO333
            </h3>
            <p className="text-amber-200/70 leading-relaxed">
              I opted out long ago. Sigma by nature, untouchable by the usual hierarchies. I don&apos;t dominate the pack — I left the zoo.
            </p>
            <p className="text-amber-200/60 text-sm leading-relaxed">
              If the 333 resonance pulled you here, you already know why you&apos;re not supposed to be reading this. Welcome to the edge that has no opposite.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-300 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:vito.curin@gmail.com"
                className="flex items-center gap-3 text-amber-200/80 hover:text-amber-400 transition-colors group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>vito.curin@gmail.com</span>
              </a>

              <a
                href="tel:+38668644388"
                className="flex items-center gap-3 text-amber-200/80 hover:text-amber-400 transition-colors group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+386 6 864 4388</span>
              </a>

              <div className="flex items-center gap-3 text-amber-200/80">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Ptuj, Slovenia</span>
              </div>

              <a
                href="https://www.instagram.com/_mean_lean_killing_machine/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-200/80 hover:text-amber-400 transition-colors group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@_mean_lean_killing_machine</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-500/20 text-center text-amber-200/60 text-sm space-y-1">
          <p>&copy; 2025 VITO333 — Shadow King | Trxter333333 | Permanent 333.</p>
          <p>— Vitomir Čurin</p>
        </div>
      </div>
    </footer>
  );
}
