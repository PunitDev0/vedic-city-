'use client';

import { useState } from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import EnquiryModal from '@/components/EnquiryModal';

export default function ResidentialPlotPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Enquire About Graama Plots');

  const openEnquiry = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const plotFaqs = [
    {
      q: "What is Vedic City?",
      a: "Vedic City is a plotted development project located along NH-66 at Dodamarg, near the North Goa border. It connects directly to the highway and sits about 22 minutes from Manohar International Airport (Mopa)."
    },
    {
      q: "Is the project registered under MahaRERA?",
      a: "Yes. The project is registered under MahaRERA with registration number PP1310002502621. You can verify details directly at maharera.maharashtra.gov.in."
    },
    {
      q: "Who is the property developer of Vedic City and Graama Enclave?",
      a: "The project is developed by Ebrix Home and More (Ebrix Infratech Real Estate LLP), a developer dedicated to clear freehold titles, statutory MahaRERA compliance, and world-class gated infrastructure."
    },
    {
      q: "How far is Vedic City from Mopa Airport?",
      a: "Vedic City is approximately 22 minutes from Manohar International Airport (Mopa) via the NH-66 corridor."
    },
    {
      q: "What are the three parts of Vedic City?",
      a: "The development consists of Praana (140 acres), Soma (77 acres), and Graama (15 acres). Each has its own layout and distinct character."
    },
    {
      q: "What is the minimum plot size in Graama?",
      a: "In Graama, residential plots start from 321.72 sq yards. Graama spreads across 15 acres and offers 86 exclusive plots."
    },
    {
      q: "What is the expected possession timeline for Graama?",
      a: "Expected possession for Graama is December 2028."
    },
    {
      q: "How far are North Goa beaches from the plots?",
      a: "Popular North Goa beaches like Morjim, Mandrem, and Arambol are roughly 25 to 30 minutes away by road."
    },
    {
      q: "How far is Amboli Waterfall?",
      a: "Amboli Waterfall is about 40 minutes from Vedic City, which makes it an easy weekend trip."
    },
    {
      q: "Is the project directly on the highway?",
      a: "Yes. The project is directly on NH-66, so vehicular access is smooth and direct from either direction in every season."
    },
    {
      q: "Are returns guaranteed on plot investments?",
      a: "Many buyers treat land as a long-term asset. However, returns are never guaranteed. Location, legal clarity, developer record, and your holding period all affect the outcome."
    },
    {
      q: "Can NRIs buy residential plots in Vedic City?",
      a: "NRI purchase rules can vary by land type and statutory status. We invite NRIs to consult our advisory desk and a property lawyer to confirm procedures before booking."
    },
    {
      q: "What legal documents should I inspect before booking?",
      a: "Check the MahaRERA registration, title search documents (30 years), layout approvals, and the draft sale agreement. We provide complete transparent legal folders for your legal counsel's review."
    }
  ];

  return (
    <div className="bg-white text-slate-800">
      
      {/* Subpage Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luxury-plots.jpg"
            alt="Residential Plots near North Goa"
            className="w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-emerald-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-[#065F46] text-[#FDE68A] border border-emerald-500/40">
            <span>Vedic City • Graama Enclave by Ebrix Home and More</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif-luxury tracking-tight">
            Graama Residential Plots in <span className="text-gold-gradient">Vedic City</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Welcome to Graama Enclave at Vedic City, developed by Ebrix Home and More. A legally approved plotted development where you can build your luxury holiday home or hold prime land along the thriving North Goa transit corridor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openEnquiry('Request Graama Plot Master Plan')}
              className="px-6 py-2.5 bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-bold rounded-md shadow transition"
            >
              📥 Download Graama Plan
            </button>
            <a
              href="tel:+919211494111"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-md transition"
            >
              📞 +91 92114 94111
            </a>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Plotted Living
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury mt-2">
              The Vision of Vedic City &amp; Graama Enclave
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2 mb-3 rounded-sm"></div>
            <p className="text-sm text-slate-600">
              Vedic City, developed by <strong>Ebrix Home and More</strong>, sits directly on NH-66 at Dodamarg, 22 minutes from Mopa Airport and 40 minutes from Amboli Waterfall. Registered with MahaRERA under number <strong className="text-[#065F46]">PP1310002502621</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-serif">Why Buy a Residential Plot in Goa?</h3>
              <p className="text-xs sm:text-sm text-slate-600">More buyers now see Goa as a place to live, not just visit. Here is why plots appeal to them:</p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">1.</span>
                  <div><strong>You build what you want:</strong> A plot lets you decide how many rooms, what layout, and what materials you prefer.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">2.</span>
                  <div><strong>You own the land, not just four walls:</strong> With a plot, you hold title to the ground underneath.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">3.</span>
                  <div><strong>Better value than ready villas:</strong> Buying a plot and building in phases lets you control costs without stretching your budget.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">4.</span>
                  <div><strong>Stronger privacy:</strong> You have your own boundaries. No shared walls, no upstairs neighbours, no shared corridors.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">5.</span>
                  <div><strong>Dual use:</strong> Many buyers start with holiday home use, then later move in full-time or keep it as a serene legacy retreat.</div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-serif">The Location Advantage: NH-66 at Dodamarg</h3>
              <p className="text-xs sm:text-sm text-slate-600">Location decides almost everything in real estate. Here is exactly where Vedic City stands:</p>
              
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-md border border-slate-200">
                  <span className="text-xs font-bold text-[#065F46] block">0 minutes from NH-66:</span>
                  <p className="text-xs text-slate-600 mt-0.5">The project is directly on the highway, so access stays simple and smooth in every season.</p>
                </div>
                <div className="p-3 bg-white rounded-md border border-slate-200">
                  <span className="text-xs font-bold text-[#065F46] block">5 minutes from Patradevi Checkpost:</span>
                  <p className="text-xs text-slate-600 mt-0.5">This puts you right adjacent to the Goa-Maharashtra interstate border.</p>
                </div>
                <div className="p-3 bg-white rounded-md border border-slate-200">
                  <span className="text-xs font-bold text-[#065F46] block">22 minutes from Mopa Airport:</span>
                  <p className="text-xs text-slate-600 mt-0.5">You can fly in and reach your land within half an hour of landing.</p>
                </div>
                <div className="p-3 bg-white rounded-md border border-slate-200">
                  <span className="text-xs font-bold text-[#065F46] block">40 minutes from Amboli Waterfall:</span>
                  <p className="text-xs text-slate-600 mt-0.5">A scenic hill station and monsoon getaway sits close by for weekend family trips.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Three Enclaves */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Master Plan Sectors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury mt-2">
              Three Parts of Vedic City
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2 mb-3 rounded-sm"></div>
            <p className="text-xs sm:text-sm text-slate-600">
              Vedic City divides into three distinct sections. Each serves a different kind of owner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold text-slate-500 uppercase">140 Acres</span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mt-1">Praana</h3>
              <div className="text-xs font-bold text-[#059669] mb-2">Farm Land &amp; Wellness Retreat</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Praana covers 140 acres. It focuses on open farm land, wellness spaces, and large holdings for buyers who want generous acreage and a natural setting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold text-slate-500 uppercase">77 Acres</span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mt-1">Soma</h3>
              <div className="text-xs font-bold text-[#059669] mb-2">Spiritual &amp; Vedic Living</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Soma covers 77 acres and follows a spiritual, Vedic theme. It is planned for people who value calm, balance, meditation, and a clear harmonious community identity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-[#059669] shadow-md relative">
              <span className="absolute -top-3 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#065F46] text-[#FDE68A]">
                ⭐ MahaRERA Registered
              </span>
              <span className="text-[11px] font-bold text-slate-500 uppercase">15 Acres</span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mt-1">Graama Enclave</h3>
              <div className="text-xs font-bold text-[#065F46] mb-1">Residential Plots by Ebrix Home and More</div>
              <div className="text-[11px] font-semibold text-slate-500 mb-2">Starts 321.72 Sq. Yards • 86 Exclusive Plots</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Graama is the signature residential enclave of Vedic City, developed by <strong>Ebrix Home and More</strong>. It covers 15 acres and offers strictly 86 exclusive Vastu-compliant plots starting from 321.72 sq yards with 12m wide internal roads. Expected possession is December 2028.
              </p>
              <button
                onClick={() => openEnquiry('Book Graama 321.72 Sq Yds Plot')}
                className="mt-4 w-full py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-md shadow transition"
              >
                Enquire for Graama Plots →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Comparison Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-luxury mt-2">
              Plots vs Ready Villas vs Apartments
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-serif">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-[#065F46]">Residential Plot (Graama)</th>
                  <th className="p-4">Ready Luxury Villa</th>
                  <th className="p-4">Standard Apartment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold">Land Ownership</td>
                  <td className="p-4 font-bold text-[#065F46]">100% Freehold Title to the Land</td>
                  <td className="p-4">Land shared / bundled</td>
                  <td className="p-4">Undivided share of land (UDS)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Design Freedom</td>
                  <td className="p-4 font-bold text-[#065F46]">Complete freedom to build custom design</td>
                  <td className="p-4">Fixed developer floor plan</td>
                  <td className="p-4">Rigid layout, no exterior changes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Cost Flexibility</td>
                  <td className="p-4 font-bold text-[#065F46]">Buy land now, construct in phases</td>
                  <td className="p-4">High lump-sum capital requirement</td>
                  <td className="p-4">Fixed EMI and price</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Privacy &amp; Boundary</td>
                  <td className="p-4 font-bold text-[#065F46]">Private fenced boundary, zero shared walls</td>
                  <td className="p-4">Individual plot, close spacing</td>
                  <td className="p-4">Shared walls, corridors &amp; elevators</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Maintenance Cost</td>
                  <td className="p-4 font-bold text-[#065F46]">Low holding costs until construction</td>
                  <td className="p-4">High ongoing villa maintenance</td>
                  <td className="p-4">Compulsory monthly society fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={plotFaqs} title="Residential Plots FAQ" subtitle="Everything you need to know about purchasing residential land in Vedic City near North Goa." />

      {/* Lead Form */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm formTitle="Book Your Graama Plot Site Visit Today" />
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
