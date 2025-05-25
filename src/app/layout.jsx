import { Niconne, KoHo, Manrope } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";
import { GoogleTagManager } from '@next/third-parties/google'

const niconne = Niconne({
  variable: "--font-niconne",
  subsets: ["latin"],
  weight: ["400"],
});

const koho = KoHo({
  variable: "--font-koho",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SEO_URL),
  title: "Handwerk mit Herz: Fliesen, Böden & mehr - von Viktor Musteata",
  description:
    "Wir sind spezialisiert auf professionelle Fliesenverlegung und helfen Ihnen dabei, Ihren Räumen ein modernes und elegantes Ambiente zu verleihen!",
    keywords: [
      "Fliesenlegerdienste",
      "Boden verlegen",
      "Lackierarbeiten",
      "Fassadensanierung",
      "Betonarbeiten",
      "Renovierung",
      "Innenausbau",
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SEO_URL,
      languages: {
        'de': `${process.env.NEXT_PUBLIC_SEO_URL}`,
      },
    },
};

export default function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang="de-DE">
      <GoogleTagManager gtmId={`${GTM_ID}`} />
      <SiteProvider>
        <body
          className={`${niconne.variable} ${koho.variable} ${manrope.variable}`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </SiteProvider>
    </html>
  );
}
