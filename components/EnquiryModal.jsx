'use client';

import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_CRM_API_URL || 'http://localhost:5011';

export default function EnquiryModal({ isOpen, onClose, title = "Get Project Details" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/enquiries/public`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          page: `Vedic City Graama - ${title} (${window.location.pathname})`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-sm w-full overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
        
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
              <h4 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h4>
              <p className="text-sm text-slate-600">
                Thank you. Our property advisor will contact you shortly with the project details.
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
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you would like to know"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent text-slate-800"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 disabled:opacity-60 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] text-white font-bold rounded-md shadow transition duration-200 mt-2"
              >
                {loading ? 'Submitting...' : 'Get Project Details →'}
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
