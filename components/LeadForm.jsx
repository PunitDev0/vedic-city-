'use client';

import { useState } from 'react';

export default function LeadForm({ formTitle = "Schedule a Complimentary Site Visit" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotType: 'Graama (Starts 321.72 Sq. Yards)',
    message: ''
  });
  const [status, setStatus] = useState({ submitted: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: true });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-10">
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#065F46] border border-emerald-200 tracking-wider uppercase mb-2">
          Direct Developer Consultation • Ebrix Home and More
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          {formTitle}
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
          Vedic City • Graama Enclave. Complimentary pickup coordinated from Manohar International Airport (Mopa) or Pernem Railway Station.
        </p>
      </div>

      {status.submitted ? (
        <div className="text-center py-10 bg-emerald-50 rounded-lg border border-emerald-200">
          <div className="text-4xl mb-3">🎉</div>
          <h4 className="text-xl font-bold text-[#065F46] mb-2 font-serif">
            Site Visit Request Confirmed!
          </h4>
          <p className="text-sm text-slate-700 max-w-md mx-auto">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our site relationship coordinator will reach out at <strong className="text-slate-900">{formData.phone}</strong> to confirm your travel itinerary and arrival timing.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] text-slate-900 bg-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 92114 94111"
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] text-slate-900 bg-white"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@domain.com"
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] text-slate-900 bg-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Preferred Enclave
              </label>
              <select
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] text-slate-900 bg-white"
                value={formData.plotType}
                onChange={(e) => setFormData({ ...formData, plotType: e.target.value })}
              >
                <option value="Graama (Starts 321.72 Sq. Yards)">Graama Enclave (Residential Plots 321.72+ Sq. Yds)</option>
                <option value="Soma (77 Acres Spiritual Living)">Soma Enclave (Spiritual Vedic Living)</option>
                <option value="Praana (140 Acres Farm Land)">Praana (140-Acre Farm Land & Retreat)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Preferred Visit Date / Queries
            </label>
            <input
              type="text"
              placeholder="e.g. This Saturday morning / Vastu orientation enquiry"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669] text-slate-900 bg-white"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] text-white font-extrabold rounded-md shadow-md hover:shadow-lg transition cursor-pointer"
            >
              Confirm Site Visit & Get Official Price List →
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-500 mt-2">
            🔒 Direct developer verification. MahaRERA Registration: <strong>PP1310002502621</strong>.
          </p>
        </form>
      )}
    </div>
  );
}
