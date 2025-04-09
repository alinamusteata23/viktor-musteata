import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import CallBtn from "@/components/buttons/CallBtn/CallBtn";

const Hero = () => {
  return (
    <section id="hero" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <ul className={styles.imgs}>
          <li className={styles.heroImg}>
            <Image
              src="/imgs/heroimg-1.jpg"
              alt="heroImg"
              fill={true}
              sizes="33vw"
            />
          </li>
          <li className={styles.heroImg}>
            <Image
              src="/imgs/heroimg-2.jpg"
              alt="heroImg-2"
              fill={true}
              sizes="33vw"
            />
          </li>
          <li className={styles.heroImg}>
            <Image
              src="/imgs/heroimg-3.jpg"
              alt="heroImg"
              fill={true}
              sizes="33vw"
            />
          </li>
        </ul>
        <div className={styles.contentWrapp}>
          <h1 className={styles.mainTitle}>
            Perfekte Handwerkskunst für Ihr Zuhause
          </h1>
          <h2>Qualität, die bleibt.</h2>
          <CallBtn id={styles.callBtn} />
        </div>
        <div className={styles.content}></div>
      </div>
    </section>
  );
};

export default Hero;
