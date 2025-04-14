// import Image from "next/image";
// import styles from "./page.module.scss";

import AboutUs from "@/sections/AboutUs/AboutUs";
import ConcreteWorks from "@/sections/ConcreteWorks/ConcreteWorks";
import FacadesRepair from "@/sections/FacadesRepair/FacadesRepair";
import Faq from "@/sections/Faq/Faq";
import FloorsLaying from "@/sections/FloorsLaying/FloorsLaying";
import Hero from "@/sections/Hero/Hero";
import PaintingWorks from "@/sections/PaintingWorks/PaintingWorks";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Tiling from "@/sections/Tiling/Tiling";
// import WhyUs from "@/sections/WhyUs/WhyUs";

export default function Home() {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'item': {
              '@id': process.env.NEXT_PUBLIC_SEO_URL,
              'name': 'Perfekte Handwerkskunst für Ihr Haus'
            }
          }
        ]
      },
      {
        '@type': 'Person',
        'name': 'Viktor Musteata',
        'email': 'mailto:victortrofim9@gmail.com',
        'telephone': '+49 170 1251314',
        'url': process.env.NEXT_PUBLIC_SEO_URL,
        'jobTitle': 'Handwerker',
        'worksFor': {
          '@type': 'Organization',
          'name': 'Viktor Musteata Handwerksservice'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'telephone': '+49 170 1251314',
          'email': 'victortrofim9@gmail.com',
          'availableLanguage': ['de'],
        }
      }
    ]
  };
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutUs />
      <Tiling />
      <FloorsLaying />
      {/* <WhyUs /> */}
      <PaintingWorks />
      <FacadesRepair />
      <ConcreteWorks />
      <Testimonials />
      <Faq />
    </>
  );
}
