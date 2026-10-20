'use client';

import { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose, title = "Download Brochure & Price List" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: 'Graama (Starts 321.72 Sq. Yards)',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="bg-[#065F46] text-white p-5 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-200 hover:text-white text-lg font-bold"
            aria-label="Close"
          >
            ✕
          </button>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FDE68A] text-[#065F46] tracking-wider uppercase mb-1">
            Vedic City • Graama | Ebrix Home &amp; More
          </span>
          <h3 className="text-lg font-bold text-white font-serif">{title}</h3>
          <p className="text-xs text-emerald-100 mt-1">
            MahaRERA Registration No: <strong className="text-[#FDE68A]">PP1310002502621</strong>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Request Received Successfully!</h4>
              <p className="text-sm text-slate-600">
                Thank you. Our authorized property advisor will contact you within 15 minutes with the verified documents.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent text-slate-800"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent text-slate-800"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent text-slate-800"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Project
                </label>
                <select
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] bg-white text-slate-800"
                  value={formData.plotSize}
                  onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                >
                  <option value="Graama (Starts 321.72 Sq. Yards)">Graama (321.72+ Sq. Yds - 86 Plots)</option>
                  <option value="Soma (77 Acres Spiritual Living)">Soma (Spiritual Vedic Living)</option>
                  <option value="Praana (140 Acres Farm Land)">Praana (140-Acre Farm Land & Retreat)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] text-white font-bold rounded-md shadow transition duration-200 mt-2"
              >
                Instant Access Now →
              </button>

              <p className="text-[10px] text-center text-slate-500">
                🔒 Privacy Assured. Your contact details are securely kept. MahaRERA: PP1310002502621.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
