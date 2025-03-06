import React from 'react';
import DescriptionComponent from '@/components/DescriptionComponent/DescriptionComponent';
import { sectionsData } from '@/data/sectionsData';
import CallBtn from '@/components/buttons/CallBtn/CallBtn';
import styles from './FloorsLaying.module.scss';
import SectionSlider from '@/components/SectionSlider/SectionSlider';

const FloorsLaying = () => {
  const floorLayingData = sectionsData.find(
    (section) => section.title === 'Böden verlegen'
  );
  return (
    <section id="FloorsLaying">
      <div className={`${styles.container} container`}>
        {floorLayingData && <DescriptionComponent data={floorLayingData} />}
        {floorLayingData && <SectionSlider data={floorLayingData} />}
        <CallBtn id={styles.btn} />
      </div>
    </section>
  );
};

export default FloorsLaying;
