import React from 'react';
import styles from './FacadesRepair.module.scss';
import { sectionsData } from '@/data/sectionsData';
import DescriptionComponent from '@/components/DescriptionComponent/DescriptionComponent';

const FacadesRepair = () => {
  const floorLayingData = sectionsData.find(
    (section) => section.title === 'Fassade Renovierung'
  );
  return (
    <section id="FacadesRepair">
      <div className={`${styles.container} container`}>
        {floorLayingData && <DescriptionComponent data={floorLayingData} />}
      </div>
    </section>
  );
};

export default FacadesRepair;
