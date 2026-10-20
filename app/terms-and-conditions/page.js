import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions | Vedic City Goa Plots",
  description: "Terms and conditions for using the Vedic City website. Residential plotted development at NH-66, Dodamarg, Sindhudurg, Maharashtra. MahaRERA Reg. No. PP1310002502621."
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#065F46] hover:underline mb-3">
            ← Return to Project Homepage
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Terms of use for the Vedic City website.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 font-serif">1. About the Project &amp; Developer</h2>
            <p>
              Vedic City is a residential plotted development at NH-66, Near Pathrodevi Border Checkpoint, Dodamarg, Sindhudurg, Maharashtra – 416512, developed and promoted by Ebrix Home and More (Ebrix Infratech Real Estate LLP). The project is registered with MahaRERA under Registration No. PP1310002502621.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 font-serif">2. Use of This Website</h2>
            <p>
              This website is provided for general information about the project. By using it you agree to these terms. Content on the website is not an offer, invitation, contract or solicitation to buy or sell any plot.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 font-serif">3. Enquiries &amp; Project Details</h2>
            <p>
              When you submit the “Get Project Details” form, you consent to being contacted by call, SMS, WhatsApp or email regarding the project. Submitting the form does not create any booking, reservation or obligation on either side. See our <Link href="/privacy-policy" className="text-[#065F46] underline">Privacy Policy</Link> for how your data is handled.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 font-serif">4. Bookings &amp; Payments</h2>
            <p>
              Any booking or sale is governed only by the Application Form, Allotment Letter and Agreement for Sale signed between the buyer and the Company. Please make payments only through official, traceable channels as stated in the booking documents.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 font-serif">5. Accuracy of Information</h2>
            <p>
              Plot areas, layouts, amenities, distances, timelines and images are indicative and subject to approved plans, site conditions and executed agreements. Buyers should independently verify title, approvals and RERA records before making any payment. See our <Link href="/disclaimer" className="text-[#065F46] underline">Disclaimer</Link> for details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 font-serif">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Courts in Sindhudurg / Maharashtra have exclusive jurisdiction.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900 font-serif">7. Contact</h2>
            <p>Developer: Ebrix Home and More (Ebrix Infratech Real Estate LLP)</p>
            <p>Email: <a href="mailto:info@pradhanmantriawasyojna.org" className="text-[#065F46] underline">info@pradhanmantriawasyojna.org</a></p>
            <p>Phone: <a href="tel:+919211494111" className="text-[#065F46] underline">+91 92114 94111</a></p>
            <p>Site Address: NH-66, Near Pathrodevi Border Checkpoint, Dodamarg, Sindhudurg, Maharashtra – 416512</p>
          </section>

        </div>
      </div>
    </div>
  );
}
