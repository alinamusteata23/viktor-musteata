import { Niconne, KoHo, Manrope } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";

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
  title: "Perfekte Handwerkskunst für Ihr Zuhause",
  description:
    "Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu verleihen. Mit hochwertigen Materialien und präziser Ausführung sorgen wir für langlebige und wasserdichte Ergebnisse. Vertrauen Sie auf unsere Erfahrung, um Ihren Raum in einen stilvollen Rückzugsort zu verwandeln Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu ssehen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de-DE">
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
