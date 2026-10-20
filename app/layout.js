import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata = {
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
