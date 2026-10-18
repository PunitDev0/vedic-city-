'use client';

import { useState } from 'react';
import EnquiryModal from './EnquiryModal';

export default function FloatingCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5" aria-label="Quick contact buttons">
        {/* Priority Registration Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="hidden sm:flex px-4 py-2.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-x-0.5 items-center gap-2 cursor-pointer border border-amber-300 active:scale-95"
        >
          <span>✨</span>
          <span>PRIORITY REGISTRATION</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919211494111?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20the%20Vedic%20City%20plots."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-md bg-[#25D366] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <span className="text-xl">💬</span>
        </a>

        {/* Direct Phone Call Button */}
        <a
          href="tel:+919211494111"
          className="w-11 h-11 rounded-md bg-[#059669] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-emerald-400/40"
          title="Call Property Advisor"
          aria-label="Call +919211494111"
        >
          <span className="text-lg text-[#FDE68A]">📞</span>
        </a>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Priority Plot Registration"
      />
    </>
  );
}
