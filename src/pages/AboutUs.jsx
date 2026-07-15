export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-black uppercase tracking-tight text-[var(--foreground)]">
          ABOUT US
        </h1>
        <p className="text-xs text-[var(--accent)] font-bold uppercase tracking-widest">
          Premium Football Kit Sourcing
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-500 leading-relaxed text-center max-w-2xl mx-auto">
        <p>
          SANTAJERSEY emerged out of a pure obsession with football culture and pitch-ready style. We source premium replicas, player editions, and historically accurate retro classics for collectors and enthusiasts who demand crisp detailing and exceptional textile craftsmanship.
        </p>
        <p>
          Operating with specialized logistics across key hubs, we prioritize speed, flawless stitching, and high-performance wear. Every kit in our vault undergoes thorough quality inspections before packaging, ensuring matchday standards are met the second you unbox your kit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 border border-[var(--card-border)] bg-[var(--card)] text-center rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--foreground)] mb-2">Premium Materials</h3>
          <p className="text-xs text-neutral-500">Advanced moisture-wicking weaves built for intense match play or comfortable street styling.</p>
        </div>
        <div className="p-6 border border-[var(--card-border)] bg-[var(--card)] text-center rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--foreground)] mb-2">Flawless Embroidery</h3>
          <p className="text-xs text-neutral-500">Precision detailing on all badges, sponsor logos, and historical crest replicas.</p>
        </div>
        <div className="p-6 border border-[var(--card-border)] bg-[var(--card)] text-center rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--foreground)] mb-2">Swift Distribution</h3>
          <p className="text-xs text-neutral-500">Direct-to-door fulfillment networks across Lagos and major regional hubs.</p>
        </div>
      </div>
    </div>
  );
}