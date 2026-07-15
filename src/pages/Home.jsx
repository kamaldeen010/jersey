import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ products, onAddToCart, productsLoading }) {
  const navigate = useNavigate();
  
  const loopImages = [
    '/llop1.jpeg',
    '/loop2.jpeg',
    '/loop3.jpeg',
    '/loop4.jpeg',
    '/loop5.jpeg'
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % loopImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [loopImages.length]);

  // FIXED: Changed from slice(12, 12) to slice(0, 12) to show the first 12 items
  const visibleProducts = products ? products.slice(0, 12) : [];

  return (
    <div className="w-full pb-16 orange-glow-bg">
      
      <div 
        className="w-full bg-neutral-950 border-b border-[var(--card-border)] py-24 px-4 md:px-8 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 12, 0.5), rgba(10, 5, 2, 0.75)), url('/hero2.jpeg')` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,87,38,0.06)_0%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[var(--accent)] mb-4 px-2 py-1 bg-black border border-orange-500/20 rounded-sm">
            SANTA STORES
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[var(--foreground)] max-w-3xl leading-none mb-6">
            <span className='text-white'>PREMIUM KITS</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">
              BUILT FOR THE ELITES
            </span>
          </h1>
          <p className="text-[10px] md:text-xs font-medium tracking-widest text-neutral-400 uppercase max-w-xl mb-8 leading-relaxed">
            Experience engineered athletic wear constructed with structural high-density stitching and elite detailing tailored precisely to original specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => navigate('/shop')}
              className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-[10px] font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-colors cursor-pointer w-full sm:w-auto"
            >
              ENTER SHOP
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-neutral-900 border border-[var(--card-border)] text-neutral-300 hover:text-white text-[10px] font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-colors cursor-pointer w-full sm:w-auto"
            >
              ABOUT US
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-neutral-900/20 border border-[var(--card-border)] p-3 rounded-sm flex flex-col justify-center">
            <h4 className="text-[9px] md:text-[10px] font-black tracking-widest uppercase text-[var(--foreground)] mb-1">
              AUTHENTIC METRICS
            </h4>
            <p className="text-[8px] md:text-[9px] font-bold tracking-wider text-neutral-500 uppercase">
              Premium fabric builds with heavy heat-pressed insignia.
            </p>
          </div>
          <div className="bg-neutral-900/20 border border-[var(--card-border)] p-3 rounded-sm flex flex-col justify-center">
            <h4 className="text-[9px] md:text-[10px] font-black tracking-widest uppercase text-[var(--foreground)] mb-1">
              NATIONWIDE COURIER
            </h4>
            <p className="text-[8px] md:text-[9px] font-bold tracking-wider text-neutral-500 uppercase">
              Secure priority distribution networks moving daily.
            </p>
          </div>
          <div className="bg-neutral-900/20 border border-[var(--card-border)] p-3 rounded-sm flex flex-col justify-center col-span-2 md:col-span-1">
            <h4 className="text-[9px] md:text-[10px] font-black tracking-widest uppercase text-[var(--foreground)] mb-1">
              EXCLUSIVE DROPS
            </h4>
            <p className="text-[8px] md:text-[9px] font-bold tracking-wider text-neutral-500 uppercase">
              Limited run batches tailored for collectors worldwide.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full pt-12 pb-6 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[16/10] bg-neutral-900/40 border border-[var(--card-border)] rounded-sm flex items-center justify-center relative overflow-hidden group shadow-lg transition-all duration-500 hover:border-[var(--accent)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80" />
            <img src="/showcase1.jpeg" alt="Showcase 01" className="absolute inset-0 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          
          <div className="aspect-[16/10] bg-neutral-900/40 border border-[var(--card-border)] rounded-sm flex items-center justify-center relative overflow-hidden group shadow-lg transition-all duration-500 hover:border-[var(--accent)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80" />
            <img src="/showcase3.jpeg" alt="Showcase 02" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3 my-8 overflow-hidden border-y border-[var(--accent-hover)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-[10px] font-black uppercase tracking-widest">
          <span>PREMIUM QUALITY JERSEYS • NATIONWIDE SHIPPING • NEW DROPS ARRIVING NOW • AUTHENTIC FIT</span>
          <span>PREMIUM QUALITY JERSEYS • NATIONWIDE SHIPPING • NEW DROPS ARRIVING NOW • AUTHENTIC FIT</span>
          <span>PREMIUM QUALITY JERSEYS • NATIONWIDE SHIPPING • NEW DROPS ARRIVING NOW • AUTHENTIC FIT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-4 mb-8">
          <h2 className="text-xs font-black uppercase tracking-widest text-[var(--foreground)]">
            THE VARIETIES
          </h2>
          <button 
            onClick={() => navigate('/shop')}
            className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)] hover:text-[var(--foreground)] cursor-pointer"
          >
            VIEW ALL KITS →
          </button>
        </div>

        {productsLoading ? (
          /* Inline loaders occupy ONLY the product section zone now */
          <div className="flex flex-col items-center justify-center min-h-[35vh] gap-3">
            <svg 
              className="w-10 h-10 animate-pulse text-[var(--accent)]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 3 L10 5 L14 5 L17 3 L21 7 L18 10 L18 21 L6 21 L6 10 L3 7 Z" />
            </svg>
            <p className="text-[9px] font-black tracking-[0.25em] text-neutral-500 uppercase">
              LOADING KITS...
            </p>
          </div>
        ) : visibleProducts.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleProducts.map((product) => {
                const hasDiscount = product.discount > 0;
                const activePrice = hasDiscount 
                  ? product.price - (product.price * (product.discount / 100)) 
                  : product.price;

                return (
                  <div 
                    key={product.id}
                    className="group border border-[var(--card-border)] bg-[var(--card)] p-3 rounded-sm flex flex-col justify-between relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    {hasDiscount && (
                      <div className="absolute top-2 right-2 z-20 bg-emerald-950 border border-emerald-900 text-emerald-400 font-black text-[7px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm">
                        {product.discount}% OFF
                      </div>
                    )}

                    <div 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="w-full aspect-square bg-neutral-950 rounded-sm flex items-center justify-center overflow-hidden mb-3 relative cursor-pointer"
                    >
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    
                    <div className="flex justify-between items-end gap-2">
                      <div 
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="flex-1 min-w-0 cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[8px] uppercase font-black tracking-widest text-neutral-500">
                            {product.category}
                          </span>
                          <span className="text-neutral-600 text-[8px]">•</span>
                          <span className="text-[7px] uppercase font-black tracking-widest text-neutral-400">
                            {product.isLongSleeve ? 'L/S' : 'S/S'}
                          </span>
                        </div>
                        <h3 className="text-[11px] uppercase font-bold tracking-wide text-[var(--foreground)] group-hover:text-[var(--accent)] truncate">
                          {product.name}
                        </h3>
                        <div className="flex items-baseline gap-1.5 mt-1 flex-wrap">
                          <span className="text-[11px] font-black uppercase tracking-wider text-[var(--foreground)]">
                            ₦{activePrice.toLocaleString()}
                          </span>
                          {hasDiscount && (
                            <span className="text-[9px] font-medium text-neutral-500 line-through">
                              ₦{product.price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onAddToCart({ ...product, price: activePrice })}
                        className="p-2 bg-[var(--accent)] border border-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)] rounded-sm transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {products.length > 12 && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => navigate('/shop')}
                  className="px-10 py-3.5 border border-[var(--card-border)] bg-grey-900 text-[var(--foreground)] font-black text-[10px] uppercase tracking-widest rounded-sm hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  SEE MORE KITS
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 text-xs font-black uppercase tracking-widest text-neutral-500">
            NOTHING TO SHOW HERE.
          </div>
        )}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-24">
        <div className="border border-[var(--card-border)] bg-neutral-950 p-6 md:p-8 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(249,87,38,0.03)_0%,transparent_50%)]" />
          <div className="relative z-10 order-2 md:order-1">
            <span className="text-[8px] font-black tracking-widest uppercase text-[var(--accent)] block mb-2">
              STAY CONNECTED
            </span>
            <h3 className="text-xl md:text-2xl text-white font-black uppercase tracking-wider text-[var(--foreground)] mb-4">
              JOIN THE LAB<br />
            </h3>
            <p className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase leading-relaxed max-w-sm mb-6">
              NEVER MISS A PIECE,FOLLOW US ON ALL SOCIAL MEDIA AND JOIN OUR EXCLUSIVE WHATSAPP INSIDER LIST FOR DAILY UPDATES, PREMIUM RELEASES AND DISCOUNTS .
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-neutral-900 border border-[var(--card-border)] text-white hover:border-[var(--accent)] text-[9px] font-black tracking-widest uppercase px-6 py-3 rounded-sm transition-colors cursor-pointer w-full sm:w-auto"
            >
              CONTACT US
            </button>
          </div>
          
          <div className="h-48 md:h-100 bg-neutral-900/50 border border-[var(--card-border)] rounded-sm relative overflow-hidden order-1 md:order-2">
            {loopImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  opacity: currentImgIndex === idx ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-24">
        <div className="border-b border-[var(--card-border)] pb-4 mb-8">
          <h2 className="text-xs font-black uppercase tracking-widest text-[var(--foreground)]">
            THE PRODUCTION PROCESS
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-neutral-400">
          <div className="border border-[var(--card-border)] bg-neutral-950 p-3 md:p-5 rounded-sm">
            <span className="text-[8px] md:text-[10px] font-black text-[var(--accent)] block mb-1.5">01 SELECTION</span>
            <p className="text-[8px] md:text-[10px] font-bold tracking-wider uppercase leading-relaxed">
              We import only high-grade original athletic blanks, screening threads for durability, stretch flexibility, and ventilation metrics before cutting.
            </p>
          </div>
          <div className="border border-[var(--card-border)] bg-neutral-950 p-3 md:p-5 rounded-sm">
            <span className="text-[8px] md:text-[10px] font-black text-[var(--accent)] block mb-1.5">02 EMBROIDERY</span>
            <p className="text-[8px] md:text-[10px] font-bold tracking-wider uppercase leading-relaxed">
              Complex concept insignias and graphics are plotted mathematically and stitched meticulously with industrial heavy-density threads.
            </p>
          </div>
          <div className="border border-[var(--card-border)] bg-neutral-950 p-3 md:p-5 rounded-sm col-span-2 md:col-span-1">
            <span className="text-[8px] md:text-[10px] font-black text-[var(--accent)] block mb-1.5">03 CURING</span>
            <p className="text-[8px] md:text-[10px] font-bold tracking-wider uppercase leading-relaxed">
              Patches are sealed using precision pneumatic presses under specialized thermal cycles to guarantee zero peeling across high-performance wear.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-24">
        <div className="border-b border-[var(--card-border)] pb-4 mb-8">
          <h2 className="text-xs font-black uppercase tracking-widest text-[var(--foreground)]">
            FEEDBACKS
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="border border-[var(--card-border)] bg-[#111115] p-3 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden shrink-0">
                  <img src="/avatar.jpeg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-black text-[var(--accent)] lowercase truncate">@femi_tunde_</span>
                  <span className="text-[7px] font-bold text-neutral-600">2h</span>
                </div>
              </div>
              <p className="text-[9px] md:text-[11px] font-medium tracking-wide text-neutral-300">
                Omo! The animated patch detail is insane on person. Fast delivery to Ibadan too, standard stuff! 🔥
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-900/60 flex items-center gap-3 text-[8px] font-bold text-neutral-500 uppercase">
              <span>12 Likes</span>
            </div>
          </div>

          <div className="border border-[var(--card-border)] bg-[#111115] p-3 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden shrink-0">
                  <img src="/avatar2.jpeg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-black text-[var(--accent)] lowercase truncate">@yinka.alao</span>
                  <span className="text-[7px] font-bold text-neutral-600">5h</span>
                </div>
              </div>
              <p className="text-[9px] md:text-[11px] font-medium tracking-wide text-neutral-300">
                Eyan t’o m’on itoju kiti. The material is heavy, original spec completely. I will order another colorway soon.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-900/60 flex items-center gap-3 text-[8px] font-bold text-neutral-500 uppercase">
              <span>42 Likes</span>
            </div>
          </div>

          <div className="border border-[var(--card-border)] bg-[#111115] p-3 rounded-sm flex flex-col justify-between col-span-2 md:col-span-1">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden shrink-0">
                  <img src="/avatar1.jpeg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-black text-[var(--accent)] lowercase truncate">@tope_oluwaseun</span>
                  <span className="text-[7px] font-bold text-neutral-600">1d</span>
                </div>
              </div>
              <p className="text-[9px] md:text-[11px] font-medium tracking-wide text-neutral-300">
                Premium drops only. No stories. Fits perfectly and stays cold during heavy movement. Pure class. 🥶💯
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-900/60 flex items-center gap-3 text-[8px] font-bold text-neutral-500 uppercase">
              <span>19 Likes</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}