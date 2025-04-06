import Image from 'next/image';
import styles from './DescriptionComponent.module.scss';

const DescriptionComponent = ({ data }) => {
  return (
    <div key={data.name} className={styles.descriptionComponent}>
      <h3 className={styles.title}>{data.title}</h3>
      <figure className={styles.imgContainer}>
        <Image
          src={data.imgSrc}
          alt={data.imgAlt}
          fill={true}
          sizes="(max-width: 320px) 30vw"
          loading="lazy"
        />
      </figure>
      <p className={styles.description}>{data.text}</p>
    </div>
  );
};

export default DescriptionComponent;
