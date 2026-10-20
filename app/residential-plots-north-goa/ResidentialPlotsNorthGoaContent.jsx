"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Plane,
  Trees,
  CheckCircle2,
  Calendar,
  Compass,
  FileCheck,
  Building2,
  Phone,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  AlertCircle,
  Layers,
  ChevronDown,
  Navigation,
  Send,
  PhoneCall,
  Check,
  Scale,
  Award,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import RegistrationModal from "@/components/RegistrationModal";
import EnquiryModal from "@/components/EnquiryModal";
import SiteVisitModal from "@/components/SiteVisitModal";
import BrochureModal from "@/components/BrochureModal";

export default function ResidentialPlotsNorthGoaContent() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [modalContext, setModalContext] = useState({});

  // Direct Site Visit Form state
  const [siteVisitForm, setSiteVisitForm] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    interestLocation: "Mopa Airport Corridor / Dodamarg",
    message: "I would like to book a site visit for residential plots in North Goa.",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // FAQ open/close accordion state
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenRegister = (data = {}) => {
    setModalContext(data);
    setIsRegisterOpen(true);
  };

  const handleOpenEnquire = (data = {}) => {
    setModalContext(data);
    setIsEnquireOpen(true);
  };

  const handleOpenSiteVisit = () => {
    setIsSiteVisitOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=919211494111&text=Hello%2C+I+am+interested+in+Residential+Plots+in+North+Goa.+Please+share+details.&type=phone_number&app_absent=0";

  const popularLocations = [
    {
      title: "Plots for Sale in Pernem, Goa",
      tag: "Airport Vicinity",
      desc: "Pernem is the closest taluka to Mopa Airport, so plots for sale in Pernem Goa attract both end-users and long-term investors. The area offers larger, more open plots and a quieter pace, with the benefit of proximity to the airport and the coastal belt.",
      highlight: "Direct connectivity to Mopa corridor & NH-66",
      image: "/images/plots-pernem-goa.png",
    },
    {
      title: "Residential Land in Mandrem, North Goa",
      tag: "Tranquil Coastal Living",
      desc: "Mandrem is known for its calm beach, boutique stays and relaxed village feel. Residential land in Mandrem, North Goa suits buyers who want a peaceful second home close to the coast. Availability is limited, so well-located plots tend to draw interest quickly.",
      highlight: "Quiet beach atmosphere & serene green surroundings",
      image: "/images/mandrem-plots-goa.png",
    },
    {
      title: "Plots in Morjim Near Beach",
      tag: "Holiday Villa Belt",
      desc: "Morjim combines a quieter beach atmosphere with good road access. Buyers looking at plots in Morjim near the beach often plan holiday villas or boutique homes. Always verify coastal regulation rules, since distance from the high tide line affects what can be built.",
      highlight: "Prime tourism appeal & coastal lifestyle",
      image: "/images/morjim-plots-goa.jpg",
    },
    {
      title: "Siolim Plots for Sale",
      tag: "Riverside Heritage",
      desc: "Siolim is a heritage village on the Chapora river with a strong local community, good schools and easy access to Mapusa and the coast. Siolim plots for sale appeal to families wanting a settled, green neighbourhood.",
      highlight: "Established social infrastructure & riverside cafes",
      image: "/images/siolim-plots-goa.jpg",
    },
    {
      title: "Assagao Residential Land for Sale",
      tag: "Premium Address",
      desc: "Assagao is one of North Goa’s best-known residential addresses, famous for its leafy lanes and premium villas. Assagao residential land for sale is typically priced at a premium, reflecting its reputation and limited supply.",
      highlight: "High-value luxury villa communities & designer dining",
      image: "/images/assagao-plots-goa.jpg",
    },
    {
      title: "Plots for Sale Near Thivim Railway Station",
      tag: "Transit Hub",
      desc: "For buyers who value rail connectivity, plots for sale near Thivim railway station offer a practical option, with access to the Konkan railway line and the highway. This suits those who travel frequently or want a base with strong transport links.",
      highlight: "Strategic Konkan railway & expressway access",
      image: "/images/thivim-plots-goa.jpg",
    },
  ];

  const legalAspects = [
    {
      title: "RERA Approved Plots in North Goa",
      badge: "MahaRERA: PP1310002502621",
      desc: "Projects that fall under the Real Estate (Regulation and Development) Act must be registered with the state authority. RERA approved plots in North Goa give you access to registered project details, declared timelines and a formal channel for complaints. Always ask for the RERA registration number and verify it on the official Goa RERA portal.",
    },
    {
      title: "Sanad Plots for Sale in Goa",
      badge: "Non-Agricultural Permission",
      desc: "A sanad is the official permission that allows land to be used for non-agricultural, residential construction. Sanad plots for sale in Goa reduce the risk of conversion delays, since the land use approval is already in place. Ask to see the sanad document and confirm that the survey number matches the plot you are buying.",
    },
    {
      title: "NA Plots in Goa for Sale",
      badge: "Zoning Legality",
      desc: "NA (non-agricultural) plots in Goa are land parcels converted for residential or other non-farming use. Confirm the conversion status, as buying agricultural land with the hope of converting it later can lead to delays and uncertainty.",
    },
    {
      title: "Freehold Plots in Goa",
      badge: "100% Clear Ownership",
      desc: "Freehold plots in Goa give you full ownership of the land, which makes them straightforward for resale, financing and inheritance. Verify the ownership chain through the title documents.",
    },
    {
      title: "Residential Land for Sale in Goa With Settlement Zone Status",
      badge: "Settlement Zone (Safe)",
      desc: "Under Goa’s planning rules, the zone in which land falls decides what you can build. Residential land for sale in Goa with settlement zone status is generally the safest choice for building a home, as it is earmarked for habitation. Check the zoning details in the regional plan and the latest records before paying any advance.",
    },
    {
      title: "Gated Community Plots in North Goa",
      badge: "Infrastructure Ready",
      desc: "Gated community plots in North Goa come with planned layouts, internal roads, drainage, water and electricity provisions, and often security and landscaping. For buyers who want a ready residential environment without negotiating each service separately, this is often the more convenient route.",
    },
  ];

  const plotTypes = [
    {
      type: "Small plots for sale in North Goa",
      desc: "Suit buyers building a compact home or a first holiday property. They are easier to manage and more accessible in terms of budget.",
      benefit: "Lower entry investment & easier maintenance",
    },
    {
      type: "Corner plots for sale in Goa",
      desc: "Offer two road-facing sides, which means better light, ventilation and design flexibility. They are often preferred for villas and may carry a slight premium.",
      benefit: "Dual road frontage & superior architectural freedom",
    },
    {
      type: "Premium residential plots in Goa",
      desc: "Usually located in well-known villages, with strong surroundings, good access and clear approvals. They suit buyers who prioritise location and long-term desirability.",
      benefit: "High lifestyle quotient & long-term appreciation",
    },
    {
      type: "Pre-launch plots in Goa",
      desc: "Sometimes offered at introductory pricing before a project formally opens. They can offer value, but they carry more uncertainty, so insist on seeing registrations, approvals and a clear agreement before you commit.",
      benefit: "Attractive initial pricing with validated RERA records",
    },
    {
      type: "Land for sale in North Goa near beach areas",
      desc: "Typically cost more and come with coastal regulation checks. If beach proximity matters, confirm the permitted construction limits early.",
      benefit: "High rental yields & coastal lifestyle",
    },
  ];

  const stepsToBuy = [
    {
      num: "01",
      title: "Define your goal",
      desc: "Decide whether your plot is for a primary family home, a holiday villa, or long-term land investment.",
    },
    {
      num: "02",
      title: "Set your budget",
      desc: "Include the basic purchase price, stamp duty, registration, legal vetting fees, and future construction costs.",
    },
    {
      num: "03",
      title: "Shortlist locations",
      desc: "Compare areas like Pernem, Morjim, Siolim, Dodamarg, and Assagao based on lifestyle, travel times, and road connectivity.",
    },
    {
      num: "04",
      title: "Verify documents",
      desc: "Review title deed, survey records, Sanad/NA conversion certificate, settlement zoning, and MahaRERA registration.",
    },
    {
      num: "05",
      title: "Visit the site",
      desc: "Inspect boundaries, approach road conditions, highway access, neighbourhood, and basic utility lines in person.",
    },
    {
      num: "06",
      title: "Get legal verification",
      desc: "Have an independent property lawyer verify thirty-year title chain records before handing over any advance.",
    },
    {
      num: "07",
      title: "Sign agreement & register",
      desc: "Execute formal agreements and complete official deed registration through proper government sub-registrar channels.",
    },
  ];

  const allFaqs = [
    {
      q: "Where is Vedic City located relative to North Goa?",
      a: "Vedic City is located directly on NH-66 at Dodamarg, Sindhudurg, Maharashtra, right on the Goa border. Manohar International Airport (Mopa) is about 20 to 22 minutes away and popular North Goa beaches (Morjim, Mandrem, Arambol) are roughly 25 to 30 minutes away.",
    },
    {
      q: "Is Vedic City registered under RERA?",
      a: "Yes. The project is registered with MahaRERA under number PP1310002502621. You can independently verify all layout approvals and project timelines on maharera.maharashtra.gov.in.",
    },
    {
      q: "How far are the plots from Mopa Airport?",
      a: "Approximately 20 to 22 minutes by road via the smooth NH-66 national highway corridor.",
    },
    {
      q: "What documents should I check before buying a plot near the Goa border?",
      a: "Check the MahaRERA registration certificate, 30-year title documents, Sanad (NA order), zoning classification (settlement zone), layout approvals, and the draft sale agreement. Always have an independent property lawyer review everything before paying a deposit.",
    },
    {
      q: "Are residential plots in North Goa a good investment?",
      a: "They can be, provided the plot has a clear title, proper settlement zoning, and strong highway infrastructure. Locations near the Mopa airport corridor and established North Goa villages draw steady interest. However, real estate returns depend on market timing, location, and holding duration, so we always recommend buying with a long-term perspective.",
    },
    {
      q: "What are the rules for buying a plot in Goa? (Goa me plot kharidne ke niyam)",
      a: "Buyers must verify title ownership, survey numbers (Form I & XIV), non-agricultural Sanad status, and regional plan zoning. Restrictions apply to agricultural, forest, and CRZ (Coastal Regulation Zone) lands. Ensure the plot has settlement zoning or approved NA status before entering into an agreement.",
    },
    {
      q: "Can I find affordable land near Mopa Airport? (Mopa airport ke paas sasti zameen)",
      a: "Prices vary by exact location, plot size, road width, and approvals. Plotted developments located along the NH-66 corridor near Pernem and Dodamarg offer competitive pricing compared to coastal tourist hotspots like Assagao. Be cautious of rates that look far below market averages, as they often signal title disputes or agricultural zoning issues.",
    },
    {
      q: "What is the difference between a sanad plot and an NA plot?",
      a: "Both relate to land converted for non-agricultural use. An NA plot has been cleared for non-farming purposes, while a 'Sanad' is the formal government grant certificate detailing the approved conditions and survey boundaries for residential construction. Always request to see the official Sanad document.",
    },
    {
      q: "Are RERA approved plots in North Goa safer?",
      a: "Yes. RERA registration ensures regulatory transparency, verified layout boundaries, declared completion dates, and a formal grievance portal. However, independent title verification and on-site visits remain strongly recommended.",
    },
    {
      q: "Can I build a villa on any plot in Goa? (Goa me villa ke liye plot kaise kharide)",
      a: "No, you cannot build on just any plot. You must choose land situated within a designated settlement zone (or converted with residential Sanad), adhere to FAR/coverage rules, and secure panchayat or municipal planning permissions before commencing construction.",
    },
    {
      q: "Can NRIs buy a residential plot here?",
      a: "NRIs and OCIs can purchase residential and commercial real estate in India under general FEMA regulations, but restrictions apply to agricultural or plantation land. Consult a property lawyer and confirm individual eligibility before booking.",
    },
  ];

  return (
    <>
      <Header
        onOpenRegister={() => handleOpenRegister()}
        onOpenEnquire={() => handleOpenEnquire()}
        onOpenBrochure={handleOpenBrochure}
      />

      <main className="bg-slate-50 text-slate-800">
        
        {/* ========================================================
            HERO SECTION
           ======================================================== */}
        <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-slate-950 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/luxury-plots.jpg"
              alt="Residential Plots in North Goa - Vedic City"
              fill
              priority
              className="object-cover object-center brightness-[0.75]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/75 to-emerald-950/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-4">
            
            {/* Breadcrumb & RERA Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/"
                className="text-xs text-emerald-200/90 hover:text-white underline underline-offset-2 flex items-center gap-1 font-medium"
              >
                Home
              </Link>
              <span className="text-white/40 text-xs">/</span>
              <Link
                href="/residential-plot-in-goa"
                className="text-xs text-emerald-200/90 hover:text-white underline underline-offset-2 font-medium"
              >
                Residential Plot in Goa
              </Link>
              <span className="text-white/40 text-xs">/</span>
              <span className="text-xs text-amber-300 font-semibold">Residential Plots in North Goa</span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <a
                href="https://www.maharera.maharashtra.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#065F46] text-[#FDE68A] border border-emerald-400/40 hover:bg-[#047857] transition"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                MahaRERA: PP1310002502621 ↗
              </a>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight leading-tight text-white drop-shadow-md">
              Residential Plots in North Goa
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-emerald-50/95 leading-relaxed max-w-3xl drop-shadow-sm font-medium">
              Looking for residential plots in North Goa that combine a strong location, clear legal standing and long-term value? North Goa has always been the state’s most sought-after address, but the opening of Manohar International Airport at Mopa has added a new reason to look closely at this region. Whether you want to build a family home, a holiday villa or hold land for the future, the right plot makes all the difference.
            </p>

            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-3xl font-normal">
              At <strong className="text-white">Vedic City</strong>, we help buyers find verified residential plots in North Goa with clear titles, approved layouts and transparent pricing. This guide explains key locations, legal checks that matter, and how to choose a plot that suits your goals.
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg p-2.5">
                <div className="text-[11px] font-medium text-emerald-200">Mopa Airport Access</div>
                <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Plane className="w-3.5 h-3.5 text-[#FDE68A]" /> 20–22 Mins
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg p-2.5">
                <div className="text-[11px] font-medium text-emerald-200">Legal Status</div>
                <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FDE68A]" /> RERA Approved
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg p-2.5">
                <div className="text-[11px] font-medium text-emerald-200">North Goa Beaches</div>
                <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Trees className="w-3.5 h-3.5 text-[#FDE68A]" /> 25–30 Mins
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg p-2.5">
                <div className="text-[11px] font-medium text-emerald-200">Plot Community</div>
                <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FDE68A]" /> 86 Plots • 15 Ac
                </div>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => handleOpenRegister()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950 text-slate-950" />
                Book Site Visit Today
              </button>
              <button
                onClick={() => handleOpenEnquire()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm tracking-wide backdrop-blur-sm transition cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#FDE68A]" />
                Enquire Pricing
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-700/80 hover:bg-emerald-700 border border-emerald-400/40 text-white font-bold text-sm tracking-wide backdrop-blur-sm transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                WhatsApp
              </a>
              <a
                href="tel:+919211494111"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-black/30 hover:bg-black/50 border border-white/15 text-white font-semibold text-sm tracking-wide transition"
              >
                <Phone className="w-4 h-4 text-[#FDE68A]" />
                +91 92114 94111
              </a>
            </div>

          </div>
        </section>


        {/* ========================================================
            MAIN EDITORIAL CONTENT CONTAINER
           ======================================================== */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* ----------------------------------------------------
              SECTION 1: Why Buy Residential Plots in North Goa?
             ---------------------------------------------------- */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Lifestyle &amp; Investment Appeal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                Why Buy Residential Plots in North Goa?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                North Goa offers a rare mix of lifestyle and investment appeal. Beaches, cafés, heritage villages, schools, hospitals and highway connectivity sit within easy reach of each other, which is why demand for residential land here has stayed steady across market cycles.
              </p>
              <p className="text-slate-600 text-sm mt-1">
                Here is what draws buyers to residential plots in North Goa:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-[#059669] transition space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                    <Trees className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Established lifestyle belt</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                  Areas like Assagao, Siolim, Morjim and Mandrem are known for quiet, green surroundings with good social infrastructure.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-[#059669] transition space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                    <Plane className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Improving connectivity</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                  The Mopa airport corridor and better road links are reshaping how people travel to and across the region.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-[#059669] transition space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Flexibility to build</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                  Unlike a ready flat, a plot lets you design your own villa, choose your layout and build in phases.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-[#059669] transition space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Holiday and rental potential</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                  Many owners build homes that serve as personal retreats and, where permitted, as holiday rentals.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong>Prudent Advice:</strong> As with any property, returns depend on location, approvals and timing, so we always recommend choosing a plot for how you will use it, not only for how the market might move.
              </div>
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 2: Residential Plots Near Mopa Airport Goa
             ---------------------------------------------------- */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Strategic Infrastructure Growth
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                Residential Plots Near Mopa Airport Goa
              </h2>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              The airport at Mopa, in Pernem taluka, has drawn serious attention from buyers and investors. Residential plots near Mopa Airport Goa appeal to two kinds of buyers: those who want a home with convenient air access, and those looking at land investment near Mopa Airport as the surrounding area develops.
            </p>

            <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <Image
                src="/images/manohar-international-airport-goa.jpg"
                alt="Manohar International Airport at Mopa Goa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-5 text-white">
                <div>
                  <span className="bg-[#059669] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Infrastructure Driver
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-serif text-white mt-1">
                    Manohar International Airport (Mopa) Corridor
                  </h4>
                  <p className="text-xs text-emerald-100/90">
                    20–22 minutes direct highway commute to Vedic City plots
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base mb-3">
                Buyers searching for plots near Manohar International Airport Goa should look at:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Compass className="w-4 h-4 text-[#059669]" />
                    <span>Distance and access</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Check the actual drive time to the airport and the condition of the approach road, not just the map distance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Navigation className="w-4 h-4 text-[#059669]" />
                    <span>Expressway and highway links</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Plots close to the Mopa link roads and the national highway are easier to reach, but also confirm noise and traffic conditions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Building2 className="w-4 h-4 text-[#059669]" />
                    <span>Surrounding development</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Look at what is already built nearby, such as villages, schools, clinics and shops, rather than relying only on future plans.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <FileCheck className="w-4 h-4 text-[#059669]" />
                    <span>Zone status</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Confirm the plot sits in a settlement zone or another zone that permits residential construction.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-[#065F46] text-xs sm:text-sm font-medium flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                <span>
                  <strong>Site Visit Insight:</strong> If you are comparing options, ask for a site visit. Seeing the road, the neighbourhood and the plot boundaries in person tells you more than any brochure.
                </span>
              </div>
              <button
                onClick={() => handleOpenSiteVisit()}
                className="px-4 py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase rounded-lg shadow-xs transition cursor-pointer"
              >
                Schedule Free Site Visit
              </button>
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 3: Popular Locations for Residential Plots
             ---------------------------------------------------- */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Micro-Market Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                Popular Locations for Residential Plots in North Goa
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Each micro-market in North Goa has its own character. Here is a quick guide to the areas buyers ask about most:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {popularLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#059669] hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 w-full">
                      <Image
                        src={loc.image}
                        alt={loc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-[#FDE68A] text-[10px] font-bold px-2 py-0.5 rounded">
                        {loc.tag}
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold font-serif text-slate-900 text-base">
                        {loc.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {loc.desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="p-2 rounded bg-slate-50 border border-slate-100 text-[11px] text-emerald-800 font-medium">
                      ✓ {loc.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 4: RERA Approved, Gated and Sanad Plots
             ---------------------------------------------------- */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Legal Due Diligence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                RERA Approved, Gated and Sanad Plots: Why Legal Clarity Comes First
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                A plot is only as good as its paperwork. Before you buy residential plots in North Goa, understand the key legal terms you will come across:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {legalAspects.map((aspect, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#059669] transition space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-[#059669] shrink-0" />
                      {aspect.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {aspect.badge}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {aspect.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between flex-wrap gap-4">
              <div className="space-y-0.5">
                <span className="text-xs text-[#FDE68A] font-bold uppercase tracking-wider">
                  Official Verification Notice
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Vedic City MahaRERA Registration: <strong className="text-white font-mono">PP1310002502621</strong>. Verify title and documents with our specialist team.
                </p>
              </div>
              <button
                onClick={() => handleOpenBrochure()}
                className="px-4 py-2 rounded-lg bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase transition cursor-pointer"
              >
                Download Legal Brochure
              </button>
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 5: Choosing the Right Plot: Size, Type, Budget
             ---------------------------------------------------- */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Portfolio Options
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                Choosing the Right Plot: Size, Type and Budget
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                North Goa offers plots across a wide range of sizes and budgets. Here is how to think about your choice:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {plotTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#059669] transition"
                >
                  <div className="space-y-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#059669] font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">
                      {item.type}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-3">
                    <span className="text-[11px] font-semibold text-[#059669] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> {item.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 6: Best Residential Plots in Goa for Investment
             ---------------------------------------------------- */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Capital Appreciation Drivers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                Best Residential Plots in Goa for Investment
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-2">
                Many buyers ask which are the best residential plots in Goa for investment. There is no single answer, but strong investment plots usually share these traits:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-lg bg-emerald-100 text-[#059669] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Clear title and approvals</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    RERA registration where applicable, sanad or conversion in place, and a clean ownership history.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-lg bg-emerald-100 text-[#059669] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Residential zoning</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Settlement zone status or equivalent, so you can build without regulatory surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-lg bg-emerald-100 text-[#059669] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Access and infrastructure</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Good road access, water, power and proximity to daily needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-lg bg-emerald-100 text-[#059669] shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Growth drivers nearby</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Locations near the Mopa airport corridor, established villages or improving highway links.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                <div className="p-2 rounded-lg bg-emerald-100 text-[#059669] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Realistic pricing</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Compare the rate with similar plots in the same micro-market before deciding.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Guaranteed Returns Caution:</strong> Treat any promise of guaranteed returns with caution. Real estate values can rise and fall, and a well-chosen plot is one you would be comfortable owning for the long term.
              </div>
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 7: How to Buy a Residential Plot in Goa
             ---------------------------------------------------- */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Step-by-Step Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                How to Buy a Residential Plot in Goa: Step by Step
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                If you plan to buy a residential plot in Goa, follow a clear, methodical process:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stepsToBuy.map((step, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2 hover:border-[#059669] transition"
                >
                  <span className="text-2xl font-black font-serif text-[#059669]/30 block">
                    {step.num}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 8: Frequently Asked Questions (Accordion)
             ---------------------------------------------------- */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                Expert Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Clear answers regarding plot rules, RERA registration, Mopa airport land, and construction guidelines.
              </p>
            </div>

            <div className="space-y-3">
              {allFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 text-left bg-slate-50/70 hover:bg-slate-50 transition flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#059669]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white border-t border-slate-100 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>


          {/* ----------------------------------------------------
              SECTION 9: Book a Site Visit & Direct Enquiry Form
             ---------------------------------------------------- */}
          <section
            id="book-visit"
            className="rounded-2xl bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#047857] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Information */}
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#FDE68A] text-xs font-bold uppercase tracking-wider border border-white/15">
                  Personal Guided Tour
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
                  Book a Site Visit
                </h2>
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  Choosing among residential plots in Goa is easier when you see them in person. Our team can show you verified, clear-title options across Pernem, Morjim, Siolim, Assagao and the Mopa airport corridor, and walk you through the documents so you can decide with confidence.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#FDE68A] font-bold text-sm">
                    <Phone className="w-4 h-4" />
                    <span>Direct Hotline:</span>
                  </div>
                  <a
                    href="tel:+919211494111"
                    className="text-xl sm:text-2xl font-black text-white hover:text-[#FDE68A] transition block font-mono"
                  >
                    +91 92114 94111
                  </a>
                  <p className="text-[11px] text-emerald-200/80">
                    Call or fill in the enquiry form to book your free site visit today.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wide transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    WhatsApp Enquiry
                  </a>
                  <button
                    onClick={() => handleOpenBrochure()}
                    className="inline-flex items-center gap-1.5 text-xs text-[#FDE68A] hover:underline font-medium cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Download Layout PDF
                  </button>
                </div>
              </div>

              {/* Right: Embedded Form */}
              <div className="lg:col-span-6 bg-white text-slate-900 rounded-xl p-6 sm:p-7 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#059669] mx-auto" />
                    <h3 className="text-xl font-bold font-serif text-slate-900">
                      Site Visit Requested!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong>{siteVisitForm.name}</strong>. Our senior property advisor will contact you at <strong>+91 {siteVisitForm.phone}</strong> to confirm your schedule and provide directions.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-5 py-2 bg-[#059669] text-white text-xs font-bold rounded-lg"
                    >
                      Book Another Visit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">
                      Book Your Free Site Visit
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={siteVisitForm.name}
                        onChange={(e) =>
                          setSiteVisitForm({ ...siteVisitForm, name: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Mobile Number *
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-2.5 text-xs font-bold bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-600">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="10-digit mobile"
                            value={siteVisitForm.phone}
                            onChange={(e) =>
                              setSiteVisitForm({ ...siteVisitForm, phone: e.target.value })
                            }
                            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#059669]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Preferred Visit Date
                        </label>
                        <input
                          type="date"
                          value={siteVisitForm.preferredDate}
                          onChange={(e) =>
                            setSiteVisitForm({
                              ...siteVisitForm,
                              preferredDate: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]"
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
                        value={siteVisitForm.email}
                        onChange={(e) =>
                          setSiteVisitForm({ ...siteVisitForm, email: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Specific Location / Requirement
                      </label>
                      <textarea
                        rows={2}
                        value={siteVisitForm.message}
                        onChange={(e) =>
                          setSiteVisitForm({ ...siteVisitForm, message: e.target.value })
                        }
                        className="w-full px-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-3 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065F46] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {formLoading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#FDE68A]" />
                          <span>Confirm Free Site Visit Booking</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-500 text-center">
                      🔒 Zero spam. We only contact you to arrange transport &amp; verified plot viewing.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </section>

        </div>
      </main>

      <Footer
        onOpenRegister={() => handleOpenRegister()}
        onOpenEnquire={() => handleOpenEnquire()}
        onOpenBrochure={handleOpenBrochure}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenRegister={() => handleOpenRegister()}
      />

      {/* Interactive Modals */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialData={modalContext}
      />

      <EnquiryModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        contextData={modalContext}
      />

      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </>
  );
}
