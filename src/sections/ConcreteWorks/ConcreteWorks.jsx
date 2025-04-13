import React from 'react';
import CallBtn from '@/components/buttons/CallBtn/CallBtn';
import DescriptionComponent from '@/components/DescriptionComponent/DescriptionComponent';
import { sectionsData } from '@/data/sectionsData';
import SectionSlider from '@/components/SectionSlider/SectionSlider';

import styles from './ConcreteWorks.module.scss';

const ConcreteWorks = () => {
  const floorLayingData = sectionsData.find(
    (section) => section.title === 'Betonarbeiten'
  );
  return (
    <section id="betonarbeiten">
      <div className={`${styles.container} container`}>
        {floorLayingData && <DescriptionComponent data={floorLayingData} />}
        {floorLayingData && <SectionSlider data={floorLayingData} />}
        <CallBtn id={styles.btn} />
      </div>
    </section>
  );
};

export default ConcreteWorks;
