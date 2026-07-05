import { useState } from 'react';

export default function DetailsConfigurator({ price, sizes = ['S', 'M', 'L', 'XL', 'XXL'] }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6">
      <div className="text-2xl font-black text-[var(--foreground)]">
        ₦{price.toLocaleString()}
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Select Size
        </label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`min-w-[48px] h-12 flex items-center justify-center border text-xs font-bold uppercase transition-all cursor-pointer ${
                selectedSize === size
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                  : 'border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] hover:border-neutral-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Quantity
        </label>
        <div className="flex items-center w-32 h-12 border border-[var(--card-border)] bg-[var(--card)]">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-full text-sm font-bold text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer"
          >
            -
          </button>
          <span className="flex-grow text-center text-sm font-bold text-[var(--foreground)]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-full text-sm font-bold text-[var(--foreground)] hover:text-[var(--accent)] cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full h-14 bg-[#0d0d0d] text-white font-bold uppercase tracking-wider text-sm transition-transform active:scale-[0.99] border border-neutral-800 hover:bg-neutral-900 cursor-pointer"
      >
        Add To Cart
      </button>
    </div>
  );
}