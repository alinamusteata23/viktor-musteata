import React from 'react';
import CallBtn from '@/components/buttons/CallBtn/CallBtn';
import DescriptionComponent from '@/components/DescriptionComponent/DescriptionComponent';
import { sectionsData } from '@/data/sectionsData';
import styles from './ConcreteWorks.module.scss';

const ConcreteWorks = () => {
  const floorLayingData = sectionsData.find(
    (section) => section.title === 'Betonarbeiten'
  );
  return (
    <section id="ConcreteWorks">
      <div className={`${styles.container} container`}>
        {floorLayingData && <DescriptionComponent data={floorLayingData} />}
        <CallBtn id={styles.btn} />
      </div>
    </section>
  );
};

export default ConcreteWorks;
