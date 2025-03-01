import React from "react";
import styles from "./AboutUs.module.scss";
import Image from "next/image";


const AboutUs = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className="sectionTitle">Über uns</h2>
      <div className={styles.infoWrapper}>
        <Image 
        className={styles.img}
        src="/imgs/about-us.webp"
        alt="Master's photo"
        width={280}
        height={334}/>
        <p className={styles.infoText}>Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu verleihen. Mit hochwertigen Materialien und präziser Ausführung sorgen wir für langlebige und wasserdichte Ergebnisse. Vertrauen Sie auf unsere Erfahrung, um Ihren Raum in einen stilvollen Rückzugsort zu verwandeln Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu ssehen</p>
      </div>
      <ul className={styles.dataList}>
        <li className={styles.dataItem}>
          <p className={styles.dataNumber}>100+</p>
          <p className={styles.dataText}>Objekte</p>
        </li>
        <li className={styles.dataItem}>
          <p className={styles.dataNumber}>17</p>
          <p className={styles.dataText}>Jahre Erfahrung</p>
        </li>
        <li className={styles.dataItem}>
          <p className={styles.dataNumber}>100%</p>
          <p className={styles.dataText}>Qualität</p>
        </li>
      </ul>
    </div>
  </section>;
};


export default AboutUs;