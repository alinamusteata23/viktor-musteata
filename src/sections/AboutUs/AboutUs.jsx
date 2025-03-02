import Image from "next/image";
import {sectionsData} from '@/data/sectionsData';
import styles from "./AboutUs.module.scss";


const AboutUs = () => {
  const data = sectionsData.filter(section=> section.name === "AboutUs");
  console.log('data', data)


  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className="sectionTitle">{data?.title}</h2>
      <div className={styles.infoWrapper}>
        <Image 
        className={styles.img}
        src={data?.imgSrc}
        alt={data?.imgAlt}
        width={280}
        height={334}/>
        <p className={styles.infoText}>{data.text}</p>
      </div>
      <ul className={styles.dataList}>
        {data?.statistics?.map(item=> <li className={styles.dataItem}>
          <p className={styles.dataNumber}>{item.quantity}</p>
          <p className={styles.dataText}>{item.direction}</p>
        </li>)}        
      </ul>
    </div>
  </section>
};


export default AboutUs;