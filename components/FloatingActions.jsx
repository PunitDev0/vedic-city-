"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp, Sparkles } from "lucide-react";

export default function FloatingActions({ onOpenRegister }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Bottom Quick Action Bar on Mobile (Crisp rounded-md buttons) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 flex items-center justify-around gap-2 sm:hidden shadow-xl">
        <a
          href="tel:+919211494111"
          className="flex-1 py-2 px-2.5 bg-[#065F46] text-white rounded-md text-xs font-bold text-center flex items-center justify-center gap-1 shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#FDE68A]" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/919211494111?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20the%20project%20plots."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2.5 bg-[#25D366] text-white rounded-md text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-xs"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp</span>
        </a>
        <button
          onClick={onOpenRegister}
          className="flex-1 py-2 px-2.5 bg-[#F59E0B] text-slate-950 rounded-md text-xs font-black text-center flex items-center justify-center gap-1 shadow-xs cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Register</span>
        </button>
      </div>

      {/* Floating Action Buttons on Desktop */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {/* Register Now Floating Button (Crisp rounded-md) */}
        <button
          onClick={onOpenRegister}
          className="px-4 py-2.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-x-0.5 flex items-center gap-2 cursor-pointer border border-amber-300 active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Priority Registration</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919211494111?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20the%20project%20plots."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-md bg-[#25D366] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        {/* Call Now Button */}
        <a
          href="tel:+919211494111"
          className="w-11 h-11 rounded-md bg-[#059669] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-emerald-400/40"
          title="Call Property Advisor"
        >
          <Phone className="w-4 h-4 text-[#FDE68A]" />
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-md bg-white text-slate-700 border border-slate-300 flex items-center justify-center shadow-xs hover:bg-slate-100 transition cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
