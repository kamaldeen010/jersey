import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOverlay({ isOpen, onClose, products }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleProductClick = (id) => {
    onClose();
    setQuery('');
    navigate(`/product/${id}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-start pt-20 px-4">
      <div className="bg-[var(--card)] border border-[var(--card-border)] w-full max-w-2xl p-6 rounded-sm shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-4 mb-4">
          <input
            type="text"
            placeholder="SEARCH FOR JERSEYS..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm uppercase font-bold tracking-wider outline-none text-[var(--foreground)]"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="text-xs uppercase font-black tracking-widest text-neutral-500 hover:text-[var(--foreground)] ml-4 cursor-pointer"
          >
            Close
          </button>
        </div>

        {query && (
          <div className="max-h-60 overflow-y-auto divide-y divide-[var(--card-border)]">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="py-3 flex justify-between items-center cursor-pointer hover:bg-neutral-500/10 px-2 transition-colors duration-150 text-xs uppercase font-bold tracking-wide"
                >
                  <span className="text-[var(--foreground)]">{product.name}</span>
                  <span className="text-neutral-500">₦{product.price.toLocaleString()}</span>
                </div>
              ))
            ) : (
              <div className="py-4 text-center text-xs uppercase font-bold tracking-wide text-neutral-500">
                No jerseys found matching "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}