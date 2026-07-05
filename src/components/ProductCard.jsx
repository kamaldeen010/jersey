import { Link } from 'react-router-dom';

export default function ProductCard({ item }) {
  return (
    <div className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${item.id}`}>
        <div className="w-full aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4 space-y-1">
        <p className="text-xs text-neutral-500 uppercase tracking-wider">{item.category}</p>
        <Link to={`/product/${item.id}`}>
          <h3 className="text-sm font-bold tracking-tight text-[var(--foreground)] uppercase truncate hover:text-[var(--accent)] transition-colors">
            {item.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-black text-[var(--foreground)]">
            ₦{item.price.toLocaleString()}
          </span>
          <Link
            to={`/product/${item.id}`}
            className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
          >
            View Kit
          </Link>
        </div>
      </div>
    </div>
  );
}