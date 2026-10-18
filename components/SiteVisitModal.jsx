"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Car } from "lucide-react";

export default function SiteVisitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    visitDate: "",
    pickupPoint: "Direct Site Visit (NH-66 Dodamarg)",
    guests: "2 Persons",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#065F46] text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDE68A] block">
            Complimentary Regional Coordination
          </span>
          <h3 className="text-lg font-bold font-serif-luxury text-white mt-0.5">
            Schedule a Site Visit
          </h3>
          <p className="text-xs text-emerald-100 mt-0.5">
            Experience the 15-acre development, 12m internal roads, and Goa border proximity
          </p>
        </div>

        {/* Body */}
        <div className="p-5">
          {submitted ? (
            <div className="text-center py-5 space-y-2.5 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-[#059669] mx-auto" />
              <h4 className="text-base font-bold text-slate-900 font-serif">Site Visit Scheduled!</h4>
              <p className="text-xs text-slate-600">
                Our site coordinator will connect with you at <strong>+91 {formData.phone}</strong> to confirm your travel itinerary and directions.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 bg-[#059669] text-white text-xs font-bold rounded-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kulkarni"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Number *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3-4 Persons">3–4 Persons (Family)</option>
                    <option value="5+ Persons">5+ Persons</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Pickup / Travel Request
                </label>
                <select
                  value={formData.pickupPoint}
                  onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#059669]"
                >
                  <option value="Direct Site Visit (NH-66 Dodamarg)">Direct Site Visit (Self Drive via NH-66)</option>
                  <option value="Pickup from Mopa International Airport">Pickup from Mopa International Airport</option>
                  <option value="Pickup from Pernem Railway Station">Pickup from Pernem Railway Station</option>
                  <option value="Pickup from North Goa Hotel">Pickup from North Goa Hotel</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Car className="w-3.5 h-3.5 text-[#FDE68A]" />
                Confirm Site Visit Booking
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
