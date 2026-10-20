'use client';

import { useState } from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import EnquiryModal from '@/components/EnquiryModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Download Brochure & Price List');

  const openEnquiry = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const homeFaqs = [
    {
      q: "What is Vedic City and Graama?",
      a: "Vedic City is a master-planned luxury plotted development situated directly along the NH-66 highway corridor in Dodamarg, Sindhudurg, Maharashtra, right adjacent to the North Goa border and approximately 20-22 minutes from Manohar International Airport (Mopa). Graama is its premier 15-acre residential plotted development offering 86 exclusive freehold plots."
    },
    {
      q: "Who is the property developer of Vedic City and Graama?",
      a: "Vedic City and Graama are developed and promoted by Ebrix Home and More (Ebrix Infratech Real Estate LLP), a developer dedicated to transparent land title, statutory MahaRERA compliance, and world-class gated infrastructure."
    },
    {
      q: "Is Vedic City officially registered with MahaRERA?",
      a: "Yes. The project is officially registered under the Maharashtra Real Estate Regulatory Authority (MahaRERA) with Registration Number PP1310002502621. All project plans, promoter details (Ebrix Home and More / Ebrix Infratech Real Estate LLP), and approvals can be verified directly on maharera.maharashtra.gov.in."
    },
    {
      q: "What are the plot sizes and how many plots are available in Graama?",
      a: "The Graama residential development spans approximately 15 acres and contains strictly 86 exclusive residential plots starting from 321.72 sq. yards (approx. 300 sq. yards onwards). Developed by Ebrix Home and More, this low-density layout guarantees maximum privacy, wide 12m roads, and generous green spaces."
    },
    {
      q: "What is the expected possession timeline for Graama?",
      a: "The expected completion and possession timeline for the Graama residential development is December 2028, in accordance with MahaRERA registration records and statutory agreements."
    },
    {
      q: "How close is Vedic City to Goa's beaches, airport, and transit hubs?",
      a: "Vedic City is situated 0 minutes directly on NH-66, 5 minutes from the Patradevi inter-state checkpost, approx. 20-22 minutes from Mopa International Airport, 18 minutes from Pernem Railway Station, and 25-30 minutes from North Goa beaches including Morjim, Mandrem, and Arambol."
    },
    {
      q: "What community amenities are developed by Ebrix Home and More at Graama?",
      a: "The project includes a luxury clubhouse, resort-style open-air swimming pool with sundeck, meditation gazebos, landscaped green avenues, 12-metre wide internal paved roads, 3-tier gated security with 24x7 CCTV, Vastu-compliant plot alignment, and underground utility trenches."
    }
  ];

  return (
    <div className="bg-white text-slate-800">
      
      {/* ========================================================
          HERO SECTION (GOVERNMENT GREEN & NATURE OVERLAY)
          ======================================================== */}
      <section id="home" className="relative min-h-[calc(100vh-110px)] flex items-center overflow-hidden bg-slate-900 py-10 lg:py-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/goa-hero.jpg"
            alt="Luxury plotted development near North Goa"
            className="w-full h-full object-cover object-center scale-100 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-emerald-950/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl text-white space-y-4 sm:space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-500/25 text-[#FDE68A] border border-amber-400/40 backdrop-blur-md">
                ✨ Vedic City • Graama
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium bg-emerald-950/80 text-emerald-100 border border-emerald-400/30 backdrop-blur-md">
                🏢 Developer: <strong className="text-white ml-1">Ebrix Home and More</strong>
              </span>
              <a
                href="https://maharera.maharashtra.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Official MahaRERA Portal"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-900/70 text-emerald-200 border border-emerald-400/30 backdrop-blur-md hover:bg-emerald-800/80 hover:text-white transition cursor-pointer"
              >
                🛡️ MahaRERA: <strong className="font-mono text-[#FDE68A]">PP1310002502621</strong> ↗
              </a>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium bg-white/15 text-white/95 border border-white/20 backdrop-blur-md">
                📍 Dodamarg, Sindhudurg (North Goa Border)
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-serif-luxury text-white">
                RESIDENTIAL PLOTS IN DODAMARG, <br />
                <span className="text-gold-gradient font-light">MINUTES FROM NORTH GOA</span>
              </h1>
              <p className="text-base sm:text-xl font-editorial italic text-emerald-100/95 mt-1.5">
                Vedic City • Graama by Ebrix Home and More
              </p>
            </div>

            {/* Description with Underlined/Bold Highlights */}
            <p className="text-white text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl font-medium drop-shadow-sm">
              Welcome to <strong className="text-[#FDE68A] font-bold">Graama at Vedic City</strong>, developed by <strong className="text-white font-bold underline decoration-[#FDE68A]/70 underline-offset-2">Ebrix Home and More</strong>. Spread across <strong className="text-white font-bold underline decoration-[#FDE68A]/60 underline-offset-2">approximately 15 acres</strong> with only <strong className="text-white font-bold underline decoration-[#FDE68A]/60 underline-offset-2">86 exclusive residential plots</strong>. Located directly along the <strong className="text-[#FDE68A] font-bold">NH-66 corridor</strong> near the North Goa border, just <strong className="text-white font-bold underline decoration-[#FDE68A]/60 underline-offset-2">20 minutes from Manohar International Airport (Mopa)</strong>. Rooted in Indian heritage, wellness, and scenic Konkan nature.
            </p>

            {/* 3 Glass Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-xl pt-0.5">
              <div className="bg-white/10 border border-white/15 rounded-md px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold">
                  <span>🌳</span>
                  <span>15 ACRES</span>
                </div>
                <div className="text-white/80 text-[11px] mt-0.5">86 Curated Plots</div>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-md px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold">
                  <span>✈️</span>
                  <span>20 MINS</span>
                </div>
                <div className="text-white/80 text-[11px] mt-0.5">Mopa Airport</div>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-md px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold">
                  <span>📅</span>
                  <span>DEC 2028</span>
                </div>
                <div className="text-white/80 text-[11px] mt-0.5">Possession</div>
              </div>
            </div>

            {/* Notice Strip */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-2 rounded-lg bg-slate-950/70 border border-amber-400/40 backdrop-blur-md shadow-md">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0"></span>
                <span className="text-xs sm:text-sm font-black font-serif tracking-wide text-white">
                  GRAAMA: LIMITED <strong className="text-[#FDE68A] font-extrabold">86 PLOTS</strong> ONLY
                </span>
              </span>
              <span className="text-white/30 hidden xs:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold text-white/95">
                Plot registrations now open
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-xs text-[#FDE68A] hidden sm:inline font-semibold">
                By Ebrix Home and More
              </span>
            </div>

            {/* Action Buttons: APPLY NOW & EXPLORE MASTER PLAN */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => openEnquiry('Get Project Details')}
                className="w-full sm:w-auto px-9 py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-slate-950 font-black text-base uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 border-2 border-amber-300/60 ring-2 ring-amber-400/30"
              >
                <span>✨</span>
                <span>GET PROJECT DETAILS</span>
              </button>

              <button
                onClick={() => openEnquiry('Download Master Plan & Layout')}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-md border border-white/25 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>📑</span>
                <span>EXPLORE MASTER PLAN →</span>
              </button>

              <a
                href="https://pradhanmantriawasyojna.org/"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/95 hover:text-white underline underline-offset-4 decoration-white/50 transition text-center"
              >
                Apply
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: STATS & DEADLINE STRIP (WHITE & SLATE)
          ======================================================== */}
      <section className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="stats-grid-container">
            
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">PLOT REGISTRATIONS</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif mt-1">Now Open</h3>
              </div>
              <div className="my-3 text-[#059669] font-bold text-sm sm:text-base flex items-center gap-1.5">
                <span>Plot registrations are now open</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Get project details for your plot.</span>
                <button onClick={() => openEnquiry('Get Project Details')} className="text-[#059669] font-bold hover:underline cursor-pointer">Get Details ↗</button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">MAHARERA REGISTRATION</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#065F46] font-mono mt-1">PP1310002502621</h3>
              </div>
              <div className="my-3 text-xs text-slate-600">
                Verified under MahaRERA Act for total transparency.
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Official government portal</span>
                <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#059669] font-bold hover:underline">Verify ↗</a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">GRAAMA</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif mt-1">Starts 321.72 Yds</h3>
              </div>
              <div className="my-3 text-xs text-slate-600">
                Low-density master plan by Ebrix Home and More with strictly 86 private parcels.
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Vedic City • Graama</span>
                <Link href="/residential-plot-in-goa" className="text-[#059669] font-bold hover:underline">Explore ↗</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">PROPERTY DEVELOPER</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#065F46] font-serif mt-1">Ebrix Home &amp; More</h3>
              </div>
              <div className="my-3 text-xs text-slate-600">
                Direct entry on NH-66 Axis near North Goa border • 20 Mins to Mopa.
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Complimentary site pickup</span>
                <button onClick={() => openEnquiry('Book Complimentary Site Visit')} className="text-[#059669] font-bold hover:underline cursor-pointer">Schedule ↗</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: ABOUT THE PROJECT (EXACT REPLICA OF SCREENSHOT)
          ======================================================== */}
      <section id="about" className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          
          {/* Header centered */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 border border-emerald-300 mb-3">
              ✨ HERITAGE MEETS COASTAL GRANDEUR
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight uppercase">
              ABOUT THE PROJECT
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2.5 mb-3 rounded-full"></div>
            <p className="text-sm sm:text-base font-editorial italic text-slate-600">
              &quot;A New Vision of Luxury Land Ownership&quot;
            </p>
          </div>

          {/* 2-Column Responsive Layout */}
          <div className="about-section-container">
            
            {/* Left Content Column */}
            <div className="about-content-col space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <span className="text-[11px] sm:text-xs font-bold text-[#D97706] uppercase tracking-wider block">
                THE VISION &amp; PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
                A Planned 15-Acre Sanctuary Near Goa
              </h3>
              <p>
                Discover this exclusive luxury plotted development, located along the <strong className="text-slate-900 font-bold">NH-66 highway corridor</strong> near the Goa–Maharashtra border in Dodamarg, Kudal, Sindhudurg, Maharashtra.
              </p>
              <p>
                Spread across <strong className="text-slate-900 font-bold">approximately 15 acres</strong> and thoughtfully planned with only <strong className="text-slate-900 font-bold">86 residential plots</strong>, the project brings together nature-inspired surroundings, state-of-the-art community amenities and seamless connectivity to North Goa.
              </p>
              <p>
                The project presents a vision of balanced, contemporary living rooted in harmony and an organic connection with nature.
              </p>

              {/* 2 Side-by-side Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0 text-base">
                    🧭
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Vastu-Inspired Living</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Plot orientations designed for natural harmony and vitality.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#065F46] flex items-center justify-center shrink-0 text-base">
                    🌿
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Eco-Conscious Master Plan</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Avenue trees, pedestrian walkways, and open green pockets.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <button
                  onClick={() => openEnquiry('Get Project Details')}
                  className="px-6 py-3 bg-[#065F46] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  GET PROJECT DETAILS
                </button>
                <button
                  onClick={() => openEnquiry('Download Official Brochure')}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-md border border-slate-300 shadow-2xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  DOWNLOAD OFFICIAL BROCHURE
                </button>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="about-media-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900">
                <img
                  src="/images/luxury-plots.jpg"
                  alt="Vedic City Master-Planned Plotted Sanctuary"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition duration-700"
                />
                
                {/* Bottom Overlay Strip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 text-white flex items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#FDE68A] uppercase tracking-wider block">
                      MASTER-PLANNED COMMUNITY
                    </span>
                    <span className="text-base sm:text-lg font-bold font-serif">
                      Luxury Plotted Sanctuary
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-[#F59E0B] text-slate-950 font-black text-xs rounded-full shadow shrink-0">
                    86 Plots
                  </span>
                </div>
              </div>

              {/* MahaRERA Badge Underneath */}
              <div className="mt-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-sm shrink-0">
                    🛡️
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">MahaRERA Verified Project</div>
                    <div className="text-[11px] font-mono text-[#065F46] font-bold">Reg: PP1310002502621</div>
                  </div>
                </div>
                <a
                  href="https://maharera.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#059669] hover:underline whitespace-nowrap"
                >
                  Verify Portal ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: BRAND AMBASSADORS (WHITE BACKGROUND)
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 border border-emerald-200 mb-2.5">
              Icons of Health &amp; Sporting Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">
              OUR BRAND AMBASSADORS
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2.5 mb-3 rounded-sm"></div>
            <p className="text-base sm:text-lg font-editorial italic text-slate-700">
              Inspiring Excellence. Representing a Vision for the Future.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
              The project is proud to feature personalities associated with sports, fitness, and an active lifestyle, reflecting our vision of a community connected to physical well-being, mindfulness, and future aspirations.
            </p>
          </div>

          <div className="ambassadors-grid-container">
            
            {/* Milind Soman */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="h-[320px] bg-slate-100 overflow-hidden relative">
                <img
                  src="/images/milind-soman-new.png"
                  alt="Milind Soman"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#065F46] text-white text-[11px] font-bold px-3 py-1 rounded-md">
                  Brand Ambassador
                </span>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-xl font-bold text-slate-900 font-serif">Milind Soman</h3>
                <div className="text-xs font-bold text-[#059669] uppercase tracking-wider">Holistic Wellness &amp; Fitness Icon</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Known across the nation for his commitment to fitness, endurance, and holistic wellness, Milind Soman represents an active, mindful, and health-conscious lifestyle. His association complements the project&apos;s lifestyle-oriented positioning around well-being, fresh air, and outdoor living along the Konkan corridor.
                </p>
              </div>
            </div>

            {/* Saina Nehwal */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="h-[320px] bg-slate-100 overflow-hidden relative">
                <img
                  src="/images/saina-nehwal.jpg"
                  alt="Ms. Saina Nehwal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#065F46] text-white text-[11px] font-bold px-3 py-1 rounded-md">
                  Brand Ambassador — Sports Academy
                </span>
              </div>
              <div className="p-6 space-y-2.5">
                <h3 className="text-xl font-bold text-slate-900 font-serif">Ms. Saina Nehwal</h3>
                <div className="text-xs font-bold text-[#059669] uppercase tracking-wider">Olympic Champion &amp; Badminton Legend</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An internationally recognised Olympic badminton champion, Ms. Saina Nehwal represents sporting excellence, dedication, grit, and perseverance at the highest level of world sports. Her association with the Sports Academy reflects our foundational commitment to fostering grassroots sports, active recreation, and youth inspiration.
                </p>
              </div>
            </div>

          </div>

          {/* Video Walkthrough Box */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-0.5 rounded-md text-xs font-bold text-[#065F46] bg-emerald-50 border border-emerald-200 mb-2">
              🎬 Official Video Presentation
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
              Watch: Lifestyle &amp; Brand Ambassador Feature
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4">
              Official video presentation, master plan walkthrough, and vision film for the Konkan plotted development.
            </p>
            <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ejZf2S58YX4?rel=0"
                title="Vedic City Brand Ambassador Feature"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: PROJECT HIGHLIGHTS (CLEAN GRID)
          ======================================================== */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Project Overview at a Glance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-luxury mt-2.5">
              PROJECT HIGHLIGHTS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Every detail verified and registered for complete transparency and long-term security
            </p>
          </div>

          <div className="highlights-grid-container">
            <div className="p-5 rounded-lg bg-emerald-50/70 border border-emerald-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46] block">Project &amp; Layout</span>
              <div className="text-base font-bold text-[#065F46] font-serif mt-1">Vedic City • Graama</div>
              <p className="text-[11px] text-emerald-800 mt-1">15 Acres • 86 Exclusive Plots</p>
            </div>

            <div className="p-5 rounded-lg bg-emerald-50/70 border border-emerald-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46] block">Property Developer</span>
              <div className="text-base font-bold text-[#065F46] font-serif mt-1">Ebrix Home &amp; More</div>
              <p className="text-[11px] text-emerald-800 mt-1">Ebrix Infratech Real Estate LLP</p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">MahaRERA Registration</span>
              <div className="text-base font-bold text-[#065F46] font-mono mt-1">PP1310002502621</div>
              <p className="text-[11px] text-slate-600 mt-1">maharera.maharashtra.gov.in</p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Exclusive Inventory</span>
              <div className="text-base font-bold text-slate-900 font-serif mt-1">86 Curated Plots</div>
              <p className="text-[11px] text-slate-600 mt-1">Sizes starting from 321.72 Sq. Yards</p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Location Frontage</span>
              <div className="text-base font-bold text-slate-900 font-serif mt-1">NH-66 Highway Axis</div>
              <p className="text-[11px] text-slate-600 mt-1">Near Pathrodevi Border Checkpoint</p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Airport Connectivity</span>
              <div className="text-base font-bold text-slate-900 font-serif mt-1">20–22 Minutes Drive</div>
              <p className="text-[11px] text-slate-600 mt-1">Manohar Intl Airport (Mopa - GOX)</p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Internal Infrastructure</span>
              <div className="text-base font-bold text-slate-900 font-serif mt-1">12-Metre Wide Roads</div>
              <p className="text-[11px] text-slate-600 mt-1">Tree-lined with underground utilities</p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Possession Timeline</span>
              <div className="text-base font-bold text-slate-900 font-serif mt-1">December 2028</div>
              <p className="text-[11px] text-slate-600 mt-1">Subject to official registered records</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: LOCATION & CONNECTIVITY
          ======================================================== */}
      <section id="location" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 border border-emerald-200 mb-2.5">
              Strategic Regional Gateway
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">
              LOCATION &amp; CONNECTIVITY
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2.5 mb-3 rounded-sm"></div>
            <p className="text-xs sm:text-sm text-slate-600">
              Connected to North Goa, Mopa International Airport, NH-66 Axis, and scenic coastal destinations
            </p>
          </div>

          <div className="connectivity-grid-container">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">0m</div>
              <h4 className="font-bold text-slate-900 text-sm">NH-66 Highway Axis</h4>
              <p className="text-xs text-slate-600 mt-1">Direct highway entry (Band on) along the primary Goa–Mumbai economic and transit corridor.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">5m</div>
              <h4 className="font-bold text-slate-900 text-sm">Patradevi Border Checkpost</h4>
              <p className="text-xs text-slate-600 mt-1">Smooth inter-state transit point connecting Maharashtra&apos;s Sindhudurg with North Goa.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">22m</div>
              <h4 className="font-bold text-slate-900 text-sm">Manohar Intl Airport (Mopa)</h4>
              <p className="text-xs text-slate-600 mt-1">North Goa&apos;s premier international airport providing direct domestic &amp; global air connectivity.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">18m</div>
              <h4 className="font-bold text-slate-900 text-sm">Pernem Railway Station</h4>
              <p className="text-xs text-slate-600 mt-1">Key Konkan railway terminal connecting Goa to Mumbai, Pune, Mangaluru, and national transit hubs.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">20m</div>
              <h4 className="font-bold text-slate-900 text-sm">AeroCity Commercial Belt</h4>
              <p className="text-xs text-slate-600 mt-1">Upcoming commercial, hospitality, logistics, and retail aerotropolis adjacent to Mopa Airport.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">45m</div>
              <h4 className="font-bold text-slate-900 text-sm">Panaji (Goa Capital City)</h4>
              <p className="text-xs text-slate-600 mt-1">Heritage promenades, administrative headquarters, high court, and lifestyle waterfront.</p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-base">Explore the Project Ground Reality in Person</h4>
              <p className="text-xs text-slate-600 mt-0.5">Complimentary site visit pick-up coordinated from Mopa Airport or Pernem Station.</p>
            </div>
            <button
              onClick={() => openEnquiry('Book Complimentary Site Visit')}
              className="px-5 py-2.5 bg-[#065F46] hover:bg-[#047857] text-white text-xs font-bold rounded-md shadow whitespace-nowrap cursor-pointer"
            >
              Schedule Site Visit →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 & 7: PRESS & INFRASTRUCTURE
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
            <span className="text-[11px] font-bold text-[#065F46] uppercase tracking-wider block mb-1">
              Media Coverage &amp; Infrastructure Developments
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mb-3">
              Times of India: International Cricket Stadium in Goa within Three Years
            </h3>
            <blockquote className="border-l-4 border-[#059669] pl-4 py-1 italic text-slate-700 text-sm sm:text-base my-3">
              &quot;The GCA first bought land at Tivim... Subsequently, more land for the same project was bought at Maulinguem in Bicholim and Dhargal, where a Sports City was expected to come up.&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Official press reports highlight upcoming international sports infrastructure, driving real estate development and investment potential in the North Goa &amp; Sindhudurg corridor.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FAF9F6] rounded-xl border border-slate-200 p-6 sm:p-8">
            <span className="text-[11px] font-bold text-[#006B3C] uppercase tracking-wider block mb-1">
              GOA • TOURISM &amp; LEISURE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] font-serif mb-2">
              Goa&apos;s Waterfront Entertainment Hub
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Goa&apos;s vibrant riverfront leisure and luxury entertainment scene are central to its thriving tourism landscape. Ongoing developments along the Mandovi River continue to drive growth across the region&apos;s hospitality sector, infrastructure, and commercial investment opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 8: AMENITIES & LIFESTYLE
          ======================================================== */}
      <section id="amenities" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 border border-emerald-200 mb-2.5">
              Holistic Vedic Lifestyle
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">
              AMENITIES &amp; LIFESTYLE
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2.5 mb-3 rounded-sm"></div>
            <p className="text-xs sm:text-sm text-slate-600">
              Planned for a comfortable, secure, and nature-inspired community living environment
            </p>
          </div>

          <div className="amenities-grid-container">
            
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src="/images/landscaped-gardens.jpg" alt="Swimming Pool" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 font-serif text-base mb-1">Swimming Pool &amp; Sundeck</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Resort-style open-air swimming pool with relaxing sundeck loungers and tropical palm landscaping.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src="/images/soma-luxury-villas.jpg" alt="Luxury Clubhouse" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 font-serif text-base mb-1">Luxury Clubhouse &amp; Social Hub</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Elegantly designed multi-purpose clubhouse featuring recreation zones, indoor games, and social gathering venues.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src="/images/amboli-nature.jpg" alt="Meditation Gazebo" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 font-serif text-base mb-1">Gazebo &amp; Meditation Pavilion</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Tranquil open-air gazebos situated amidst greenery, ideal for yoga sessions, reading, and evening conversations.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src="/images/landscaped-gardens.jpg" alt="Landscaped Parks" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 font-serif text-base mb-1">Landscaped Green Parks &amp; Gardens</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Rich Konkan flora, blooming avenues, manicured lawns, and shaded sitting alcoves throughout the 15-acre estate.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src="/images/luxury-plots.jpg" alt="Wide Roads" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 font-serif text-base mb-1">12-Metre Wide Tree-Lined Roads</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Spacious, well-paved 12-metre wide internal arterial roads designed for smooth vehicular movement.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src="/images/rera-logo.png" alt="Three Tier Security" className="w-full h-full object-contain p-4 bg-slate-50" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 font-serif text-base mb-1">Three-Tier Gated Security &amp; CCTV</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Manned 24x7 security checkpoint, access control barriers, perimeter boundary wall, and round-the-clock surveillance.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: AWARDS & HONOURS
          ======================================================== */}
      <section id="awards" className="py-16 sm:py-20 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 border border-emerald-200 mb-2.5">
            🌿 Wellness Living
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight mb-2">
            WELLNESS &amp; LONGEVITY REAL ESTATE
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mb-4 rounded-sm"></div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Discover thoughtfully designed wellness and longevity real estate. Explore premium properties built for holistic well-being and supported by experienced industry leaders.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 11: FAQS (ACCORDION)
          ======================================================== */}
      <FAQSection faqs={homeFaqs} />

      {/* ========================================================
          LEAD FORM SECTION
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" id="contact-form">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <LeadForm formTitle="Request Official Vedic City Master Plan & Price List" />
        </div>
      </section>

      {/* Reusable Lead Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
