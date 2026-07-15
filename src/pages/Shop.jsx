import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shop({ products = [], onAddToCart, isHomePage = false }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ALL');
  const [sleeveFilter, setSleeveFilter] = useState('ALL');

  const tabs = ['ALL', 'Club Kits', 'National Teams', 'Retro Classics', 'Kids Kits'];
  const safeProducts = Array.isArray(products) ? products : [];

  const isHome = isHomePage || window.location.pathname === '/';

  const filteredProducts = safeProducts.filter(p => {
    if (!p) return false;
    if (isHome) return true; 

    const matchesTab = activeTab === 'ALL' || 
      p.category === activeTab || 
      (activeTab === 'Retro Classics' && (p.category === 'Retro' || p.category === 'Retro Kits' || p.era === 'Retro'));
    
    let matchesSleeve = true;
    if (sleeveFilter === 'LONG') {
      matchesSleeve = p.isLongSleeve === true || p.isLongSleeve === 'true';
    } else if (sleeveFilter === 'SHORT') {
      matchesSleeve = p.isLongSleeve === false || p.isLongSleeve === 'false' || p.isLongSleeve === undefined || p.isLongSleeve === null;
    }

    return matchesTab && matchesSleeve;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 orange-glow-bg">
      {!isHome && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-4 mb-8">
          <div className="flex gap-4 overflow-x-auto text-[10px] font-black uppercase tracking-widest no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-[var(--foreground)] border-b-2 border-[var(--foreground)]'
                    : 'text-neutral-500 hover:text-[var(--foreground)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2 text-[9px] font-black uppercase tracking-widest">
            {[
              { id: 'ALL', label: 'All Sleeves' },
              { id: 'SHORT', label: 'Short Sleeve' },
              { id: 'LONG', label: 'Long Sleeve' }
            ].map((sleeve) => (
              <button
                key={sleeve.id}
                onClick={() => setSleeveFilter(sleeve.id)}
                className={`px-3 py-1.5 border rounded-sm transition-all duration-200 cursor-pointer ${
                  sleeveFilter === sleeve.id
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                    : 'bg-neutral-950 text-neutral-400 border-[var(--card-border)] hover:border-neutral-500'
                }`}
              >
                {sleeve.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => {
            if (!product) return null;
            const hasDiscount = product.discount > 0;
            const activePrice = hasDiscount 
              ? product.price - (product.price * (product.discount / 100)) 
              : product.price;

            const displayAsLongSleeve = product.isLongSleeve === true || product.isLongSleeve === 'true';

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
                  {product.image && (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                    />
                  )}
                </div>

                <div className="flex justify-between items-end gap-2">
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="flex-1 min-w-0 cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[8px] uppercase font-black tracking-widest text-neutral-500">
                        {product.category || 'Jersey'}
                      </span>
                      <span className="text-neutral-600 text-[8px]">•</span>
                      <span className="text-[7px] uppercase font-black tracking-widest text-neutral-400">
                        {displayAsLongSleeve ? 'L/S' : 'S/S'}
                      </span>
                    </div>
                    <h3 className="text-[11px] uppercase font-bold tracking-wide text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-150 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5 mt-1 flex-wrap">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[var(--foreground)]">
                        ₦{(activePrice || 0).toLocaleString()}
                      </span>
                      {hasDiscount && (
                        <span className="text-[9px] font-medium text-neutral-500 line-through">
                          ₦{(product.price || 0).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart && onAddToCart({ ...product, price: activePrice, isCustomized: false })}
                    className="p-2 bg-neutral-950 border border-[var(--card-border)] text-neutral-400 hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] rounded-sm transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-24 text-xs font-black uppercase tracking-widest text-neutral-500">
          No jerseys listed in this category yet.
        </div>
      )}
    </div>
  );
}