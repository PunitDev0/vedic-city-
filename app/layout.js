import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CanonicalLink from '@/components/CanonicalLink';

export const metadata = {
  metadataBase: new URL("https://vediccitygraama.deedivinegroups.com"),
  icons: {
    icon: "/pmay-favicon.png",
  },
  title: "Affordable Residential Plots | Vedic City - Graama by Ebrix Home and More",
  description: "Vedic City - Graama by Ebrix Home and More: Exclusive luxury plotted development spread across 15 acres with 86 exclusive residential plots along NH-66 near North Goa border, 20 mins from Mopa Airport. MahaRERA: PP1310002502621.",
  keywords: "Vedic City Goa, Graama, Ebrix Home and More, residential plot in goa, plots near mopa airport, dodamarg plots, nh-66 plots, maharera pp1310002502621",
  openGraph: {
    title: "Affordable Residential Plots | Vedic City - Graama by Ebrix Home and More",
    description: "Spread across approx. 15 acres with 86 exclusive residential plots. Developed by Ebrix Home and More along NH-66 corridor near North Goa border, 20 mins from Mopa Airport.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#07130e" />
        <CanonicalLink />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5V92GVCB');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5V92GVCB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
