import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail({ products = [], onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(item => item.id === parseInt(id) || item.id?.toString() === id);

  const [wantsCustomization, setWantsCustomization] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customNumber, setCustomNumber] = useState('');

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center text-xs font-black uppercase tracking-widest text-neutral-500">
        Syncing dataset payload...
      </div>
    );
  }

  const hasDiscount = product.discount > 0;
  const baseActivePrice = hasDiscount 
    ? product.price - (product.price * (product.discount / 100)) 
    : product.price;

  const activePrice = wantsCustomization ? baseActivePrice + 4000 : baseActivePrice;

  const generateDescription = (item) => {
    const sleeveText = item.isLongSleeve ? 'long sleeve layout' : 'short sleeve design';
    const dynamicEra = item.era === 'Modern' || !item.era ? 'current campaign' : `${item.era} football legacy`;
    return `Step back into the pure matchday energy with the ${item.name}. Featuring a premium ${sleeveText} crafted for maximum performance and street style, this piece embodies the peak of ${dynamicEra}. Worn on the pitch by icons like ${item.notablePlayers || 'club legends'}, it delivers authentic crest details and breathable weave technology built for true collectors and fans alike.`;
  };

  const handleAddToCartSubmit = () => {
    onAddToCart({
      ...product,
      price: activePrice,
      customName: wantsCustomization ? customName.trim() : '',
      customNumber: wantsCustomization ? customNumber.trim() : '',
      isCustomized: wantsCustomization
    });
    
    alert(`${product.name} successfully pushed to execution pipeline.`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-sm overflow-hidden aspect-square sticky top-24">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 bg-neutral-950 px-2 py-1 border border-[var(--card-border)] rounded-sm">
              {product.category}
            </span>
            <h1 className="text-2xl font-black uppercase tracking-tight text-[var(--foreground)] mt-3">
              {product.name}
            </h1>
          </div>

          <div className="flex items-baseline gap-4 border-y border-[var(--card-border)] py-4">
            <span className="text-xl font-black text-[var(--accent)]">
              ₦{activePrice.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-xs font-bold text-neutral-500 line-through">
                ₦{(wantsCustomization ? product.price + 4000 : product.price).toLocaleString()}
              </span>
            )}
            {hasDiscount && (
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-950/30 px-1.5 py-0.5 border border-emerald-900 rounded-sm ml-auto">
                {product.discount}% OFF PAYLOAD
              </span>
            )}
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-wide">
            {generateDescription(product)}
          </p>

          <div className="border-t border-[var(--card-border)] pt-4">
            <label className="flex items-center gap-3 cursor-pointer select-none bg-neutral-950 p-4 border border-[var(--card-border)] rounded-sm">
              <input 
                type="checkbox"
                checked={wantsCustomization}
                onChange={(e) => setWantsCustomization(e.target.checked)}
                className="w-4 h-4 accent-[var(--accent)] bg-neutral-900 border-[var(--card-border)] rounded-xs"
              />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-[var(--foreground)]">Add Custom Print</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">+ ₦4,000 Customization Fee</span>
              </div>
            </label>
          </div>

          {wantsCustomization && (
            <div className="grid grid-cols-2 gap-4 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  Custom Identity Name
                </label>
                <input 
                  type="text" 
                  maxLength="12"
                  placeholder="e.g. OXLADE"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  className="w-full bg-neutral-950 border border-[var(--card-border)] rounded-sm h-10 px-3 text-xs font-bold uppercase tracking-wider text-[var(--foreground)] focus:outline-none focus:border-neutral-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  Custom Call Sign #
                </label>
                <input 
                  type="text" 
                  maxLength="2"
                  placeholder="e.g. 10"
                  value={customNumber}
                  onChange={(e) => setCustomNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-neutral-950 border border-[var(--card-border)] rounded-sm h-10 px-3 text-xs font-bold tracking-wider text-[var(--foreground)] focus:outline-none focus:border-neutral-500"
                />
              </div>
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={handleAddToCartSubmit}
              className="w-full bg-[var(--foreground)] text-[var(--background)] text-[10px] font-black tracking-widest uppercase py-4 rounded-sm cursor-pointer hover:bg-neutral-200 transition-all shadow-lg"
            >
              Stage Add To Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}