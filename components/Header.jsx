'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EnquiryModal from './EnquiryModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Download Brochure & Price List');

  const openModal = (title) => {
    setModalTitle(title);
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all duration-200">
        {/* Topbar: Govt Emerald Green */}
        <div className="w-full bg-[#065F46] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-8 lg:px-12 border-b border-emerald-600/30">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-1 sm:gap-1.5">
            <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-6 text-white/95 text-center">
              <span className="hidden md:inline-flex items-center gap-1.5 font-bold text-[#FDE68A]">
                🏛️ Vedic City • Graama Enclave
              </span>
              <span className="hidden lg:inline-block text-emerald-200/60">|</span>
              <span className="hidden lg:inline-block text-emerald-100 font-medium">
                Developer: <strong className="text-white">Ebrix Home and More</strong>
              </span>
              <span className="hidden lg:inline-block text-emerald-200/60">|</span>
              <a
                href="https://maharera.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#FDE68A] hover:underline cursor-pointer"
                title="Click to view official MahaRERA Registration (PP1310002502621)"
              >
                <img
                  src="/images/maharera-official-logo.png"
                  alt="MahaRERA Seal"
                  className="w-4 h-4 rounded-full bg-white p-0.5 object-contain"
                />
                MahaRERA: <strong className="text-white font-mono tracking-wider underline decoration-[#FDE68A]">PP1310002502621</strong> ↗
              </a>
              <span className="hidden xl:inline-flex items-center gap-1 text-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDE68A]">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                NH-66 Axis, Near Pathrodevi Border
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs font-medium">
              <a
                href="tel:+919211494111"
                className="inline-flex items-center gap-1.5 hover:text-[#FDE68A] transition text-white/95 font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[#FDE68A]">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <span>+91 92114 94111</span>
              </a>
              <span className="text-emerald-300/40">|</span>
              <button
                onClick={() => openModal('Download Official Project Brochure')}
                className="inline-flex items-center gap-1 text-[#FDE68A] hover:text-white transition font-bold cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav: White Background with Govt Logos */}
        <div className="w-full px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* Govt Logos */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Home">
                <div className="relative h-7 sm:h-10 w-14 sm:w-20 shrink-0">
                  <img
                    alt="Pradhan Mantri Awas Yojana - Urban"
                    src="/images/pmay-logo-transparent.png"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="h-5 sm:h-7 w-px bg-slate-200"></div>
                <div className="relative h-7 sm:h-10 w-12 sm:w-16 shrink-0">
                  <img
                    alt="Swachh Bharat - Ek Kadam Swachhata Ki Ore"
                    src="/images/swachh-bharat-hq.png"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="h-5 sm:h-7 w-px bg-slate-200"></div>
                <div className="relative h-7 sm:h-10 w-12 sm:w-16 shrink-0">
                  <img
                    alt="Digital India - Power To Empower"
                    src="/images/digital-india-clean.png"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="h-5 sm:h-7 w-px bg-slate-200"></div>
                <div className="relative h-8 sm:h-11 w-8 sm:w-11 shrink-0">
                  <img
                    alt="MahaRERA Official Registration Logo - PP1310002502621"
                    src="/images/maharera-official-logo.png"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="hidden sm:flex flex-col justify-center pl-1 sm:pl-2 border-l border-slate-200 text-left">
                  <span className="text-[10px] sm:text-[11px] font-extrabold tracking-tight text-[#065F46] uppercase leading-tight font-serif">
                    Vedic City
                  </span>
                  <span className="text-[8.5px] sm:text-[9.5px] font-medium text-slate-500 leading-tight">
                    Graama Enclave • By Ebrix Home and More
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 text-[12.5px] xl:text-[13px] font-medium text-slate-700 whitespace-nowrap">
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/#home">Home</Link>
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/#about">About</Link>
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/residential-plot-in-goa">Residential Plots</Link>
              <button onClick={() => openModal('Download Project Brochure')} className="hover:text-[#059669] hover:font-semibold transition py-1 relative text-left cursor-pointer">Brochure</button>
              <button onClick={() => openModal('Request Latest Price List')} className="hover:text-[#059669] hover:font-semibold transition py-1 relative text-left cursor-pointer">Price List</button>
              <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#059669] hover:font-semibold transition py-1 relative">RERA License</a>
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/#amenities">Amenities</Link>
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/#awards">Awards</Link>
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/#pmay">PMAY Information</Link>
              <Link className="hover:text-[#059669] hover:font-semibold transition py-1 relative" href="/#contact">Contact Us</Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                onClick={() => openModal('Enquire Now')}
                className="px-3.5 xl:px-4 py-2 text-xs font-bold text-[#065F46] bg-emerald-50 hover:bg-[#065F46] hover:text-white border border-[#059669]/30 rounded-md transition shadow-xs cursor-pointer whitespace-nowrap"
              >
                Enquire Now
              </button>
              <button
                onClick={() => openModal('Register for Plots Priority')}
                className="px-4 xl:px-5 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] rounded-md shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 border border-emerald-400/40 whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDE68A]">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                </svg>
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1.5 lg:hidden shrink-0">
              <button
                onClick={() => openModal('Register for Plots Priority')}
                className="hidden xs:inline-flex px-2.5 py-1 text-[11px] font-bold text-white bg-[#059669] rounded-md shadow-xs cursor-pointer"
              >
                Register
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-md text-slate-700 hover:text-[#059669] hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* LIVE NOTICE TICKER */}
        <div className="w-full bg-[#064E3B] text-white py-1 px-3 sm:px-6 lg:px-8 border-t border-b border-emerald-600/30 flex items-center gap-2 sm:gap-3 overflow-hidden">
          <div className="shrink-0 flex items-center">
            <span className="inline-flex items-center gap-1.5 bg-[#F59E0B] text-[#064E3B] font-extrabold text-[11px] sm:text-xs uppercase px-2 py-0.5 rounded-sm shadow-xs tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping mr-0.5"></span>
              LIVE NOTICE
            </span>
          </div>
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <div className="animate-marquee inline-flex items-center gap-8 text-xs sm:text-[13px] font-medium tracking-wide text-white/95" style={{ animationDuration: '160s' }}>
              <span className="inline-flex items-center gap-2">
                <strong>PROJECT:</strong> <strong className="text-[#FDE68A]">VEDIC CITY — GRAAMA ENCLAVE</strong> (Developed by <strong>Ebrix Home and More</strong>)
              </span>
              <span className="text-[#FDE68A]">✦</span>
              <span className="inline-flex items-center gap-2">
                <strong>IMPORTANT DATES:</strong> Last Date: <strong className="text-[#FDE68A]">29 Nov</strong> | Allotment Date: <strong className="text-[#FDE68A]">01 Dec</strong>
              </span>
              <span className="text-[#FDE68A]">✦</span>
              <span className="inline-flex items-center gap-2">
                <strong>BOOKINGS OPEN:</strong> 15 Acres Luxury Plotted Development (86 Exclusive Plots) along NH-66 near North Goa.
              </span>
              <span className="text-[#FDE68A]">✦</span>
              <span className="inline-flex items-center gap-1.5">
                <strong>MAHARERA REGISTRATION:</strong> PP1310002502621 | Expected Possession: Dec 2028
              </span>
              <span className="text-[#FDE68A]">✦</span>
              <span>
                <strong>TRANSIT ADVANTAGE:</strong> Direct 0-Minute Highway Entry on NH-66 • 20 Mins to Manohar International Airport (Mopa) • 25 Mins to North Goa Beaches
              </span>
              <span className="text-[#FDE68A]">✦</span>
              <span className="inline-flex items-center gap-1 text-[#FDE68A]">
                <strong>BRAND AMBASSADORS:</strong> Milind Soman &amp; Ms. Saina Nehwal
              </span>
              <span className="text-[#FDE68A]">✦</span>
              <span>
                <strong>DEVELOPER:</strong> Ebrix Home and More | 12m Wide Roads | 300+ Sq. Yds Vastu Layouts
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 shadow-xl space-y-3">
            <Link onClick={() => setMobileMenuOpen(false)} href="/#home" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#about" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">About Vedic City</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/residential-plot-in-goa" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">Residential Plots in Goa</Link>
            <button onClick={() => openModal('Download Project Brochure')} className="block w-full text-left text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">📄 Download Brochure</button>
            <button onClick={() => openModal('Request Latest Price List')} className="block w-full text-left text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">💰 Get Price List</button>
            <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">🏛️ MahaRERA: PP1310002502621 ↗</a>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#amenities" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">Amenities & Lifestyle</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#awards" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">Awards & Honours</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#pmay" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">PMAY Information</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/disclaimer" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">Statutory Disclaimer</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/privacy-policy" className="block text-sm font-semibold text-slate-800 hover:text-[#059669] py-1 border-b border-slate-100">Privacy Policy</Link>
            
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => openModal('Book VIP Site Visit')} className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#059669] rounded-md shadow">
                Book Site Visit
              </button>
              <a href="tel:+919211494111" className="w-full py-2.5 text-center text-xs font-bold text-[#065F46] bg-emerald-50 border border-emerald-300 rounded-md">
                📞 Call +91 92114 94111
              </a>
            </div>
          </div>
        )}
      </header>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </>
  );
}
