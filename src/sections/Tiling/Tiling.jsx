import React from "react";
import styles from "./Tiling.module.scss";
import Image from "next/image";

const Tiling = () => {
  return (
    <section id="Tiling">
      <div className={`container ${styles.container}`}>
        <h3 className="sectionTitle">Fliesenverlegung</h3>
        <div className={styles.imgsWrapper}>
          <div className={styles.imgWrap}>
            <Image
              src="/imgs/Tiling-1.webp"
              fill
              sizes="33vw"
              alt="tiling example"
            />
          </div>
          <div className={styles.imgWrap}>
            alt="tiling example"
            <Image
              src="/imgs/Tiling-2.webp"
              fill
              sizes="33vw"
              alt="tiling example"
            />
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="/imgs/Tiling-3.webp"
              fill
              sizes="33vw"
              alt="tiling example"
            />
          </div>
        </div>
        <p className={styles.description}>
          Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein
          modernes und elegantes Aussehen zu verleihen. Mit hochwertigen
          Materialien und präziser Ausführung sorgen wir für langlebige und
          wasserdichte Ergebnisse. Vertrauen Sie auf unsere Erfahrung, um Ihren
          Raum in einen stilvollen Rückzugsort zu verwandeln
        </p>
      </div>
    </section>
  );
};

export default Tiling;
