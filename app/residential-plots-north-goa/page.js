import ResidentialPlotsNorthGoaContent from "./ResidentialPlotsNorthGoaContent";

export const metadata = {
  title: "Residential Plots in North Goa | RERA Approved Plots",
  description:
    "Explore RERA approved residential plots in North Goa near Mopa Airport, Pernem and Morjim. Clear titles, gated layouts. Book a site visit today.",
  openGraph: {
    title: "Residential Plots in North Goa | RERA Approved Plots",
    description:
      "Explore RERA approved residential plots in North Goa near Mopa Airport, Pernem and Morjim. Clear titles, gated layouts. Book a site visit today.",
    url: "https://vediccitygraama.deedivinegroups.com/residential-plots-north-goa",
    siteName: "Vedic City Goa",
    images: [
      {
        url: "/images/luxury-plots.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Plots in North Goa - Vedic City",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Plots in North Goa | RERA Approved Plots",
    description:
      "Explore RERA approved residential plots in North Goa near Mopa Airport, Pernem and Morjim. Clear titles, gated layouts. Book a site visit today.",
    images: ["/images/luxury-plots.jpg"],
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Vedic City located relative to North Goa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vedic City is on NH-66 at Dodamarg, Sindhudurg, Maharashtra, near the Goa border. Mopa Airport is about 22 minutes away and North Goa beaches are roughly 25 to 30 minutes away."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vedic City registered under RERA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The project is registered with MahaRERA under number PP1310002502621. Verify the details on maharera.maharashtra.gov.in."
      }
    },
    {
      "@type": "Question",
      "name": "How far are the plots from Mopa Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Approximately 20 to 22 minutes by road via the NH-66 corridor."
      }
    },
    {
      "@type": "Question",
      "name": "What documents should I check before buying a plot near the Goa border?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check the MahaRERA registration, title documents, layout approvals and the sale agreement, and have an independent property lawyer review everything before paying a deposit."
      }
    },
    {
      "@type": "Question",
      "name": "Are residential plots near North Goa a good investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many buyers hold land as a long-term asset, but returns are never guaranteed. Location, legal clarity, developer record and holding period all affect the outcome."
      }
    },
    {
      "@type": "Question",
      "name": "Can NRIs buy a residential plot here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NRI purchase rules vary by land type and location. Consult a property lawyer and confirm the rules before booking."
      }
    }
  ]
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vediccitygraama.deedivinegroups.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Residential Plot in Goa",
      "item": "https://vediccitygraama.deedivinegroups.com/residential-plot-in-goa"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Residential Plots in North Goa",
      "item": "https://vediccitygraama.deedivinegroups.com/residential-plots-north-goa"
    }
  ]
};

const jsonLdAgent = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Vedic City",
  "url": "https://vediccitygraama.deedivinegroups.com/",
  "telephone": "+91-9211494111",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH-66, Near Pathrodevi Border Checkpoint",
    "addressLocality": "Dodamarg",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": ["Dodamarg", "Sindhudurg", "North Goa"]
};

export default function ResidentialPlotsNorthGoaPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }}
      />

      <ResidentialPlotsNorthGoaContent />
    </>
  );
}
