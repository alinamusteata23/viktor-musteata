"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./Tiling.module.scss";
import Image from "next/image";
import SectionSlider from "@/components/SectionSlider/SectionSlider";

import { sectionsData } from "../../data/sectionsData";

const tilingData = sectionsData.find(
  (section) => section.title === "Fliesenverlegung"
);

const Tiling = () => {
  return (
    <section id="fliesenverlegung">
      <div className={`container ${styles.container}`}>
        <h3 className="sectionTitle">{tilingData.title}</h3>
        <div className={styles.imgsWrapper}>
          {tilingData?.mainImages.map((el, i) => {
            return (
              <motion.div
                key={i}
                className={styles.imgWrap}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ amount: 0.8 }}
              >
                <Image src={el.imgSrc} fill sizes="33vw" alt={el.imgAlt} />
              </motion.div>
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
