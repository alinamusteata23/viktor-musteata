"use client";
import { useState } from "react";
import { sectionsData } from "@/data/sectionsData";
import styles from "./Faq.module.scss";

const Faq = () => {
  const data = sectionsData.find((section) => section.name === "Faq");

  const [openItems, setOpenItems] = useState([]);

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((item) => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className={`container ${styles.container}`}>
        {/* <h2 className="sectionTitle">{data.title}</h2> */}
        <ul className={styles.faqList}>
          {data?.blocks.map((el, i) => {
            const id = i + 1;
            const isActive = openItems.includes(id);

            return (
              <li key={id} className={styles.faqItem}>
                <h3
                  data-id={id}
                  className={
                    isActive
                      ? `${styles.question} ${styles.isActiveQuestion}`
                      : styles.question
                  }
                  onClick={() => handleOpen(id)}
                >
                  {el.question}
                  <svg
                    className={isActive ? styles.isOpenSvg : styles.isClosedSvg}
                  >
                    <use
                      href={
                        isActive
                          ? "/sprite.svg#icon-minus"
                          : "/sprite.svg#icon-cross"
                      }
                    ></use>
                  </svg>
                </h3>

                <div
                  className={`${styles.answerWrapp} ${
                    isActive ? styles.isOpen : styles.isClosed
                  }`}
                >
                  <h4 className={styles.answer}>{el.answer}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
