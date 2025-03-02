import React from 'react';
import DescriptionComponent from '@/components/DescriptionComponent/DescriptionComponent';
import { sectionsData } from '@/data/sectionsData';
import CallBtn from '@/components/buttons/CallBtn/CallBtn';

import styles from './PaintingWorks.module.scss';

const PaintingWorks = () => {
  const floorLayingData = sectionsData.find(
    (section) => section.title === 'Lackierarbeiten'
  );
  return (
    <section id="PaintingWorks">
      <div className={`${styles.container} container`}>
        {floorLayingData && <DescriptionComponent data={floorLayingData} />}
        <CallBtn id={styles.btn} />
      </div>
    </section>
  );
};

export default PaintingWorks;
