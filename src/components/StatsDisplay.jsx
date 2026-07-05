export default function StatsDisplay({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="p-6 bg-[var(--card)] border border-[var(--card-border)] rounded-sm"
        >
          <p className="text-3xl md:text-4xl font-black text-[var(--accent)] tracking-tight">
            {stat.value}
          </p>
          <p className="text-xs uppercase font-bold tracking-widest text-neutral-500 mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}