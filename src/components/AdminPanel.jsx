import { useState } from 'react';

export default function AdminPanel({ products, orders, onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Club Kits');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) return;
    onAddProduct({
      id: Date.now(),
      name,
      price: Number(price),
      category,
      image,
    });
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 bg-[var(--card)] border border-[var(--card-border)] p-6 rounded-sm h-fit">
        <h3 className="text-base font-black uppercase tracking-tight text-[var(--foreground)] mb-4">
          Upload New Kit
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">
              Kit Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)] uppercase"
              placeholder="e.g. CHELSEA HOME 26/27"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">
              Price (₦)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-11 px-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)]"
              placeholder="e.g. 25000"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-11 px-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)] uppercase"
            >
              <option value="Club Kits">Club Kits</option>
              <option value="National Teams">National Teams</option>
              <option value="Retro Classics">Retro Classics</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">
              Image Long Path File Name
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full h-11 px-3 border border-[var(--card-border)] bg-[var(--background)] text-sm text-[var(--foreground)]"
              placeholder="e.g. /chelsea.png"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider transition-transform active:scale-[0.98] cursor-pointer"
          >
            Publish Product
          </button>
        </form>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="bg-[var(--card)] border border-[var(--card-border)] p-6 rounded-sm">
          <h3 className="text-base font-black uppercase tracking-tight text-[var(--foreground)] mb-4">
            Incoming Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs uppercase tracking-wider">
              <thead>
                <tr className="border-b border-[var(--card-border)] text-neutral-500">
                  <th className="pb-3 font-bold">Order ID</th>
                  <th className="pb-3 font-bold">Items</th>
                  <th className="pb-3 font-bold">Total Price</th>
                  <th className="pb-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--card-border)] text-[var(--foreground)]">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-4 font-mono">#{order.id}</td>
                    <td className="py-4 font-bold">{order.items}</td>
                    <td className="py-4">₦{order.total.toLocaleString()}</td>
                    <td className="py-4 text-[var(--accent)] font-bold">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}