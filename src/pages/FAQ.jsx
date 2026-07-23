import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Are these authentic or replica jerseys?",
      a: "We stock top-tier, high-grade fan and player version jerseys. You get the exact same fabric technology, stitched badges, and heat-pressed sponsor logos worn on pitch."
    },
    {
      q: "How do I choose between Fan Version and Player Version?",
      a: "Fan versions have a relaxed fit and stitched logos, built for casual wear. Player versions have a slim, athletic cut with heat-applied logos for maximum airflow. If you prefer a looser fit on player versions, size up!"
    },
    {
      q: "How long does custom name and number printing take?",
      a: "Custom prints take 24–48 hours to prepare before dispatch. We use standard league font types and original patch badges to keep everything looking official."
    },
    {
      q: "How do I care for my customized jersey?",
      a: "Always wash inside out in cold water and hang dry. Avoid ironing directly on the printed numbers or badges so the heat transfer remains solid."
    },
    {
      q: "How long does delivery take across Nigeria?",
      a: "Interstate deliveries generally arrive within 2 to 4 working days via our courier partners. Orders within Abuja or local dispatch hubs often arrive same-day or next-day."
    },
    {
      q: "What is your return policy if I order the wrong size?",
      a: "Blank jerseys can be swapped for another size within 3 days of delivery, provided tags are intact. Please note that custom-printed kits (with personalized names/numbers) are non-refundable."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center space-y-3 mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
          Got Questions?
        </p>
        <h1 className="text-3xl font-black uppercase tracking-tight text-[var(--foreground)]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto">
          Everything you need to know about kit sizing, custom printing, order dispatches, and care rules.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="border border-[var(--card-border)] bg-[var(--card)] rounded-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-neutral-900/50 transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                  {faq.q}
                </span>
                <span className="text-neutral-400 text-lg font-mono shrink-0">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs text-neutral-400 leading-relaxed border-t border-[var(--card-border)] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 border border-[var(--card-border)] bg-neutral-950 text-center space-y-2 rounded-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Still need assistance?</h3>
        <p className="text-[11px] text-neutral-400">Reach out directly to our support team on the contact page or WhatsApp.</p>
      </div>
    </div>
  );
}