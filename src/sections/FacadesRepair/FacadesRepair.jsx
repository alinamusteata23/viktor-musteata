import React from 'react';
import { sectionsData } from '@/data/sectionsData';
import DescriptionComponent from '@/components/DescriptionComponent/DescriptionComponent';
import SectionSlider from '@/components/SectionSlider/SectionSlider';

import styles from './FacadesRepair.module.scss';

const FacadesRepair = () => {
  const floorLayingData = sectionsData.find(
    (section) => section.title === 'Fassade Renovierung'
  );
  return (
    <section id="FacadesRepair">
      <div className={`${styles.container} container`}>
        {floorLayingData && <DescriptionComponent data={floorLayingData} />}

        {floorLayingData && <SectionSlider data={floorLayingData} />}
      </div>
    </section>
  );
};

export default FacadesRepair;
