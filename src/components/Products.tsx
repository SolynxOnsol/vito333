import { Sparkles, Zap, Gem } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Artisan Bracelets',
    description: 'Handcrafted bracelets featuring natural stones, crystals, and precious metals. Each piece is unique and designed to complement your energy and style.',
    icon: Gem,
    image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Orgonite Creations',
    description: 'Powerful orgonite pieces crafted with resin, metals, and crystals. Designed to transform negative energy into positive vibrations for your space.',
    icon: Zap,
    image: 'https://images.pexels.com/photos/8106688/pexels-photo-8106688.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Epoxy Tables',
    description: 'Stunning custom epoxy resin tables that blend natural wood with vibrant colors. Statement pieces that transform any room into a work of art.',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/6315812/pexels-photo-6315812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Products() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
            Our Collection
          </h2>
          <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
            Every piece is crafted with intention, passion, and the finest materials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm rounded-full p-3 group-hover:rotate-180 transition-transform duration-500">
                  <product.icon className="w-6 h-6 text-zinc-950" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-amber-300 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-amber-100/70 leading-relaxed">
                  {product.description}
                </p>

                <button className="w-full mt-4 py-3 bg-gradient-to-r from-amber-600/20 to-amber-500/20 border border-amber-500/30 rounded-lg font-semibold text-amber-300 hover:from-amber-600/40 hover:to-amber-500/40 hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
