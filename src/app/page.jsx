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
import WhyUs from "@/sections/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <AboutUs />
      <Tiling />
      <FloorsLaying />
      <WhyUs />
      <PaintingWorks />
      <FacadesRepair />
      <ConcreteWorks />
      <Testimonials />
      <Faq />
    </>
  );
}
