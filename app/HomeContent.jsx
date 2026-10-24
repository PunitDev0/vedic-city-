'use client';

import { useState } from 'react';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import EnquiryModal from '@/components/EnquiryModal';
import { homeFaqs } from './homeFaqs';

const glanceRows = [
  ['Project', 'Vedic City Graama (Vedic City Goa)'],
  ['Location', 'NH-66, Dodamarg, Sindhudurg, near the Goa border'],
  ['Land area', '15 acres'],
  ['Total plots', '86 exclusive residential plots'],
  ['Plot size', 'From 321 sq yards'],
  ['Possession', 'Expected December 2028'],
  ['MahaRERA', 'PP1310002502621'],
  ['Airport', 'About 22 minutes from Mopa Airport'],
];

const projects = [
  { name: 'Praana', area: '140 acres', offers: 'Farmland and a wellness retreat', best: 'Buyers who want open land and a nature-led lifestyle' },
  { name: 'Soma', area: '77 acres', offers: 'Plots with a spiritual, Vedic theme', best: 'Buyers who want a calm, meaningful community' },
  { name: 'Graama', area: '15 acres', offers: '86 residential plots from 321 sq yards', best: 'Home builders and investors, possession expected December 2028' },
];

const whyChoose = [
  ['Highway access.', 'The project touches NH-66, so you reach it without long internal roads.'],
  ['Airport connectivity.', 'Mopa Airport is roughly 22 minutes away.'],
  ['Limited supply.', 'Only 86 plots share 15 acres, so each plot gets space and privacy.'],
  ['Regulatory comfort.', 'MahaRERA registration protects your booking and brings transparency.'],
  ['Nature on your doorstep.', 'Amboli Waterfall lies about 40 minutes away, and the Western Ghats shape the landscape.'],
];

const distances = [
  ['0m', 'NH-66', 'The project sits directly on the highway.'],
  ['5m', 'Patradevi checkpost (proposed)', 'About 5 minutes from the project.'],
  ['22m', 'Mopa Airport', 'About 22 minutes by road.'],
  ['40m', 'Amboli Waterfall', 'About 40 minutes away.'],
];

const bookingSteps = [
  ['Enquire.', 'Share your details and ask for the brochure and price list.'],
  ['Visit the site.', 'See the land, the highway access and the surroundings in person.'],
  ['Pick your plot.', 'Choose the size and position that suits your plan.'],
  ['Pay the booking amount.', 'Reserve your plot with the booking amount.'],
  ['Complete the paperwork.', 'Sign the agreement and finish registration with our guidance.'],
];

const investReasons = [
  ['Limited supply.', 'Only 86 plots share 15 acres, so availability stays scarce.'],
  ['Growing corridor.', 'Mopa Airport and the proposed Patradevi checkpost improve access to this belt.'],
  ['Registered project.', 'MahaRERA registration (PP1310002502621) brings transparency to your investment.'],
  ['Low upkeep.', 'A plot needs far less maintenance than a built property.'],
  ['Flexible use.', 'You can plan a home, hold the plot or keep it for a future retreat.'],
  ['Clear timeline.', 'Possession is expected in December 2028, so you can plan your holding period.'],
];

const buyers = [
  'Home builders who want a spacious plot with highway access.',
  'Investors who want plots near Mopa Airport with RERA protection.',
  'Second-home buyers who want a retreat close to Goa and the Western Ghats.',
  'NRIs and out-of-state buyers who prefer a registered, well-documented project.',
];

const comparison = [
  ['Entry cost', 'Usually higher near the coast and Mopa', '₹39,500 per sq yard'],
  ['Plot size', 'Often smaller, scattered plots', '321 sq yards onwards in a 15-acre layout'],
  ['Project registration', 'Goa rules apply', 'Registered with MahaRERA'],
  ['Road access', 'Local and village roads', 'Directly on NH-66'],
  ['Airport', 'Varies by village', 'About 22 minutes to Mopa Airport'],
];

const nearby = [
  ['Pernem (North Goa)', 'the taluka that hosts Mopa Airport.'],
  ['Sawantwadi and Banda', 'nearby Sindhudurg towns for markets, schools and healthcare.'],
  ['Patradevi checkpost (proposed)', 'about 5 minutes from the project.'],
  ['Amboli Waterfall', 'about 40 minutes away, a popular monsoon getaway.'],
  ['NH-66', 'connects the project north along the Konkan coast and south into Goa.'],
];

function SectionHeader({ tag, title, children }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md text-xs font-bold uppercase tracking-widest text-[#065F46] bg-emerald-50 border border-emerald-200 mb-2.5">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">{title}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#059669] to-[#D97706] mx-auto mt-2.5 mb-3 rounded-sm"></div>
      {children && <p className="text-xs sm:text-sm text-slate-600">{children}</p>}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-3 text-sm text-slate-700">
      {items.map(([lead, text]) => (
        <li key={lead} className="flex items-start gap-2">
          <span className="text-[#059669] font-bold">✓</span>
          <div><strong className="text-slate-900">{lead}</strong> {text}</div>
        </li>
      ))}
    </ul>
  );
}

export default function HomeContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Download Brochure & Price List');

  const openEnquiry = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section id="home" className="relative min-h-[calc(100vh-110px)] flex items-center overflow-hidden bg-slate-900 py-10 lg:py-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/goa-hero.jpg"
            alt="Vedic City Goa plots near the Goa border"
            className="w-full h-full object-cover object-center scale-100 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-emerald-950/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl text-white space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2">
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
                📍 Dodamarg, Sindhudurg (Goa Border)
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight font-serif-luxury text-white">
                Vedic City Goa Plots: <span className="text-gold-gradient font-light">Own Your Plot at Graama, Right Near the Goa Border</span>
              </h1>
            </div>

            <p className="text-white text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl font-medium drop-shadow-sm">
              Looking for residential plots near Goa without paying Goa&apos;s premium prices? Vedic City Goa gives you that option. The project sits on NH-66 at Dodamarg, Sindhudurg, just across the Goa border. Graama, its residential plots project, spreads across <strong className="text-[#FDE68A]">15 acres</strong> and offers only <strong className="text-[#FDE68A]">86 plots</strong>, starting from <strong className="text-[#FDE68A]">321 sq yards</strong>. Possession is expected in December 2028, and the project carries MahaRERA registration.
            </p>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-xl pt-0.5">
              <div className="bg-white/10 border border-white/15 rounded-md px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold"><span>🌳</span><span>15 ACRES</span></div>
                <div className="text-white/80 text-[11px] mt-0.5">86 Plots</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-md px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold"><span>✈️</span><span>22 MINS</span></div>
                <div className="text-white/80 text-[11px] mt-0.5">Mopa Airport</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-md px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[#FDE68A] text-xs font-bold"><span>📅</span><span>DEC 2028</span></div>
                <div className="text-white/80 text-[11px] mt-0.5">Possession</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => openEnquiry('Download Vedic City Graama Brochure & Price List')}
                className="w-full sm:w-auto px-9 py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-slate-950 font-black text-base uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 border-2 border-amber-300/60 ring-2 ring-amber-400/30"
              >
                <span>📥</span>
                <span>GET BROCHURE &amp; PRICE</span>
              </button>
              <button
                onClick={() => openEnquiry('Book a Site Visit at Vedic City Goa')}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-md border border-white/25 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>📍</span>
                <span>BOOK A SITE VISIT →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + AT A GLANCE */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            This page answers the questions buyers ask most: where Vedic City Goa Plots is, what Vedic City Graama plots cost, which plot sizes you can choose, and how to book.
          </p>

          <div className="bg-emerald-50 border-l-4 border-[#059669] rounded-md p-5 mb-12 text-sm sm:text-base text-slate-800 leading-relaxed">
            <strong className="text-[#065F46]">Quick answer:</strong> Vedic City Goa is a plotted development on NH-66 at Dodamarg, Sindhudurg, near the Goa border. Its Graama project offers 86 MahaRERA-registered residential plots (<span className="font-mono font-bold">PP1310002502621</span>) across 15 acres, starting from 321 sq yards. Possession is expected in December 2028, and Mopa Airport is about 22 minutes away.
          </div>

          <SectionHeader title="Vedic City Graama at a Glance" />
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-serif">
                <tr><th className="p-4">Detail</th><th className="p-4">Information</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {glanceRows.map(([k, v]) => (
                  <tr key={k}>
                    <td className="p-4 font-bold">{k}</td>
                    <td className={`p-4 ${k === 'MahaRERA' ? 'font-mono font-bold text-[#065F46]' : ''}`}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT IS VEDIC CITY GOA / 3 PROJECTS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <SectionHeader tag="The Master Plan" title="What Is Vedic City Goa?">
            Vedic City is a large planned destination on NH-66 with three projects. Each one serves a different buyer.
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold text-slate-500 uppercase">140 Acres</span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mt-1">Praana</h3>
              <div className="text-xs font-bold text-[#059669] mb-2">Farmland and Wellness Retreat</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Praana spreads across 140 acres and centres on open land and wellness living. Choose Praana if you want space to slow down, grow something or build a peaceful retreat.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold text-slate-500 uppercase">77 Acres</span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mt-1">Soma</h3>
              <div className="text-xs font-bold text-[#059669] mb-2">A Vedic-Themed Plot Project</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Soma covers 77 acres and follows a spiritual, Vedic theme. Choose Soma if you want a plot in a community built around calm and well-being.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-[#059669] shadow-md relative">
              <span className="absolute -top-3 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#065F46] text-[#FDE68A]">⭐ MahaRERA Registered</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase">15 Acres</span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mt-1">Graama</h3>
              <div className="text-xs font-bold text-[#065F46] mb-2">Residential Plots for Homes and Investment</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Graama is a compact, residential project. Its 15 acres hold only 86 plots, so each plot gets room and privacy. Graama is the project for you if you want a plot to build a home, hold as an investment, or keep as a future retreat. The low plot count keeps the layout open, quiet and uncrowded.
              </p>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-14 mb-2 text-center">3 Projects at Vedic City Goa: Praana, Soma and Graama</h3>
          <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto mb-6">
            Vedic City Goa is not a single layout. It brings three projects together on NH-66, so you can pick the one that fits your goal.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-serif">
                <tr><th className="p-4">Project</th><th className="p-4">Area</th><th className="p-4">What it offers</th><th className="p-4">Best for</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {projects.map((p) => (
                  <tr key={p.name}>
                    <td className="p-4 font-bold text-[#065F46]">{p.name}</td>
                    <td className="p-4">{p.area}</td>
                    <td className="p-4">{p.offers}</td>
                    <td className="p-4">{p.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 text-center mt-5">
            This page focuses on Graama, so you will find its price, location, brochure and possession details below. Want details on Praana or Soma? Ask our team, and we will share the current availability and price information.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <SectionHeader title="Why Choose Vedic City Goa Plots?">
            Vedic City Goa gives you what many plot projects near Goa cannot: space, highway access and a registered project in one place. Buyers choose Vedic City Goa plots for five clear reasons:
          </SectionHeader>
          <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
            <CheckList items={whyChoose} />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <SectionHeader tag="Strategic Regional Gateway" title="Vedic City Goa Location: Where Exactly Is It?" />
          <div className="max-w-3xl mx-auto text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 mb-8 text-center">
            <p>
              The Vedic City Goa location is Dodamarg, Sindhudurg district, on NH-66, near the Goa border. Dodamarg is in Maharashtra, but the project sits right at the edge of North Goa. That position is exactly why many buyers search for plots near the Goa border.
            </p>
            <p>Here is how far everything is:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {distances.map(([badge, name, text]) => (
              <div key={name} className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#059669] font-bold flex items-center justify-center text-xs mb-3">{badge}</div>
                <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                <p className="text-xs text-slate-600 mt-1">{text}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-700 leading-relaxed text-center mt-8">
            The Vedic City Graama location also puts you close to the Goa-Maharashtra corridor. As connectivity improves around Mopa Airport and the Patradevi checkpost, demand for plots near the Goa border keeps growing.
          </p>
        </div>
      </section>

      {/* SIZE, PRICE, POSSESSION */}
      <section id="price" className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <SectionHeader title="Vedic City Graama Plots: Size, Price and Possession" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">Plot size</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Vedic City Graama plot sizes start from 321 sq yards. That is generous enough for a spacious independent home, a weekend villa or a small holiday property.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">Price</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                The Vedic City Goa price depends on plot size and position inside the layout. Corner plots and larger plots cost more. Request the current price sheet and we will share the exact numbers for the plots still available.
              </p>
              <button
                onClick={() => openEnquiry('Request the Vedic City Graama Price Sheet')}
                className="mt-4 px-4 py-2 bg-[#065F46] hover:bg-[#047857] text-white text-xs font-bold rounded-md shadow cursor-pointer"
              >
                Request Price Sheet →
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">Possession date</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                We expect to hand over possession in December 2028. Early buyers get the widest choice of plots and can plan their construction timeline well in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RERA + BROCHURE */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif mb-3">Is Vedic City Goa MahaRERA Registered?</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Yes. The project carries MahaRERA registration number <strong className="font-mono text-[#065F46]">PP1310002502621</strong>. You can verify it on the official MahaRERA website before you book. We encourage every buyer to do this check, and to read the agreement carefully before paying any amount.
            </p>
            <a
              href="https://maharera.maharashtra.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-bold text-[#059669] hover:underline"
            >
              Verify on MahaRERA ↗
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif mb-3">Download the Vedic City Graama Brochure</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              The brochure covers the master plan, the three projects, plot sizes, location map and key project details. Fill in the enquiry form, and our team will send you the Vedic City Graama brochure along with the latest price list.
            </p>
            <button
              onClick={() => openEnquiry('Download Vedic City Graama Brochure')}
              className="mt-4 px-5 py-2.5 bg-[#065F46] hover:bg-[#047857] text-white text-xs font-bold rounded-md shadow cursor-pointer"
            >
              Download Brochure →
            </button>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <SectionHeader title="How to Book a Plot at Vedic City Goa">Booking takes five simple steps:</SectionHeader>
          <ol className="space-y-4">
            {bookingSteps.map(([lead, text], i) => (
              <li key={lead} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <span className="w-8 h-8 rounded-full bg-[#065F46] text-[#FDE68A] font-bold flex items-center justify-center text-sm shrink-0">{i + 1}</span>
                <div className="text-sm text-slate-700"><strong className="text-slate-900">{lead}</strong> {text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <SectionHeader title="Why Invest in Vedic City Goa Plots?">
            Vedic City Goa plots give you a simple, tangible asset in a corridor that is gaining attention. Here is why investors choose Graama:
          </SectionHeader>
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <CheckList items={investReasons} />
          </div>
          <div className="mt-8 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900 font-serif">Why do investors look at residential plots near the Goa border? Three reasons stand out.</h3>
            <p>
              First, land inside Goa is expensive and limited. Border locations give you a comparable lifestyle and travel access at a more approachable entry point. Second, new infrastructure such as Mopa Airport and the planned Patradevi checkpost improves access to this belt. Third, a plot needs less maintenance than a built property, so you can hold it patiently while the area develops.
            </p>
            <p>
              As with any real estate investment, returns are never guaranteed. Visit the site, verify the paperwork and decide based on your own goals.
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD BUY + COMPARISON */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <SectionHeader title="Who Should Buy Vedic City Graama Plots?" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {buyers.map((b) => (
              <li key={b} className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
                <span className="text-[#059669] font-bold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-luxury text-center mb-2">Vedic City Goa vs Plots Inside Goa: What Changes?</h2>
          <p className="text-sm text-slate-600 text-center mb-6">
            Buyers often ask whether a plot near the Goa border makes sense compared with land inside Goa. Here is a fair side-by-side.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-800 border-b border-slate-200 font-serif">
                <tr>
                  <th className="p-4">Factor</th>
                  <th className="p-4">Plots inside Goa</th>
                  <th className="p-4 text-[#065F46]">Vedic City Graama (Dodamarg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {comparison.map(([factor, inside, graama]) => (
                  <tr key={factor}>
                    <td className="p-4 font-bold">{factor}</td>
                    <td className="p-4">{inside}</td>
                    <td className="p-4 font-bold text-[#065F46]">{graama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-4">
            Dodamarg sits in Maharashtra, so Maharashtra land and registration rules apply, not Goa&apos;s. Review the documents with your legal advisor before you book.
          </p>
        </div>
      </section>

      {/* NEARBY */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <SectionHeader title="Nearby Places and Everyday Connectivity">
            Graama sits where the Konkan coast meets North Goa, so daily needs and weekend plans are within easy reach:
          </SectionHeader>
          <ul className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3 text-sm text-slate-700">
            {nearby.map(([place, text]) => (
              <li key={place} className="flex items-start gap-2">
                <span className="text-[#059669] font-bold">📍</span>
                <div><strong className="text-slate-900">{place}:</strong> {text}</div>
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 text-center mt-4">Ask our team for exact drive times from the site to each of these places.</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Straight answers on Vedic City Goa location, price, plot size, possession, MahaRERA and booking."
      />

      {/* FINAL CTA + LEAD FORM */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" id="contact-form">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">Book a Site Visit at Vedic City Goa Today</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Only 86 plots exist at Graama, and each one is available once. Fill in the form to get the Vedic City Graama brochure, the latest price list and a site visit slot. Our team will answer every question in plain, simple language.
            </p>
            <p className="text-sm font-bold text-[#065F46] mt-3">Call, WhatsApp or enquire now to reserve your Vedic City Goa plot.</p>
          </div>
          <LeadForm formTitle="Get the Vedic City Graama Brochure & Price List" />
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
