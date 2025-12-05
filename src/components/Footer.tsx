import { Mail, Phone, MapPin, Instagram, Facebook, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact-footer" className="relative py-16 px-4 border-t border-amber-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
                href="mailto:contact@vito333.com"
                className="flex items-center gap-3 text-amber-200/80 hover:text-amber-400 transition-colors group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@vito333.com</span>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-amber-200/80 hover:text-amber-400 transition-colors group"
              >
                <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (234) 567-890</span>
              </a>

              <div className="flex items-center gap-3 text-amber-200/80">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Planet Nibiru</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-300 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="pt-4">
              <button className="group px-6 py-3 bg-gradient-to-r from-amber-600/30 to-amber-500/30 border border-amber-500/40 rounded-lg font-semibold text-amber-300 hover:from-amber-600/50 hover:to-amber-500/50 hover:border-amber-500/70 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all duration-300">
                Get in Touch
              </button>
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
