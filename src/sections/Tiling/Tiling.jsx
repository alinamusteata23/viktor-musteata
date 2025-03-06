import React from "react";
import styles from "./Tiling.module.scss";
import Image from "next/image";
import SectionSlider from "@/components/SectionSlider/SectionSlider";

import { sectionsData } from "../../data/sectionsData";

const tilingData = sectionsData.find(
  (section) => section.title === "Fliesenverlegung"
);

const Tiling = () => {
  return (
    <section id="Tiling">
      <div className={`container ${styles.container}`}>
        <h3 className="sectionTitle">{tilingData.title}</h3>
        <div className={styles.imgsWrapper}>
          {tilingData?.mainImages.map((el) => {
            return (
              <div className={styles.imgWrap}>
                <Image src={el.imgSrc} fill sizes="33vw" alt={el.imgAlt} />
              </div>
            );
          })}
        </div>
        <p className={styles.description}>{tilingData.text}</p>
        {tilingData ? <SectionSlider data={tilingData} /> : null}
      </div>
    </section>
  );
};

export default Tiling;
