'use client';

import { useState } from 'react';

export default function FAQSection({ faqs, title = "Frequently Asked Questions", subtitle = "Transparent answers regarding location, RERA details, plot sizes, amenities, and ownership." }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#065F46] border border-emerald-200 tracking-wider uppercase mb-3">
            Transparency & Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs transition"
              >
                <button
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 text-slate-800 hover:text-[#065F46] font-semibold text-sm sm:text-base"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif">{item.q}</span>
                  <span className={`text-xl font-bold transition transform text-[#059669] ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Have more questions regarding registry, land dimensions, or legal status?
          </p>
          <a
            href="tel:+919211494111"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#065F46] hover:bg-[#047857] text-white text-xs sm:text-sm font-bold shadow transition"
          >
            📞 Speak to Official Property Advisor: +91 92114 94111
          </a>
        </div>
      </div>
    </section>
  );
}
