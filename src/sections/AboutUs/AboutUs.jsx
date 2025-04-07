import Image from "next/image";
import { sectionsData } from "@/data/sectionsData";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const data = sectionsData.find((section) => section.name === "AboutUs");

  return (
    <section className="section" id="AboutUs">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{data?.title}</h2>
        <div className={styles.infoWrapper}>
          <Image
            className={styles.img}
            src={data?.imgSrc}
            alt={data?.imgAlt}
            width={280}
            height={334}
          />
          <p className={styles.infoText}>{data.text}</p>
        </div>
        <ul className={styles.dataList}>
          {data?.statistics?.map((item) => (
            <li className={styles.dataItem} key={item.direction}>
              <p className={styles.dataNumber}>{item.quantity}</p>
              <p className={styles.dataText}>{item.direction}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
