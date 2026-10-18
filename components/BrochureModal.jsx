"use client";

import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDownloaded(true);
    // Automatically trigger brochure download
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Graama-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-sm bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#065F46] text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5 mb-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FDE68A]">
            <FileText className="w-3 h-3" /> Project Portfolio PDF
          </div>
          <h3 className="text-lg font-bold font-serif-luxury text-white">
            Download Project Brochure
          </h3>
          <p className="text-xs text-emerald-100 mt-0.5">
            Complete details on 15 acres, 86 plots, amenities & Mopa connectivity
          </p>
        </div>

        {/* Content */}
        <div className="p-5">
          {downloaded ? (
            <div className="text-center py-4 space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-[#059669] mx-auto" />
              <h4 className="text-base font-bold text-slate-900 font-serif">Brochure Ready!</h4>
              <p className="text-xs text-slate-600">
                Your download link has been sent to <strong>+91 {formData.phone}</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#059669] text-white text-xs font-bold uppercase rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2.5 text-xs font-bold bg-slate-100 border border-r-0 border-slate-200 rounded-l-md text-slate-600">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#FDE68A]" />
                Download PDF Dossier (Instant)
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
