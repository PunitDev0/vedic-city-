"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowRight,
  Navigation,
  ExternalLink,
} from "lucide-react";

export default function Footer({ onOpenRegister, onOpenEnquire, onOpenBrochure, onOpenSiteVisit }) {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-[#064E3B] text-white pt-5 sm:pt-8 pb-16 sm:pb-8 border-t-2 border-emerald-500/50 relative overflow-hidden">

      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- MOBILE COMPACT FOOTER (Visible on Mobile only, screen height < 1 fold) --- */}
        <div className="block sm:hidden space-y-3.5 pb-2">
          {/* 1. MahaRERA Quick Badge */}
          <div className="flex items-center justify-between bg-black/20 px-3 py-2 rounded-lg border border-white/10 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#FDE68A]">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>MahaRERA:</span>
              <span className="font-mono text-white">PP1310002502621</span>
            </div>
            <a
              href="tel:+919211494111"
              className="text-[#FDE68A] font-bold text-xs flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
          </div>

          {/* 2. Quick Horizontal Navigation Chips */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs text-emerald-100/90 pt-0.5">
            <a href="/#home" className="hover:text-white">Home</a>
            <span>•</span>
            <a href="/residential-plot-in-goa" className="hover:text-white">Residential Plots</a>
            <span>•</span>
            <a href="/residential-plots-north-goa" className="hover:text-white font-medium text-[#FDE68A]">Plots in North Goa</a>
            <span>•</span>
            <a href="/#location" className="hover:text-white">Location</a>
            <span>•</span>
            <a href="/#amenities" className="hover:text-white">Amenities</a>
            <span>•</span>
            <a href="/#pmay" className="hover:text-white">PMAY Info</a>
            <span>•</span>
            <a href="/disclaimer" className="text-[#FDE68A] underline font-medium">Disclaimer</a>
            <span>•</span>
            <a href="/privacy-policy" className="text-[#FDE68A] underline font-medium">Privacy Policy</a>
          </div>

          {/* 3. Short Site Location */}
          <div className="text-center text-[11px] text-emerald-200/80 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3 text-[#FDE68A] shrink-0" />
            <span>NH-66, Near Pathrodevi Border Checkpoint, Dodamarg</span>
          </div>

          {/* 4. Tiny Copyright line */}
          <div className="text-center text-[10px] text-emerald-300/50 pt-1 border-t border-white/10">
            © {currentYear} Vedic City. All rights reserved.
          </div>
        </div>

        {/* --- DESKTOP FOOTER (Visible on sm & above - Compact & Perfectly Aligned) --- */}
        <div className="hidden sm:block">
          {/* Main 3-Column Balanced Grid */}
          <div className="py-6 grid grid-cols-12 gap-8 items-start">

            {/* Column 1: Project Details & RERA (col-span-4) */}
            <div className="col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] font-serif">
                Vedic City Plots
              </h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                A luxury residential plotted development combining nature-inspired living with the lifestyle and coastal connectivity of North Goa.
              </p>

              <div className="p-3 rounded-md bg-white/5 border border-white/10 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-[#FDE68A] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>MahaRERA Registration No:</span>
                </div>
                <div className="font-mono text-xs text-white font-bold pl-5">
                  PP1310002502621
                </div>
                <p className="text-[10px] text-emerald-200/70 pl-5">
                  Verify at maharera.maharashtra.gov.in
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links (col-span-4) */}
            <div className="col-span-4 space-y-3 pl-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] font-serif">
                Project Navigation
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-emerald-100/90">
                <li>
                  <a href="/#home" className="hover:text-white transition flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Home
                  </a>
                </li>
                <li>
                  <a href="/residential-plot-in-goa" className="hover:text-white transition flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Residential Plots
                  </a>
                </li>
                <li>
                  <a href="/residential-plots-north-goa" className="hover:text-white transition flex items-center gap-1.5 font-medium text-emerald-100">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Plots in North Goa
                  </a>
                </li>
                <li>
                  <a href="/#location" className="hover:text-white transition flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Location
                  </a>
                </li>
                <li>
                  <a href="/#amenities" className="hover:text-white transition flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Amenities
                  </a>
                </li>
                <li>
                  <a href="/#pmay" className="hover:text-white transition flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> PMAY Info
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="hover:text-[#FDE68A] transition flex items-center gap-1.5 text-emerald-200 font-medium">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-[#FDE68A] transition flex items-center gap-1.5 text-emerald-200 font-medium">
                    <ArrowRight className="w-3 h-3 text-[#FDE68A] shrink-0" /> Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Office & Site (col-span-4) */}
            <div className="col-span-4 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] font-serif">
                Site Address & Contact
              </h4>
              <div className="space-y-1.5 text-xs text-emerald-100/90">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FDE68A] shrink-0 mt-0.5" />
                  <span>
                    NH-66, Near Pathrodevi Border Checkpoint, Dodamarg, Sindhudurg, Maharashtra
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FDE68A] shrink-0" />
                  <a href="tel:+919211494111" className="hover:text-white font-semibold">
                    +91 92114 94111
                  </a>
                </div>
              </div>

              {/* Official Location GIS Cartography Preview */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=NH-66%2C%20Near%20Pathrodevi%20Border%20Checkpoint%2C%20Dodamarg%2C%20Sindhudurg%2C%20Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View location coordinates on Google Maps"
                className="group relative block h-[105px] w-full rounded-md overflow-hidden border border-emerald-300/40 bg-[#F4F6F4] hover:border-[#FDE68A] transition-all duration-200 shadow-sm"
              >
                <svg
                  aria-hidden="true"
                  className="w-full h-full"
                  viewBox="0 0 360 132"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="lightGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />
                    </pattern>
                    <linearGradient id="riverNatural" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#BAE6FD" />
                      <stop offset="100%" stopColor="#7DD3FC" />
                    </linearGradient>
                  </defs>

                  <rect width="360" height="132" fill="#F8FAFC" />
                  <rect width="360" height="132" fill="url(#lightGrid)" opacity="0.6" />

                  <path d="M 0,0 L 110,0 L 95,50 L 0,35 Z" fill="#DCFCE7" stroke="#BBF7D0" strokeWidth="1" />
                  <path d="M 270,0 L 360,0 L 360,65 L 290,45 Z" fill="#DCFCE7" stroke="#BBF7D0" strokeWidth="1" />
                  <text x="12" y="16" fill="#15803D" fontSize="7.5" fontWeight="600" letterSpacing="0.5">FOREST RESERVE</text>

                  <path d="M -10,75 C 60,65 110,95 180,85 C 240,75 290,95 370,80" fill="none" stroke="url(#riverNatural)" strokeWidth="8" strokeLinecap="round" />
                  <text x="80" y="94" fill="#0284C7" fontSize="7" fontStyle="italic" fontWeight="600">Tilari River Corridor</text>

                  <rect x="175" y="24" width="48" height="42" rx="3" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 2" />
                  <text x="178" y="34" fill="#92400E" fontSize="7" fontWeight="bold">PLOTS ENCLAVE</text>
                  <text x="178" y="44" fill="#B45309" fontSize="6.5">15 Acres • 86 Plots</text>
                  <text x="178" y="53" fill="#047857" fontSize="6" fontWeight="bold">RERA APPROVED</text>

                  <path d="M 0,105 Q 160,95 240,110 T 360,105" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="5 3" />
                  <rect x="8" y="98" width="118" height="12" rx="2" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="0.5" />
                  <text x="12" y="107" fill="#991B1B" fontSize="6.5" fontWeight="bold">MAHARASHTRA / GOA BORDER</text>

                  <path d="M 60,132 L 185,45" stroke="#CBD5E1" strokeWidth="3" fill="none" />
                  <path d="M 185,45 L 270,132" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />
                  <path d="M 185,45 L 205,45" stroke="#64748B" strokeWidth="2" fill="none" />

                  <path d="M 25,132 Q 165,65 330,-5" fill="none" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 25,132 Q 165,65 330,-5" fill="none" stroke="#F59E0B" strokeWidth="5.5" strokeLinecap="round" />
                  <path d="M 25,132 Q 165,65 330,-5" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
                  <rect x="250" y="20" width="85" height="14" rx="2" fill="#1E293B" />
                  <text x="255" y="30" fill="#FDE68A" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">NH-66 HIGHWAY AXIS</text>

                  <rect x="100" y="68" width="88" height="13" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.75" />
                  <circle cx="106" cy="74.5" r="2.5" fill="#DC2626" />
                  <text x="112" y="77" fill="#334155" fontSize="6.5" fontWeight="bold">Pathrodevi Checkpoint (5m)</text>

                  <circle cx="198" cy="46" r="14" fill="#059669" fillOpacity="0.18" />
                  <circle cx="198" cy="46" r="8" fill="#059669" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="198" cy="46" r="3" fill="#FDE68A" />

                  <g transform="translate(336, 68)">
                    <circle cx="0" cy="0" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.75" />
                    <polygon points="0,-7 2.5,0 0,2 -2.5,0" fill="#DC2626" />
                    <polygon points="0,7 2.5,0 0,-2 -2.5,0" fill="#64748B" />
                    <text x="-2" y="-8" fill="#1E293B" fontSize="6" fontWeight="bold">N</text>
                  </g>
                </svg>

                <div className="absolute top-1 left-1.5 z-10 flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded-xs bg-white/95 text-[8.5px] font-bold text-slate-800">
                    📍 NH-66 Axis • Dodamarg
                  </span>
                  <span className="inline-block px-1.5 py-0.5 rounded-xs bg-[#065F46] text-white text-[8.5px] font-semibold">
                    RERA: PP1310002502621
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 bg-white/95 py-1 px-2.5 flex items-center justify-between border-t border-slate-200">
                  <span className="text-[10px] font-bold text-slate-800 truncate">
                    Near Goa Border Checkpoint
                  </span>
                  <span className="shrink-0 text-[10px] font-bold text-[#065F46] group-hover:text-[#D97706] flex items-center gap-0.5">
                    <span>Maps ↗</span>
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Desktop Statutory Disclaimer Container */}
          <div className="mt-3 pt-3 border-t border-emerald-500/30">
            <div className="bg-black/25 rounded-md p-3 border border-white/10 text-justify text-[10.5px] text-emerald-100/80 leading-relaxed space-y-1">
              <div className="font-bold text-[#FDE68A] uppercase tracking-wider text-[10px]">
                Statutory Disclaimer & Buyer Verification Notice:
              </div>
              <p>
                This content is for general property information and is not a guarantee of appreciation, rental income or
                investment returns. Buyers should independently verify property title, applicable approvals, development
                commitments and transaction terms. Any claimed government-scheme benefit or PMAY affiliation must be supported
                by valid official documentation.
              </p>
              <p>
                All plot areas, internal road dimensions (advertised at 12 metres), project timeline (expected possession Dec 2028),
                amenities (clubhouse, swimming pool, gazebo, utilities) and travel durations to Manohar International Airport (Mopa)
                are subject to final approved layout plans, site conditions, traffic flow and executed contractual agreements.
                Maharashtra RERA Registration Number: <strong>PP1310002502621</strong>.
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-200/60">
              <div>
                © {currentYear}. All rights reserved.
              </div>
              <div className="flex items-center gap-3">
                <a href="/disclaimer" className="text-emerald-200/80 hover:text-[#FDE68A] underline transition">
                  Disclaimer
                </a>
                <span>•</span>
                <a href="/privacy-policy" className="text-emerald-200/80 hover:text-[#FDE68A] underline transition">
                  Privacy Policy
                </a>
                <span>•</span>
                <span>RERA Registered: PP1310002502621</span>
                <span>•</span>
                <span>Dodamarg, Sindhudurg, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
