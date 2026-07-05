import { FiStar } from 'react-icons/fi';

export default function ReviewCard({ review }) {
  return (
    <div className="p-5 bg-[var(--card)] border border-[var(--card-border)] rounded-sm space-y-2">
      <div className="flex items-center gap-1 text-[var(--accent)]">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} />
        ))}
      </div>
      <p className="text-sm font-bold uppercase tracking-tight text-[var(--foreground)]">
        {review.name}
      </p>
      <p className="text-xs text-neutral-500 leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
}