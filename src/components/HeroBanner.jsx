import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[calc(100vh-88px)] bg-neutral-900 overflow-hidden">
      <img 
        src="/hero-jersey.png" 
        alt="New Season Arrivals" 
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      
      <div className="absolute bottom-16 left-4 md:left-12 max-w-xl text-white space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
          New Arrivals
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
          LXN SEASON 2
        </h1>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 transition-transform active:scale-95 shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}