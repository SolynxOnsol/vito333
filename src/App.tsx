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
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
