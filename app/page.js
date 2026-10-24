import HomeContent from "./HomeContent";
import { homeFaqs } from "./homeFaqs";

const title = "Vedic City Goa Plots | Graama, Dodamarg Near Goa Border";
const description =
  "Explore Vedic City Goa plots at Graama, Dodamarg. 86 MahaRERA-registered plots from 321 sq yards, 22 mins from Mopa Airport. Get price, brochure and location.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.filter((f) => f.schema).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.schema === true ? f.a : f.schema },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <HomeContent />
    </>
  );
}
