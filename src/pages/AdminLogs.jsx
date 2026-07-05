import { useState } from 'react';

export default function AdminLogs({ products, onAddProduct, onDeleteProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Club Kits');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLongSleeve, setIsLongSleeve] = useState(false);
  const [discount, setDiscount] = useState('0');
  const [era, setEra] = useState('Modern');
  const [notablePlayers, setNotablePlayers] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !imageFile) {
      alert("Please ensure both product details and an artwork file are selected before authorizing.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('imageFile', imageFile);
    formData.append('isLongSleeve', isLongSleeve);
    formData.append('discount', discount);
    formData.append('era', era);
    formData.append('notablePlayers', notablePlayers.trim() || 'Club Legends');

    try {
      await onAddProduct(formData);
      setName('');
      setPrice('');
      setCategory('Club Kits');
      setImageFile(null);
      setPreviewUrl('');
      setIsLongSleeve(false);
      setDiscount('0');
      setEra('Modern');
      setNotablePlayers('');
      e.target.reset();
      
      alert("Jersey successfully added to vault!");
    } catch (error) {
      console.error("Form synchronization failed, keeping inputs populated:", error);
      alert("Network glitch caught! The form didn't clear—just click 'Authorize Vault Entry' again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-xs font-black uppercase tracking-widest text-[var(--foreground)] border-b border-[var(--card-border)] pb-4 mb-8">
        Vault Management Portal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="md:col-span-1 flex flex-col gap-4 bg-[var(--card)] border border-[var(--card-border)] p-4 rounded-sm">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Insert New Drop
          </h3>
          
          <div>
            <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Jersey Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-900/50 border border-[var(--card-border)] text-xs p-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)]"
              placeholder="e.g. Arsenal 05/06 Highbury"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Base Price (₦)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-neutral-900/50 border border-[var(--card-border)] text-xs p-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)]"
                placeholder="35000"
                required
              />
            </div>
            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Discount (%)</label>
              <input 
                type="number" 
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                min="0"
                max="100"
                className="w-full bg-neutral-900/50 border border-[var(--card-border)] text-xs p-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)]"
                placeholder="10"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-neutral-900/50 border border-[var(--card-border)] text-[11px] p-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)] uppercase font-bold tracking-wider"
              >
                <option value="Club Kits">Club Kits</option>
                <option value="National Teams">National Teams</option>
                <option value="Retro Classics">Retro Classics</option>
                <option value="Kids Kits">Kids Kits</option>
              </select>
            </div>
            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Timeline Era</label>
              <select 
                value={era}
                onChange={(e) => setEra(e.target.value)}
                className="w-full bg-neutral-900/50 border border-[var(--card-border)] text-[11px] p-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)] uppercase font-bold tracking-wider"
              >
                <option value="Modern">Modern</option>
                <option value="Retro">Retro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Notable Icons / Players</label>
            <input 
              type="text" 
              value={notablePlayers}
              onChange={(e) => setNotablePlayers(e.target.value)}
              className="w-full bg-neutral-900/50 border border-[var(--card-border)] text-xs p-2 rounded-sm outline-none text-[var(--foreground)] focus:border-[var(--accent)]"
              placeholder="e.g. Henry, Bergkamp"
            />
          </div>

          <div className="flex items-center gap-2 py-1">
            <input 
              type="checkbox" 
              id="longsleeve"
              checked={isLongSleeve}
              onChange={(e) => setIsLongSleeve(e.target.checked)}
              className="w-3.5 h-3.5 accent-[var(--accent)] cursor-pointer"
            />
            <label htmlFor="longsleeve" className="text-[9px] font-black uppercase tracking-widest text-neutral-300 cursor-pointer select-none">
              Long Sleeve Layout
            </label>
          </div>

          <div>
            <label className="text-[9px] font-black uppercase tracking-wider text-neutral-500 block mb-1">Upload Artwork</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-xs text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-neutral-800 file:text-neutral-300 hover:file:bg-[var(--accent)] hover:file:text-white cursor-pointer"
            />
            {previewUrl && (
              <div className="mt-3 relative aspect-square w-20 border border-[var(--card-border)] rounded-sm overflow-hidden bg-neutral-950">
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <button 
            type="submit"
            className="w-full bg-[var(--accent)] text-white text-[10px] font-black tracking-widest uppercase py-3 rounded-sm cursor-pointer mt-2 hover:bg-orange-600 transition-colors"
          >
            UPLOAD
          </button>
        </form>

        <div className="md:col-span-2">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">
            Active Inventory ({products.length})
          </h3>
          {products.length > 0 ? (
            <div className="flex flex-col gap-2">
              {products.map((product) => {
                const hasDiscount = product.discount > 0;
                const activePrice = hasDiscount 
                  ? product.price - (product.price * (product.discount / 100)) 
                  : product.price;

                return (
                  <div key={product.id || product.name} className="flex items-center justify-between bg-[var(--card)] border border-[var(--card-border)] p-3 rounded-sm">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 bg-neutral-950 rounded-sm overflow-hidden shrink-0 border border-[var(--card-border)]">
                        <img src={product.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-[11px] font-bold text-[var(--foreground)] uppercase tracking-wide truncate">{product.name}</h4>
                          <span className="text-[7px] font-black tracking-widest px-1 bg-neutral-900 border border-neutral-800 rounded-xs text-neutral-400">
                            {product.isLongSleeve ? 'L/S' : 'S/S'}
                          </span>
                          {hasDiscount && (
                            <span className="text-[7px] font-black tracking-widest px-1 bg-emerald-950 text-emerald-400 rounded-xs">
                              {product.discount}% OFF
                            </span>
                          )}
                        </div>
                        <p className="text-[9px] text-neutral-500 uppercase font-black tracking-widest mt-0.5">
                          {product.category} • Era: {product.era || 'Modern'} • 
                          <span className="text-neutral-300 ml-1">
                            ₦{activePrice.toLocaleString()}
                          </span>
                          {hasDiscount && (
                            <span className="text-neutral-600 line-through ml-1">
                              ₦{product.price.toLocaleString()}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => onDeleteProduct(product.id)}
                      className="p-2 text-neutral-500 hover:text-red-500 cursor-pointer transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-[var(--card-border)] text-[10px] font-black uppercase tracking-widest text-neutral-500 rounded-sm">
              No items currently deployed to the live store.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}