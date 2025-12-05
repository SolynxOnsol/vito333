import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-amber-50 relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        <Hero />

        <div className="mt-8">
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

        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
