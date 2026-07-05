import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-[var(--card-border)] bg-[var(--card)] rounded-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-sm tracking-wide uppercase text-[var(--foreground)] transition-colors hover:text-[var(--accent)] cursor-pointer"
            >
              <span>{faq.question}</span>
              {isOpen ? <FiMinus className="text-[var(--accent)]" size={16} /> : <FiPlus size={16} />}
            </button>
            <div 
              className={`transition-all duration-200 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-40 border-t border-[var(--card-border)]' : 'max-h-0'
              }`}
            >
              <div className="p-4 text-sm text-neutral-500 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}